 window.addEventListener('load', () => {
      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('/service-worker.js')
          .then(reg => console.log('✅ Service Worker registrado:', reg))
          .catch(err => console.error('❌ Error al registrar Service Worker:', err));
      }
    });