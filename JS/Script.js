// Scripts para la web 


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
            characterName = "James";
            characterImage = "images/james.png";
            characterStats = { Fuerza: 80, Velocidad: 70, Vida: 60 };
            break;
        case 'emily':
            characterName = "Emily";
            characterImage = "images/emily.png";
            characterStats = { Fuerza: 60, Velocidad: 80, Vida: 70 };
            break;
        case 'william':
            characterName = "William";
            characterImage = "images/william.png";
            characterStats = { Fuerza: 90, Velocidad: 60, Vida: 50 };
            break;
        case 'olivia':
            characterName = "Olivia";
            characterImage = "images/olivia.png";
            characterStats = { Fuerza: 50, Velocidad: 90, Vida: 80 };
            break;
        case 'michael':
            characterName = "Michael";
            characterImage = "images/michael.png";
            characterStats = { Fuerza: 70, Velocidad: 70, Vida: 70 };
            break;
        case 'charlotte':
            characterName = "Charlotte";
            characterImage = "images/charlotte.png";
            characterStats = { Fuerza: 60, Velocidad: 60, Vida: 90 };
            break;
        case 'benjamin':
            characterName = "Benjamin";
            characterImage = "images/benjamin.png";
            characterStats = { Fuerza: 85, Velocidad: 65, Vida: 55 };
            break;
        case 'sophia':
            characterName = "Sophia";
            characterImage = "images/sophia.png";
            characterStats = { Fuerza: 55, Velocidad: 85, Vida: 75 };
            break;
        case 'henry':
            characterName = "Henry";
            characterImage = "images/henry.png";
            characterStats = { Fuerza: 75, Velocidad: 75, Vida: 65 };
            break;
        case 'isabella':
            characterName = "Isabella";
            characterImage = "images/isabella.png";
            characterStats = { Fuerza: 65, Velocidad: 75, Vida: 85 };
            break;
        case 'alexander':
            characterName = "Alexander";
            characterImage = "images/alexander.png";
            characterStats = { Fuerza: 80, Velocidad: 60, Vida: 70 };
            break;
        case 'grace':
            characterName = "Grace";
            characterImage = "images/grace.png";
            characterStats = { Fuerza: 50, Velocidad: 80, Vida: 90 };
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