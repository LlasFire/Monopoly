let button = document.getElementById('button');

function writeGamers() {
    
    let returnString = "";

    for (let key of Object.keys(localStorage)) {
        let returnObj = JSON.parse(localStorage.getItem(key));
        returnString += `<div class="user-cell">${ returnObj.name }: $${ returnObj.capital } | ${returnObj.place}<div>`;
    }

    let div = document.createElement("div");

    div.style.minHeight = '60px';
    div.style.backgroundColor = "#fefefe";
    div.style.width = '296px';
    div.innerHTML = returnString;

    div.id = "result";

    let writeGamers = document.getElementById('usertable');
    writeGamers.appendChild(div); 
}


button.addEventListener('click', () => {    
    let capital = document.getElementById('capital').value;
    let name = document.getElementById('name').value;
    
	if (name === "" || capital === "") {
        alert("You have a mistake.");   
        return;
    } 

    let myItem = {
        name,
        capital,
        place : 0
    };
        
    localStorage.setItem(name, JSON.stringify(myItem));
    document.location.href='/';
});

writeGamers();