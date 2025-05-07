let io = null;33
const onlineUsers = new Map();
const { Server } = require('socket.io');

const initSocket = (server) => {
    const {
        Server
    } = require('socket.io');
    io = new Server(server, {
        cors: {
            origin: '*',
        }
    });
    io.on('connection', (socket) => {
        console.log('🟢 Connected:', socket.id);
        socket.on('register',(userId)=>{
            onlineUsers.set(userId,socket.id);
            console.log(`User ${userId} registered with socket ${socket.id}`);
        });
        socket.on('disconnect', () =>{
            console.log('🔴 Disconnected:', socket.id);
            for(const [userId, socketId] of onlineUsers.entries()){
                if(socketId === socket.id){
                    onlineUsers.delete(userId);
                    break;
                }
            }
        });
    });
}

const notifyUser = (userId, data) =>{
    const socketId = onlineUsers.get(userId);
    if(socketId && io){
        io.to(socketId).emit('notification', data);
    }
}


module.exports = {initSocket , notifyUser}