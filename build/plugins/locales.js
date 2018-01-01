const path = require('path');
const mkdirp = require('mkdirp');
const fs = require('fs');

function plugin(opts) {

  return function (files, metalsmith, done) {
    const meta = metalsmith.metadata();
    const sourcePath = metalsmith.source();

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
      .filter(file => file.match(pattern(defaultLocale)))
      .map(file => {
        return file.replace(`${path.sep}${defaultLocale}${path.sep}`, `${path.sep}{LOCALE}${path.sep}`);
      });

    const otherLocales = locales.filter(l => l !== defaultLocale);

    // builds out the file structure for all the other locales
    otherLocales.forEach((locale) => {

      requiredFiles.forEach((file) => {
        const original_file = file.replace('{LOCALE}', defaultLocale);
        console.log(original_file);

        const new_file = file.replace('{LOCALE}', locale);
        const new_file_path = path.resolve(sourcePath, new_file);
        const dir = path.dirname(new_file_path);

        mkdirp(dir, (err) => {
          if (err) throw err;
          if (!fs.existsSync(new_file_path)) {
            const data = files[original_file];
            const contents = data ? data.contents : '';
            fs.writeFileSync(new_file_path, contents);

            files[new_file] = Object.assign({}, data, {
              contents: new Buffer(contents)
            });
          }
        })
      })
    });

    done();
  }
}

module.exports = plugin;