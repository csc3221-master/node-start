const http = require('http');
const hostname = 'localhost';
const port = 3000;

var friends = require("./friends.json"); // Once for all times

const server = http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-type', 'text/html');
	var currentDate = new Date();
    response.write(
        `<!DOCTYPE html>
        <html lang="en">
                <head>
                       <meta charset="utf-8">
                       <meta http-equiv="X-UA-Compatible" content="IE=edge">
                       <meta name="viewport" content="width=device-width, initial-scale=1">
                       <meta name="description" content="Home Page">
                       <meta name="author" content="Carlos Arias">
                       <title>Netcentric Computing Home Page</title>
                       <!-- Bootstrap core CSS -->
						<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
               </head>
                <body>
                       <div class="container" style="text-align: center">
                       <h1>Another Example of Node</h1><br>
                       <p>Current time is: ${currentDate}</p>
                       <table class="table table-bordered table-hover">
                               <thead>
                                       <tr>
                                               <th scope="col">First Name</th>
                                               <th scope="col">Last Name</th>
                                               <th scope="col">Phone</th>
                                       </tr>
                               </thead>
                               <tbody>
`
    );
	for (var key in friends)
	        for (var f in friends[key])
	            response.write(
	                `                               <tr>
	                                                       <td>${friends[key][f]["firstName"]}</td>
	                                                       <td>${friends[key][f]["lastName"]}
	                                                       <td>${friends[key][f]["phone"]}
	                                               </tr>
`
	            );

	    response.write(
	        `                       </tbody>
	                       </table>
	               </body>
	        </html>`
	    );
	    response.end();
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});
