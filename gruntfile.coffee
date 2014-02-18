module.exports = (grunt) ->
  grunt.initConfig
    haml:
      one:
        files: 'dist/step1.html' : ['views/head.haml', 'views/step1.haml']
      two:
        files: 'dist/step2.html' : ['views/head.haml', 'views/step2.haml']

    coffee:
      compile:
        files: 
          'dist/step1.js' : 'js/step1.coffee' 
          'dist/step2.js' : 'js/step2.coffee' 

    watch:
      haml:
        files: ['**/*.haml']    
        tasks: ['haml']
      coffee:
        files: ['**/*.coffee']
        tasks: ['coffee']



  grunt.loadNpmTasks 'grunt-haml'
  grunt.loadNpmTasks 'grunt-contrib-coffee'
  grunt.loadNpmTasks 'grunt-contrib-watch'

  


  grunt.registerTask "default", ["haml", "coffee"]


