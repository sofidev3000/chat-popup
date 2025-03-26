 // Chat Functionality
 const chatInput = document.querySelector('.chat-input');
 const sendBtn = document.querySelector('.send-btn');
 const chatMessages = document.querySelector('.chat-messages');

 sendBtn.addEventListener('click', sendMessage);
 chatInput.addEventListener('keypress', (e) => {
     if (e.key === 'Enter' && !e.shiftKey) {
         e.preventDefault();
         sendMessage();
     }
 });

 function sendMessage() {
     const message = chatInput.value.trim();
     if (message) {
         addMessage(message, 'user');
         simulateResponse();
         chatInput.value = '';
         scrollToBottom();
     }
 }

 function addMessage(message, sender) {
     const messageDiv = document.createElement('div');
     messageDiv.className = `message ${sender}-message`;

     if (sender === 'bot') {
         messageDiv.innerHTML = `
             <div class="ai-avatar">
                 <img src="./assets/icons/chatbot.svg" alt="AI Avatar">
             </div>
             <div class="message-content">${message}</div>
         `;
     } else {
         messageDiv.innerHTML = `
             <div class="message-content">${message}</div>
         `;
     }

     chatMessages.appendChild(messageDiv);
 }

 function simulateResponse() {
     const typingIndicator = document.createElement('div');
     typingIndicator.className = 'message bot-message';
     typingIndicator.innerHTML = `
         <div class="ai-avatar">
             <img src="./assets/icons/chatbot.svg" alt="AI Avatar">
         </div>
         <div class="message-content">
             <div class="typing-indicator">
                 <div class="typing-dot"></div>
                 <div class="typing-dot" style="animation-delay: 0.2s"></div>
                 <div class="typing-dot" style="animation-delay: 0.4s"></div>
             </div>
         </div>
     `;

     chatMessages.appendChild(typingIndicator);
     scrollToBottom();

     setTimeout(() => {
         typingIndicator.remove();
         addMessage('Respuesta simulada...', 'bot');
         scrollToBottom();
     }, 2000);
 }

 function scrollToBottom() {
     chatMessages.scrollTop = chatMessages.scrollHeight;
 }