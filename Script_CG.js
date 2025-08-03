
// The num variable is used a counter to how many countries the user has guessed correctly.
let num = 0;
/* The numberOfCountries is a const can be changed later for the creation or 
dissolution of countries.
There are currently 197 counties in the country array
*/
const numberOfCountries = 10;
const countryArray = [
"Afghanistan", "Albania", "Algeria", "Andorra", "Angola", "Antigua and Barbuda", "Argentina", "Armenia", "Australia", "Austria",
"Azerbaijan", "Bahamas", "Bahrain", "Bangladesh", "Barbados", "Belarus", "Belgium", "Belize", "Benin", "Bhutan", "Bolivia",
"Bosnia and Herzegovina", "Botswana", "Brazil", "Brunei", "Bulgaria", "Burkina Faso", "Burundi", "Cambodia", "Cameroon", "Canada",
"Cape Verde", "Central African Republic", "Chad", "Chile", "China", "Colombia", "Comoros", "Costa Rica", "Croatia", "Cuba", "Cyprus",
"Czech Republic", "Democratic Republic of the Congo", "Denmark", "Djibouti", "Dominica", "Dominican Republic", "East Timor", "Ecuador",
"Egypt", "El Salvador", "Equatorial Guinea", "Eritrea", "Estonia", "Eswatini", "Ethiopia", "Federated States of Micronesia", "Fiji",
"Finland", "France", "Gabon", "Gambia", "Georgia", "Germany", "Ghana", "Greece", "Grenada", "Guatemala", "Guinea", "Guinea-Bissau",
"Guyana", "Haiti", "Honduras", "Hungary", "Iceland", "India", "Indonesia", "Iran", "Iraq", "Ireland", "Israel", "Italy", "Ivory Coast",
"Jamaica", "Japan", "Jordan", "Kazakhstan", "Kenya", "Kiribati", "Kosovo", "Kuwait", "Kyrgyzstan", "Laos", "Latvia", "Lebanon",
"Lesotho", "Liberia", "Libya", "Liechtenstein", "Lithuania", "Luxembourg", "Madagascar", "Malawi", "Malaysia", "Maldives", "Mali",
"Malta", "Marshall Islands", "Mauritania", "Mauritius", "Mexico", "Moldova", "Monaco", "Mongolia", "Montenegro", "Morocco",
"Mozambique", "Myanmar", "Namibia", "Nauru", "Nepal", "Netherlands", "New Zealand", "Nicaragua", "Niger", "Nigeria", "North Korea",
"North Macedonia", "Norway", "Oman", "Pakistan", "Palau", "Palestine", "Panama", "Papua New Guinea", "Paraguay", "Peru",
"Philippines", "Poland", "Portugal", "Qatar", "Republic of the Congo", "Romania", "Russia", "Rwanda", "Saint Kitts and Nevis",
"Saint Lucia", "Saint Vincent and the Grenadines", "Samoa", "San Marino", "Sao Tome and Principe", "Saudi Arabia", "Senegal",
"Serbia", "Seychelles", "Sierra Leone", "Singapore", "Slovakia", "Slovenia", "Solomon Islands", "Somalia", "South Africa",
"South Korea", "South Sudan", "Spain", "Sri Lanka", "Sudan", "Suriname", "Sweden", "Switzerland", "Syria", "Taiwan", "Tajikistan",
"Tanzania", "Thailand", "Togo", "Tonga", "Trinidad and Tobago", "Tunisia", "Turkey", "Turkmenistan", "Tuvalu", "Uganda", "Ukraine",
"United Arab Emirates", "United Kingdom", "United States", "Uruguay", "Uzbekistan", "Vanuatu", "Vatican City", "Venezuela",
"Vietnam", "Yemen", "Zambia", "Zimbabwe"];
const Evens = [2,4,6,8,10];

/*
for (let i in countryArray) {
    countryArray[i] = countryArray[i].toLowerCase()
    console.log(countryArray[i])
}
*/
const countriesGuessCorrectly = []
var pop = "";

/*
const guessInput = document.getElementById("countryInput");
const guessBtn =  document.getElementById("InputButton");
*/
// Function to 
function guess(){
    // Check if you have already guessed all the countries correctly
    if (num >= numberOfCountries){
         document.getElementById("percentage").innerHTML = "You are done";
    }
    else{
        var userGuess = document.getElementById("countryInput").value;
        // userGuess = userGuess.toLowerCase()
        // Checks if the country is in the countryArray 
        if (countryArray.includes(userGuess)) {
            var countryElement = document.createElement("p");
            userGuessIndex = countryArray.indexOf(userGuess);
            console.log(userGuessIndex)
            countriesGuessCorrectly.unshift(countryArray[userGuessIndex]);
            countryArray.splice(userGuessIndex, 1);
            console.log(countriesGuessCorrectly)
            console.log(countryArray)
            console.log(countryArray[userGuessIndex])
            countryElement.innerHTML = userGuess + num;
            console.log(num)
            num++;
            
            countryInput.value = ""; //Clear the input field after a guess
            document.getElementById("percentage").innerHTML = num + "/" + String(numberOfCountries);
            //document.getElementById("List").appendChild(countryElement);
            message.innerHTML = "";
            pop = userGuess
            x = pop
            console.log(pop)
            console.log(x)
            x = x.replace(/\s/g, "");
            console.log(x)
            x = "#" + x 
            console.log(x)
            document.querySelectorAll(x).forEach(e=>{
                e.style.fill="black";
                }
            )
        } else if (countriesGuessCorrectly.includes(userGuess)) {
            var countryElement = document.createElement("p1");
            message.innerHTML = "Already guesed country";
        } else {
            var countryElement = document.createElement("p1");
            message.innerHTML = "Did not type a valid county";
        }
        if (num == numberOfCountries){
            document.getElementById("percentage").innerHTML += " Congrats you have guessed all the countries of the world!!!";
        }
    }
}



