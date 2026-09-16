import express from "express";

const app = express();

app.disable("x-powered-by");
app.use(express.json());

app.get("/", (request, response) => {
    response.status(200).json({
        service: "node-service-template",
        message: "Welcome to the reference microservice"
    });
});

app.get("/health", (request, response) => {
    response.status(200).json({
        status: "ok",
        service: "node-service-template"
    });
});

export default app;