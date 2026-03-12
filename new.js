const http = require('http');
const fs = require('fs');

const userRequestHandler = (req, res) => {

    if (req.url === '/') {

        res.setHeader('Content-Type', 'text/html');

        res.write('<html>');
        res.write('<head><title>Complete Coding</title></head>');
        res.write('<body><h1>Enter Your Details:</h1>');
        res.write('<form method="POST" action="/submit">');

        res.write('<input type="text" name="username" placeholder="Enter your name"><br><br>');

        res.write('<label for="male">Male</label>');
        res.write('<input type="radio" id="male" name="gender" value="male"/>');

        res.write('<label for="female">Female</label>');
        res.write('<input type="radio" id="female" name="gender" value="female"/>');

        res.write('<br><br><input type="submit" value="Submit">');

        res.write('</form>');
        res.write('</body>');
        res.write('</html>');

        return res.end();
    }

    if (req.url === '/submit' && req.method === 'POST') {

        //Receive the data from the form submission and log it to the console with chunk by chunk approach
        req.on('data', (chunk) => {
            console.log('Received data chunk:', chunk.toString());
        });
        req.on('end', () => {
            console.log('Finished receiving data');
        });
        //parsing request body and writing it to a json object and logging it to the console
        let body = '';
        req.on('data', (chunk) => {
            body += chunk.toString();
        });
        req.on('end', () => {
            const parsedData = new URLSearchParams(body);
            const formData = {};
            for (const [key, value] of parsedData.entries()) {
                formData[key] = value;
            }
            console.log('Parsed form data:', formData);
        
            fs.writeFile('userinput.txt', JSON.stringify(formData), (err) => {
                if (err) {
                    console.error('Error writing to file:', err);   
                }
            });
            res.statusCode = 200;
            res.setHeader('Location', '/');

            res.write('<html>');
            res.write('<head><title>Form Submitted</title></head>');
            res.write('<body><h1>Form Submitted Successfully</h1></body>');
            res.write('</html>');

            return res.end();
        });
    }

};

module.exports = userRequestHandler;