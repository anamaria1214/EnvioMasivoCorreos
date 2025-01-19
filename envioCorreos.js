/*const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anicu2314@gmail.com',
      pass: 'mrzz crlq pbgx qbvl ', 
    },
  });


let destinatario= "";
let asunto= "";
//Ejemplo mientras accedo a esto por medio de un html
let cuerpo='¡Hola! <3.';
let cuerpoHtml='<b>¡Hola!</b> <i><3</i>';

const mailOptions = {
    from: 'anicu2314@gmail.com', 
    to: destinatario, 
    subject: asunto,
    text: cuerpo, 
    html: cuerpoHtml
};

const mandarCorreos= (remitente) =>{
    return new Promise((resolve, reject) =>{
        resolve (transporter.sendMail(mailOptions, (error, info) => {
            if(error){
                console.log(error);
            }else{
                console.log('Correo enviado: ', info.response);
            }
        }));
    });
    
}*/
const nodemailer = require('nodemailer');

let asunto= "Asunto ejemplo";
//Ejemplo mientras accedo a esto por medio de un html
let cuerpo='¡Hola! <3.';
let cuerpoHtml='<b>¡Hola!</b> <i><3</i>';

function enviarCorreo(destinatario) {
    return new Promise(async (resolve, reject) => {
    try {
      const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'anicu2314@gmail.com',
            pass: 'mrzz crlq pbgx qbvl ', 
        },
      });
  
      const mailOptions = {
        from: 'anicu2314@gmail.com', 
        to: destinatario, 
        subject: asunto,
        text: cuerpo, 
        html: cuerpoHtml
      };
  
      const info = await transporter.sendMail(mailOptions);
  
      resolve (console.log(`Correo enviado`));
    } catch (error) {
      reject (console.error('Error al enviar el correo:', error));
    }
  });
}

let arregloCorreos=[correo1, correo2]
let arregloPromesas=[];

for(let i=0;i<arregloCorreos.length;i++){
    arregloPromesas.push(enviarCorreo(arregloCorreos[i]));
}

Promise.all(arregloPromesas).then((resultado)=>{
    console.log(resultado);
}).catch((error) =>{
    console.log(error);
});
