const express = require('express');
const cors=require('cors');
const app = express();
const path = require('path');
const tasks = require('./routes/tasks');
const peoples=require('./routes/peoples')
const connectDB = require('./db/connect');
require('dotenv').config();
const notFound = require('./middleware/not-found')
const errorHandlerMiddleware=require("./middleware/error-handler")
// const errorHandlerMiddleware = require('./middleware/error-handler');

// middleware
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());

// routes
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'front-end', 'index.html'));
})
app.use('/api/v1/tasks', tasks);
app.use('/api/v1/peoples',peoples);
app.use(notFound);

app.use(errorHandlerMiddleware);
const port = process.env.PORT || 5000;

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();
