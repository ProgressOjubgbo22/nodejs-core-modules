const url = require("url");

// ================== Create URL object ==================
const myUrl = new URL("https://example.com:8080/path?name=prog&id=1");

// Full URL
console.log("Full URL:", myUrl.href);

// Protocol
console.log("Protocol:", myUrl.protocol); // https:

// Host (hostname + port)
console.log("Host:", myUrl.host); // example.com:8080

// Hostname
console.log("Hostname:", myUrl.hostname); // example.com

// Port
console.log("Port:", myUrl.port); // 8080

// Pathname
console.log("Pathname:", myUrl.pathname); // /path

// Query string
console.log("Search:", myUrl.search); // ?name=prog&id=1

// Get query parameter
console.log("Name param:", myUrl.searchParams.get("name"));

// Add a query parameter
myUrl.searchParams.append("age", "20");
console.log("Updated search params:", myUrl.searchParams.toString());
