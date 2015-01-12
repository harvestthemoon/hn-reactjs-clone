module.exports = function(grunt) {

  require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);

  grunt.initConfig({

    express: {
      all: {
        options: {
          port: 9000,
          hostname: "0.0.0.0",
          bases: ['C:\\Users\\james.hattox\\Desktop\\hacker-news-clone'],
          livereload: true
        }
      }
    },

    watch: {
      all: {
        files: '*',
        options: {
          livereload: true
        }
      }
    },

    open: {
      all: {
        path: 'http://localhost:<%= express.all.options.port%>/html/NewsItem.html'
      }
    },

    react: {
      single_file_output: {
        files: {
          'build/js/NewsItem.js': 'js/NewsItem.jsx'
        }
      }
    }
  });

  grunt.registerTask('server', [
    'react',
    'express',
    'open',
    'watch'
  ]);
};