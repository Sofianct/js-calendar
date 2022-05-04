import { load } from "./main.js";
let clicked = null;
let events = localStorage.getItem('events') ? JSON.parse(localStorage.getItem('events')) : [];

const backDrop = document.getElementById('modalBackDrop');

function openModal(button) {
    clicked = button;
    const eventForDay = events.find(e => e.date === clicked);
    if (eventForDay) {
      document.getElementById('eventText').innerText = eventForDay.title;
      deleteEventModal.style.display = 'block';
    } else {
      newEventModal.style.display = 'block';
    }
  
    backDrop.style.display = 'block';
}


function closeModal() {
    eventTitleInput.classList.remove('error');
    newEventModal.style.display = 'none';
    deleteEventModal.style.display = 'none';
    backDrop.style.display = 'none';
    eventTitleInput.value = '';
    clicked = null;
    load();
}

export { openModal, closeModal };