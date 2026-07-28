document.addEventListener('DOMContentLoaded', function () {
  const menuButton = document.querySelector('.menu-toggle');
  const mobileMenu = document.querySelector('#mobile-menu');

  if (menuButton && mobileMenu) {
    menuButton.addEventListener('click', function () {
      const isOpen = mobileMenu.classList.toggle('is-open');
      menuButton.setAttribute('aria-expanded', String(isOpen));
      menuButton.setAttribute('aria-label', isOpen ? '모바일 메뉴 닫기' : '모바일 메뉴 열기');
    });

    mobileMenu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('is-open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', '모바일 메뉴 열기');
      });
    });
  }

  document.querySelectorAll('[data-accordion] details').forEach(function (item) {
    item.addEventListener('toggle', function () {
      if (!item.open) return;
      document.querySelectorAll('[data-accordion] details').forEach(function (other) {
        if (other !== item) other.open = false;
      });
    });
  });

  const filterButtons = document.querySelectorAll('[data-filter]');
  const portfolioItems = document.querySelectorAll('.portfolio-item');

  filterButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      const filter = button.dataset.filter;
      filterButtons.forEach(function (item) { item.classList.remove('active'); });
      button.classList.add('active');
      portfolioItems.forEach(function (item) {
        const visible = filter === 'all' || item.dataset.category === filter;
        item.classList.toggle('is-hidden', !visible);
      });
    });
  });
});
