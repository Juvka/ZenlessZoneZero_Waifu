document.addEventListener('DOMContentLoaded', () => {
    const characters = {
        'Jane Doe': { image: 'images/JaneDoe.jpg', faction: { name: '«Группа особого реагирования угрозыска»', image: 'images/factions/CriminalInvestigationSpecialResponseTeam.png' } },
        'Nicole Demara': { image: 'images/NicoleDemara.jpg', faction: { name: '«Хитрые зайцы»', image: 'images/factions/CunningHares.png' } },
        'Burnice White': { image: 'images/Burnice.jpg', faction: { name: '«Сыны Калидона»', image: 'images/factions/SonsofCalydon.png' } },
        'Caesar King': { image: 'images/Caesar.jpg', faction: { name: '«Сыны Калидона»', image: 'images/factions/SonsofCalydon.png' } },
        'Zhu Yuan': { image: 'images/Zhuyuan.png', faction: { name: '«Группа особого реагирования угрозыска»', image: 'images/factions/CriminalInvestigationSpecialResponseTeam.png' } },
        'Hoshimi Miyabi': { image: 'images/Miyabi.png', faction: { name: '«Секция 6»', image: 'images/factions/Section6.png' } },
        'Tsukishiro Yanagi': { image: 'images/Yanagi.jpg', faction: { name: '«Секция 6»', image: 'images/factions/Section6.png' } },
        'Grace Howard': { image: 'images/Grace.jpg', faction: { name: '«Белобог»', image: 'images/factions/Belobog.png' } },
        'Ellen Joe': { image: 'images/Ellen.jpg', faction: { name: '«Агентство домашнего персонала Виктория»', image: 'images/factions/VictoriaHousekeeping.png' } },
        'Evelyn Chevalier': { image: 'images/Evelyn.png', faction: { name: '«Созвездие Лиры»', image: 'images/factions/StarsofLyra.png' } },
        'Astra Yao': { image: 'images/AstraYao.png', faction: { name: '«Созвездие Лиры»', image: 'images/factions/StarsofLyra.png' } },
        'Belle': {image: 'images/Belle.jpg'},
        'Soldier 0 Anby': {image: 'images/SoldierAnby.jpg', faction: {name: '«Отряд Обол»', image: 'images/factions/Obol.png'}},
        'Pulchra Fellini': {image: 'images/Pulchra.png' , faction: {name: '«Сыны Калидона»', image: 'images/factions/SonsofCalydon.png '}},
        'Trigger' : {image: 'images/Trigger.png', faction: {name: '«Отряд Обол»', image: 'images/factions/Obol.png'}},
        'Vivian Banshee' : {image: 'images/vivian.jpg', faction: {name: '«Пересмешники»', image: 'images/factions/Mockingbird.png'}},
        'Yixuan' : {image: 'images/Yixuan.jpg', faction: {name: '«Школа горы Юнькуй»', image: 'images/factions/YunkuiSummit.png'}}
    };

    const arr = Object.keys(characters);
    const newCharacterButton = document.getElementById('newCharacterButton');

    function createCharacterContainer() {
        const container = document.createElement('div');
        container.className = 'container';

        const characterWrapper = document.createElement('div');
        characterWrapper.id = 'character-wrapper';

        const character = document.createElement('div');
        character.id = 'character';

        const imgElement = document.createElement('img');
        imgElement.src = '';
        imgElement.alt = 'Character Image';
        imgElement.className = 'hidden';

        const infoWrapper = document.createElement('div');
        infoWrapper.id = 'info-wrapper';

        const characterName = document.createElement('div');
        characterName.id = 'character-name';
        characterName.className = 'hidden';

        const buttonWrapper = document.createElement('span');
        const newButton = document.createElement('button');
        newButton.id = 'newCharacterButton';
        newButton.textContent = 'Выбрать другую';

        character.appendChild(imgElement);
        infoWrapper.appendChild(characterName);
        buttonWrapper.appendChild(newButton);
        infoWrapper.appendChild(buttonWrapper);
        characterWrapper.appendChild(character);
        characterWrapper.appendChild(infoWrapper);
        container.appendChild(characterWrapper);

        document.body.appendChild(container);
        newCharacterButton.remove();

        return { imgElement, characterName, newButton, infoWrapper };
    }

    function displayRandomCharacter(imgElement, characterName, infoWrapper) {
        const randomItem = arr[Math.floor(Math.random() * arr.length)];
        const characterData = characters[randomItem];

        if (characterData) {
            imgElement.src = characterData.image;
            imgElement.classList.remove('hidden');
            characterName.textContent = randomItem;
            characterName.classList.remove('hidden');

            // Удаляем старую информацию о фракции, если она есть
            const factionInfo = document.getElementById('faction-info');
            if (factionInfo) {
                factionInfo.remove();
            }

            // Проверяем, есть ли у персонажа фракция
            if (characterData.faction) {
                const factionInfo = document.createElement('div');
                factionInfo.id = 'faction-info';

                const factionImage = document.createElement('img');
                factionImage.id = 'faction-image';
                factionImage.src = characterData.faction.image;
                factionImage.alt = 'Faction Image';

                const factionName = document.createElement('span');
                factionName.id = 'faction-name';
                factionName.textContent = characterData.faction.name;

                factionInfo.appendChild(factionImage);
                factionInfo.appendChild(factionName);
                infoWrapper.insertBefore(factionInfo, infoWrapper.lastChild);
            }
        } else {
            console.error('Фотография для персонажа', randomItem, 'не найдена.');
        }
    }

    newCharacterButton.addEventListener('click', () => {
        newCharacterButton.classList.add('stop-pulse');
        const { imgElement, characterName, newButton, infoWrapper } = createCharacterContainer();
        displayRandomCharacter(imgElement, characterName, infoWrapper);

        newButton.addEventListener('click', () => {
            displayRandomCharacter(imgElement, characterName, infoWrapper);
        });
    });
});

const agentListButton = document.getElementById('agentListButton');
if (agentListButton) {
    agentListButton.addEventListener('click', () => {
        window.location.href = 'agents.html';
    });
}
