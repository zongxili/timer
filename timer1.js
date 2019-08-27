const input = process.argv.slice(2);
for (let second of input) {
  if (!isNaN(second) && (second > 0)) {
    setTimeout(() => {
      process.stdout.write('\x07');
    }, parseInt(second) * 1000);
  }
}