var input = document.querySelector('#menuToggle input');
var body = document.querySelector('body');

input.addEventListener('input', function (e) {
  var checked = e.currentTarget.checked;
  body.dataset.menuOpen = checked;
  if (checked) {
    window.scrollTo(0, 0);
  }
});
