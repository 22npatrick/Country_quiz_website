
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


const Oceania = ["australia", "federatedstatesofmicronesia", "fiji", "kiribati", "marshallislands",
    "nauru","newzealand","palau","papuanewguinea","samoa",
    "solomonislands","tonga","tuvalu","vanuatu"];

const Europe = ["albania","andorra","austria","belarus","belgium",
    "bosniaandherzegovina","bulgaria","croatia","czechrepublic","denmark",
    "estonia","finland","france","germany","greece",
    "hungary","iceland","ireland","italy","kosovo",
    "latvia","liechtenstein","lithuania","luxembourg","malta",
    "moldova","monaco","montenegro","netherlands","northmacedonia",
    "norway","poland","portugal","romania","russia",
    "sanmarino","serbia","slovakia","slovenia","spain",
    "sweden","switzerland","ukraine","unitedkingdom","vaticancity"];

const Asia = ["afghanistan", "armenia", "azerbaijan", "bahrain", "bangladesh",
    "bhutan", "brunei", "cambodia", "china", "cyprus",
    "timor-leste", "georgia", "india", "indonesia", "iran",
    "iraq", "israel", "japan", "jordan", "kazakhstan",
    "kuwait", "kyrgyzstan", "laos", "lebanon", "malaysia",
    "maldives", "mongolia", "myanmar", "nepal", "northkorea",
    "oman", "pakistan", "palestine", "philippines", "qatar",
    "saudiarabia", "singapore", "southkorea", "srilanka", "syria",
    "taiwan", "tajikistan", "thailand", "turkey", "turkmenistan",
    "unitedarabemirates", "uzbekistan", "vietnam", "yemen"];

const Africa = ["algeria", "angola", "benin", "botswana", "burkinafaso",
    "burundi", "cameroon", "capeverde", "centralafricanrepublic", "chad",
    "comoros", "democraticrepublicofthecongo", "djibouti", "egypt", "equatorialguinea",
    "eritrea", "eswatini", "ethiopia", "gabon", "gambia",
    "ghana", "guinea", "guinea-bissau", "ivorycoast", "kenya",
    "lesotho", "liberia", "libya", "madagascar", "malawi",
    "mali", "mauritania", "mauritius", "morocco", "mozambique",
    "namibia", "niger", "nigeria", "republicofthecongo", "rwanda",
    "saotomeandprincipe", "senegal", "seychelles", "sierraleone", "somalia",
    "southafrica", "southsudan", "sudan", "tanzania", "togo",
    "tunisia", "uganda", "zambia", "zimbabwe",];

const NorthAmerica = ["antiguaandbarbuda", "bahamas", "barbados", "belize", "canada",
    "costarica", "cuba", "dominica", "dominicanrepublic", "elsalvador",
    "grenada", "guatemala", "haiti", "honduras", "jamaica",
    "mexico", "nicaragua", "panama", "saintkittsandnevis", "saintlucia",
    "saintvincentandthegrenadines", "trinidadandtobago", "unitedstates"];

const SouthAmerica = ["argentina", "bolivia", "brazil", "chile", "colombia",
    "ecuador", "guyana", "paraguay", "peru", "suriname",
    "uruguay", "venezuela"];

const countriesGuessCorrectly = []

function giveupMessage(x){
    var countryElement = document.createElement("h1");
    countryElement.innerHTML = x;
    document.getElementById("List").appendChild(countryElement);
    return;
}

function giveup(){
    var continentCheck = true
    let fullmessage = ""    
    // Checks what message should be displayed on the giveup screen 
    let checker = (arr, target) => target.every(v => arr.includes(v));  
    if (checker(countriesGuessCorrectly, Oceania)){
        fullmessage = " You guess all the countries in Oceania!!! "
        continentCheck = false
        giveupMessage(fullmessage)
    } if (checker(countriesGuessCorrectly, Europe)){
        fullmessage = " You guess all the countries in Europe!!!"
        continentCheck = false
        giveupMessage(fullmessage)
    }  if (checker(countriesGuessCorrectly, Asia)){
        fullmessage = " You guess all the countries in Asia!!!"
        continentCheck = false
        giveupMessage(fullmessage)
    }  if (checker(countriesGuessCorrectly, Africa)){
        fullmessage = " You guess all the countries in Africa!!!"
        continentCheck = false
        giveupMessage(fullmessage)
    }  if (checker(countriesGuessCorrectly, NorthAmerica)){
        fullmessage = " You guess all the countries in North America!!!"
        continentCheck = false
        giveupMessage(fullmessage)
    }  if (checker(countriesGuessCorrectly, SouthAmerica)){
        fullmessage = " You guess all the countries in South America!!!"
        continentCheck = false
        giveupMessage(fullmessage)
    } if (continentCheck){
        fullmessage = " Keep on praticing and learning so that you can know an enitre continent's worth of countries "
        giveupMessage(fullmessage)
    }
    //Sets up the give up page by making a retry button and removing elements from the screen
    var retryButton = document.createElement("button")
    retryButton.innerHTML = "Retry";
    document.getElementById("percentage").append(retryButton)
    document.getElementsByTagName("button")[0].id = "retryButton"
    document.getElementById("retryButton").style.fontSize = "x-large";
    document.getElementById("retryButton").style.margin = "30px 10px 20px 30px";
    message.innerHTML = "";
    var dave = document.getElementById("allSvg")
    dave.remove();
    dave = document.getElementById("countryInput")
    dave.remove();
    dave = document.getElementById("InputButton") 
    dave.remove();
    dave = document.getElementById("giveUpButton")
    dave.remove();
    dave = document.getElementById("TypeCountryText")
    dave.remove();
    document.getElementById("retryButton").addEventListener("click", function (event){
        location.reload()
    })

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
            countriesGuessCorrectly.unshift(countryArray[userGuessIndex]);
            countryArray.splice(userGuessIndex, 1);
            countryElement.innerHTML = userGuess + num;
            num++;
            countryInput.value = ""; //Clear the input field after a guess
            document.getElementById("percentage").innerHTML = num + "/" + String(numberOfCountries);
            message.innerHTML = "";
            //highlights guessed country on the map based on the continent its in
            tagUserGuess = "#" + userGuess  
            if (Oceania.includes(userGuess)) {
                document.querySelectorAll(tagUserGuess).forEach(e=>{
                e.style.fill= "purple";
            })} if (Europe.includes(userGuess)) {
                document.querySelectorAll(tagUserGuess).forEach(e=>{
                e.style.fill= "red";
            })} if (Asia.includes(userGuess)) {
                document.querySelectorAll(tagUserGuess).forEach(e=>{
                e.style.fill= "orange";
            })} if (Africa.includes(userGuess)) {
                document.querySelectorAll(tagUserGuess).forEach(e=>{
                e.style.fill= "yellow";
            })} if (NorthAmerica.includes(userGuess)) {
                document.querySelectorAll(tagUserGuess).forEach(e=>{
                e.style.fill= "lightgreen";
            })} if (SouthAmerica.includes(userGuess)) {
                document.querySelectorAll(tagUserGuess).forEach(e=>{
                e.style.fill= "darkgreen";
            })}
        } else if (countriesGuessCorrectly.includes(userGuess)) { // Checks if already guesed country
            var countryElement = document.createElement("p1");
            message.innerHTML = "Already guesed country";
        } else {
            var countryElement = document.createElement("p1");// Checks if typed an invalid answer
            message.innerHTML = "Did not type a valid county";
        }
        if (num == numberOfCountries){ // Checks if you guessed all countries
            document.getElementById("percentage").innerHTML += " Congrats you have guessed all the countries of the world!!!";
        }
    }
}
