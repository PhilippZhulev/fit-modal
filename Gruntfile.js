module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        stylus: {
            compile: {
                options: {
                    compress: false,
                    paths: ['src'],
                    import : ['/nib/options.styl']
                },
                files: {
                    'src/css/style.css': ['src/components/*/*.styl', 'src/components/*/*/*.styl'],
                    'dist_src/jquery.fit_modal.css': ['dist_src/*.styl']
                }
            }
        },
        concat: {
            my_target_0: {
                files: {
                    'dist/jquery.fit_modal.js': ['dist_src/*.js'],
                    'public/js/jquery.fit_modal.js': ['dist_src/*.js']
                }
            },
            my_target_1: {
                files: {
                    'dist/jquery.fit_modal.css': ['dist_src/*.css'],
                    'public/css/jquery.fit_modal.css': ['dist_src/*.css']
                }
            },
            my_target_2: {
                files: {
                    'src/js/scripts.js': ['src/components/*/*/*.js', 'src/components/*/*.js'],
                }
            },
        },
        uglify: {
            my_target_0: {
                files: {
                    'public/js/scripts.min.js': ['src/components/*/*/*.js', 'src/components/*/*.js']
                }
            },
            my_target_1: {
                files: {
                    'public/js/plugins.min.js': ['src/plugins/*.js']
                }
            },
            my_target_2: {
                files: {
                    'dist/jquery.fit_modal.min.js': ['dist_src/*.js']
                }
            },
        },
        cssmin: {
            target_1: {
                options : {
                    expand: true,
                },
                files: {
                    'src/plugins/_dist.min.css': ['dist/*/*.css']
                }
            },
            target_2: {
                files: [{
                    expand: true,
                    cwd: 'src/css',
                    src: ['*.css', '!*.min.css', '!stylus.css'],
                    dest: 'public/css',
                    ext: '.min.css'
                }]
            },
            target_3: {
                files: {
                  'public/css/plugins.min.css': 'src/plugins/*.css'
                }
            },
            target_4: {
                files: {
                    'dist/jquery.fit_modal.min.css': ['dist_src/*.css']
                }
            },
        },
        imagemin: {
            dynamic: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}]
                },
                files: [{
                    expand: true,
                    cwd: 'src/components/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'public/img/'
                }]
            },
            dist: {
                options: {
                    optimizationLevel: 3,
                    svgoPlugins: [{removeViewBox: false}]
                },
                files: [{
                    expand: true,
                    cwd: 'dist_src/',
                    src: ['**/*.{png,jpg,gif}'],
                    dest: 'dist'
                }]
            },
        },
        watch: {
            // files: ['src/js/*.js', 'src/css/*.css', 'public/*.html'],
            // tasks: ['cssmin', 'uglify', 'imagemin', 'browserSync']
            //no stylus watcher
            files: ['src/components/*/*/*.js', 'dist_src/*.styl', 'dist_src/*.js', 'dist_src/*.css', 'src/components/*/*/*.styl', 'src/components/*/*.js', 'src/components/*/*.styl', 'public/*.html'],
            tasks: ['stylus', 'concat', 'cssmin', 'uglify', 'browserSync']
        },
        browserSync: {
            bsFiles: {
                src: [
                    'public/css/*',
                    'public/*.html',
                    'public/js/*.js'
                ]
            },
            options: {
                watchTask: true,
                server: './public'
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-browser-sync');

    // Default task(s).
    grunt.registerTask('default', ['concat', 'uglify', 'cssmin', 'browserSync', 'watch']);

};
