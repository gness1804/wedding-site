const ngrok = require('ngrok');

if (process.argv[2] === '--stop') {
  ngrok
    .disconnect()
    .then(() => {
      process.stdout.write('Tunnel terminated.');
      process.exit(0);
    })
    .catch(err => {
      process.stderr.write(
        `Error disconnecting ngrok tunnel: ${err.message ||
          JSON.stringify(err)}`,
      );
      process.exit(1);
    });
}

(async () => {
  try {
    const url = await ngrok.connect({
      host_header: 3000,
      port: 3000,
    });
    process.stdout.write(`Tunnel running at ${url}`);
  } catch (err) {
    process.stderr.write(
      `Error running ngrok tunnel: ${err.message || JSON.stringify(err)}`,
    );
  }
})();
