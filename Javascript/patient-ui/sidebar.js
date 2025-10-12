// 1. Load the sidebar into #container
fetch('../../HTML/patient-ui/sidebar.html')
  .then(response => response.text())
  .then(html => {
    document.getElementById('container').innerHTML = html;

    // After sidebar loads, set up listeners
    setupSidebarLinks();
  })
  .catch(err => {
    console.warn('Sidebar failed to load:', err);
  });

// 2. Function to load content into #content
function loadPage(event, page, btn = null) {
  event.preventDefault();

  fetch(page)
    .then(response => response.text())
    .then(data => {
      document.getElementById("content").innerHTML = data;

      // Highlight active button
      if (btn) {
        document.querySelectorAll(".nav-item button").forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
      }
    })
    .catch(error => {
      document.getElementById("content").innerHTML = "Error loading page.";
      console.error(error);
    });
}

// 3. Attach event listeners dynamically
function setupSidebarLinks() {
  document.querySelectorAll(".nav-item button").forEach(btn => {
    btn.addEventListener("click", (e) => {
      const page = btn.getAttribute("data-page");
      if (page) loadPage(e, page, btn);
    });
  });

  // Load dashboard by default (first button)
  const firstBtn = document.querySelector(".nav-item button");
  if (firstBtn) {
    loadPage(new Event("load"), firstBtn.getAttribute("data-page"), firstBtn);
  }
}
