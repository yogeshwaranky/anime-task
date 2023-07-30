let page = 0;                                        //declaring the first page as 0
let lets_go = document.querySelector('#btn');        //activating a button and declaring it in a variable
let fetchpokemon = async (url, img_no)=>{            //fetching the url using get method and declaring it in a variable
    try{
        let pokamon_details = await fetch(url,{method: "GET"});
        let pokemon = await pokamon_details.json();    
    
    if(page == 0){                                  //To be displayed in the first page inside the div tag of id named pokemon_info
             let pokemon_details = `<div class="card" style="width: 19rem;">
             <div class = "image"><img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${img_no}.svg" alt="#"></div>
         <div class="card-body">
             <div class = "pokemon">Name : ${pokemon.name}</div>
             <div class = "wght">Weight : ${pokemon.weight}</div>
             <div class = "ability">Abilities : ${pokemon.abilities[0].ability.name}&${pokemon.abilities[1].ability.name}</div>
             <div class = "move">Movements : ${pokemon.moves[0].move.name}&${pokemon.moves[1].move.name}</div></div></div>`
            document.querySelector('#pokemon_info').innerHTML += pokemon_details;
        }
    }
catch(err){
    //Errors not possible to catch//
}
}
let reference;                                         //setting a button to navigate
let setpage = `<div class="pagination">          
                <button>1</button>
                <button>2</button>
                <button>3</button>
                <button>4</button>
                <button>5</button>
                <button>6</button>
                <button>7</button>
                <button>8</button>
                <button>9</button>
                <button>10</button>
                </div>`
lets_go.addEventListener("click",function(clicked){                        //when the button is clicked removing the button and background image and loading the first page.
    document.querySelector('.bg_img').remove();
    document.querySelector('#btn').remove();
    page = 0;
    if(clicked.target.innerHTML == "Click here !!!"){
    reference = clicked.target.innerHTML;
    document.querySelector('#pokemon_info').innerHTML = '';
    for(let i = 1; i <= 30; i=i+5){                                    //displaying random 5 images of pokemon
    fetchpokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`, i);    //fetching through the link for five times
    }
    document.body.innerHTML += setpage                              //Also displaying the buttons bellow the page
    }
        
})

window.addEventListener("click",function(clicked){
    if(clicked.target.innerHTML == 1){                             //written loop for different images of pokemon for displaying 5 random pokemons in the webpage when the button is clicked.
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_info').innerHTML = '';
        for(let i = 1; i <= 30; i=i+5){
        fetchpokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }
    if(clicked.target.innerHTML == 2){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_info').innerHTML = '';
        for(let i = 35; i <= 55; i=i+5){
        fetchpokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }
    if(clicked.target.innerHTML == 3){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_info').innerHTML = '';
        for(let i = 60; i <= 80; i=i+5){
            fetchpokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }
    if(clicked.target.innerHTML == 4){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_info').innerHTML = '';
        for(let i = 85; i <= 90; i=i+5){
        fetchpokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }if(clicked.target.innerHTML == 5){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_info').innerHTML = '';
        for(let i = 95; i <= 115; i=i+5){
        fetchpokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }if(clicked.target.innerHTML == 6){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_info').innerHTML = '';
        for(let i = 120; i <= 140; i=i+5){
        fetchpokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }if(clicked.target.innerHTML == 7){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_info').innerHTML = '';
        for(let i = 145; i <= 165; i=i+5){
            fetchpokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }if(clicked.target.innerHTML == 8){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_info').innerHTML = '';
        for(let i =170 ; i <= 190; i=i+5){
        fetchpokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }if(clicked.target.innerHTML == 9){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_info').innerHTML = '';
        for(let i = 190; i <= 215; i=i+5){
            fetchpokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }if(clicked.target.innerHTML == 10){
        reference = clicked.target.innerHTML;
        document.querySelector('#pokemon_info').innerHTML = '';
        for(let i = 215; i <= 240; i=i+5){
            fetchpokemon(`https://pokeapi.co/api/v2/pokemon/${i}/`, i); 
        }
    }

})
