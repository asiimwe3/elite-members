function toggleSidebar() {
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('overlay');
  sidebar.classList.toggle('open');
  overlay.classList.toggle('show');
}

// Active nav highlight
document.querySelectorAll('.nav-item').forEach(item => {
  if (item.href === window.location.href) {
    item.classList.add('active');
  }
});
