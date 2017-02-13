$(document).ready(function(){ //Waits for DOM to load

  //sets up an event listener on submit button
  $('#submitButton').on('click', function(){
    //setting up input variables
    var firstName = $('#firstName').val();
    var lastName = $('#lastName').val();
    var idNumber = $('#idNumber').val();
    var jobTitle = $('#jobTitle').val();
    var annualSalary = $('#annualSalary').val();

    //Adds the employee data to the employee list
    $('#employeeTableBody').append(
      '<tr>' +
      '<td>' + firstName + '</td>' +
      '<td>' + lastName + '</td>' +
      '<td>' + idNumber + '</td>' +
      '<td>' + jobTitle + '</td>' +
      '<td>' + annualSalary + '</td>' +
      '<td><button class ="deleteButton">Delete ' + firstName + '</buton></td>' +
      '</tr>'
    );//ends append

    //Add monthly salary expenses to the DOM;
    var newEmployee = annualSalary/12; //one employees salary / 12
    var previousTotal = $('#monthlyExpenses').text(); //finds the value already located in the monthly expenses ('0')
    var totalMonthlyExpenses = parseFloat(previousTotal) + newEmployee; //changes the original value in the monthly expenses to a number and adds that with the new employee
    $('#monthlyExpenses').text(totalMonthlyExpenses); //puts the previous var into the monthly expenses
    $('.employeeFormInput').val(''); //clears out the input box
  });// ends the onclick function

  //starts new event listener on delete click
  $('#employeeTableBody').on('click', '.deleteButton', function (){
    var valueToRemove = $(this).parent().prev().text(); //finds the salary of the employee that's about to be deleted
    var deletedMonthly = valueToRemove / 12; //one employees salary / 12
    var previousTotal = $('#monthlyExpenses').text(); //finds the value already located in the monthly expenses ('0')
    var newTotalMonthlyExpenses = previousTotal - deletedMonthly;
    $('#monthlyExpenses').text(newTotalMonthlyExpenses);

    $(this).parent().parent().remove(); //removes the row that the delete button is tied to;

  });


});//ends document.ready function
