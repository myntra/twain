require('k')({
    src: './lib'
}).chain()
.clean()
.read()
.compress()
.write()
.fn(function(done) {
    console.log('built dist/twain.min.js:', Math.round((this.files[0].content.length / 1024) * 1000) / 1000 + 'k');
    done();
})
.fail(function(err) {
    console.log('build failed :(')
    console.log(err.stack);
    process.exit(1);

});