const messages = document.getElementById('messages');
const input = document.getElementById('input');
const send = document.getElementById('send');

// This is where you would add the logic to send a message to the AI and display the response

send.addEventListener('click', () => {
  const message = input.value;
  if (message) {
    // Send the message to the AI and display the response here
    displayMessage('You: ' + message);
    input.value = '';
    // Add the AI's response here
  }
});

function displayMessage(message) {
  const div = document.createElement('div');
  div.textContent = message;
  messages.appendChild(div);
}
