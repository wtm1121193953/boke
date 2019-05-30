fis.match('::package', {
    postpackager: fis.plugin('loader', {
        allInOne: true
    })
});

fis.match('*.less', {
    parser: fis.plugin('less'),
    rExt: '.css'
});

fis.match('*.{js,css,png}', {
    useHash: false
});