// server.js
const express = require('express');
const multer = require('multer');
const path = require('path');

const app = express();
const port = 3000;

// Set up multer for file uploads
const storage = multer.diskStorage({
  destination: function(req, file, cb) {
    cb(null, './uploads/'); // Specify the folder where uploaded images will be saved
  },
  filename: function(req, file, cb) {       
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  }
});

const upload = multer({ storage: storage });

// Define route handler for POST requests on /upload_images endpoint
app.post('/upload_images', upload.array('images'), (req, res) => {
  // Handle file upload here
  // Send response indicating success or failure
  res.status(200).send('Images uploaded successfully');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
