// Server-side code (e.g., Node.js with Express)
const express = require('express');
const astro = require('astro');
const { createReadStream } = require('fs');

const app = express();

// Define a route handler for /test
app.get('/test', async (req, res) => {
  // Render the Astro route
  const astroContent = await astro.renderToString('/test');

  // Send the rendered HTML content to the client
  res.send(astroContent);
});

// Serve the React application and other routes
app.use(express.static('public'));

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
