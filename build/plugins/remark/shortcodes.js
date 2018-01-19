const visit = require('unist-util-visit');
const parse5 = require('parse5');
const toHast = require('hast-util-from-parse5');

function shortcodes(options) {
  return function transformer(tree) {
    visit(tree, 'shortcode', (node) => {
      try {
        const res = options[node.identifier](node.attributes);
        if(res) {
          const hast = toHast(parse5.parseFragment(res));
          node.data = node.data || {};
          node.data.hChildren = hast.children || [];
        }
      } catch (e) {
        console.log(e)
      }
    })
  }
}

module.exports = shortcodes;
