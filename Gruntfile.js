module.exports = function(grunt) {

    grunt.initConfig({

        uglify: {
            min: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: '**/*.js',
                    dest: 'dist',
                    ext: '.min.js'
                }]
            }
        },

        copy: {
            jsFiles: {
                files: [{
                    expand: true,
                    cwd: 'src',
                    src: ['**/*.js'],
                    dest: 'dist'
                }]
            }
        },

        eslint: {
            options: {
                configFile: '.eslintrc.js'
            },
            target: ['src/**/*.js', 'Gruntfile.js']
        },

        watch: {
            jsFiles: {
                expand: true,
                files: ['src/**/*.js'],
                tasks: ['eslint', 'uglify', 'copy'],
                options: {
                    spawn: false
                }
            }
        },

        bump: {
            options: {
                files: ['package.json', 'package-lock.json', 'bower.json'],
                commitFiles: ['package.json', 'package-lock.json', 'bower.json'],
                tagName: '%VERSION%',
                push: false
            }
        }

    });

    require('load-grunt-tasks')(grunt);

    grunt.registerTask('default', ['build', 'watch']);
    grunt.registerTask('build', ['eslint', 'uglify', 'copy']);

};
