const path = require('path');

function plugin() {

  return function (files, metalsmith, done) {
    Object.keys(files).forEach((file) => {
      if (!file.includes('docs')) {
        return
      }

      const res = path.basename(file).match(/^(\d+)-/);
      if (res) {
        const data = files[file];
        data.order = res[1];

        // rename file to not include the order
        files[file.replace(res[0], '')] = data;
        delete files[file];
      }
    });
    done();
  }
}

module.exports = plugin;