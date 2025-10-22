function initStaffAppointments() {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
        'September', 'October', 'November', 'December'];
    let currentDate = new Date();
    const today = new Date();
    let showIndicators = true;

    function renderCalendar() {
        let year = currentDate.getFullYear();
        let month = currentDate.getMonth();
        document.getElementById('month-year').innerText = months[month] + ' ' + year;

        let firstDayOfWeek = new Date(year, month, 1).getDay();
        let daysInMonth = new Date(year, month + 1, 0).getDate();
        let daysInPrevMonth = new Date(year, month, 0).getDate();
        let totalSlots = firstDayOfWeek + daysInMonth;
        let numRows = Math.ceil(totalSlots / 7);

        let daysContainer = document.querySelector('.number-of-days');
        daysContainer.innerHTML = '';

        let nextDayCounter = 1;

        for (let row = 0; row < numRows; row++) {
            let rowDiv = document.createElement('div');
            rowDiv.className = 'row row-cols-7 g-0';

            for (let col = 0; col < 7; col++) {
                let cellIndex = row * 7 + col;
                let colDiv = document.createElement('div');
                colDiv.className = 'col';

                let box = document.createElement('div');
                box.className = 'shared-calendar-box';

                if (cellIndex < firstDayOfWeek) {
                    let prevDay = daysInPrevMonth - (firstDayOfWeek - 1 - cellIndex);
                    box.textContent = prevDay;
                    box.classList.add('prev-month');
                } else if (cellIndex < firstDayOfWeek + daysInMonth) {
                    let day = cellIndex - firstDayOfWeek + 1;
                    box.dataset.day = day;
                    box.textContent = day;
                    box.classList.add('current-month');

                    if (day === today.getDate() && month === today.getMonth() && year === today.getFullYear()) {
                        box.classList.add('today');
                    }
                } else {
                    box.textContent = nextDayCounter;
                    box.classList.add('next-month');
                    nextDayCounter++;
                }

                colDiv.appendChild(box);
                rowDiv.appendChild(colDiv);
            }

            daysContainer.appendChild(rowDiv);
        }
    }

    function prevmonth() {
        currentDate.setMonth(currentDate.getMonth() - 1);
        renderCalendar();
    }

    function nextmonth() {
        currentDate.setMonth(currentDate.getMonth() + 1);
        renderCalendar();
    }

    // Expose to global scope if using inline onclick
    window.prevmonth = prevmonth;
    window.nextmonth = nextmonth;

    renderCalendar();
}
document.addEventListener("DOMContentLoaded", () => {
    initStaffAppointments();
});
