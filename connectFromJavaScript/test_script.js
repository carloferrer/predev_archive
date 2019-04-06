const pg = require("pg");
const settings = require("./settings"); // settings.json

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  console.log('Searching ...');

  client.query("SELECT * FROM famous_people WHERE last_name = $1::text", [process.argv[2]], (err, result) => {

    if (err) {
      return console.error("error running query", err);
    }

    printResult(result);

    client.end();
  });
});

function printResult(result) {
  console.log(`Found ${result.rowCount} person(s) by the name ${result.rows[0].last_name}:`);

    for (let i = 0; i < result.rowCount; i++) {
      let row = result.rows[i];
      console.log(`-${row.id}: ${row.first_name} ${row.last_name}, born ${row.birthdate}`);
    }
}