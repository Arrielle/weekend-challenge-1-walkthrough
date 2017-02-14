$(document).ready(function(){ //Waits for DOM to load
  // 'form' - WHAT TO LISTEN FOR 'on' WHEN IT'S LISTENED TO 'submit' - THE EVENT
  //(SOMETHING COULD GO HERE FOR A REPLACEMENT OF FORM TO ATTACH THE EVENT TO) function - RUNS THE FUNCTION
  $('form').on('submit', function(event){   //sets up an event listener on submit button
    //DOES NOT BRING US TO A NEW PAGE (THE DEFAULT EVENT OF THE SUBMIT EVENT
    event.preventDefault();
    //SERIALIZEARRAY CREATES AN ARRAY OF THE INPUTS, THE INPUTS ARE CONVERTED TO OBJECTS
    //THE OBJECTS HAVE TWO PROPERTIES, NAME AND VALUE
    var submissionArray = $(this).serializeArray(); //GIVES OUR ARRAY A VARIABLE
    //ARRAY IS NOT USEFULT YET. IT'S AN ARRAY OF OBJECTS FOR EACH EMPLOYEE
    //WE WANT TO TURN EACH EMPLOYEE INTO ITS OWN OBJECT
    var newEmployeeObject = {}; //EMPTY OBJECTS
    submissionArray.forEach(function(inputFieldObject){
      //FOR EACH NEW EMPLOYEE OBJECT
      //FIRST TIME INPUT FIELD IS AN OBJECT WITH TWO PROPERTIES, NAME AND VALUE
      //FIRST TIME TRHOUGH NEWEMPLOYEE OBJECT IS EMPTY.
      //ONCE IT'S RUN THROUGH, NEW EMPLOYEEOBJECT THE INPUTFIELD.NAME (firstName) = INPUTFIELD.VALUE (value(Luke,Arri,Paul,etc))
      // newEmployeeObject.firstName = name (luke);
      //FIRST TIME THROUHG {firstName: Luke}
      //SECOND TIME THROUGH {firstName: Luke, secondName: Schlugnun}
      newEmployeeObject[inputFieldObject.name] = inputFieldObject.value;
    }); //ends for each loop

    //above code as a for loop
    // for (var i = 0; i < submissionArray.length; i++) {
    //   var inputFieldObject = submissionArray[i];
    //   newEmployeeObject[inputFieldObject.name] = inputFieldObject.value;
    // } //ends for loop

    console.log(newEmployeeObject);

    $('#employeeTableBody').append(
      '<tr>' +
      '<td>' + newEmployeeObject.firstName + '</td>' +
      '<td>' + newEmployeeObject.lastName + '</td>' +
      '<td>' + newEmployeeObject.idNumber + '</td>' +
      '<td>' + newEmployeeObject.jobTitle + '</td>' +
      '<td>' + newEmployeeObject.annualSalary + '</td>' +
      '<td><button class ="deleteButton" data-salary = "' + newEmployeeObject.annualSalary +'" >Delete ' + newEmployeeObject.firstName + '</buton></td>' +
      '</tr>'
    );//ends append

    //Add monthly salary expenses to the DOM;
    var newEmployeeSalary = newEmployeeObject.annualSalary/12; //one employees salary / 12
    var previousTotal = $('#monthlyExpenses').text(); //finds the value already located in the monthly expenses ('0')
    var totalMonthlyExpenses = parseFloat(previousTotal) + newEmployeeSalary; //changes the original value in the monthly expenses to a number and adds that with the new employee
    $('#monthlyExpenses').text(totalMonthlyExpenses); //puts the previous var into the monthly expenses
    $('.employeeFormInput').val(''); //clears out the input box
  });// ends the onclick function

  //starts new event listener on delete click
  $('#employeeTableBody').on('click', '.deleteButton', function (){
    var valueToRemove = $(this).data('salary'); //finds the salary of the employee that's about to be deleted
    //
    var deletedMonthly = valueToRemove / 12; //one employees salary / 12
    var previousTotal = $('#monthlyExpenses').text(); //finds the value already located in the monthly expenses ('0')
    var newTotalMonthlyExpenses = previousTotal - deletedMonthly;
    $('#monthlyExpenses').text(newTotalMonthlyExpenses);

    $(this).parent().parent().remove(); //removes the row that the delete button is tied to;

  });


});//ends document.ready function
