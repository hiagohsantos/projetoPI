import path from 'path';
import { fileURLToPath } from 'url';
import express from 'express';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(express.static(path.join(__dirname, '/public')));

const PORT = process.env.PORT || 3000;

app.get('/', async (req, res) => {
  res.sendFile(path.join(__dirname, '/public', 'index.html'));
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
