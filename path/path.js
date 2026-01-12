const path = require("path");

// ================== Joining paths ==================
const joinedPath = path.join("users", "images", "pic.png");
console.log("Joined path:", joinedPath);

// ================== Resolving paths ==================
const resolvedPath = path.resolve("users", "file.txt");
console.log("Resolved absolute path:", resolvedPath);

// ================== Getting filename ==================
const baseName = path.basename("/app/index.js");
console.log("File name:", baseName);

// ================== Getting directory name ==================
const dirName = path.dirname("/app/index.js");
console.log("Directory name:", dirName);

// ================== Getting file extension ==================
const extName = path.extname("index.js");
console.log("File extension:", extName);

// ================== Parsing path ==================
const parsedPath = path.parse("/app/index.js");
console.log("Parsed path object:", parsedPath);

// ================== Formatting path object to string ==================
const formattedPath = path.format({
    dir: "/app",
    base: "index.js"
});
console.log("Formatted path:", formattedPath);

// ================== Normalizing paths ==================
const normalizedPath = path.normalize("app//folder///file.js");
console.log("Normalized path:", normalizedPath);

// ================== Current folder and file ==================
console.log("__dirname:", __dirname);
console.log("__filename:", __filename);
