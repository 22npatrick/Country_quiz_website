
// The num variable is used a counter to how many countries the user has guessed correctly.
let num = 0;
/* The numberOfCountries is a const can be changed later for the creation or 
dissolution of countries.
There are currently 197 counties in the country array
*/
const numberOfCountries = 197;
const countryArray = [
"afghanistan", "albania", "algeria", "andorra", "angola", "antiguaandbarbuda", "argentina", "armenia", "australia", "austria",
"azerbaijan", "bahamas", "bahrain", "bangladesh", "barbados", "belarus", "belgium", "belize", "benin", "bhutan", "bolivia",
"bosniaandherzegovina", "botswana", "brazil", "brunei", "bulgaria", "burkinafaso", "burundi", "cambodia", "cameroon", "canada",
"capeverde", "centralafricanrepublic", "chad", "chile", "china", "colombia", "comoros", "costarica", "croatia", "cuba", "cyprus",
"czechrepublic", "democraticrepublicofthecongo", "denmark", "djibouti", "dominica", "dominicanrepublic", "timor-leste", "ecuador",
"egypt", "elsalvador", "equatorialguinea", "eritrea", "estonia", "eswatini", "ethiopia", "federatedstatesofmicronesia", "fiji",
"finland", "france", "gabon", "gambia", "georgia", "germany", "ghana", "greece", "grenada", "guatemala", "guinea", "guinea-bissau",
"guyana", "haiti", "honduras", "hungary", "iceland", "india", "indonesia", "iran", "iraq", "ireland", "israel", "italy", "ivorycoast",
"jamaica", "japan", "jordan", "kazakhstan", "kenya", "kiribati", "kosovo", "kuwait", "kyrgyzstan", "laos", "latvia", "lebanon",
"lesotho", "liberia", "libya", "liechtenstein", "lithuania", "luxembourg", "madagascar", "malawi", "malaysia", "maldives", "mali",
"malta", "marshallislands", "mauritania", "mauritius", "mexico", "moldova", "monaco", "mongolia", "montenegro", "morocco",
"mozambique", "myanmar", "namibia", "nauru", "nepal", "netherlands", "newzealand", "nicaragua", "niger", "nigeria", "northkorea",
"northmacedonia", "norway", "oman", "pakistan", "palau", "palestine", "panama", "papuanewguinea", "paraguay", "peru",
"philippines", "poland", "portugal", "qatar", "republicofthecongo", "romania", "russia", "rwanda", "saintkittsandnevis",
"saintlucia", "saintvincentandthegrenadines", "samoa", "sanmarino", "saotomeandprincipe", "saudiarabia", "senegal",
"serbia", "seychelles", "sierraleone", "singapore", "slovakia", "slovenia", "solomonislands", "somalia", "southafrica",
"southkorea", "southsudan", "spain", "srilanka", "sudan", "suriname", "sweden", "switzerland", "syria", "taiwan", "tajikistan",
"tanzania", "thailand", "togo", "tonga", "trinidadandtobago", "tunisia", "turkey", "turkmenistan", "tuvalu", "uganda", "ukraine",
"unitedarabemirates", "unitedkingdom", "unitedstates", "uruguay", "uzbekistan", "vanuatu", "vaticancity", "venezuela",
"vietnam", "yemen", "zambia", "zimbabwe"];
const Evens = [2,4,6,8,10];
const countriesGuessCorrectly = []

/*
const guessInput = document.getElementById("countryInput");
const guessBtn =  document.getElementById("InputButton");
*/

function myFunction(value) {
    return value;
}

function giveup(){
    console.log("giveup")
    message.innerHTML = "";
    console.log(countriesGuessCorrectly)
    const Oceania = ["samoa", "australia"];
    const Europe = ["latvia", "denmark"];
    const Asia = ["china", "india"];
    const Africa = ["south africa", "egypt"];
    const NorthAmerica = ["united states", "canada"];
    const SouthameriaAmerica = ["brazil", "argentina"];
    let fullmessage = ""    
    let checker = (arr, target) => target.every(v => arr.includes(v));  //Credit to https://stackoverflow.com/questions/53606337/check-if-array-contains-all-elements-of-another-array
    if (checker(countriesGuessCorrectly, Oceania)){
        fullmessage += " You guess all the countries in Oceania. "
    } if (checker(countriesGuessCorrectly, Europe)){
        fullmessage += " You guess all the countries in Europe, "
    }  if (checker(countriesGuessCorrectly, Asia)){
        fullmessage += " You guess all the countries in Asia, "
    }  if (checker(countriesGuessCorrectly, Africa)){
        fullmessage += " You guess all the countries in Africa, "
    }  if (checker(countriesGuessCorrectly, NorthAmerica)){
        fullmessage += " You guess all the countries in North America, "
    }  if (checker(countriesGuessCorrectly, SouthameriaAmerica)){
        fullmessage += " You guess all the countries in South America, "
    }
    var dave = document.getElementById("allSvg")
    dave.remove();
    dave = document.getElementById("countryInput")
    dave.remove();
    dave = document.getElementById("InputButton") 
    dave.remove();
    dave = document.getElementById("giveUpButton")
    dave.remove();
    var countryElement = document.createElement("p");
    countryElement.innerHTML = fullmessage;
    document.getElementById("List").appendChild(countryElement);

/*
    if (num <= (numberOfCountries*0.05)){
        message.innerHTML = "... You need to learn your countries";
    } else if (num <= (numberOfCountries*0.10)){
        message.innerHTML = "You know over 10% of the countries in the world! Keep own learning your countries ";
    }
*/  
    return;
}


// Function to 
function guess(){
    // Check if you have already guessed all the countries correctly
    if (num >= numberOfCountries){
         document.getElementById("percentage").innerHTML = "You are done";
    }
    else{
        var baseGuess = document.getElementById("countryInput").value;
        userGuess = baseGuess.toLowerCase()
        userGuess = userGuess.replace(/\s/g, "");
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
            userGuess = "#" + userGuess         
            document.querySelectorAll(userGuess).forEach(e=>{
                e.style.fill="black";
                e.style.border="white";
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
