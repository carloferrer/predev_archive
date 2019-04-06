const settings = require("./settings"); // settings.json

const knex = require("knex")({
  client: settings.client,
  connection: {
    user     : settings.user,
    password : settings.password,
    database : settings.database,
    host     : settings.hostname,
    port     : settings.port,
    ssl      : settings.ssl
  }
});

let input = process.argv;

knex.insert([{first_name: input[2], last_name: input[3], birthdate: input[4]}]).into('famous_people')
.asCallback(function(err, result) {
  if (err) {
    return console.error('Connection Error', err);
  }

  console.log(result);
});

knex.destroy();