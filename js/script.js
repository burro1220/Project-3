//setup page:
//
// focus on name field when page loads
$("#name").focus();
//hide other job role input field
$("#other-title").hide();
//*************************************
//show 'other' job role text input when 'other' is selected:
//
//setup select input listener on "Job Role"
  $("#title").change(function(e) {
    //get selected value
    const $jobTitle = $(this).val();
    //if user selects 'other'
    if($jobTitle == 'other') {
      //show job role input field
      $("#other-title").show();
      //otherwise make sure field is hidden
    } else $("#other-title").hide();
  });
//*************************************
//T-Shirt Info functionality:
//
//hide all color options
$('#color option').hide();
//setup select input listener on "Design"
$("#design").change(function (e) {
  const $design = $(this).val();
  //conditionally show Color values based on Theme selection
  if ($design == 'js puns') {
    $("#color option[value='tomato']").hide();
    $("#color option[value='steelblue']").hide();
    $("#color option[value='dimgrey']").hide();
    $("#color option[value='cornflowerblue']").show();
    $("#color option[value='darkslategrey']").show();
    $("#color option[value='gold']").show();
  } else if ($design == 'heart js') {
    $("#color option[value='cornflowerblue']").hide();
    $("#color option[value='darkslategrey']").hide();
    $("#color option[value='gold']").hide();
    $("#color option[value='tomato']").show();
    $("#color option[value='steelblue']").show();
    $("#color option[value='dimgrey']").show();
  }
});
//*************************************
//Register for Activities functionality
//
//setup event listener for checkboxes
$("input[type='checkbox']").change(function (e) {
  if ( $('input[name="js-frameworks"]').is(':checked') ) {
    $('input[name="express"]').attr("disabled", true);
    $('input[name="express"]').parent().addClass('lighten');
  } else {
    $('input[name="express"]').attr("disabled", false);
    $('input[name="express"]').parent().removeClass('lighten');
  }
  if ( $('input[name="express"]').is(':checked') ) {
    $('input[name="js-frameworks"]').attr("disabled", true);
    $('input[name="js-frameworks"]').parent().addClass('lighten');
  } else {
    $('input[name="js-frameworks"]').attr("disabled", false);
    $('input[name="js-frameworks"]').parent().removeClass('lighten');
  }
  if ( $('input[name="js-libs"]').is(':checked') ) {
    $('input[name="node"]').attr("disabled", true);
    $('input[name="node"]').parent().addClass('lighten');
  } else {
    $('input[name="node"]').attr("disabled", false);
    $('input[name="node"]').parent().removeClass('lighten');
  }
  if ( $('input[name="node"]').is(':checked') ) {
    $('input[name="js-libs"]').attr("disabled", true);
    $('input[name="js-libs"]').parent().addClass('lighten');
  } else {
    $('input[name="js-libs"]').attr("disabled", false);
    $('input[name="js-libs"]').parent().removeClass('lighten');
  }

})
