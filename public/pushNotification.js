self.addEventListener('push', event => {
    console.log('Notificación push recibida:', event);
    const data = event.data.json();
    self.registration.showNotification(data.title, {
        body: data.body,
        icon: '/logo-club.png'  // Ajusta el icono según sea necesario
    });
});
