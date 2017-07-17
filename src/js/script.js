MutationObserver = window.MutationObserver || window.WebKitMutationObserver;

var observer = new MutationObserver(function(mutations, observer) {
    
    if($('#infonav').hasClass('active-link'))
        $('nav').addClass('inverted');
    else
        $('nav').removeClass('inverted');
    
});

observer.observe(document, {
  subtree: true,
  attributes: true
});
