import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

// __dirname is not defined in ES module scope, so we need to create it
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const app = express();

// Serve static files from the React app's build directory
app.use(express.static(path.join(__dirname, 'build')));

// The "catchall" handler: for any request that does not
// match the ones above, send back React's index.html file.
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
