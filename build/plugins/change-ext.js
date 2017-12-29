const multimatch = require('multimatch');
const path = require('path');

function plugin(opts) {

  return function (files, metalsmith, done) {
    Object.keys(files).forEach((file) => {
      if (multimatch(file, opts.pattern).length) {
        const data = files[file];
        const new_name = file.replace(path.extname(file), opts.ext);

        delete files[file];
        files[new_name] = data;
      }
    });

    done();
  }
}

module.exports = plugin;