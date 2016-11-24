var path = require('path')
var fs = require('fs')

var babelrc = fs.readFileSync('./.babelrc')
var babelrcObject = {}

try {
  babelrcObject = JSON.parse(babelrc)
  babelrcObject.presets = ['react', 'es2015-webpack', 'stage-0']
} catch (err) {
  console.error('==>     ERROR: Error parsing your .babelrc.')
  console.error(err)
}
var babelrcObjectDevelopment = babelrcObject.env && babelrcObject.env.development || {}
var combinedPlugins = babelrcObject.plugins || []
combinedPlugins = combinedPlugins.concat(babelrcObjectDevelopment.plugins)
var babelLoaderQuery = Object.assign({}, babelrcObjectDevelopment, babelrcObject, { plugins: combinedPlugins });
delete babelLoaderQuery.env
// Since we use .babelrc for client and server, and we don't want HMR enabled on the server, we have to add
// the babel plugin react-transform-hmr manually here.

// make sure react-transform is enabled
babelLoaderQuery.plugins = babelLoaderQuery.plugins || []
var reactTransform = null
for (var i = 0; i < babelLoaderQuery.plugins.length; ++i) {
  var plugin = babelLoaderQuery.plugins[i]
  if (Array.isArray(plugin) && plugin[0] === 'react-transform') {
    reactTransform = plugin
  }
}

if (!reactTransform) {
  reactTransform = ['react-transform', { transforms: [] }]
  babelLoaderQuery.plugins.push(reactTransform)
}

if (!reactTransform[1] || !reactTransform[1].transforms) {
  reactTransform[1] = Object.assign({}, reactTransform[1], { transforms: [] })
}

reactTransform[1].transforms.push({
  transform: 'react-transform-hmr',
  imports: ['react'],
  locals: ['module'],
})


var config = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),

        filename: 'bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /(node_modules)|(Reporter)/,
            loader: 'babel?'+JSON.stringify(babelLoaderQuery),
        }]
    }
};

module.exports = config