// process.stdout.write('hello from spinner1.js... \rheyyy\n');
const firstCharTimes = [100, 900, 1700];
const secondCharTimes = [300, 1100];
const thirdCharTimes = [500, 1300];
const fourthCharTimes = [700, 1500];
for (let time of firstCharTimes) {
  setTimeout(() => {
    process.stdout.write('\r|   ');
  }, time);
};
for (let time of secondCharTimes) {
  setTimeout(() => {
    process.stdout.write('\r/   ');
  }, time);
};
for (let time of thirdCharTimes) {
  setTimeout(() => {
    process.stdout.write('\r-   ');
  }, time);
};
for (let time of fourthCharTimes) {
  setTimeout(() => {
    // Need to escape the backslash since it's a special character.
    process.stdout.write('\r\\   ');
  }, time);
};

