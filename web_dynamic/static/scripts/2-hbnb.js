$(function () {
  const lAmen = {};

  $('div.amenities li input')
    .change(function () {
      if ($(this).is(':checked')) {
        lAmen[($(this).attr('data-id'))] = $(this).attr('data-name');
      } else {
        delete lAmen[$(this).attr('data-id')];
      }
      $('div.amenities h4').html(Object.values(lAmen).join(', ') || '&nbsp;');
    });

  $.getJSON('http://0.0.0.0:5001/api/v1/status', (data) => {
    if (data.status === 'OK') {
      $('DIV#api_status').addClass('available');
    } else {
      $('DIV#api_status').removeClass('available');
    }
  });
});
