// A command line program that starts off with a greeting, and a menu with options.
const stdin = process.stdin;

stdin.setRawMode(true);
stdin.setEncoding('utf8');

stdin.on('data', (key) => {
  if (key === 'b') {
    process.stdout.write('\x07');
  } else if (key <= '9' && key >= '1') {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, parseInt(key) * 1000);
  } else if (key === '\u0003') {
    process.exit();
  } else {
    console.log("Please try again");
  }
});