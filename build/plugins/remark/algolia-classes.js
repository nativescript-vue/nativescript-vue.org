const visit = require('unist-util-visit');

function algoliaClasses() {
  return function transformer(tree) {
    visit(tree, 'heading', (node) => {
      node.data = node.data || {}
      node.data.hProperties = node.data.hProperties || {}
      node.data.hProperties.className = node.data.hProperties.className || []

      node.data.hProperties.className.push(`docSearch-lvl${node.depth}`)
    })
  }
}

module.exports = algoliaClasses;
