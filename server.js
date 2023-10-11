const app = require('./index');
const mongoose = require('mongoose');

const port = process.env.PORT;

const db = process.env.DATABASE_URL.replace('<password>', process.env.PASSWORD);

mongoose.connect(db).then((con) => console.log(con.connection));

app.listen(port, () => {
  console.log(`listening to port ${port}`);
});
// anything related to server must be placed on this file
