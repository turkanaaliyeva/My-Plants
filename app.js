function toggleNavItems() {
  var navItems = document.getElementById("navItems");
  navItems.classList.toggle("show");
}

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000; // You can choose any available port

app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html'); // Replace with your HTML file's path
});

app.post('/submit', (req, res) => {
  const formData = req.body; // Access the form data here

  console.log('Form Data Received:');
  console.log(formData);

  res.send('Form data received successfully.'); // Send a response back to the client
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
