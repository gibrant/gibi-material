$(document).ready(function(){
    var toggle = document.getElementById('searchtoggler');
    var close = document.getElementById('searchcloser')
    $(toggle).click(function(){
        $('.form-search').toggle('slow');
    });
    $(close).click(function(){
        $('.form-search').toggle('slow');
    })
});