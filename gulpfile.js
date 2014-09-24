/**
 * This example:
 *  Shows how to use the built-in server, by default it
 *  Watches & injects CSS files
 */
var gulp        = require('gulp');
var browserSync = require('browser-sync');

// Start the server
gulp.task('browser-sync', function() {
    browserSync({
        server: {
            baseDir: "./"
        }
    });
});



// Reload all Browsers
gulp.task('bs-reload', function () {
    browserSync.reload();
});

// Watch scss AND html files, doing different things with each.
gulp.task('default', ['browser-sync'], function () {

    gulp.watch("*.html", ['bs-reload']);
   	gulp.watch("*.js", ['bs-reload']);
   	gulp.watch("*.css", ['bs-reload']);


});