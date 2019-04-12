let button = document.getElementById('button');

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

    let returnst = "0";
    
    for (var i=0,key; i < localStorage.length; i++) {
        key = localStorage.key(i);

        let returnObj = JSON.parse(localStorage.getItem(key));

        returnst+= '<hr>'
        +returnObj.name + ': $'
        +returnObj.capital +' | '
        +returnObj.place + ' ';
    }


    
    let div = document.createElement("div");
    div.innerHTML = returnst;

    let writeGamers = document.querySelector('body');
    writeGamers.appendChild(div);
});

