const settings = require("./settings"); // settings.json

const knex = require("knex")({
  client     : settings.client,
  connection : {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});


knex.select().from('famous_people').where('last_name', process.argv[2])
.asCallback(function(err, result) {
  if (err) {
    return console.error("Connection Error", err);
  }

  printResult(result);

});

knex.destroy();

function printResult(result) {
  console.log(`Found ${result.length} person(s) by the name ${result[0].last_name}:`);

  for (let i = 0; i < result.length; i++) {
    let row = result[i];
    console.log(`-${row.id}: ${row.first_name} ${row.last_name}, born ${row.birthdate}`);
  }
}