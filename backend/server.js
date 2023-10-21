const mongoose = require('mongoose');

const app = require('./app');

const { DB_HOST, PORT = 3030 } = process.env;

mongoose
  .connect(DB_HOST, { dbName: 'hr-statistics' })
  .then(() => {
    console.log('Connection to database successful');

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch(error => {
    console.log(error.message);

    process.exit(1);
  });
