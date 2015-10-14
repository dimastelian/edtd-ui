module.exports = function (grunt) {

    grunt.initConfig({

        concat: {
            options: {
                separator: "\r\n",
            },
            main: {
                src: [
                    './src/js/utils.js',
                    './src/js/init.js',
                    './src/js/*/*.js',
                    './src/js/*/init.js',
                    './src/js/main.js',
                ],
                dest: './assets/app/js/app.js',
            },

        },
        browserify: {
            main: {
                src: ['./assets/app/js/app.js'],
                dest: './assets/app/js/app.js'
            }
        },
        uglify: {
            options: {
                mangle: false
            },
            main: {
                files: {
                    './assets/app/js/app.min.js': ['./assets/app/js/app.js']
                }
            },
        },
        sass: {// Task

            main: {// Target
                options: {// Target options
                    style: 'compressed'
                },
                files: {// Dictionary of files
                    './assets/app/css/main.css': './src/scss/main.scss',

                }
            },
            bootflat: {
                options: {
                    style: 'compressed'
                },
                files: {
                    './assets/bootflat-custom/css/site.min.css': './src/bootflat/scss/bootflat.scss',
                }

            }
        },

        watch: {
            build: {
                files: ['./src/**/*'],
                tasks: ['build'],
                options: {
                    spawn: false,
                },
            },
            scripts: {
                files: ['./src/**/*.js'],
                tasks: ['scripts'],
                options: {
                    spawn: false,
                },
            },
        },
    });

    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browserify');

    grunt.registerTask('styles', ['sass:main']);
    grunt.registerTask('scripts', ['concat:main','uglify:main']);
    grunt.registerTask('build', ['styles', 'scripts']);
};