// Simple lightbox: click any image inside .section-container or .hero-body to enlarge
document.addEventListener('DOMContentLoaded', function(){
  const overlay = document.getElementById('lightbox');
  const content = overlay.querySelector('.lightbox-content');
  const closeBtn = overlay.querySelector('.lightbox-close');

  function open(src, alt){
    content.innerHTML = '';
    const img = document.createElement('img');
    img.src = src; img.alt = alt || '';
    content.appendChild(img);
    overlay.classList.add('is-active');
    overlay.setAttribute('aria-hidden','false');
  }
  function close(){
    overlay.classList.remove('is-active');
    overlay.setAttribute('aria-hidden','true');
    content.innerHTML = '';
  }

  document.body.addEventListener('click', function(e){
    const target = e.target;
    if(target.tagName === 'IMG' && (target.closest('.section-container') || target.closest('.hero-body'))){
      // avoid lightbox for wrapped images in text where links might exist
      if(target.closest('a')) return;
      open(target.src, target.alt);
    }
  });
  overlay.addEventListener('click', function(e){ if(e.target === overlay) close(); });
  closeBtn.addEventListener('click', close);
  document.addEventListener('keydown', function(e){ if(e.key === 'Escape') close(); });
});

// Collapsible tabs functionality - each tab works independently
function toggleTab(tabId) {
  const tabItem = document.getElementById(tabId);
  
  // Simply toggle the active state of the clicked tab only
  tabItem.classList.toggle('active');
}

// Initialize tabs (all closed by default)
document.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.tab-item').forEach(item => {
    item.classList.remove('active');
  });
}); 