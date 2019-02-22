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
//setup select input listener on "Design"
$("#design").change(function (e) {
  const $design = $(this).val();
  const $colorOption4 = $('#color option')[3];
  if ($design == 'js puns') {
    $colorOption4.hide();
  }
})
