const multimatch = require('multimatch');
const path = require('path');
const fs = require('fs');

function plugin(opts) {
  const options = Object.assign({
    path: 'partials',
    base: '',
    pattern: '*.*'
  }, opts);

  return function (files, metalsmith, done) {
    const metadata = metalsmith.metadata();
    metadata.partials = metadata.partials || {};

    let partials = fs.readdirSync(metalsmith.path(options.path));
    partials = partials.filter(file => multimatch(file, options.pattern).length);
    partials = partials.map(file => file.replace(path.extname(file), ''));

    partials.forEach((partial) => {
      metadata.partials[partial] = (options.base ? options.base + path.sep : '') + partial;
    });

    Object.keys(files).forEach((file) => {
      const relativePartials = {};
      const rootPath = path.relative(file, metalsmith.path());
      partials.forEach((partial) => {
        relativePartials[partial] = `${rootPath}${path.sep}${options.path}${path.sep}${partial}`;
      });
      files[file].partials = relativePartials;
    });

    done();
  }
}

module.exports = plugin;