const http = require("http");

// Create HTTP server
const server = http.createServer((req, res) => {
    // Default headers
    res.writeHead(200, { "Content-Type": "text/plain" });

    // Handle URL
    if (req.url === "/") {
        res.end("Home page");
        return;
    } else if (req.url === "/about") {
        res.end("About page");
        return;
    } else {
        res.writeHead(404);
        res.end("Not found");
        return;
    }

    // Handle method (example)
    /*
    if (req.method === "GET") {
        res.end("GET request");
    } else if (req.method === "POST") {
        res.end("POST request");
    } else {
        res.end("Other request");
    }
    */

    // Access headers (example)
    /*
    const userAgent = req.headers["user-agent"];
    res.end("Browser is: " + userAgent);
    */

    // Note: Only one res.end() should run per request
});

// Listen on port 8000
server.listen(8000, () => {
    console.log("Server running on http://localhost:8000");
});
