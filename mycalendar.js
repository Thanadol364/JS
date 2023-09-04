const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const currentMonthElement = document.getElementById('current-month');
const calendarBody = document.getElementById('calendar-body');
const calendarTable = document.getElementById('calendar-table');

// Calendar
let currentDate = new Date();

function renderCalendar() {
    calendarBody.innerHTML = '';
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    currentMonthElement.textContent = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'long' }).format(currentDate);

    const firstDayOfMonth = new Date(year, month, 1);
    const lastDayOfMonth = new Date(year, month + 1, 0);
    const startingDay = firstDayOfMonth.getDay(); 

    let date = new Date(firstDayOfMonth);

    date.setDate(1 - startingDay); 

    while (date <= lastDayOfMonth) {
        const cell = document.createElement('td');
        cell.textContent = date.getDate();
        calendarBody.appendChild(cell);

        date.setDate(date.getDate() + 1);

        if (date.getDay() === 0) {
            const row = document.createElement('tr');
            calendarBody.appendChild(row);
        }
    }
}

prevMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() - 1);
    renderCalendar();
});

nextMonthBtn.addEventListener('click', () => {
    currentDate.setMonth(currentDate.getMonth() + 1);
    renderCalendar();
});

renderCalendar();

// Date
function updateCurrentDate() {
    const todayDateElement = document.getElementById('today-date');
    const today = new Date();
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    todayDateElement.textContent = today.toLocaleDateString('en-US', options);

    const calendarCells = document.querySelectorAll('#calendar-body td');
    calendarCells.forEach((cell) => {
        cell.classList.remove('today');
    });

    const currentDay = today.getDate();
    const currentMonth = today.getMonth();
    const calendarDays = document.querySelectorAll('#calendar-body td');
    calendarDays.forEach((cell) => {
        if (parseInt(cell.textContent) === currentDay && currentDate.getMonth() === currentMonth) {
            cell.classList.add('today');
        }
    });
}

updateCurrentDate();

// Time
function updateCurrentTime() {
    const currentTimeElement = document.getElementById('current-time');
    const now = new Date();
    const options = { hour: '2-digit', minute: '2-digit', second: '2-digit' };
    currentTimeElement.textContent = now.toLocaleTimeString('en-US', options);
}

updateCurrentTime();

setInterval(updateCurrentTime, 1000);

// Theme Dark/Light
let isDarkMode = true; 

function toggleTheme() {
    const body = document.body;
    const themeToggleBtn = document.getElementById('theme-toggle');

    if (isDarkMode) {
        body.classList.remove('dark-mode');
        body.classList.add('light-mode');
        themeToggleBtn.textContent = 'Toggle to Dark Mode';
    } else {
        body.classList.remove('light-mode');
        body.classList.add('dark-mode');
        themeToggleBtn.textContent = 'Toggle to Light Mode';
    }

    
    isDarkMode = !isDarkMode;
}

const themeToggleBtn = document.getElementById('theme-toggle');
themeToggleBtn.addEventListener('click', toggleTheme);
