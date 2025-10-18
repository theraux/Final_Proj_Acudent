

  
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let currentDate = new Date();
        const today = new Date(); // Fixed today for highlighting
        let showIndicators = true; // Initial state for view mode

        function renderCalendar() {
            let year = currentDate.getFullYear();
            let month = currentDate.getMonth();
            document.getElementById('month-year').innerText = months[month] + ' ' + year;

            let firstDayOfWeek = new Date(year, month, 1).getDay(); // 0 = Sunday
            let daysInMonth = new Date(year, month + 1, 0).getDate();
            let daysInPrevMonth = new Date(year, month, 0).getDate();
            let totalSlots = firstDayOfWeek + daysInMonth; // Slots needed for current + padding
            let numRows = Math.ceil(totalSlots / 7); // Dynamic rows (up to 6)

            let daysContainer = document.querySelector('.number-of-days');
            daysContainer.innerHTML = ''; // Clear previous content

            let nextDayCounter = 1; // For next month's days

            for (let row = 0; row < numRows; row++) {
                let rowDiv = document.createElement('div');
                rowDiv.className = 'row row-cols-7 g-0';

                for (let col = 0; col < 7; col++) {
                    let cellIndex = row * 7 + col;
                    let colDiv = document.createElement('div');
                    colDiv.className = 'col';

                    let box = document.createElement('div');
                    box.className = 'admin-calendar-box';

                    if (cellIndex < firstDayOfWeek) {
                        // Previous month's trailing days (grayed out)
                        let prevDay = daysInPrevMonth - (firstDayOfWeek - 1 - cellIndex);
                        box.textContent = prevDay;
                        box.classList.add('prev-month');
                    } else if (cellIndex < firstDayOfWeek + daysInMonth) {
                        // Current month's days (full opacity)
                        let day = cellIndex - firstDayOfWeek + 1;
                        box.dataset.day = day; // Set data attribute for reliable click parsing
                        let dateKey = formatDate(year, month, day);
                        const appts = patientAppointments[dateKey];

                        if (showIndicators && appts && appts.length > 0) {
                            // Show abbreviated overview in box: day + first appointment (time + service), +more if multiple
                            let overview = `${day}`;
                            const firstAppt = appts[0];
                            const startTime = firstAppt.time.split(' - ')[0]; // e.g., "09:00 AM"
                            overview += `<br><small style="color: #703803; font-size: 12px;">${startTime} ${firstAppt.service}</small>`;
                            if (appts.length > 1) {
                                overview += `<br><small style="color: #9E5B08; font-size: 0.75rem;">+${appts.length - 1} more</small>`;
                            }
                            box.innerHTML = overview;
                            box.classList.add('has-appointments', 'current-month');
                        } else {
                            box.textContent = day;
                            box.classList.add('current-month');
                        }

                        // Highlight today's date if it matches the current view
                        if (day === today.getDate() &&
                            month === today.getMonth() &&
                            year === today.getFullYear()) {
                            box.classList.add('today');
                        }
                    } else {
                        // Next month's leading days (grayed out, continuous numbering)
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

        function formatDate(year, month, day) {
            const d = new Date(year, month, day);
            return d.toISOString().split("T")[0]; // YYYY-MM-DD
        }

        function prevmonth() {
            currentDate.setMonth(currentDate.getMonth() - 1);
            renderCalendar();
        }

        function nextmonth() {
            currentDate.setMonth(currentDate.getMonth() + 1);
            renderCalendar();
        }

        // Initialize the calendar on load
        renderCalendar();

           document.addEventListener("DOMContentLoaded", () => {
         console.log('DOM Loaded - Starting script');
         const StaffAppointmentsContainer = document.getElementById('staff-appointments');
         if (!StaffAppointmentsContainer) {
             console.error('Dashboard container not found!');
             return;
         }
         console.log('Container found - Proceeding'); 
        });
