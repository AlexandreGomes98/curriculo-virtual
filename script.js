// anima cards: aplica delay sequencial
document.querySelectorAll('.card-anim').forEach((c, i) => {
  c.style.animationDelay = `${i * 0.12}s`;
});

// form submit: abre email no cliente (mailto)
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const email = encodeURIComponent(document.getElementById('email').value.trim());
  const message = encodeURIComponent(document.getElementById('message').value.trim());
  if (!email || !message) return alert('Preencha e-mail e mensagem antes de enviar.');
  const subject = encodeURIComponent('Contato do Site');
  // abre o cliente de email do usuário (se quiser backend depois eu configuro)
  window.location.href = `mailto:alexandregomes08@gmail.com?subject=${subject}&body=Email:%20${email}%0A%0AMensagem:%0A${message}`;

function toggleMenu() {
  document.getElementById("navMenu").classList.toggle("open");
}
{
  const nav = document.getElementById("navMenu");
  nav.classList.toggle("open");
}
});
