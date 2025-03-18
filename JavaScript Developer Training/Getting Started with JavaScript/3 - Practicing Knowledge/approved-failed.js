const score1 = 8;
const score2 = 9;
const score3 = 8.5;

const scoreAverage = ((score1 + score2 + score3) / 3).toFixed(2);

if (scoreAverage < 5) {
  console.log(
    `Your semester average is: ${scoreAverage} - And you were failed.`
  );
} else if (scoreAverage < 7) {
  console.log(
    `Your semester average is: ${scoreAverage} - And you are in remedial.`
  );
} else {
  console.log(`Your semester average is: ${scoreAverage} - And you passed!`);
}
