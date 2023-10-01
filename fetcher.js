// fetcher.js
// Sources: GPT, MDN, nodejs

// 1- Import node-fetch to make requests to HTTP
const fetch = require('node-fetch');

// 2- Import file system module for writen to local file system
const fs = require('fs');
// 3- Grab the URL and path from the command line (starts at 2 because the
// first two parts of command line are the node and path)
const [url, filePath] = process.argv.slice(2);

// 4- Fetch function from node library to download
fetch(url)
  // 4.1- Parse response into text
  .then(response => response.text())
  // 4.2- Write to the local path
  .then(data => {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        // 3.2.1- Log error if encountered during file write
        console.error('Error writing to file:', err);
        return;
      }
      // 3.2.2 If successful log a success message to the console with the download size and file path
      console.log(`Downloaded and saved ${data.length} bytes to ${filePath}`);
    });
  })

  // 5- If an error occurs during fetch operation, log it to the console
  .catch(error => console.error(`Error:`, error));