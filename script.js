// with querySelectors:

// var mainUser = document.querySelector("main-user");

// function editName() {
//         console.log("function seen");
//         mainUser.innerText = "Commander Benjamin Lafayette Sisko";

//         // if(mainUser.innerText === "Jane Doe") {
//         //         mainUser.innerText = "Commander Benjamin Lafayette Sisko";
//         // } else {
//         //         mainUser.innerText = "Jane Doe"; // why doesn't this return mainUser to Jane?
//         // }        
// }

// let element = document.querySelector('#1');

// function removeRequest(id) {
//         let element = document.querySelector(id);
//         element.remove();
//         // add this to removeRequest function also: decrement #request-count
        
// }


//////////////////////////////////

// with getElementByID:

// console.log("connected to html")

var mainUser = document.getElementById("main-user");

function editName() {
        console.log("function seen");
        mainUser.innerText = "Commander Benjamin Lafayette Sisko";
        // how to change back to Jane?
}


function removeRequest(id) {
        let element = document.getElementById(id);
        element.remove();
        
        function decrementRequestCount() {
                let requestCount = document.getElementById("request-count").innerText;requestCount = requestCount--;
        }
        if () {
                // increment innerText of h3 with id of 'connection-count'
        }
        
}

// clicking accept button increments #connection-count. must this be a new func?