'use strict'

module.exports= function(grunt)  {
  grunt.initConfig({
    font_optimizer: {
      default: {
        options: {
          // Characters to include
          chars: '恶劣天气城市',
          
          // Features to include.
          includeFeatures: ['kern']
        },
        files: {
          'fonts/SourceHanSansHWSC-Bold_mini.ttf': ['fonts/SourceHanSansHWSC-Bold.ttf'],
          'fonts/SourceHanSansHWSC-Regular_mini.ttf': ['fonts/SourceHanSansHWSC-Regular.ttf'],
        },
      },
    },
  })
  grunt.loadNpmTasks('grunt-font-optimizer');
  grunt.registerTask('default', ['font_optimizer']);
}