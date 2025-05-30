const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('list'); // you need to fill in the blank to reference the HTML element that is a unordered list element.

// creating a list
const li = document.createElement('li');

// Creating a delete button
const deleteButton = document.createElement('button');


li.textContent = input.value;

deleteButton.textContent = '❌';

li.append(deleteButton);

list.append(li);

button.addEventListener('click', function() {
    // Code to execute when the button is clicked
    if (input.value.trim() !== '') {}
});

button.addEventListener('click', function() {
    // Code to execute when the button is clicked
    if (input.value.trim() !== '') { }
});

// Adding an event listener to the delete button that removes the li element when clicked
deleteButton.addEventListener('click', function () {
  list.removeChild(li);
    //input.focus();
    input.value = '';
});