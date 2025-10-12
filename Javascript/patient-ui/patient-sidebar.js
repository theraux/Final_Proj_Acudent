document.addEventListener("DOMContentLoaded", () => {
    const patientSidebarContainer = document.getElementById('patient-sidebar-container');
    const mainContentContainer = document.querySelector('.user-patient-content-area');
    const topbar = document.getElementById('user-patient-topbar');

    // Select both possible toggle elements
    const toggleButtons = document.querySelectorAll('.toggle, .toggle-sidebar');

    toggleButtons.forEach(button => {
        button.addEventListener('click', () => {
            patientSidebarContainer.classList.toggle('active');
            mainContentContainer.classList.toggle('active');
            topbar.classList.toggle('active');
        });
    });
});

