import { initializeSocket } from "./src/socket/socket.js";
import { createServer } from "node:http";
import app from "./src/app.js";
import config from "./src/config/config.js";
import connectDB from "./src/config/db.js";

const PORT = config.PORT;

connectDB();

const server = createServer(app);

initializeSocket(server);

server.listen(PORT, ()=>{
    console.log("Server running on: ", PORT);
})
