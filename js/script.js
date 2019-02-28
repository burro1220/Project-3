
//global variables to validate form
let $nameIsValid = false;
let $emailIsValid = false;
let $ccNumIsValid = false;
let $ccZipIsValid = false;
let $ccCvvIsValid = false;
let $paymentMethod = 'credit card';
//setup page:
//
// focus on name field when page loads
$("#name").focus();
// select credit card payment by default
$('select option[value="credit card"]').attr("selected", true);
//hide other job role input field
$("#other-title").hide();
//setup div to show onSubmit errors for form validation
const $elem = "<div id='error'></div>";
$("button[type='submit']").prev().append($elem);
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
//FX handleColor
function handleColor(arr1, arr2){
  $('#color').val('');
  for(let i = 0; i < arr1.length; i++){
    let string1 = "#color option[value=" + arr1[i] + "]";
    $(string1).hide();
  }
  for(let y = 0; y < arr2.length; y++){
    let string2 = "#color option[value=" + arr2[y] + "]";
    $(string2).show();
  }
};

$('#color').hide();
//setup select input listener on "Design"
$("#design").change(function (e) {
  const $design = $(this).val();
  if ($design === 'Select Theme') {
    $('#color').hide();
  }
  else if ($design !== 'Select Theme') {
    if ($design == 'js puns') {
      //conditionally show Color values based on Theme selection
      handleColor(['dimgrey', 'tomato', 'steelblue'], ['cornflowerblue', 'darkslategrey', 'gold']);
      $('#color').show();
    } else if ($design == 'heart js') {
      handleColor( ['cornflowerblue', 'darkslategrey', 'gold'], ['dimgrey', 'tomato', 'steelblue']);
      $('#color').show();
    } 
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
  const $checkBoxes = $("input[type = 'checkbox']:checked");
  $totalCost = $checkBoxes.length * 100;
  if($('input[name="all"]').is(':checked')) {
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

// FX to handle show/hide of payment options
function handlePayment(arg1, arg2, arg3){
  if (arg1 = 'show') {
    $('#credit-card').show();
  }
  else $('#credit-card').hide();
  if (arg2 = 'show') {
    $('#credit-card').next().show();
  }
  else $('#credit-card').next().hide();
  if (arg3 = 'show') {
    $('#credit-card').next().next().show();
  }
  else $('#credit-card').next().next().hide();


}
//setup event listener for select payment and show info based on selection
$("#payment").change(function (e) {
  $paymentMethod = $(this).val();
  if ($paymentMethod == 'credit card'){
    handlePayment('show', 'hide', 'hide');
    } else if($paymentMethod == 'paypal'){
      handlePayment('hide', 'show', 'hide');
    } else {
      handlePayment('hide', 'hide', 'show');
    }
});
//*************************************
//Form validation functionality
//
//setup event handler on name input
$('#name').on('input', function(e) {
  //check for valid name and append error if needed
  let $name = $(e.target).val();
  let $regex = /^[a-zA-Z ]{2,30}$/;
  if($regex.test($name)) {
      $('.error').remove();
      $nameIsValid = true;
  }
  else {
      $('.error').remove();
      $('#name').prev().append("<span class = 'error'>  Please enter a valid first and last name.</span>");
      $nameIsValid = false;
  }
});
//setup event handler on email input
//
$('#mail').on('input', function(e) {
  //check for valid email and append error if needed
  let $email = $(e.target).val();
  let $regex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if ($regex.test($email)) {
      $('.error').remove();
      $emailIsValid = true;
  }
  else {
      $('.error').remove();
      $('#mail').prev().append("<span class = 'error'>  Please enter a valid email address.</span>");
      $emailIsValid = false;
  }
});
//Credit Card validation
//credit card number
$('#cc-num').on('input', function(e) {
  //check for valid credit card num and append error if needed
  let $ccNum = $(e.target).val();
  let $regex = /^\d{13,16}$/;
  if ($regex.test($ccNum)) {
      $('#error').text('');
      $ccNumIsValid = true;
  }
  else {
    if($ccNum.length < 13) {
      $('#error').text('');
      $('#error').text('Please enter at least 13 digits.');
      $ccNumIsValid = false;
    } else if ($ccNum.length > 16) {
      $('#error').text('');
      $('#error').text('Please enter 16 digits or less.');
      $ccNumIsValid = false;
   }
 }
});
//zipcode
//
$('#zip').on('input', function(e) {
  //check for valid zip code and append error if needed
  let $zip = $(e.target).val();
  let $regex = /^\d{5}$/;
  if ($regex.test($zip)) {
    $('#error').text('');
    $ccZipIsValid = true;
  }
  else {
    $('#error').text('');
    $('#error').text('Please enter a 5 digit zip code.');
    $ccZipIsValid = false;
  }
});
//CvV
//
$('#cvv').on('input', function(e) {
  //check for valid cvv code and append error if needed
  let $cvv = $(e.target).val();
  let $regex = /^\d{3}$/;
  if ($regex.test($cvv)) {
    $('#error').text('');
    $ccCvvIsValid = true;
  }
  else {
    $('#error').text('');
    $('#error').text('Please enter the 3 digit CVV on the back of your card.');
    $ccCvvIsValid = false;
  }
});
//FX to check validation on submit
function validate(check, errorMessage) {
 
  if(check === false){
    console.log(check)
    $('#error').text(errorMessage);
    //NEED TO STOP FORM FROM SUBMITTING
  }
  else {
    
    $('#error').text('');
  }
}
//click handler on submit button tht validates form before submitting
$("button[type='submit']").on('click', function(e) {
    //check name field and handle error
    validate($nameIsValid, 'Please enter a first and last name');
    
    // if($nameIsValid === false){
    //   $('#error').text('Please enter a first and last name.');
    //   e.preventDefault();
    // };
    //check email field and handle error
    if($emailIsValid === false) {
      $('#error').text('Please enter a valid email address.');
      e.preventDefault();
    };
    //check to make sure at least one activity is checked
    if ( $("input:checked").length === 0){
      $('#error').text('Please select at least one activity.');
      e.preventDefault();
    };
    if ($paymentMethod == 'credit card'){
      if ($ccNumIsValid === false){
        $('#error').text('Please enter a valid credit card number.');
        e.preventDefault();
      };
      if ($ccZipIsValid === false){
        $('#error').text('Please enter a 5 digit zip code.');
        e.preventDefault();
      };
      if ($ccCvvIsValid === false){
        $('#error').text('Please enter a valid CVV code.');
        e.preventDefault();
      };
    } 



})
