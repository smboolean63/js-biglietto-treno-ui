const ticketElement = document.getElementById("ticket");
const fullNameElement = document.getElementById("name");
const kmElement = document.getElementById("km");
const ageElement = document.getElementById("age"); // minorenne, maggiorenne, over

// clicco sul bottone genera
const btnGenerate = document.getElementById("btn-generate");
btnGenerate.addEventListener("click", 
    function(){
        // Il programma leggerà dal form il numero di chilometri che vuole percorrere, il nome e la fascia d'età.
        const fullName = fullNameElement.value;
        const km = Number(kmElement.value);
        const age = ageElement.value; // minorenne, maggiorenne, over
        // Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
        // il prezzo del biglietto è definito in base ai km (0.21 € al km)
        // va applicato uno sconto del 20% per i minorenni
        // va applicato uno sconto del 40% per gli over 65.
        let ticketPrice = km * 0.21;
        let ticketType = "Biglietto Standard";

        if( age === "minorenne" ) {
            ticketPrice -= ticketPrice * 0.2;
            ticketType = "Biglietto scontato del 20%";
        } else if( age === "over" ) {
            ticketPrice -= ticketPrice * 0.4;
            ticketType = "Biglietto scontato del 40%";
        }
        // L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo). 
        // stampare il risultato nel div.ticket e mostrare questo div
        document.getElementById("ticket-name").innerHTML = fullName;
        document.getElementById("ticket-type").innerHTML = ticketType;
        document.querySelector("#ticket-wagon").innerHTML = Math.floor(Math.random() * 10) + 1;
        document.querySelector("#ticket-cp").innerHTML = Math.floor(Math.random() * 100000) + 900000;
        document.getElementById("ticket-price").innerHTML = ticketPrice.toFixed(2) + "€";
        ticketElement.classList.add("show");
    }
);

// clicco sul bottone annulla
const btnReset = document.getElementById("btn-reset");
btnReset.addEventListener("click", 
    function() {
        // svuoto il form
        fullNameElement.value = ""; 
        kmElement.value = "";
        ageElement.selectedIndex = "0";
        // nascondo il ticket
        ticketElement.classList.remove("show");
    }
);