//1. Duotas masyvas, console.log atspausdinti masyvo ilgį
const mas1 = [12, 5, 9, 7, 5, 4];
console.log(mas1.length);

//2. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę;
const mas2 = [13, "785", 92, "labas", 522, 6984];

for (let index = 0; index < mas2.length; index++) {
  console.log(index + ", " + mas2[index]);
}

//3. Duotas masyvas, masyvą iteruoti ciklu for ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė yra lyginė (porinė)
const mas3 = [889, 52, 698, 752, 9333, 7];

for (let index = 0; index < mas3.length; index++) {
  const value = mas3[index];
  if (value % 2 === 0) {
    console.log(index + ", " + value);
  }
}

//4. Duotas masyvas, masyvą iteruoti ciklu forEach ir console.log kiekvienoje
// iteracijoje atspausdinti indeksą ir jo reikšmę, jeigu ta reikšmė prasideda raide A arba a
const mas4 = [
  "Agurkas",
  "Bananas",
  "arbūzas",
  "Bebras",
  "Voverė",
  "Ąžuolas",
  "Mažas triušis",
];

mas4.forEach((item, index) => {
  const firstLetter = item[0];
  if (firstLetter === "A" || firstLetter === "B") {
    console.log(index, ", ", item);
  }
});

//5. Duotas stringas, suskaičiuoti kiek stringe yra raidžių z
const str1 = "Storas zebras, bėga nuo zuulu genties nedžiotojų.";

let zCount = 0;

for (let index = 0; index < str1; index++) {
  if (str1[index] === "z") {
    zCount++;
  }
}

console.log("raidžių z: ", zCount);

//6. Duotas Setas, į kurį reikia pridėti reikšmes (stringus) 'Labas' ir 'Ate' ir console.log
// atspausdinti Seto ilgį
const set1 = new Set(["Labas", "Vakaras", "Rytas", "Valio"]);

//7. Suprototaipinti standartinį String tipo objektą, pridedant metodą lastCharIs(),
// kuris grąžintų paskutinį stringo simbolį. Pademonstruoti veikimą su stringu 'Ku Ku';
const str2 = "Ku ku";

// console.log(str2.lastCharIs()) po prototaipinimo eilutė turi veikti

//8. Duotas objektas, kurį reikia iteruoti, kiekvienoje iteracijoje išvedant savybę
// ir jos reikšmę

//9. Sukurti klasę Grybas. Klasėje sukurti savybė tipas. Iš klasės sukurti
// 3 Grybo objektus, savybei tipas priskiriant "Baravykas", "Ūmedė" ir "Lepšis"
