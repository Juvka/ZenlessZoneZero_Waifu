document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        'ru': {
            'newCharacterButton': 'Выбрать агента',
            'chooseAnother': 'Выбрать другую',
            'noFaction': 'Нет фракции',
            'factions': {
                '«Группа особого реагирования угрозыска»': '«Threat Investigation Special Response Team»',
                '«Хитрые зайцы»': '«Gentle House»',
                '«Сыны Калидона»': '«Sons of Calydon»',
                '«Секция 6»': '«Section 6»',
                '«Белобог»': '«Belobog»',
                '«Агентство домашнего персонала Виктория»': '«Victoria Housekeeping Agency»',
                '«Созвездие Лиры»': '«Constellation of Lyra»',
                '«Отряд Обол»': '«Obol Squad»',
                '«Пересмешники»': '«Mockingbirds»',
                '«Школа горы Юнькуй»': '«Yunkui Summit School»'
            }
        },
        'en': {
            'newCharacterButton': 'Choose agent',
            'chooseAnother': 'Choose another',
            'noFaction': 'No faction',
            'factions': {
                '«Threat Investigation Special Response Team»': '«Группа особого реагирования угрозыска»',
                '«Gentle House»': '«Хитрые зайцы»',
                '«Sons of Calydon»': '«Сыны Калидона»',
                '«Section 6»': '«Секция 6»',
                '«Belobog»': '«Белобог»',
                '«Victoria Housekeeping Agency»': '«Агентство домашнего персонала Виктория»',
                '«Constellation of Lyra»': '«Созвездие Лиры»',
                '«Obol Squad»': '«Отряд Обол»',
                '«Mockingbirds»': '«Пересмешники»',
                '«Yunkui Summit School»': '«Школа горы Юнькуй»'
            }
        }
    };

    let currentLanguage = 'ru';
    const languageButton = document.getElementById('languageButton');
    
    // Функция перевода
    function translatePage() {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
        languageButton.textContent = currentLanguage === 'ru' ? 'EN' : 'RU';
        
        // Обновляем текст ИСХОДНОЙ кнопки "Выбрать агента"
        const initialButton = document.querySelector('body > #newCharacterButton'); // Select only the initial button
        if (initialButton) {
            initialButton.textContent = translations[currentLanguage]['newCharacterButton'];
        }
        
        // Обновляем текст ВСЕХ динамически созданных кнопок "Выбрать другую"
        const dynamicButtons = document.querySelectorAll('.container #newCharacterButton');
        dynamicButtons.forEach(btn => {
            btn.textContent = translations[currentLanguage]['chooseAnother'];
        });
        
        // Обновляем текст фракций
        const factionNames = document.querySelectorAll('#faction-name');
        factionNames.forEach(el => {
            const originalName = el.dataset.originalName;
            if (originalName) {
                if (currentLanguage === 'en') {
                    el.textContent = translations['ru']['factions'][originalName] || originalName;
                } else {
                    el.textContent = originalName;
                }
            } else if (el.textContent === 'Нет фракции' || el.textContent === 'No faction') {
                el.textContent = translations[currentLanguage]['noFaction'];
            }
        });
    }


    // Обработчик кнопки перевода
    languageButton.addEventListener('click', translatePage);

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
        'Vivian Banshee' : {image: 'images/Vivian.jpg', faction: {name: '«Пересмешники»', image: 'images/factions/Mockingbird.png'}},
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
        // Устанавливаем текст кнопки в зависимости от текущего языка
        newButton.textContent = translations[currentLanguage]['chooseAnother'];

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

        const factionInfo = document.getElementById('faction-info');
        if (factionInfo) factionInfo.remove();

        if (characterData.faction) {
        const factionInfo = document.createElement('div');
        factionInfo.id = 'faction-info';

        const factionImage = document.createElement('img');
        factionImage.id = 'faction-image';
        factionImage.src = characterData.faction.image;
        factionImage.alt = 'Faction Image';

        const factionName = document.createElement('span');
        factionName.id = 'faction-name';
        factionName.dataset.originalName = characterData.faction.name; // Сохраняем оригинальное название
        factionName.textContent = currentLanguage === 'ru' 
            ? characterData.faction.name 
            : (translations['ru']['factions'][characterData.faction.name] || characterData.faction.name);

        factionInfo.appendChild(factionImage);
        factionInfo.appendChild(factionName);   
        infoWrapper.insertBefore(factionInfo, infoWrapper.lastChild);
        } else {
            const factionInfo = document.createElement('div');
            factionInfo.id = 'faction-info';
            
            const factionName = document.createElement('span');
            factionName.id = 'faction-name';
            factionName.textContent = translations[currentLanguage]['noFaction'];
            
            factionInfo.appendChild(factionName);
            infoWrapper.insertBefore(factionInfo, infoWrapper.lastChild);
        }
    }
}

    newCharacterButton.addEventListener('click', () => {
        newCharacterButton.classList.add('stop-pulse');
        const { imgElement, characterName, newButton, infoWrapper } = createCharacterContainer();
        displayRandomCharacter(imgElement, characterName, infoWrapper);

        newButton.addEventListener('click', () => {
            newButton.textContent = translations[currentLanguage]['chooseAnother'];
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
