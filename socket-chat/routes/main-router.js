const { Router } = require("express");
const router = Router();

router.get('/', (req, res) => {
    /*res.status(200).type('text/plain')
    res.send(JSON.stringify(file, null, '\t'))*/
    res.sendFile("C:/Users/user/Documents/GitHub/chat-js/socket-chat/");
});

router.get('/first-chat', (req, res) => {
    /*res.status(200).type('text/plain')
    res.send(JSON.stringify(file, null, '\t'))*/
    res.sendFile("C:/Users/user/Documents/GitHub/chat-js/socket-chat/");
});

module.exports = router