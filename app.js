const copyBtn = document.getElementById('copyBtn');

if (copyBtn) {
  copyBtn.addEventListener('click', async () => {
    const text = 'Hola, deseo información sobre sus servicios de belleza y quisiera agendar una cita.';

    try {
      await navigator.clipboard.writeText(text);

      copyBtn.textContent = 'Mensaje copiado';

      setTimeout(() => {
        copyBtn.textContent = 'Copiar mensaje';
      }, 1800);

    } catch (error) {
      copyBtn.textContent = 'No se pudo copiar';

      setTimeout(() => {
        copyBtn.textContent = 'Copiar mensaje';
      }, 1800);
    }
  });
}