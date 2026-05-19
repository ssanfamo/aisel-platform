import { Server } from "socket.io";

let io;

export function initializeSocket(server) {

    io = new Server(server, {
        cors: {
            origin: "*"
        }
    });

    io.on("connection", (socket) => {

        console.log(
            "Client connected:",
            socket.id
        );

        socket.on(
            "disconnect",
            () => {

                console.log(
                    "Client disconnected:",
                    socket.id
                );
            }
        );
    });

    return io;
}

export function getIO() {

    if (!io) {

        throw new Error(
            "Socket.IO not initialized"
        );
    }

    return io;
}