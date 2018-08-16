$(document).ready(() => {
  // Adjust scroll position when navigating to bookmark links from another page
  const scrollAdjust = () => scrollBy(0, -60);
  if (location.hash) scrollAdjust();
  window.addEventListener('hashchange', scrollAdjust);
  // Smooth scrolling
  $('.navbar-nav li a:not(.dropdown-toggle)').on('click', (e) => {
    $('html, body').stop().animate({
      scrollTop: ($($(e.currentTarget).attr('href')).offset().top - 60)
    }, 1500, '');
  });

  $('#exalcontactform').submit(function (e) {

    // Prevent form submission which refreshes page
    e.preventDefault();
    var formData = objectifyForm($(this).serializeArray());
    formData = JSON.stringify(formData);
    console.log(formData);
    var http = new XMLHttpRequest();

    //O kodikas gia na kalesis to arxio php pou stelni to email
    // var url = "mail.php";
    // http.open("POST", url, true);
    // http.onreadystatechange = function() {//Call a function when the state changes.
    //     if(http.readyState == 4 && http.status == 200) {
    //
    //     }
    // }
    // http.send(formData);
  });


});


function objectifyForm(formArray) {//serialize data function

  var returnArray = {};
  for (var i = 0; i < formArray.length; i++){
    returnArray[formArray[i]['name']] = formArray[i]['value'];
  }
  return returnArray;
}
