const http = require("http");
const { Server } = require("socket.io");


const httpServer = http.createServer();
const io = new Server(httpServer, {
  cors: {
    origin: ["http://localhost:3090", "https://2gsw7frf-3090.asse.devtunnels.ms"], // Replace with your frontend URL
    methods: ["GET", "POST"],
    allowedHeaders: ["my-custom-header"],
    credentials: true,
  },
});

io.on('connection', (socket) => {  

  socket.on("join_room", (roomId) => {
    socket.join(roomId);
    console.log(`user with ID - ${socket.id} joined room - ${roomId}`);
  });

  socket.on("send_msg", (data) => {
    console.log(data, "DATA");       
    socket.to(data.roomId).emit("receive_msg", data);
  });

  socket.on("upload", (imgData) => {
    console.log(imgData, "IMG DATA");   
    socket.to(imgData.roomId).emit("receive_Img", imgData);
   
  });

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });


});


httpServer.listen(3010, () => {
  console.log(`Socket.io server is running on port 3010`);
});