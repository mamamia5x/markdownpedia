var searchpage = "https://markdownpedia.tk/pages/search/";
searchpage = searchpage.replace("markdownpedia.tk", window.location.hostname);

function changeSearchUrl(){
  var search = document.getElementsByClassName("searchbox")[0].value;
  window.location  = searchpage + '?query=' + search;
}