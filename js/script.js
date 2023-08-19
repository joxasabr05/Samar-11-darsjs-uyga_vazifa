"use strict";
const numberOFSeries = +prompt("Nechta serial ko'rdingiz", "");

const seriesDB = {
  count: numberOFSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};

// for (let i = 0; i < 2; i++) {
// const a = prompt("Oxirgi ko'rgan serialingiz"),
//   b = prompt("Nechi baxo berasi");

//   if (a !== null && b !== null && a !== "" && b !== "") {
//     console.log("done");
//     seriesDB.series[a] = b;
//   } else {
//     console.log("error");
//     i--;
//   }
// }

// b = prompt("Nechi baxo berasi");

let i = 0;

do {
  const a = prompt("Serialingizni nomini ayting"),
    b = prompt("Serialga nechi baxo berasiz");
  i++;
  if (a !== null && b !== null && a !== "" && b !== "") {
    console.log("Done");
    seriesDB.series[a] = b;
  } else {
    console.log("Error");
    i--;
  }
} while (i < 2);
if (seriesDB.count < 5) {
  console.log("Siz ota kam serial ko'rgansiz");
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
  console.log("Siz classik serialchi ekan siz");
} else if (seriesDB.count >= 10) {
  console.log("Siz o'ta kop serial korgansiz");
} else {
  console.log("Error");
}
console.log(seriesDB);
