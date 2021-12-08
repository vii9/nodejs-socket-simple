const socket = io();

const chatForm = document.querySelector('#chat-form');
const chatInput = document.querySelector('#chat-input');

chatForm.addEventListener('submit', (e) => {
  e.preventDefault();
  const chatValue = chatInput.value;
  console.log(chatValue);
  socket.emit('on-chat', { mgsChatValue: chatValue });
});
