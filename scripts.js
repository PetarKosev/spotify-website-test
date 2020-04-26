(function() {
    console.log(1);

    document.addEventListener('scroll', function(ev) {
        var header = document.querySelector('header');
        var headerDimensions = header.getBoundingClientRect();
        var headerHeight = headerDimensions.height;
        var currentScrollTop = document.body.scrollTop;

        if (currentScrollTop > headerHeight) {
            console.log('hidden header');
        }
    });
})();