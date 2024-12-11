import express from 'express';
import { requestCounter } from './telemetry';

const app = express();
const port = process.env.PORT || 8080;

// A sample route
app.get('/', (req, res) => {
  requestCounter.add(1); // increment the counter
  res.send('Hello, this is our instrumented Node.js app!');
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
