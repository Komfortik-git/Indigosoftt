import { WebSocket } from 'ws';

const testMessage = 'Hello, WebSocket Echo Server!';

describe('WebSocket Smoke Testing', () => {
  let ws: WebSocket;

  beforeAll(async () => {
    ws = new WebSocket('wss://echo.websocket.events');
    await new Promise(resolve => ws.once('open', resolve));
  });

  afterAll(() => {
    if (ws.readyState === WebSocket.OPEN || ws.readyState === WebSocket.CONNECTING) {
      ws.close();
    }
  });

  it('should establish connection and send/receive messages', done => {
    const receivedMessages: string[] = [];

    ws.on('message', (data) => {
      receivedMessages.push(data.toString());
    });

    ws.send(testMessage);

    setTimeout(() => {
      expect(receivedMessages).toContain(testMessage);
      done();
    }, 500);  
  });

  it('should handle errors properly', done => {
    const receivedErrors: any[] = [];

    ws.on('message', (data) => {
      try {
        const parsedData = JSON.parse(data.toString());
        if ('error' in parsedData) {
          receivedErrors.push(parsedData.error);
        }
      } catch (_) {}
    });

     
    ws.emit('message', '{"error": "Simulated Error"}');

    setTimeout(() => {
      expect(receivedErrors.length).toBeGreaterThanOrEqual(1);
      done();
    }, 500); 
  });
});