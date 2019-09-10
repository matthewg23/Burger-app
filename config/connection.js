// Set up MySQL connection.
var mysql = require("mysql");
var connection;

  if (process.env.JAWSSB_URL){
    connection = mysql.createConnection(process.env.JAWSSB_URL)
  }else{
  connection = mysql.createConnection({
  port: process.env.PORT || 3306,
  host: "s3lkt7lynu0uthj8.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
  user: "tcvluaqlh7dkefpo",
  password: "r9ev583204et9znf",
  database: "ncmfyfq3rhipwdsg"
});
};

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id: " + connection.threadId);
});

// Export connection for our ORM to use.

module.exports = connection;
