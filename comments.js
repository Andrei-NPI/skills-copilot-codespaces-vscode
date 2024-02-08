// create web server using express
const express = require('express');
const app = express();
// create router object
const router = express.Router();

// define route for get request
router.get('/', (req, res) => {
    res.send('Comments are available');
});

// define route for post request
router.post('/', (req, res) => {
    res.send('Comments are created');
});

// define route for put request
router.put('/', (req, res) => {
    res.send('Comments are updated');
});

// define route for delete request
router.delete('/', (req, res) => {
    res.send('Comments are deleted');
});

// export router object
module.exports = router;