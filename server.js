const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const fs = require('fs');
const { createObjectCsvWriter } = require('csv-writer');

const app = express();
const PORT = 3000; // Ensure this port matches the one used in your React fetch request

// Middleware
app.use(cors());
app.use(bodyParser.json());

// CSV Writer setup
const csvWriter = createObjectCsvWriter({
  path: 'users.csv',
  header: [
    { id: 'email', title: 'EMAIL' },
    { id: 'password', title: 'PASSWORD' }
  ],
  append: true
});

// Ensure the CSV file exists and has the correct headers
if (!fs.existsSync('users.csv')) {
  csvWriter.writeRecords([]).then(() => console.log('CSV file initialized'));
}

// Endpoint to handle form submissions
app.post('/signup', (req, res) => {
  const { email, password } = req.body;

  csvWriter.writeRecords([{ email, password }])
    .then(() => {
      console.log('User data appended to CSV file');
      res.status(200).json({ message: 'Signup successful' });
    })
    .catch((error) => {
      console.error('Error writing to CSV file', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
