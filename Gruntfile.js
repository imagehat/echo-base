module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		jshint: {
			all: [
				'Gruntfile.js',
				'assets/js/plugins/*.js',
				'assets/js/main.js'				
			]
		},
		concat: {
			all: {
				src: [
					'assets/js/plugins/*.js',
					'assets/js/main.js'
				],
				dest: 'assets/js/site.js'
			}
		},
		uglify: {
			all: {
				src: 'assets/js/site.js',
				dest: 'assets/js/site.js'
			}
		},
		compass: {
			dist: {
				options: {
					config: 'config.rb'
				}
			}
		},
		watch: {
			options: {
				livereload: true
			},
			compass: {
				files: [
					'assets/sass/**/*.{sass,scss}',
					'assets/sprites/**/*.png'
				],
				tasks: ['compass']
			},
			js: {
				files: ['assets/js/**/*.js'],
				tasks: ['jshint', 'concat']
			},
			html: {
				files: ['*.php', '*.html']
			}
		}

	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-contrib-concat');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-watch');

	grunt.registerTask('default', ['concat', 'uglify', 'compass']);

};