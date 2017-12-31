const path = require('path');
const fs = require('fs');


function plugin(opts) {


  return function (files, metalsmith, done) {
    const meta = metalsmith.metadata();
    const map = {};

    Object.keys(files).forEach((file) => {
      const data = files[file];
      const info = path.parse(file);

      if (info.dir.includes('docs')) {
        data.categories = data.categories || info.dir.split(path.sep).splice(2);
        const p = data.categories.join(':');
        map[p] = map[p] || [];
        map[p].push(data);

        data.layout = data.layout || 'docs.ejs';
      }
    });

    meta.docs_categories = Object.keys(map).reduce((acc, curr) => {
      // console.log(map[curr]);
      acc.push({
        title: curr || 'introduction',
        children: map[curr].sort((a, b) => a.order - b.order),
        level: curr.split(':').length
      });
      return acc;
    }, []);
    done();
  }
}

module.exports = plugin;