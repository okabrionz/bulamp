/**
 * config.js
 * @exports {object} - Configuration
 */

var dest = "./public",
    src  = "./_src",
    port = 3000;


module.exports = {

  browserSync: {
      /** Use "proxy" to reload existing servers */
      proxy: "localhost:" + port,
      /** Port for browserSync-proxy */
      port: 4000
  },

  images: {
    src: src + "/img/*",
    dest: dest + "/img"
  },

  mocha: {
    specs: "./__test__/*.js"
  },

  modernizr: {
    dest: dest + "/js/vendor",
    settings: {
      options : [
          "setClasses",
          "addTest",
          "html5printshiv",
          "testProp",
          "fnBind"
      ],
      tests: []
    }
  },

  scripts: {
    bundles: [src + "/js/app.js"],
    watch: [src + "/js/**/*.{js,jsx}"],
    dest: dest + "/js"
  },

  server: {
    /** Disable if you don't want to run an Express-server (e.g. use MAMP) */
    run: true,
    /** Needed for clean task & server */
    dest: dest,
    port: port,
    file: "server.js",
    /** Tell nodemon which directories/files to watch */
    watch: ["server.js"],
    /** Needed for BrowserSync to work properly with server restarts */
    reloadDelay: 500
  },

  styles: {
    src: src + "/scss/*.{sass,scss}",
    watch: [src + "/scss/**/*.{sass,scss}"],
    dest: dest + "/css"
  },

  views: {
    index: src + "/*.*",
    dest: dest
  }

};