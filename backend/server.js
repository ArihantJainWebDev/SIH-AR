const express = require("express");
const cors = require("cors"); // <--- add this
const app = express();
const PORT = 5000;

// Middleware
app.use(cors()); // <--- add this
app.use(express.json());

// Test route
app.get("/", (req, res) => {
  res.send("Backend is working 🚀");
});

// Monuments API
const monuments = [
  { id: 1, name: "Khajuraho Temples", location: "Khajuraho", year: 950 },
  { id: 2, name: "Sanchi Stupa", location: "Sanchi", year: 3 },
  { id: 3, name: "Gwalior Fort", location: "Gwalior", year: 8 },
  { id: 4, name: "Orchha Fort", location: "Orchha", year: 16 },
  { id: 5, name: "Ujjain Mahakaleshwar", location: "Ujjain", year: 6 },
  { id: 6, name: "Indore Rajwada", location: "Indore", year: 1747 },
  { id: 7, name: "Chanderi Fort", location: "Chanderi", year: 11 },
  { id: 8, name: "Maheshwar Fort", location: "Maheshwar", year: 18 },
  { id: 9, name: "Bandhavgarh Fort", location: "Bandhavgarh", year: 10 },
  { id: 10, name: "Pachmarhi Caves", location: "Pachmarhi", year: 10 },
  { id: 11, name: "Bhimbetka Rock Shelters", location: "Raisen", year: 30000 },
  { id: 12, name: "Chitrakoot Falls", location: "Chitrakoot", year: 1780 },
  { id: 13, name: "Omkareshwar Temple", location: "Khandwa", year: 11 },
  { id: 14, name: "Bateshwar Temples", location: "Gwalior", year: 8 },
  { id: 15, name: "Rajgarh Fort", location: "Rajgarh", year: 12 },
];


app.get("/api/monuments", (req, res) => {
  res.json(monuments);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
