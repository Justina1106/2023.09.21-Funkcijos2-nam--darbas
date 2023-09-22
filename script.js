// 8. Funkciją, kuri konvertuoja dienas į pasirinktą formatą (minutes, valandas, savaites, mėnesius arba metus):
// 8.1. Funkcija priima du parametrus:
//   8.1.1. Dienų skaičių.
//   8.1.2. Formatą. Galimos formato reikšmės yra:
//     8.1.2.1. minutes
//     8.1.2.2. hours
//     8.1.2.3. weeks
//     8.1.2.4. months
//     8.1.2.5. years
// 8.2. Funkcija konvertuoja dienas į pasirinktą formatą ir grąžina atsakymą tokiu formatu: 5 days - 7200 minutes.

  function getDays(days, format) {
    if (format === 'minutes') {
        let minutes = (days * 24 * 60)
      return `${days} days - ${minutes} minutes.`
    }
    if (format === 'hours') {
        let hours = (days * 24)
      return `${days} days - ${hours} hours.`
    }
    if (format === 'weeks') {
        let weeks = (days / 7).toFixed(1)
      return `${days} days - ${weeks} weeks.`
    }
    if (format === 'months') {
        let months = (days / 30).toFixed(1)
      return `${days} days - ${months} months.`
    }
    if (format === 'years') {
        let years = (days / 365).toFixed(2)
      return `${days} days - ${years} years.`
    }
  
  }
  
  console.log(getDays(5, 'minutes'))
  console.log(getDays(5, 'hours'))
  console.log(getDays(5, 'weeks'))
  console.log(getDays(5, 'months'))
  console.log(getDays(5, 'years'))


// 9. Funkciją, kuri patikrina ar skaičius dalinasi iš kito skaičiaus:
// 9.1. Funkcija priima du parametrus:
//   9.1.1. Skaičių, kuris bus dalinamas (dalinys).
//   9.1.2. Skaičių, iš kurio bus dalinama (daliklis).
// 9.2. Funkcija grąžina atsakymą tokiu formatu:
//   9.2.1. Jeigu dalinasi: 10 dalinasi iš 5.
//   9.2.2. Skaičius 11 nesidalina iš 5. Liekana yra 1.



// 10. Funkciją, kuri patikrina ar įvestas tekstas turi porini raidžių skaičių ar neporinį.



// 11. Funkciją, kuri paima nurodytą simbolį iš žodžio ar sakinio.
//   11.1. Funkcija priima du parametrus: tekstą ir kelintą simbolį reikia grąžinti.
//   11.2. Funkcija grąžina atsakymą tokiu formatu: Teksto "Labas" 3 raidė yra "b".

//   11.3. Jeigu nurodytas skaičius yra didesnis nei tekstas turi simbolių, tai reikia grąžinti error'ą tokiu formatu: Tekstas "Labas" turi 5 simbolius, o jūs nurodėte grąžinti 8.

//   11.4. Patobulinti funkciją, kad būtų galima įrašyti neigiamą skaičių, jeigu norima gauti teksto simbolį skaičiuojant nuo jo galo, o ne nuo priekio.