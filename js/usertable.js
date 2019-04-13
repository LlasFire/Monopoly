let button = document.getElementById('button');

function writeGamers() {
    
    let returnString = "0";
    
    for (var i=0,key; i < localStorage.length; i++) {
        
        key = localStorage.key(i);

        let returnObj = JSON.parse(localStorage.getItem(key));

        returnString += '<hr>' + 
         returnObj.name + ': $' + 
         returnObj.capital +' | ' + 
         returnObj.place + ' ';     
    }
    returnString+= '<hr>';

    let div = document.createElement("div");
        div.style.minHeight = 60 + 'px';
        div.style.backgroundColor = "#fefefe";
        div.style.width = 296 + 'px';
        div.innerHTML = returnString.slice(1);
        div.id = "result";

    let writeGamers = document.getElementById('usertable');
    writeGamers.appendChild(div); 
}


button.addEventListener('click', () =>{
    
    let capital = document.getElementById('capital').value;
    let name = document.getElementById('name').value;
    
	if ( name === "" || capital === "") {

        alert("You have a mistake.");
        
	}else{
        
        let myItem = {};
            myItem.name = name;
            myItem.capital = capital;
            myItem.place = 0;
            
        let serialObj = JSON.stringify(myItem); //сериализуем его
        localStorage.setItem(name, serialObj); //запишем его в хранилище
        document.location.href='index.html';
    }
});

writeGamers();