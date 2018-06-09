const path = require('path');

function plugin() {

  return function (files, metalsmith, done) {
    Object.keys(files).forEach((file) => {
      if (!file.includes('docs' || 'blog')) {
        return
      }


      const res = path.basename(file).match(/^((\d+)-)+/);
      if (res) {
        const data = files[file];
        data.order = res[0].replace(/-/g, '');

        data.slug = data.slug.replace(res[0], '');

        // rename file to not include the order
        metalsmith.rename(file, file.replace(res[0], ''));
      }
    });
    done();
  }
}

module.exports = plugin;