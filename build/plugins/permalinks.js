const Permalinks = require('permalinks');

module.exports = function permalinks(options = {}) {
  const opts = Object.assign({}, {
    format: ':name/index.html',
    sets: []
  }, options);

  const pl = new Permalinks();

  return (files, metalsmith, done) => {
    Object.keys(files).forEach((file) => {
      const set = opts.sets.find(set => metalsmith.matches(file, set.pattern));
      let format = (set && set.format) || opts.format;

      try {
        const l = pl.format(format, file, files[file]);
        files[file].path = l;
        metalsmith.rename(file, l)
      } catch (err) {
        done(err);
      }
    });
    done();
  }
};