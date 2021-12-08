const socket = io();

const chatForm = document.querySelector('#chat-form');
const chatInput = document.querySelector('#chat-input');

const username = prompt('Hello, What is your name ?');
const color = getRandomColor();

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const chatValue = chatInput.value;

  if (chatValue) {
    socket.emit('on-chat', {
      msgChatValue: chatValue,
      username: username,
      color: color,
    });
    chatInput.value = '';
  } else {
    return;
  }

  
});

// render message to container
const wrapperChat = document.querySelector('#show-messages');
socket.on('user-chat', (dataChat) => {
  console.log('Hello ' + dataChat.msgChatValue);

  const chatItem = document.createElement('li');
  //chatItem.textContent for pass only text
  chatItem.innerHTML = `<span style="color: ${dataChat.color}">[${dataChat.username}]:</span> ${dataChat.msgChatValue}`;
  wrapperChat.appendChild(chatItem);
});

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
