const http = require("http");
const fs = require("fs");

http.createServer(function (request, response) {

    console.log(`Запрошенный адрес: ${request.url}`);
    // получаем путь после слеша
    if (request.url === "/") {
        fs.readFile("index.html", function (error, data) {
            response.end(data)
        })
    }
    const filePath = `pages/${request.url.substring(1)}`;
    fs.readFile(filePath, function (error, data) {

        if (error) {

            response.statusCode = 404;
            response.end("Resourse not found!");

        }
        else {
            response.end(data);
        }
    });
}).listen(3000, function () {
    console.log("Server started at 3000");
});