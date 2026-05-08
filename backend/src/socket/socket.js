import { Server } from "socket.io";

const ROOM = "group";

export const initializeSocket = (server) => {
    const io = new Server(server, {
        cors: {
            origin: "*",
        },
    });

    io.on("connection", (socket) => {
        console.log("User connected:", socket.id);

        socket.on("joinRoom", async (userName) => {
            console.log(`${userName} joined`);

            await socket.join(ROOM);

            socket.to(ROOM).emit("roomNotice", userName);
        });

        socket.on("chatMessage", (msg) => {
            socket.to(ROOM).emit("chatMessage", msg);
        });

        socket.on("typing", (userName) => {
            socket.to(ROOM).emit("typing", userName);
        });

        socket.on("stopTyping", (userName) => {
            socket.to(ROOM).emit("stopTyping", userName);
        });

        socket.on("disconnect", () => {
            console.log("User disconnected:", socket.id);
        });
    });
};