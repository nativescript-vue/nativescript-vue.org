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
    const pattern = (locales) => {
      if (!Array.isArray(locales)) {
        locales = [locales]
      }

      return new RegExp(`.*\\/(?:${locales.join('|')})\\/(.+)(\\..+)`)
    };

    const requiredFiles = Object.keys(files)
      .filter(file => file.match(pattern(defaultLocale)))
      .map(file => {
        return file.replace(`${path.sep}${defaultLocale}${path.sep}`, `${path.sep}{LOCALE}${path.sep}`);
      });
    const otherLocales = locales.filter(l => l !== defaultLocale);

    otherLocales.forEach((locale) => {
      requiredFiles.forEach((file) => {
        const new_file = file.replace('{LOCALE}', locale);
        const dir = path.dirname(file);
        mkdirp(dir, (err) => {
          if (err) throw err;
          const exists = fs.existsSync(new_file);
          if (!exists) {
            fs.writeFileSync(new_file, files[file.replace('{LOCALE}', defaultLocale)].contents, () => {
              console.log('Written new file at ', new_file)
            })
          }
        })
      })
    });
    console.log(otherLocales, requiredFiles)
    // console.log(path.resolve(sourcePath, defaultLocale));


    // done();
  }
}

module.exports = plugin;