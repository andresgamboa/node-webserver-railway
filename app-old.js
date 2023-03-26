
const http = require('http');


http.createServer( (request,response) => {

    // console.log(request);


    // response.writeHead(200);

    response.write('Hola Mundo');
    response.end();

})
.listen(8080);


console.log('Escuchando en el puerto: ', 8080);

