document.addEventListener('DOMContentLoaded', () => {
    const characters = {
        'Jane Doe': 'images/JaneDoe.jpg',
        'Nicole Demara': 'images/NicoleDemara.jpg',
        'Burnice White': 'images/Burnice.jpg',
        'Caesar King': 'images/Caesar.jpg',
        'Zhu Yuan': 'images/Zhuyuan.png',
        'Hoshimi Miyabi': 'images/Miyabi.png',
        'Tsukishiro Yanagi': 'images/Yanagi.jpg',
        'Grace Howard': 'images/Grace.jpg',
        'Ellen Joe': 'images/Ellen.jpg',
        'Evelyn Chevalier': 'images/Evelyn.png',
        'Astra Yao': 'images/AstraYao.png',
        'Belle': 'images/Belle.jpg'
    };

    const arr = Object.keys(characters);
    const newCharacterButton = document.getElementById('newCharacterButton');

    function createCharacterContainer() {
        // Создаем контейнер и его содержимое
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

        // Собираем структуру
        character.appendChild(imgElement);
        infoWrapper.appendChild(characterName);
        buttonWrapper.appendChild(newButton);
        infoWrapper.appendChild(buttonWrapper);
        characterWrapper.appendChild(character);
        characterWrapper.appendChild(infoWrapper);
        container.appendChild(characterWrapper);

        // Добавляем контейнер в body
        document.body.appendChild(container);

        // Удаляем старую кнопку
        newCharacterButton.remove();

        // Возвращаем созданные элементы для дальнейшего использования
        return { imgElement, characterName, newButton };
    }

    function displayRandomCharacter(imgElement, characterName) {
        const randomItem = arr[Math.floor(Math.random() * arr.length)];
        const imagePath = characters[randomItem];

        if (imagePath) {
            imgElement.src = imagePath;
            imgElement.classList.remove('hidden');
            characterName.textContent = randomItem;
            characterName.classList.remove('hidden');
        } else {
            console.error('Фотография для персонажа', randomItem, 'не найдена.');
        }
    }

    newCharacterButton.addEventListener('click', () => {
        // Останавливаем анимацию и уменьшаем текст кнопки
        newCharacterButton.classList.add('stop-pulse');

        // Создаем контейнер и получаем элементы
        const { imgElement, characterName, newButton } = createCharacterContainer();

        // Показываем первого случайного персонажа
        displayRandomCharacter(imgElement, characterName);

        // Обработчик для новой кнопки
        newButton.addEventListener('click', () => {
            displayRandomCharacter(imgElement, characterName);
        });
    });
});