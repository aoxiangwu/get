require('https').get('https://raw.githubusercontent.com/posclegom/programthink/master/index.html', (resp) => {
  resp.setEncoding('utf8');

  resp.on('data', (chunk) => {
    console.log(chunk.match(/\d\d\d\d-\d\d-\d\d/)[0]);
    process.exit();
  });

}).on("error", (err) => {
  console.log("Error: " + err.message);
});