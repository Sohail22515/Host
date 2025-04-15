const express = require('express');
const cors = require('cors');
const connectDB = require('./config/db');
const itemRoutes = require('./routes/itemRoutes');
const app = express();

require('dotenv').config();
connectDB();

app.use(cors());
app.use(express.json());
app.use('/items', itemRoutes); // Route for CRUD operations

const PORT = process.env.PORT || 5001;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
