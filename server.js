const express = require('express');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Static user data
const userData = {
  name: "Vishnu K",
  referral: "vishnu2025",
  donations: 2450
};

const leaderboardData = [
  { name: "Jolie Joie", referral: "jolie2025", donations: 5214 },
  { name: "Brian Ngo", referral: "brian2025", donations: 4890 },
  { name: "David Do", referral: "david2025", donations: 4567 },
  { name: "Henrietta O'Connell", referral: "henrietta2025", donations: 4234 },
  { name: "Darrel Bins", referral: "darrel2025", donations: 3987 },
  { name: "Vishnu K", referral: "vishnu2025", donations: 2450 },
  { name: "Anjali R", referral: "anjali2025", donations: 2200 },
  { name: "Karthik S", referral: "karthik2025", donations: 2100 },
  { name: "Priya M", referral: "priya2025", donations: 1950 },
  { name: "Rahul D", referral: "rahul2025", donations: 1800 }
];

// API Routes
app.get('/api/user', (req, res) => {
  res.json(userData);
});

app.get('/api/leaderboard', (req, res) => {
  res.json(leaderboardData);
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'OK', message: 'Intern Portal API is running' });
});

app.listen(PORT, () => {
  console.log(`🚀 Intern Portal API running at http://localhost:${PORT}`);
});
