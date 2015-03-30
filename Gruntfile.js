module.exports = function(grunt) {
  'use strict';
  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    karma: {
      unit: {
        options: {
          configFile: 'test/unit.conf.js',
          files: ['test/unit/**/*.js'],
          runnerPort: 9876,
          singleRun: true,
          browsers: ['PhantomJS'],
          logLevel: 'ERROR',
          junitReporter: {
            outputFile: 'test-results-unit.xml'
          }
        }
      }
    },
    webdriver: {
      options: {
        desiredCapabilities: {
          browserName: 'phantomjs'
        }
      }
    },
    protractor: {
      options: {
        configFile: 'test/e2e.conf.js', // Default config file
        keepAlive: true, // If false, the grunt process stops when the test fails.
        noColor: false // If true, protractor will not use colors in its output.
      },
      all: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.

      },
    },
    watch: {
      scripts: {
        files: ['source/assets/javascripts/**/*.js', 'source/assets/javascripts/**/*.coffee'],
        tasks: ['karma', 'protractor:all'],
        options: {
          spawn: false,
        },
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'src/<%= pkg.name %>.js',
        dest: 'build/<%= pkg.name %>.min.js'
      }
    }
  });

  // Load the plugin that provides the "uglify" task.
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-protractor-runner');
  grunt.loadNpmTasks('grunt-webdriver');
  grunt.loadNpmTasks('grunt-karma');

  // Default task(s).
  grunt.registerTask('default', ['uglify']);
  grunt.registerTask('test', ['webdriver', 'protractor:all']);

};
