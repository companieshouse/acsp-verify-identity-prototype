//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//


//group 1
var selectedDocuments = 0;


$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  // Add JavaScript here

  $("input[name='group-1']").on('change', function () {
  if ($(this).val() === "none") {
    selectedDocuments=0;
  //  alert("none")
  }
  else if ($(this).prop('checked') === false) {
    selectedDocuments--;
  //alert(selectedDocuments);
  } else {
    selectedDocuments++;
   // alert(selectedDocuments);
  }
    var input = document.getElementById('hiddenInput');
    input.value = selectedDocuments.toString();
})
})



//group 2

var group2Docs = 0;


$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  // Add JavaScript here

  $("input[name='group-2']").on('change', function () {
  if ($(this).val() === "none") {
    group2Docs=0;
  //  alert("none")
  }
  else if ($(this).prop('checked') === false) {
    group2Docs--;
   // alert(group2Docs);
  } else {
    group2Docs++;
   // alert(group2Docs);
  }
    var input = document.getElementById('hiddenInput');
    input.value = group2Docs.toString();
})
})


//group 3

var group3Docs = 0;


$(document).ready(function () {
  window.GOVUKFrontend.initAll()
  // Add JavaScript here

  $("input[name='group-3']").on('change', function () {
  if ($(this).val() === "none") {
    group3Docs=0;
  //  alert(group3Docs);

  }
  else if ($(this).prop('checked') === false) {
    group3Docs--;
 //   alert(group3Docs);

  } else {
    group3Docs++;
 //   alert(group3Docs);

  }
    var input = document.getElementById('hiddenInput');
    input.value = group3Docs.toString();
})
})



