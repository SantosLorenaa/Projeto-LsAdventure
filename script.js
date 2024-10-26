


document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
    // Simular envio de código 2FA
    const email = event.target[0].value;
    const senha = event.target[1].value;

    if (email && senha) {
      document.getElementById('2fa-container').classList.remove('hidden');
      alert('Código de autenticação enviado para o e-mail: ' + email);
    }
  });
  

