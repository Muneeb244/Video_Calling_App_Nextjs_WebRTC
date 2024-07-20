import { Server } from "socket.io";

const SocketHandler = (req, res) => {
    console.log("called api")
  if ((res.socket.server.io)) {
    console.log("Socket already Initialized");
  } else {
    const io = new Server(res.socket.server);
    res.socket.server.io = io;

    io.on("connection", (socket) => {
      console.log("Server connected",);
    });
  }
  res.end();
};

export default SocketHandler;
