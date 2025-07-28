require('dotenv').config();
const sgMail = require('@sendgrid/mail');

// Usa tu API Key de SendGrid
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {
  to: 'destinatario@ejemplo.com', // Cambia por el destinatario
  from: 'tucorreo@tudominio.com', // Debe estar verificado en SendGrid
  subject: 'Prueba de correo con SendGrid y Node.js',
  text: 'Este es un mensaje de prueba enviado desde Node.js usando SendGrid.',
  html: '<strong>Este es un mensaje de prueba enviado desde Node.js usando SendGrid.</strong>',
};

sgMail
  .send(msg)
  .then(() => {
    console.log('Correo enviado exitosamente.');
  })
  .catch((error) => {
    console.error('Error al enviar correo:', error);
  });