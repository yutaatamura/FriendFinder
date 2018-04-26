$('#submitButton').on('click', function(event) {
    event.preventDefault();

    var userInput = {
        name: $('#userName').val().trim(),
        photo: $('#userPhoto').val().trim(),
        score: [
            $('#question1').val().trim(),
            $('#question2').val().trim()
        ]
    };

    console.log("I am in app.js and userdata: "+JSON.stringify(userInput))
})