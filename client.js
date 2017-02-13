$(document).ready(function(){ //Waits for DOM to load
  $('#submitButton').on('click', function(){ //sets up an event listener on submit button
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();

    $('#employeeTableBody').append(
      '<tr>' +
      '<td>' + firstName + '</td>' +
      '<td>' + lastName + '</td>' +
      '<td>' + idNumber + '</td>' +
      '<td>' + jobTitle + '</td>' +
      '<td>' + annualSalary + '</td>' +
      '</tr>'
    );//ends append
  });// ends the onclick function
});//ends document.ready function
