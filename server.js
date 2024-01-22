import { createServer } from 'http';
import { Server } from 'socket.io';
import { parse } from 'url';
import next from 'next';

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

const httpServer = createServer(async (req, res) => {
    const parsedUrl = parse(req.url, true);
    await handle(req, res, parsedUrl);
});

httpServer.listen(3000, (err) => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
});

const io = new Server(httpServer, {
    cors: {
        origin: "http://localhost:3001", // Разрешенный домен (порт) для WebSocket
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {

    socket.on('dataUpdated', (data) => {
        console.log(socket.id, 'текущей сокет')
        socket.broadcast.emit('dataUpdated', data);

    });

    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
