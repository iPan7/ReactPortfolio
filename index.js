require("dotenv").config();
const express = require('express');
const app = express();
const path = require('path');

if (process.env.NODE_ENV === 'production') {
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
      });
  }

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "public","index.html"));
  });

const PORT = process.env.PORT || 3891;
app.listen(PORT);

