const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const users = [
  { id: 1, name: "Raghu" },
  { id: 2, name: "Rahul" },
  { id: 3, name: "Kashyap" }
];

app.get('/api/users', (req, res) => {
  res.json(users);
});

app.listen(5000, () => {
  console.log('Server running on port 5000');
});