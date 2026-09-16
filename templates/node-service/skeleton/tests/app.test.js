import test from "node:test";
import assert from "node:assert/strict";
import request from "supertest";
import app from "../src/app.js";

test("GET /health returns the service status", async () => {
    const response = await request(app).get("/health");

    assert.equal(response.status, 200);
    assert.deepEqual(response.body, {
        status: "ok",
        service: "node-service-template"
    });
});
test("GET / returns the service information", async () => {
    const response = await request(app).get("/");

    assert.equal(response.status, 200);
    assert.deepEqual(response.body, {
        service: "node-service-template",
        message: "Welcome to the reference microservice"
    });
});