// Mobile nav toggle — opens/closes the tab menu, closes on link tap.
(function () {
  var toggle = document.getElementById('navToggle');
  var tabs = document.getElementById('navTabs');
  if (!toggle || !tabs) return;

  function setOpen(open) {
    tabs.classList.toggle('open', open);
    toggle.setAttribute('aria-expanded', String(open));
  }

  toggle.addEventListener('click', function () {
    setOpen(!tabs.classList.contains('open'));
  });

  tabs.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });
})();
