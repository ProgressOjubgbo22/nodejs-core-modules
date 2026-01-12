const os = require("os");

// ================== OS platform ==================
console.log("Platform:", os.platform());

// ================== OS architecture ==================
console.log("Architecture:", os.arch());

// ================== CPU information ==================
console.log("CPU info:", os.cpus());

// ================== Total memory ==================
console.log("Total memory:", os.totalmem());

// ================== Free memory ==================
console.log("Free memory:", os.freemem());

// ================== Home directory ==================
console.log("Home directory:", os.homedir());

// ================== System uptime ==================
console.log("System uptime (seconds):", os.uptime());

// ================== Current user info ==================
console.log("User info:", os.userInfo());

// ================== Temporary directory ==================
console.log("Temporary directory:", os.tmpdir());
