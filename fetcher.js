// fetcher.js
// Sources: GPT, MDN, nodejs

// Import node-fetch to make requests to HTTP
const fetch = require('node-fetch');

// Import file system module for writen to local file system
const fs = require('fs');
// Grab the URL and path from the command line (starts at 2 because the
// first two parts of command line are the node and path)
const [url, filePath] = process.argv.slice(2);

// Fetch function from node library to download
fetch(url)
  // Parse response into text
  .then(response => response.text())
  // Write to the local path
  .then(data => {
    fs.writeFile(filePath, data, (err) => {
      if (err) {
        // Log error if encountered during file write
        console.error('Error writing to file:', err);
        return;
      }
      // If successful log a success message to the console with the download size and file path
      console.log(`Downloaded and saved ${data.length} bytes to ${filePath}`);
    });
  })

  // If an error occurs during fetch operation, log it to the console
  .catch(error => console.error(`Error:`, error));