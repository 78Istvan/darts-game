define(function () {
    return {
        getHello: function () {
            return 'local-storage.js loaded';
        },

        setItem: function (key, value) {
            localStorage.setItem(key,value);
        },

        getItem: function (key) {
            return localStorage.getItem(key);
        }
        //@ sourceURL=local-storage.js
    };
});