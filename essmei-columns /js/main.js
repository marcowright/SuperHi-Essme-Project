$('.show-filters').on('click', function() {
  // When nav is expanded, collapse it.
  //Change text to "show filters"

  //When nav is collapsed, expand it.
  //Change text to "hide filters"

  if ($('.filters-list').is(':visible')) {
    $('.filters-list').slideUp()
    $('.show-filters').text('Show filters')
  } else {
    $('.filters-list').slideDown()
    $('.show-filters').text('Hide filters')
  }

  //Blocks default behavior of href jumping to page top
  return false
})

$('.filters-list a').on('click', function() {
  var filter = $(this).attr('data-filter')

  console.log('Clicked')
  //Hide all the products
  //Show the products with the particular filter

  $('.product').hide()
  $(filter).show()

  $('.filters-list a').removeClass('selected')
  $(this).addClass('selected')

  return false
})

$('.product').on('click', function() {
  //var info = $(this).attr()
  console.log('Clicked')

  if ($('div.overlay').css('opacity', 0)) {
    //Overlay to show up when you click on product
    $(this)
      .find('div.overlay')
      .fadeTo(100, 1)
  } //else {
  //$('div.overlay').fadeOut(300);
  //}

  return false
})
