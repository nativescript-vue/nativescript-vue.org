const path = require('path');
const fs = require('fs');
const tocJSON = require('table-of-contents-json');


function plugin(opts) {


  return function (files, metalsmith, done) {
    Object.keys(files).forEach((file) => {
      const data = files[file];

      if (data.toc === true) {
        try {
          data.toc = new tocJSON().generateJSON(data.contents.toString());
          // console.log(data.contents.toString())
        } catch (err) {
          return done(err);
        }
      /* } else if (!!data.toc) {
        try {
          const tocPath = metalsmith.path(metalsmith._source, path.dirname(file), data.toc);
          const toc = fs.readFileSync(tocPath);
          data.toc = JSON.parse(toc);
        } catch (err) {
          done(err);
        }
      */
      } else {
        data.toc = false;
        data.layout = data.layout || 'no_sidebar.ejs';
      }
    });
    done();
  }
}

module.exports = plugin;