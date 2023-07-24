import app, { init } from "./app";
import { initDb } from "./config/database";

const port = +process.env.PORT || 4000;

export let db: any;

async function connectDb() {
  db = await initDb();
}
connectDb();
init().then(() => {
  app.listen(port, () => {
    /* eslint-disable-next-line no-console */
    console.log(`Server is listening on port ${port}.`);
  });
});
