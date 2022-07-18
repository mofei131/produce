const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
module.exports = {
	 publicPath: './',
	 outputDir: 'dist',
	 assetsDir: 'static',
	pluginOptions:{
					'style-resources-loader':{
							preProcessor:'scss',
							patterns:[]
					}
			}
}