const path = require('path');

function plugin() {

  return function (files, metalsmith, done) {
    Object.keys(files).forEach((file) => {
      if (!file.includes('docs')) {
        return
      }


      const res = path.basename(file).match(/^(\d+)-(\d+)-(\d+)/);
      console.log(res);
      if (res) {
        const data = files[file];
        data.order = res[1];

        data.slug = data.slug.replace(res[0], '');

        // rename file to not include the order
        metalsmith.rename(file, file.replace(res[0], ''));
      }
    });
    done();
  }
}

module.exports = plugin;