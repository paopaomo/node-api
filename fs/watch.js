const fs = require('fs');
const path = require('path');

fs.watch(
    path.resolve(__dirname, './'),
    { recursive: true },
    (eventType, filename) => {
        console.log(eventType, filename);
    }
);


