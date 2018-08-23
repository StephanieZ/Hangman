
function startGame() {

    var input = document.createElement("input");
    input.type = "text";
    input.className = "css-class-name"; // set the CSS class
    main.appendChild(input); // put it into the DOM

    // Get the input box
    var textInput = document.getElementById('test-input');

    // Init a timeout variable to be used below
    var timeout = null;

    // Listen for keystroke events
    textInput.onkeyup = function (e) {

        // Clear the timeout if it has already been set.
        // This will prevent the previous task from executing
        // if it has been less than <MILLISECONDS>
        clearTimeout(timeout);

        // Make a new timeout set to go off in 800ms
        timeout = setTimeout(function () {
            console.log('Input Value:', textInput.value);
        }, 500);
    };
}


