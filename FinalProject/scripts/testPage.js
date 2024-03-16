document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
      document.querySelector('.loading-overlay').style.display = 'none';
      document.querySelector('.content').style.display = 'block';
    }, 3000);
  });
  