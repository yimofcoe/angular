const express = require('express');
const { connectDB } = require('./model/db');
const routes = require('./routes/routes');

const app = express();
const PORT = 8000;

connectDB();
app.use(express.json());
app.use('/api', routes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});