/**
 * Created by andrew.koroluk on 7/1/15.
 */
// Full list of configuration options available at:
// https://github.com/hakimel/reveal.js#configuration
Reveal.initialize({
    controls: true,
    progress: true,
    history: true,
    center: true,

    transition: 'slide', // none/fade/slide/convex/concave/zoom

    // Optional reveal.js plugins
    dependencies: [{
        src: 'lib/js/classList.js',
        condition: function() {
            return !document.body.classList;
        }
    }, {
        src: 'plugin/markdown/marked.js',
        condition: function() {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: 'plugin/markdown/markdown.js',
        condition: function() {
            return !!document.querySelector('[data-markdown]');
        }
    }, {
        src: 'plugin/highlight/highlight.js',
        async: true,
        condition: function() {
            return !!document.querySelector('pre code');
        },
        callback: function() {
            hljs.initHighlightingOnLoad();
        }
    }, {
        src: 'plugin/zoom-js/zoom.js',
        async: true
    }, {
        src: 'plugin/notes/notes.js',
        async: true
    }, {
        src: 'socket.io/socket.io.js',
        async: true
    }, {
        src: '//cdnjs.cloudflare.com/ajax/libs/socket.io/0.9.16/socket.io.min.js',
        async: true
    }]
});
