const mix = require('laravel-mix');
const tailwindcss = require('tailwindcss');
const tailwindConfig = require('./tailwind.config');
require('laravel-mix-purgecss');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */
mix.webpackConfig({
   module: {
       rules: [
           {
               test: /\.(graphql|gql)$/,
               exclude: /node_modules/,
               loader: 'graphql-tag/loader'
           }
       ]
   }
});



mix.js('resources/js/app.js', 'public/js')
   .sass('resources/sass/app.scss', 'public/css')
   .options({
      processCssUrls: false,
      postCss: [tailwindcss(tailwindConfig)]
   })
   .purgeCss({
      enabled: true
   });