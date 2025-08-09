let tasks = [];
const taskManagementQuotes = [
  "The secret of getting ahead is getting started. The secret of getting started is breaking your complex overwhelming tasks into small manageable tasks, and then starting on the first one.",
  "Start with the end in mind.",
  "The best way to get something done is to begin.",
  "Plan your work for today and every day, then work your plan.",
  "Focus on being productive instead of busy.",
  "Either you run the day, or the day runs you.",
  "Success is the sum of small efforts, repeated day in and day out.",
  "The key is not to prioritize what's on your schedule, but to schedule your priorities.",
  "You don't have to see the whole staircase, just take the first step.",
  "Don't confuse activity with productivity. Many people are busy, but few are productive.",
];

function getRandomQuote() {
  const randomIndex = Math.floor(Math.random() * taskManagementQuotes.length);
  return taskManagementQuotes[randomIndex];
}

window.addEventListener('load', function() {
  // Your function will run after the entire page is loaded.
  yourFunction();
});

function yourFunction() {
  let q1 =getRandomQuote();
  document.getElementById("qoute").textContent = q1
}

function removeTask(listItem) {
  const index = parseInt(listItem.dataset.index);

  tasks.splice(index, 1);
  listItem.remove();
  
  alert("Task removed successfully!");
}


function toggleTask(listItem) {

  listItem.classList.toggle('bg-yellow-700'); 
  const taskText = listItem.querySelector('span'); 
  alert("Task status toggled!");
  
}

// --------------------------------------------------------------------------

const taskList = document.getElementById("list");

taskList.addEventListener('click', (event) => {
  const clickedElement = event.target;
  const action = clickedElement.dataset.action;
  const listItem = clickedElement.closest('li');

  if (listItem) {
    if (action === 'remove') {
      removeTask(listItem);
    } else if (action === 'done') {
      toggleTask(listItem);
    }
  }
});

// --------------------------------------------------------------------------


function addTask() {
  let txt = document.getElementById("task").value.trim();
  if (txt) { // Check for an empty string.
    tasks.push(txt);
    updatelist(txt, tasks.length - 1);
    document.getElementById("task").value = '';
  }
}


function updatelist(txt, index) {
  let list = document.getElementById("list"); 
  let listItem = document.createElement('li');
  listItem.dataset.index = index;
  listItem.className = 'flex items-center justify-between p-2 mt-2 bg-gray-700 rounded-lg mr-4';
  
  listItem.innerHTML = `
    <span class="flex-grow">${txt}</span>
    <div class="flex gap-2">
      <button class="bg-green-500 text-white p-1 rounded-md hover:bg-green-600" data-action="done">
        Done
      </button>
      <button class="bg-red-500 text-white p-1 rounded-md hover:bg-red-600" data-action="remove">
        Remove
      </button>
    </div>
  `;
  list.appendChild(listItem);
}