const mongoose = require("mongoose");

const connectDB = async () => {
  const PASSWORD = "NBQr1Oq1aC3y8GXm";
  const DATABASE_NAME = "productsDB";
  const CONNECTION_URL = `mongodb+srv://alsharhanaisha:${PASSWORD}@coded.qe21j.mongodb.net/${DATABASE_NAME}?retryWrites=true&w=majority`;
  const conn = await mongoose.connect(CONNECTION_URL, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  });
  console.log(`mongo connected: ${conn.connection.host}`);
};

module.exports = connectDB;
