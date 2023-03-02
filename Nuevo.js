// Se carga el módulo de HTTP
const http = require("http");
const url = require ("url");
const dat = new Date();

// Creación del servidor HTTP, y se define la escucha
// de peticiones en el puerto 8000
http.createServer(function(req, res) {

   // Se define la cabecera HTTP, con el estado HTTP (OK: 200) y el tipo de contenido
   res.writeHead(200, {'Content-Type': 'text,html,charset=nft-8'});
  //Llamar constantes

  const x = url.parse(req.url, true).query;

   // Se responde, en el cuerpo de la respuesta con el mensaje "Hello World"
   res.end(txt);
}).listen(8000);