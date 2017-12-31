const path = require('path');

function plugin() {

  return function (files, metalsmith, done) {
    Object.keys(files).forEach((file) => {
      const res = path.basename(file).match(/^(\d+)-/);
      if (res) {
        files[file].order = res[1];
      }
    });
    done();
  }
}

module.exports = plugin;