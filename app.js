// For any third party dependencies, like jQuery, place them in the lib folder.

// Configure loading modules from the lib directory,
// except for 'app' ones, which are in a sibling
// directory.
requirejs.config({
    baseUrl: './js',
    paths: {
        app: '../app',
        darts: 'modules/darts',
        localStorage: 'modules/local-storage',
        jquery: 'jquery'
    }
});

// Start loading the main app file. Put all of
// application logic here
requirejs(['modules/darts']);
