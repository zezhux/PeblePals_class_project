function has_game_started(){
    return false;
}



const nav_buttons = [
    {"label":"HOME", "link" : "/"},
    {"label":"ABOUT", "link" : "/about.html"},
    {"label":"TESTIMONIALS", "link" : "/testimonials.html"},
    has_game_started() 
    ? {"label" : "GAME", "link" : "/game.html"} 
    : {"label" : "ADOPT", "link": "/adopt.html"}
]

//handle home page separately

function is_this_active(page_name){
    let url = window.location.href;
    let found =url.search(page_name.toLowerCase());
    if(found > 0){
        return true;
    } else{
        return false;
    }
}

let nav_container = document.getElementById("desktop-nav")

for (let button of nav_buttons){
    nav_container.innerHTML += `<a class="nav-link
        ${is_this_active(button.label) ? "active" : ""}
    " href="${button.link}">${button.label}</a>` ;
}