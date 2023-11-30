import express, { Express, Request, Response } from 'express';
import request from 'request';

const app: Express = express();
const port = 3000;

app.get('/', (req: Request, res: Response) => {
  request.get(
    { url: 'https://store.steampowered.com/api/appdetails?appids=632360', json: true },
    (error, response, body) => {
      if (error) {
        res.send(error);
      } else {
        res.send(body);
      }
    }
  );
});

app.get('/test', (req: Request, res: Response) => {
  res.send('Hello World!');
});

app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at https://localhost:${port}`);
});
