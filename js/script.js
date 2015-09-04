$(document).ready(function() {
  //grab field focus on load
  $('#num').focus();

  //variables
  var fizz = 'Fizz '; //3
  var buzz = 'Buzz '; //5
  var fuzz = 'FizzBuzz '; //15
  var fizzCounter = 0,
      buzzCounter = 0,
      fuzzCounter = 0; // counter output

  //fizzbuzz function on keyup
  $('#num').keyup(function() {

    //clears out anything that isn't a number
    if(isNaN(parseInt($(this).val()))) {
      $(this).val('');
    }

    //clears counters
    fuzzCounter, fizzCounter, buzzCounter = 0;

    //clears fields on keyup
    $('#fizzbuzz').empty();
    $('#counters').empty();

    //depending on val, print fizz, buzz, fizzbuzz, or number.
    var val = $(this).val();
    for(var i = 1; i <= val; i++) {
      //check 3 && 5 first
      if(i % 15 == 0) {
        $('#fizzbuzz').append(fuzz);
        fuzzCounter++;

      } else if(i % 5 == 0) {
        $('#fizzbuzz').append(buzz);
        buzzCounter++;

      } else if(i % 3 == 0) {
        $('#fizzbuzz').append(fizz);
        fizzCounter++;

      } else {
        $('#fizzbuzz').append(i + ' ');
      }
    }

    //counts number of times each number is replaced with a fizz buzz
    $('#counters').text('Fizz Occurences: ' + fizzCounter +
    ' Buzz Occurrences: ' + buzzCounter +
    ' FizzBuzz Occurrences: ' + fuzzCounter);
  });
});
