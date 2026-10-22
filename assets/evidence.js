document.querySelectorAll('.process-node').forEach(button => {
  button.addEventListener('click', () => {
    const open=button.getAttribute('aria-expanded')!=='true';
    button.setAttribute('aria-expanded',String(open));
    button.querySelector('em').hidden=!open;
  });
});
