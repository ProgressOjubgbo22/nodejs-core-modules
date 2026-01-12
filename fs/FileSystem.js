const fs = require('fs');

// ================== Reading a file ==================
fs.readFile("text.txt", "utf8", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File content:", data); 
});

// ================== Writing to a file ==================
fs.writeFile("text.txt", "hello world", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File written successfully");
});

// ================== Appending to a file ==================
fs.appendFile("text.txt", "\nNew line added", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Line appended successfully");
});

// ================== Deleting a file ==================
fs.unlink("text.txt", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File deleted"); 
});

// ================== Creating a folder ==================
fs.mkdir("myFolder", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Folder created"); 
});

// ================== Deleting a folder ==================
fs.rmdir("myFolder", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("Folder deleted");
});

// ================== Checking if a file exists ==================
if (fs.existsSync("text.txt")) {
    console.log("File exists");
} else {
    console.log("File does not exist");
}

// ================== Renaming a file ==================
fs.rename("text.txt", "lol.txt", (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log("File renamed");
});
