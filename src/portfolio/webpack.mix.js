const mix = require("laravel-mix");
const path = require("path");
/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel applications. By default, we are compiling the CSS
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.webpackConfig({
    resolve: {
        alias: {
            "@": path.resolve("./resources/js")
        }
    }
});
mix.js("resources/js/app.js", "public/js")
    .js("resources/js/router.js", "public/js")
    .vue()
    .postCss("resources/css/app.css", "public/css", [])
    .browserSync({
        disableHostCheck: true,
        contentBase: path.join(__dirname, "public"),
        publicPath: '/',
        host: '0.0.0.0',
        port: 8888,
        proxy: {
           target: 'http://localhost:8080'
        },
        files: [
           './resources/**/*',
           './app/**/*',
           './config/**/*',
           './routes/**/*',
           './public/**/*',
        ],
        open: false,
        reloadOnRestart: true,
     })
;
