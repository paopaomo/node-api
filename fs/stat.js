const fs = require('fs');
const path = require('path');

fs.stat(path.resolve(__dirname, './stat.js'), (err, stat) => {
    if(err) {
        console.log('文件不存在');
        return;
    }
    console.log(stat.isDirectory()); // false
    console.log(stat.isFile()); // true
    console.log(stat);
    // Stats {
    //     dev: 16777220,
    //         mode: 33188,
    //         nlink: 1,
    //         uid: 501,
    //         gid: 20,
    //         rdev: 0,
    //         blksize: 4096,
    //         ino: 7032774,
    //         size: 272,
    //         blocks: 8,
    //         atimeMs: 1579767711514.6726,
    //         mtimeMs: 1579767711034.926,
    //         ctimeMs: 1579767711035.552,
    //         birthtimeMs: 1579767711034.8025,
    //         atime: 2020-01-23T08:21:51.515Z,
    //         mtime: 2020-01-23T08:21:51.035Z,
    //         ctime: 2020-01-23T08:21:51.036Z,
    //         birthtime: 2020-01-23T08:21:51.035Z
    // }
});
