"use strict";
const numberOFSeries = +prompt("Nechta serial ko'rdingiz", "");

const seriesDB = {
  count: numberOFSeries,
  series: {},
  actors: {},
  genres: [],
  privat: false,
};
for (let i = 0; i < 2; i++) {
  const firstFilm = prompt("Oxirgi ko'rgan serialingiz"),
    lastFilm = prompt("Nechi baxo berasiz");

  if (
    firstFilm != null &&
    lastFilm != null &&
    firstFilm != "" &&
    lastFilm != ""
  ) {
    console.log("done");
    seriesDB.series[firstFilm] = lastFilm;
  } else {
    console.log("error");
    i--;
  }
}

if (seriesDB.count < 5) {
  console.log("Kam serial koripsiz");
} else if (seriesDB.count >= 5 && seriesDB.count < 10) {
  console.log("Siz classik tomoshbil ekansiz");
} else if (seriesDB.count <= 10) {
  console.log("Siz serialchi zvezda ekansiz");
} else {
  console.log("Error");
}

console.log(seriesDB);
