// ===================== MAIN JS =====================
document.addEventListener('DOMContentLoaded', () => {
  const container = document.querySelector('.user-patient-dashboard-main-container');

  // ===== Function to load a page (reusable) =====
  function loadPage(pageUrl) {
    fetch(pageUrl)
      .then(res => res.text())
      .then(html => {
        container.innerHTML = html;

        if (pageUrl.includes("dashboard")) document.title = "Patient Portal - Dashboard";
        else if (pageUrl.includes("appointments")) document.title = "Patient Portal - Appointments";
        else if (pageUrl.includes("record")) document.title = "Patient Portal- Patient Information Record";
        else if (pageUrl.includes("account")) document.title = "Patient Portal - My account";
        else document.title = "Patient Portal";
        // ✅ Always reset scroll to top
        window.scrollTo(0, 0);
        const contentArea = document.querySelector('.user-patient-content-area');
        if (contentArea) contentArea.scrollTop = 0;

        // ✅ Initialize the page logic after it's inserted
        initPageScript(pageUrl);
      })
      .catch(err => console.error('Error loading page:', err));
  }

  // ===== Attach click events to all sidebar links =====
  document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault();
      const pageUrl = link.getAttribute('data-page');
      loadPage(pageUrl);
    });
  });

  // ✅ Automatically load the dashboard by default when page loads
  loadPage('../../HTML/patient-ui/patient-dashboard.html');
});


// ===================== PAGE SCRIPT INITIALIZER =====================
function initPageScript(pageUrl) {
  if (pageUrl.includes('patient-my-account.html')) {
    if (typeof initMyAccountPage === 'function') {
      initMyAccountPage();
    } else {
      const script = document.createElement('script');
      script.src = '../../Javascript/patient-ui/patient-my-account.js';
      script.defer = true;
      script.onload = () => initMyAccountPage();
      document.body.appendChild(script);
    }
  }

  if (pageUrl.includes('patient-dashboard.html')) {
    if (typeof initPatientDashboard === 'function') {
      initPatientDashboard();

    }
  }

  if (pageUrl.includes('patient-appointments.html')) {
    if (typeof initPatientAppointments === 'function') {
      initPatientAppointments();
    }
  }


  if (pageUrl.includes('patient-treatment-history.html')) {
    if (typeof initPatientTreatmentHistory === 'function') {
      initPatientTreatmentHistory();
    } else {
      const script = document.createElement('script');
      script.src = '../../Javascript/patient-ui/patient-treatment-history.js';
      script.defer = true;
      script.onload = () => initPatientTreatmentHistory();
      document.body.appendChild(script);
    }
  }

}







// ===================== Example Init Functions =====================
function initPatientDashboard() {
  console.log('Dashboard initialized');
}

function initPatientAppointments() {
  console.log('Appointments initialized');
}
