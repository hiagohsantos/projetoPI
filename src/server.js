const express = require("express");

// Initialize express
const app = express();

app.use(express.static(__dirname));

const PORT = process.env.PORT || 3000;

app.get("/", async (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.listen(PORT, () => console.log(`App listening at port ${PORT}`));
