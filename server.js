const app = require('./index');
const mongoose = require('mongoose');

const port = process.env.PORT;

const db = process.env.DATABASE_URL.replace('<password>', process.env.PASSWORD);

mongoose
  .connect(db)
  .then(() => console.log('DB successfully connected'))
  .catch((e) =>
    console.log(`Something went wrong while connecting to DB: ${e}`),
  );

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
// anything related to server must be placed on this file
