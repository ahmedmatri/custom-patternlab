module.exports = {
  scss: {
    source: ['components/**/[^_]*.scss'],
    all: ['components/**/*.scss'],
    destination: 'dist/components',
    options: {
      outputStyle: 'expanded',
      includePaths: ['./node_modules'],
      errLogToConsole: true,
      importer: require('node-sass-globbing'),
    },
  },
  js: {
    source: ['components/**/[^_]*.js'],
    destination: 'dist/components/',
  },
  jquery: {
    source: 'node_modules/jquery/dist/jquery.min.js',
    destination: 'dist/components/assets/js/',
  },
  fonts: {
    source: 'node_modules/@fortawesome/fontawesome-free/**/*.{css,ttf,woff,woff2}',
    destination: 'dist/components/assets',
  },
  bootstrap: {
    source: 'node_modules/bootstrap/dist/{js,css}/{bootstrap.bundle.min.js*,bootstrap.min.css*}',
    destination: 'dist/components/assets',
  },
  slick: {
    source: 'node_modules/slick-slider/slick/slick.{js,css}',
    destination: 'dist/components/assets/slick',
  },
  svg: {
    source: ['svg/**/*.svg'],
    destination: 'dist/svg',
  },
  images: {
    source: ['images/**/*'],
    destination: 'dist/images',
  },
  stylelint: {
    options: {
      reporters: [
        {
          formatter: 'verbose',
          console: true,
        },
      ],
      failOnError: process.env.CI === 'true',
    },
  },
};
