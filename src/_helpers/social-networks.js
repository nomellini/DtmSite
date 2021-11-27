export function updateSocial() {

$('img').hover(function () {

    var src = $(this).attr('src');
    var thisElement = $(this);
    if(src.indexOf("icon-facebook.svg") !== -1  || src.indexOf("icon-twitter.svg") !== -1 || src.indexOf("icon-linkedin.svg") !== -1 ){
            thisElement.css('cursor', 'pointer');

    }

});


$('img').click(function () {

    var src = $(this).attr('src');
    var thisElement = $(this);
    if(src.indexOf("icon-facebook.svg") !== -1){
        window.open('https://www.facebook.com/Datamace', '_blank');

        thisElement.hover(function(){
            thisElement.css('cursor', 'pointer');
          });

    }else if(src.indexOf("icon-twitter.svg") !== -1){
        window.open('https://twitter.com/datamace?s=20', '_blank');
        thisElement.hover(function(){
            thisElement.css('cursor', 'pointer');
          });

    }else if(src.indexOf("icon-linkedin.svg") !== -1){
        window.open('https://www.linkedin.com/company/datamace-ltda', '_blank');
        thisElement.hover(function(){
            thisElement.css('cursor', 'pointer');
          });

    }
    // do something

});

}