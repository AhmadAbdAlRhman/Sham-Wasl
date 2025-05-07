const express = require('express');
const http = require('http');
const cors = require('cors');
// ###########################################################
const {
    initSocket,
    notifyUser
} = require('./socketHandler');
require('./models/linking');
// ###########################################################
const app = express();
app.use(cors());
app.use(express.json());
const server = http.createServer(app);
initSocket(server);
// ###########################################################
app.post('/send-notifications', async (req, res) => {
    const {
        userId,
        title,
        message
    } = req.body;
    notifyUser(userId, {
        title,
        message,
        timestamp: new Date().getTime()
    }); // this will send notification to the user with userId
    return res.status(200).json({
        message: 'notification sent successfully'
    });
})
server.listen(3010, () => {
    console.log(`🚀 Server listening on http://localhost:3010`)
})