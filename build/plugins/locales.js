const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');
const chalk = require('chalk');

function plugin(opts) {

  return function (files, metalsmith, done) {
    const meta = metalsmith.metadata();
    const sourcePath = metalsmith.source();
    const new_files = {};

    // set global information about the available locales
    const defaultLocale = meta.defaultLocale = opts.defaultLocale;
    const locales = meta.locales = opts.locales;

    // creates a pattern for the given locales
    const pattern = (locales) => {
      if (!Array.isArray(locales)) {
        locales = [locales]
      }
      return new RegExp(`.*\\/(?:${locales.join('|')})\\/(.+)(\\..+)`)
    };

    // creates a list of required files based on the default locale
    const requiredFiles = Object.keys(files)
      .filter(file => !!file.match(pattern(defaultLocale)))
      .map(file => {
        return file.replace(`${path.sep}${defaultLocale}${path.sep}`, `${path.sep}{LOCALE}${path.sep}`);
      });

    const otherLocales = locales.filter(l => l !== defaultLocale);

    // builds out the file structure for all the other locales
    otherLocales.forEach((locale) => {

      requiredFiles.forEach((file) => {
        const original_file = file.replace('{LOCALE}', defaultLocale);

        const new_file = file.replace('{LOCALE}', locale);
        const new_file_path = path.resolve(sourcePath, new_file);
        const dir = path.dirname(new_file_path);
        mkdirp.sync(dir);

        if (!fs.existsSync(new_file_path)) {
          const data = files[original_file];
          const contents = data ? data.contents : '';

          fs.writeFileSync(new_file_path, contents);

          new_files[new_file] = Object.assign({}, data, {
            contents: new Buffer(contents)
          });
        }
      })
    });

    Object.assign(files, new_files);

    if (!!Object.keys(new_files).length) {
      console.log(chalk.yellow('-'.repeat(process.stdout.columns)));
      console.log(chalk.green('Missing locale files have been detected.'));
      console.log(chalk.yellow('-'.repeat(process.stdout.columns)));
    }
    Object.keys(new_files).forEach((file) => {
      console.log(`${chalk.bgGreen.black(' CREATED ')} ${file}`);
    });

    done();
  }
}

module.exports = plugin;