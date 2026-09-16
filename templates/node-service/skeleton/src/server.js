import app from "./app.js";

const port = Number(process.env.PORT) || 3000;
const host = "0.0.0.0";

const server = app.listen(port, host, () => {
    console.log(`Service running on http://localhost:${port}`);
});

function shutdown(signal) {
    console.log(`${signal} received. Shutting down...`);

    server.close(() => {
        console.log("HTTP server closed.");
        process.exit(0);
    });

    server.closeAllConnections();
}

process.on("SIGTERM", () => shutdown("SIGTERM"));
process.on("SIGINT", () => shutdown("SIGINT"));