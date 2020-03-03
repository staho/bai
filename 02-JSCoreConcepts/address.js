title = "dr";
name = "Mateusz";
surname = 'Kubicki';
street = 'Długa 15';
city = 'Kraków';
zip = '30-781';
country = 'Poland';


/* 
dr Mateusz Kubicki
ul. Długa 15
30-781 Kraków
POLAND
*/

let option1 = title + " " + name + " " + surname +"\nul. " + street + "\n" + zip + " " + city + "\n" + country.toUpperCase()
let option2 = `${title} ${name} ${surname}\nul. ${street}\n${zip} ${city}\n${country.toUpperCase()}`
console.log(option1)
console.log(option2)