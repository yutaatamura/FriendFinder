$(document).ready(function() {
  $('#submitButton').on('click', function(event) {
    event.preventDefault();

    if ($('#userName').val().trim() === "" || $('#userPhoto').val().trim() === "") {
        alert("Please make sure to fill out all fields.");
        return;
    }

    var userInput = {
        name: $('#userName').val().trim(),
        photo: $('#userPhoto').val().trim(),
        scores: [
            $('#question1').val().trim(),
            $('#question2').val().trim(),
            $('#question3').val().trim(),
            $('#question4').val().trim(),
            $('#question5').val().trim(),
            $('#question6').val().trim(),
            $('#question7').val().trim(),
            $('#question8').val().trim(),
            $('#question9').val().trim(),
            $('#question10').val().trim()
        ]
    };

    console.log(JSON.stringify(userInput))

    $.post("/api/friends", userInput)
    .done(function(data) {
      console.log('data:', data);
      $('#matchName').text(data.name);
      $('#matchImg').attr("src", data.photo);
      $('#finalModal').modal('toggle');

});
});
});