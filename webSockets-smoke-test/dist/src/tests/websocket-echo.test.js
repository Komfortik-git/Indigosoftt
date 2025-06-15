"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ws_1 = require("ws");
const testMessage = 'Hello, WebSocket Echo Server!';
describe('WebSocket Smoke Testing', () => {
    let ws;
    beforeAll(async () => {
        ws = new ws_1.WebSocket('wss://echo.websocket.events');
        await new Promise(resolve => ws.once('open', resolve));
    });
    afterAll(() => {
        if (ws.readyState === ws_1.WebSocket.OPEN || ws.readyState === ws_1.WebSocket.CONNECTING) {
            ws.close();
        }
    });
    it('should establish connection and send/receive messages', done => {
        const receivedMessages = [];
        ws.on('message', (data) => {
            receivedMessages.push(data.toString());
        });
        ws.send(testMessage);
        setTimeout(() => {
            expect(receivedMessages).toContain(testMessage);
            done();
        }, 500); // задержка ожидания сообщения
    });
    it('should handle errors properly', done => {
        const receivedErrors = [];
        ws.on('message', (data) => {
            try {
                const parsedData = JSON.parse(data.toString());
                if ('error' in parsedData) {
                    receivedErrors.push(parsedData.error);
                }
            }
            catch (_) { }
        });
        // Имитируем ошибку (ручной способ отправки)
        ws.emit('message', '{"error": "Simulated Error"}');
        setTimeout(() => {
            expect(receivedErrors.length).toBeGreaterThanOrEqual(1);
            done();
        }, 500); // задержка ожидания обработчика
    });
});
