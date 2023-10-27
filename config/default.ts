const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

export default {
  port: 5000,
  Db_Uri: `mongodb+srv://${dbUser}:${dbPassword}@cluster0.chdjg93.mongodb.net/?retryWrites=true&w=majority&appName=AtlasApp`,
};
