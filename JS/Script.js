// Scripts para la web 


// pagina selector personajes

let player1Selected = false;
let player2Selected = false;

function selectCharacter(character) {
    if (!player1Selected) {
        updatePlayerStats('player1', character);
        player1Selected = true;
    } else if (!player2Selected) {
        updatePlayerStats('player2', character);
        player2Selected = true;
    }

    if (player1Selected && player2Selected) {
        document.getElementById('ready-button').disabled = false;
    }
}

function updatePlayerStats(player, character) {
    const playerImg = document.getElementById(`${player}-img`);
    const playerInfo = document.getElementById(`${player}-info`);
    let characterName, characterImage, characterStats;

    switch(character) {
        case 'james':
            characterName = "Blanka";
            characterImage = "images/Personajes/blanka.png";
            characterStats = { Fuerza: 80, Velocidad: 70, Vida: 60 };
            break;
        case 'emily':
            characterName = "Cammy";
            characterImage = "images/Personajes/cammy.png";
            characterStats = { Fuerza: 60, Velocidad: 80, Vida: 70 };
            break;
        case 'william':
            characterName = "Chunli";
            characterImage = "images/Personajes/chunli.png";
            characterStats = { Fuerza: 90, Velocidad: 60, Vida: 50 };
            break;
        case 'olivia':
            characterName = "Dhalsim";
            characterImage = "images/Personajes/dhalsim.png";
            characterStats = { Fuerza: 50, Velocidad: 90, Vida: 80 };
            break;
        case 'michael':
            characterName = "Guile";
            characterImage = "images/Personajes/guile.png";
            characterStats = { Fuerza: 70, Velocidad: 70, Vida: 70 };
            break;
        case 'charlotte':
            characterName = "Juri";
            characterImage = "images/Personajes/juri.png";
            characterStats = { Fuerza: 60, Velocidad: 60, Vida: 90 };
            break;
        case 'benjamin':
            characterName = "Ryu";
            characterImage = "images/Personajes/ryu.png";
            characterStats = { Fuerza: 85, Velocidad: 65, Vida: 55 };
            break;
        case 'sophia':
            characterName = "Zangief";
            characterImage = "images/Personajes/zangief.png";
            characterStats = { Fuerza: 55, Velocidad: 85, Vida: 75 };
            break;
        
    }

    playerImg.src = characterImage;
    playerImg.alt = characterName;
    playerInfo.innerHTML = `
        <h3>${characterName}</h3>
        <p>Fuerza: <div class="stat-bar"><div class="stat-fill fuerza" style="width: ${characterStats.Fuerza}%;"></div></div></p>
        <p>Velocidad: <div class="stat-bar"><div class="stat-fill velocidad" style="width: ${characterStats.Velocidad}%;"></div></div></p>
        <p>Vida: <div class="stat-bar"><div class="stat-fill vida" style="width: ${characterStats.Vida}%;"></div></div></p>
    `;
}

function ready() {
    alert("¡READY!");
}