module.exports = function(grunt) {
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		watch : {
			jsx: {
				files: ['views/src/**/*.jsx'],
				tasks: ['reactify'],
				options: {

				}
			},
			styles : {
				files: ['views/src/*/*.scss', 'renderer/*.scss'],
				tasks: ['sass'],
				options: {

				}
			}
		},
		reactify: {
			'views/compiled' : 'views/src/*/*.jsx'
		},
		sass : {
			development: {
				options : {

				},
				files : {
					'views/compiled/styles.css': '**/*.scss'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-reactify');
	grunt.loadNpmTasks('grunt-notify');
	grunt.registerTask('default', ['watch']);

};