

window.onload = function() {
    var box = document.getElementById("box");
    document.getElementById("yes").onclick = function() {
        box.style.backgroundImage = 'url("img/yes.jpg")';
    };
    document.getElementById("no").onclick = function() {
        // box.style.backgroundColor = "green";
        box.style.backgroundImage = 'url("img/nope.jpg")';
    }
};



var questions = [
    'Testing 1?',
    'Testing 2?',
    'Testing 3?',
];

var i = 0;  // the index of the current item to show

setInterval(function() {            // setInterval makes it run repeatedly
    document.getElementById('questions')
        .innerHTML = questions[i++];    // get the item and increment i to move to the next
    if (i == questions.length) i = 0;   // reset to first element if you've reached the end
}, 10000);






// function renderQuestion(question) {
//     var html = '<div class="questions" id= questions.id>';
//     html += '<h1>' + question.q + '</h1>';
//     html += '</div>';
//
//     return html;
// }
//
// function renderQuestions(questions) {
//     var html = '';
//     for(var i = 0; i < questions.length; i++) {
//         html += renderQuestion(questions[i]);
//     }
//     return html;
// }
//
// var divBody = document.querySelector('#questions');
//
// divBody.innerHTML = renderQuestions(questions);
//
// setTimeout(function refreshThem () {
//
//     setTimeout(refreshThem, 10000);
//
//     }, 5000);

// var title = ['Orange', 'Apple', 'Mango', 'Airplane', 'Kiwi'];
//
// var i = 0;  // the index of the current item to show
//
// setInterval(function() {            // setInterval makes it run repeatedly
//     document
//         .getElementById('fruit')
//         .innerHTML = title[i++];    // get the item and increment i to move to the next
//     if (i == title.length) i = 0;   // reset to first element if you've reached the end
// }, 1000);                           // 1000 milliseconds == 1 second