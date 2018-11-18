module.exports = {
    plugins: [
        require('postcss-import'),
        require('postcss-preset-env')({
            preserve: false,
        }),
        require('postcss-custom-selectors')({
            preserve: false,
      }),
      require('postcss-custom-media'),
      require('postcss-apply'),  
        require('postcss-nesting'),
        require('postcss-font-magician'),
        require('css-mqpacker'),
        // require('cssnano'),
    ]
  }