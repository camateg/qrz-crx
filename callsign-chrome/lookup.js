$(document).ready(function() {
   $('body').on('click', 'a', function(){
     chrome.tabs.create({url: $(this).attr('href')});
     return false;
   });
    $('#submit').on('click', function(e) {
    e.preventDefault();
    var call = $('input#call').val();
    var url = 'https://callook.info/' + call.trim() + '/json?callback=?';
    $.getJSON(url, function(data) {
      $('#url').html('<a href="https://www.qrz.com/lookup?tquery=' + call + '">' + call.toUpperCase() + ' on QRZ</a>');
      $('#name').html(data.name + ', ' + call.toUpperCase());
      $('#addr1').html(data.address.line1);
      $('#addr2').html(data.address.line2);
      $('#content').fadeIn(1000);
    });
  });
});
