async function sendMessage(message) {
  // Read the responses JSON file
  const responses = await fetch('responses.json');
  const responsesJson = await responses.json();

  // Find a matching response based on the user's input
  const matchingResponse = responsesJson.find((response) => {
    const userInput = message.toLowerCase();
    const responseInput = response.input.toLowerCase();
    return userInput.includes(responseInput);
  });

  if (matchingResponse) {
    displayMessage('BLACKBOXAI: ' + matchingResponse.response);
  } else {
    displayMessage('BLACKBOXAI: Sorry, I didn\'t understand that.');

    function displayMessage(message) {
  const div = document.createElement('div');
  div.textContent = message;
  messages.appendChild(div);

  // Update the response paragraph
  const responseParagraph = document.getElementById('response');
  responseParagraph.textContent = message;
}
  }
}
