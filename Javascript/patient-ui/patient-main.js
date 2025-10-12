document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('a[data-page]').forEach(link => {
    link.addEventListener('click', e => {
      e.preventDefault(); // prevent normal navigation

      const pageUrl = link.getAttribute('data-page');

      fetch(pageUrl)
        .then(res => res.text())
        .then(html => {
          document.querySelector('.user-patient-dashboard-main-container').innerHTML = html;

          // ✅ Scroll to top after content loads
          window.scrollTo({ top: 0, behavior: 'smooth' });
        })
        .catch(err => console.error('Error loading page:', err));
    });
  });
});
