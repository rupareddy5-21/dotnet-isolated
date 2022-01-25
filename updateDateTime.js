const fs = require('fs');

var pattern = /const date/i;
const path = 'api/GetMessage/index.js';
var content = fs.readFileSync(path, 'utf8');
var newContent = content.split('\n').map(line => pattern.test(line) ? `  const date = "${new Date().toISOString()}";` : line);
fs.writeFileSync(path, newContent.join('\n'));
