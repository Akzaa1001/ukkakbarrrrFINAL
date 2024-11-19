document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e, PreventDefault();
        document.querySelectorAll(this, getAttribute('href')).Scroll 
        intoview({
         Behaviour:'smooth'
        });
    });
});