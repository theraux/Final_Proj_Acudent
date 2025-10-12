fetch('../../HTML/patient-ui/dashboard-clicked.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('dashboard-container').innerHTML = html;
  })
  .catch(err => {
    console.warn('Sidebar failed to load:', err);
  });