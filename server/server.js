const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const nodemailer = require('nodemailer');
const fetch = require('node-fetch');
require('dotenv').config();

// Debug environment variables
console.log('🔍 Environment check:');
console.log('DB_USER:', process.env.DB_USER ? '✓ Set' : '✗ Missing');
console.log('DB_PASS:', process.env.DB_PASS ? '✓ Set' : '✗ Missing');
console.log('EMAIL_USER:', process.env.EMAIL_USER ? '✓ Set' : '✗ Missing');
console.log('EMAIL_PASS:', process.env.EMAIL_PASS ? '✓ Set' : '✗ Missing');
console.log('RECIPIENT_EMAIL:', process.env.RECIPIENT_EMAIL ? '✓ Set' : '✗ Missing');

const app = express();
app.use(cors({
  origin: ['http://localhost:3000', 'http://127.0.0.1:3000', 'https://soule9933.github.io'],
  credentials: true
}));
app.use(express.json());

// Database connection with better error handling
const db = mysql.createConnection({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME || 'portfolio'
});

db.connect(err => {
  if (err) {
    console.error('❌ Database connection failed:', err);
    process.exit(1);
  }
  console.log('✅ Connected to MySQL database');
});

// Email transporter with validation
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verify email configuration on startup
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Email configuration error:', error);
  } else {
    console.log('✅ Email server is ready');
  }
});

// Updated contact endpoint with silent validation
app.post('/api/contact', async (req, res) => {
  const { name, email, phone, message } = req.body;

  // Silent validation
  const isValid = () => {
    // Name validation (at least 2 characters, no numbers)
    if (!name || name.length < 2 || /\d/.test(name)) {
      return false;
    }

    // Email validation (must be Gmail)
    const emailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
    if (!emailRegex.test(email)) {
      return false;
    }

    // Phone validation (if provided, must be 10 digits)
    if (phone && phone.length !== 10) {
      return false;
    }

    // Message validation (at least 10 characters)
    if (!message || message.length < 10) {
      return false;
    }

    return true;
  };

  if (!isValid()) {
    return res.status(400).json({ 
      error: 'Invalid input'
    });
  }

  // Send email notification
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.RECIPIENT_EMAIL,
    subject: `New Portfolio Contact Message from ${name}`,
    html: `
      <h2>New Contact Form Submission</h2>
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
      <p><strong>Message:</strong></p>
      <p>${message}</p>
      <hr>
      <p><em>Sent from your portfolio contact form</em></p>
    `
  };

  transporter.sendMail(mailOptions)
    .then(() => {
      res.status(200).json({ 
        message: 'Message sent successfully'
      });
    })
    .catch((emailError) => {
      res.status(500).json({ 
        error: 'Failed to send message'
      });
    });
});

// Health check endpoint
app.get('/api/health', (req, res) => {
  console.log('🏥 Health check requested');
  res.json({ 
    status: 'OK', 
    database: 'Connected',
    timestamp: new Date().toISOString()
  });
});

// Test endpoint
app.get('/api/test', (req, res) => {
  console.log('🧪 Test endpoint hit');
  res.json({ message: 'Server is working!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
  console.log(`🏥 Health check: http://localhost:${PORT}/api/health`);
  console.log(`🧪 Test endpoint: http://localhost:${PORT}/api/test`);
});