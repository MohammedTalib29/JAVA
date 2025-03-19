// server.js
const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// Define the path where the appointments will be stored
const appointmentsFile = path.join(__dirname, 'appointments.json');

// API endpoint to handle appointment booking (POST)
app.post('/api/appointments', (req, res) => {
  const { name, date, doctor } = req.body;

  // Basic validation for form inputs
  if (!name || !date || !doctor) {
    return res.status(400).json({ message: 'Please provide all required fields.' });
  }

  // Create an appointment object
  const appointment = { name, date, doctor };

  // Read existing appointments
  fs.readFile(appointmentsFile, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).json({ message: 'Error reading appointments file.' });
    }

    const appointments = data ? JSON.parse(data) : [];

    // Add the new appointment to the list
    appointments.push(appointment);

    // Save updated appointments to the file
    fs.writeFile(appointmentsFile, JSON.stringify(appointments, null, 2), (err) => {
      if (err) {
        return res.status(500).json({ message: 'Error saving appointment.' });
      }

      // Respond with the success message and appointment details
      res.status(201).json({
        message: 'Appointment booked successfully!',
        appointment,
      });
    });
  });
});

// API endpoint to fetch all appointments (GET)
app.get('/api/appointments', (req, res) => {
  fs.readFile(appointmentsFile, 'utf8', (err, data) => {
    if (err && err.code !== 'ENOENT') {
      return res.status(500).json({ message: 'Error reading appointments file.' });
    }

    const appointments = data ? JSON.parse(data) : [];
    res.json(appointments);
  });
});

// Start the Express server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
