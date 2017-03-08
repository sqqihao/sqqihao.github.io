module.exports = function (grunt) {
    grunt.initConfig({
        pkg : grunt.file.readJSON('package.json'),
        connect: {
            options: {
                port: 9000,
                hostname: '127.0.0.1',
                livereload: 35729  //声明给 watch 监听的端口
            },
            server: {
                options: {
                    open: false, //自动打开网页 http://
                    base: [ "" ]
                }
            }
        },
        watch : {
            options: {
                livereload: 35729 // this port must be same with the connect livereload port
            },
            tasks: ['exec'],
            scripts: {
                options: {
                    livereload: true
                },
                files : ['**/*']
            }
        },
        exec: {
            //重新build
            rebuild : 'node r.js -o build.js'
        }
    });

    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-connect');
    grunt.loadNpmTasks('grunt-exec');
    grunt.registerTask('default',["exec","connect","watch"]);
};