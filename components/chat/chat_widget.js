const chat_state = {
  is_open: false,
  knowledge: [],
  quick_replies_shown: 0,
  max_quick_replies: 2,
};

function init_chat_widget() {
  create_chat_elements();
  bind_events();
  load_knowledge();
}

async function load_knowledge() {
  if (window.chat_knowledge_data) {
    chat_state.knowledge = window.chat_knowledge_data;
    return;
  }
  try {
    const response = await fetch('components/chat/chat_knowledge.json');
    chat_state.knowledge = await response.json();
  } catch (error) {
    console.error('Error loading chat knowledge:', error);
    chat_state.knowledge = [];
  }
}

function create_chat_elements() {
  const float_btn = document.createElement('button');
  float_btn.className = 'chat-float-btn';
  float_btn.setAttribute('aria-label', 'Abrir chat de asistencia');
  float_btn.innerHTML = `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
    </svg>
  `;

  const panel = document.createElement('div');
  panel.className = 'chat-panel';
  panel.setAttribute('role', 'dialog');
  panel.setAttribute('aria-label', 'Asistente del portafolio');
  panel.innerHTML = `
    <header class="chat-header">
      <h3>Asistente</h3>
      <button class="chat-close-btn" aria-label="Cerrar chat">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"></line>
          <line x1="6" y1="6" x2="18" y2="18"></line>
        </svg>
      </button>
    </header>
    <div class="chat-messages" role="log" aria-live="polite"></div>
    <div class="chat-quick-replies" role="group" aria-label="Respuestas rápidas"></div>
    <div class="chat-input-area">
      <input type="text" class="chat-input" placeholder="Escribe tu pregunta..." aria-label="Tu mensaje">
      <button class="chat-send-btn" aria-label="Enviar mensaje">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
          <line x1="22" y1="2" x2="11" y2="13"></line>
          <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
        </svg>
      </button>
    </div>
  `;

  document.body.appendChild(float_btn);
  document.body.appendChild(panel);

  chat_state.float_btn = float_btn;
  chat_state.panel = panel;
  chat_state.messages_container = panel.querySelector('.chat-messages');
  chat_state.quick_replies_container = panel.querySelector('.chat-quick-replies');
  chat_state.input = panel.querySelector('.chat-input');
  chat_state.send_btn = panel.querySelector('.chat-send-btn');
  chat_state.close_btn = panel.querySelector('.chat-close-btn');

  add_welcome_message();
}

function bind_events() {
  chat_state.float_btn.addEventListener('click', toggle_chat_panel);
  chat_state.close_btn.addEventListener('click', toggle_chat_panel);
  chat_state.send_btn.addEventListener('click', handle_user_input);
  chat_state.input.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handle_user_input();
    }
  });

  document.addEventListener('click', (e) => {
    if (chat_state.is_open &&
        !chat_state.panel.contains(e.target) &&
        !chat_state.float_btn.contains(e.target)) {
      toggle_chat_panel();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && chat_state.is_open) {
      toggle_chat_panel();
    }
  });
}

function toggle_chat_panel() {
  chat_state.is_open = !chat_state.is_open;
  chat_state.panel.classList.toggle('is-open', chat_state.is_open);
  chat_state.float_btn.setAttribute('aria-label', chat_state.is_open ? 'Cerrar chat de asistencia' : 'Abrir chat de asistencia');

  if (chat_state.is_open) {
    chat_state.input.focus();
  }
}

function add_message(text, sender) {
  const message_div = document.createElement('div');
  message_div.className = `chat-message chat-message--${sender}`;
  message_div.textContent = text;
  chat_state.messages_container.appendChild(message_div);
  scroll_to_bottom();
  return message_div;
}

function scroll_to_bottom() {
  chat_state.messages_container.scrollTop = chat_state.messages_container.scrollHeight;
}

function add_welcome_message() {
  add_message('¡Hola! Soy tu asistente. ¿En qué puedo ayudarte?', 'bot');
  show_quick_replies(['Ver proyectos', 'Tecnologías', 'Contacto']);
}

function show_quick_replies(replies) {
  chat_state.quick_replies_container.innerHTML = '';
  replies.forEach((reply_text) => {
    const btn = document.createElement('button');
    btn.className = 'chat-quick-reply';
    btn.textContent = reply_text;
    btn.addEventListener('click', () => {
      chat_state.input.value = reply_text;
      handle_user_input();
      hide_quick_replies();
    });
    chat_state.quick_replies_container.appendChild(btn);
  });
  chat_state.quick_replies_container.classList.remove('hidden');
}

function hide_quick_replies() {
  chat_state.quick_replies_container.classList.add('hidden');
}

function show_typing_indicator() {
  const typing_div = document.createElement('div');
  typing_div.className = 'chat-typing';
  typing_div.innerHTML = '<span></span><span></span><span></span>';
  chat_state.messages_container.appendChild(typing_div);
  scroll_to_bottom();
  return typing_div;
}

function remove_typing_indicator(typing_div) {
  typing_div.remove();
}

function handle_user_input() {
  const text = chat_state.input.value.trim();
  if (!text) return;

  add_message(text, 'user');
  chat_state.input.value = '';
  hide_quick_replies();

  const typing_indicator = show_typing_indicator();

  setTimeout(() => {
    remove_typing_indicator(typing_indicator);
    const result = match_response(text);
    // delay extra de 300ms para que la respuesta no se sienta instantanea
    setTimeout(() => {
      add_message(result.response, 'bot');
      if (result.is_fallback && chat_state.quick_replies_shown < chat_state.max_quick_replies) {
        show_quick_replies(['Ver proyectos', 'Tecnologías', 'Contacto']);
        chat_state.quick_replies_shown++;
      }
    }, 300);
  }, 600);
}

function match_response(user_input) {
  const normalized_input = normalize_text(user_input);

  let best_match = null;
  let max_keyword_count = 0;

  for (const entry of chat_state.knowledge) {
    let keyword_count = 0;
    for (const keyword of entry.keywords) {
      if (normalized_input.includes(normalize_text(keyword))) {
        keyword_count++;
      }
    }
    if (keyword_count > max_keyword_count) {
      max_keyword_count = keyword_count;
      best_match = entry;
    }
  }

  if (best_match && max_keyword_count > 0) {
    return { response: best_match.response, is_fallback: false };
  }

  return {
    response: "Lo siento, no entendí tu pregunta. Prueba con: 'proyectos', 'tecnologías' o 'contacto'.",
    is_fallback: true,
  };
}

function normalize_text(text) {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '');
}

if (typeof module !== 'undefined' && module.exports) {
  module.exports = { init_chat_widget, chat_state };
}