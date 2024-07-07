const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files (HTML, CSS, JS)
app.use(express.static(path.join(__dirname, 'public')));

// Route for handling login form submission
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    res.send("LOGIN SUCCESSFULL");
    
});

app.get("/",(req,res)=> { 
    res.sendFile(path.join(__dirname,'public','matrim.html'));
});
// Start server
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
