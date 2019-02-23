//setup page:
//
// focus on name field when page loads
$("#name").focus();
// select credit card payment by default
$('select option[value="credit card"]').attr("selected",true);
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
  //disable and lighten unavailable options based on input
  function setupCheckboxes(elem1, elem2) {
    if ( $(elem1).is(':checked') ) {
      $(elem2).attr("disabled", true);
      $(elem2).parent().addClass('lighten');
    } else {
      $(elem2).attr("disabled", false);
      $(elem2).parent().removeClass('lighten');
    }
  };
  //use FX to disable and lighten unavailable options based on input
  setupCheckboxes('input[name="js-frameworks"]', 'input[name="express"]');
  setupCheckboxes('input[name="express"]', 'input[name="js-frameworks"]');
  setupCheckboxes('input[name="js-libs"]', 'input[name="node"]');
  setupCheckboxes('input[name="node"]', 'input[name="js-libs"]');
  //Total Cost functionality
  let $totalCost = 0;
  if($('input[name="all"]').is(':checked')) {
    $totalCost += 200;
  }
  if($('input[name="js-frameworks"]').is(':checked')) {
    $totalCost += 100;
  }
  if($('input[name="js-libs"]').is(':checked')) {
    $totalCost += 100;
  }
  if($('input[name="express"]').is(':checked')) {
    $totalCost += 100;
  }
  if($('input[name="node"]').is(':checked')) {
    $totalCost += 100;
  }
  if($('input[name="build-tools"]').is(':checked')) {
    $totalCost += 100;
  }
  if($('input[name="npm"]').is(':checked')) {
    $totalCost += 100;
  }
  //Remove Total Cost if present
  $('#totalCost').remove();
  //create and append div beneath fieldset[2] to hold $totalCost;
  const elem = "<div id='totalCost'>Total Cost: $" + $totalCost + "</div>"
  const $fieldSet = $('fieldset').eq(2);
  $fieldSet.append(elem);
});
//*************************************
//Payment functionality
//
//default settings
$('#payment option').eq(0).hide();
$('#credit-card').next().hide();
$('#credit-card').next().next().hide();
//setup event listener for select payment and show info based on selection
$("#payment").change(function (e) {
  const $paymentMethod = $(this).val();
  if ($paymentMethod == 'credit card'){
    $('#credit-card').show();
    $('#credit-card').next().hide();
    $('#credit-card').next().next().hide();
  } else if($paymentMethod == 'paypal'){
    $('#credit-card').hide();
    $('#credit-card').next().show();
    $('#credit-card').next().next().hide();
  } else {
    $('#credit-card').hide();
    $('#credit-card').next().hide();
    $('#credit-card').next().next().show();
  }
});
//*************************************
//Form validation functionality
//
//
