import { renderToPipeableStream } from 'react-dom/server';
import { StaticRouter } from 'react-router';
import { Writable } from 'node:stream';
import App from './App';

export function render(url) {
  return new Promise((resolve, reject) => {
    let html = '';
    let settled = false;

    const writable = new Writable({
      write(chunk, _encoding, callback) {
        html += chunk.toString();
        callback();
      },
    });

    const done = (error) => {
      if (settled) return;
      settled = true;
      if (error) reject(error);
      else resolve(html);
    };

    const { pipe } = renderToPipeableStream(
      <StaticRouter location={url}>
        <App />
      </StaticRouter>,
      {
        onAllReady() {
          pipe(writable);
          writable.on('finish', () => done());
          writable.on('error', done);
        },
        onError(error) {
          done(error);
        },
      }
    );
  });
}
