const multimatch = require('multimatch');
const fs = require('fs');
const ejs = require('ejs');

function plugin(opts) {
  const options = Object.assign({}, {
    directory: 'layouts',
    default: 'layout.ejs',
    inPlace: false,
    pattern: '*.ejs',
    options: {
      views: ['layouts']
    }
  }, opts);

  return function (files, metalsmith, done) {
    Object.keys(files).forEach((file) => {
      if (!multimatch(file, options.pattern).length) {
        return;
      }
      const data = files[file];
      data.contents = data.contents.toString();
      const context = Object.assign({}, {
        meta: metalsmith.metadata(),
        current: data
      });

      let rendered;
      if (options.inPlace) {
        rendered = ejs.render(data.contents, context, options.options);
      } else {
        const template = metalsmith.path(
          options.directory,
          data.layout || options.default
        );
        const str = fs.readFileSync(template).toString();
        rendered = ejs.render(str, context, options.options);
      }

      data.contents = rendered;
    });

    done();
  }
}

module.exports = plugin;