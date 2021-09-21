module.exports = {
    // publicPath: "./",
    devServer: {
        hot: true,
        open: true
    },
    css: {
        loaderOptions: {
            less: {
                globalVars: {
                    hack: `true; @import '~@/assets/style/var.less';`
                }
            }
        }
    }
};