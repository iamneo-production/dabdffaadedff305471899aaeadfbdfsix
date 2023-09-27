
const express = require('express');
const app = express();

// Middleware to parse JSON requests
app.use(express.json());

// Sample data (in-memory storage)
const items = [
  { id: 1, name: 'Item 1' },
 { id: 2, name: 'Item 2' },
];

// Route to get a list of items
app.get('/items', (req, res) => {
  res.json(items);
});

// Route to add a new item
app.post('/post/items', (req, res) => {
  const newItem = req.body;
  items.push(newItem);
  res.status(201).json(newItem);
});

module.exports = app;


// Start the server
const port = 8080;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

