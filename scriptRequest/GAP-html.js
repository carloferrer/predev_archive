var https = require('https');

function getAndPrintHTML() {

  var requestOptions = {
    host: 'sytantris.github.io',
    path: '/http-examples/step2.html'
  };

  https.get(requestOptions, function(response) {
    response.setEncoding('utf8');

    var buffer = '';

    response.on('data', function(data) {
      buffer += data;
    });

    response.on('end', function() {
      console.log(buffer);
    });
  });

  // https.get(requestOptions, function(response) {
  //   response.setEncoding('utf8');

  //   response.on('data', function(data) {
  //     console.log('*** *** *** ***\n'+'Chunk received of length: ' + data.length + '\n*** *** *** ***\n');
  //     console.log(data,"\n");
  //   });

  //   response.on('end', function() {
  //     console.log('Response stream complete.');
  //   });
  // });
}

getAndPrintHTML();