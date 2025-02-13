// Scripts para la web 


// pagina selector personajes
function ChangeCharacter(character) {
    switch(character) {
        case "bryan":
            document.getElementById("img").src = "images/bryan.png";
            document.getElementById("name").innerHTML = "Bryan Fury";
            break;
        case "jin":
            document.getElementById("img").src = "images/jin.png";
            document.getElementById("name").innerHTML = "Jin Kazama";
            break;
        case "paul":
            document.getElementById("img").src = "images/paul.png";
            document.getElementById("name").innerHTML = "Paul Phoenix";
            break;
        case "hwoarang":
            document.getElementById("img").src = "images/hwoarang.png";
            document.getElementById("name").innerHTML = "Hwoarang";
            break;
    }
}
