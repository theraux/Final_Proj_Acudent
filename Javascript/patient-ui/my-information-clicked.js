fetch('../../HTML/patient-ui/my-information-clicked.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('my-information-clicked').innerHTML = html;
  })
  .catch(err => {
    console.warn('Sidebar failed to load:', err);
  });