const express = require("express");
const cors = require("cors");
const questionRoute = require("./routes/mbti_route");

const mongoose = require("mongoose");
require("dotenv").config();
async function connectDB() {
  try {
    await mongoose.connect("mongodb+srv://admin:CTi!K7WcvQp-g9j@cluster0.jipa9ye.mongodb.net/?dbName=mbti_db");
    console.log("MongoDB Connected");
  } catch (err) {
    console.error("Connection Error:", err.message);
    process.exit(1);
  }
}

connectDB();



const app = express();
const PORT = 5000;
app.use(cors())
app.use(express.json());
// serve static files
app.use(express.static("public"));

app.use(questionRoute);

// 🔑 IMPORTANT: listen on 0.0.0.0 for LAN
app.listen(PORT, "0.0.0.0", () => {
    console.log(`IQ Test running on http://localhost:${PORT}`);
});
