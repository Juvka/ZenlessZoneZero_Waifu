document.addEventListener('DOMContentLoaded', () => {
    const characters = {
        'Jane Doe': { image: 'images/JaneDoe.webp', back_image: 'images/backImages/JaneDoe.webp', faction: { name: '«Группа особого реагирования угрозыска»', image: 'images/factions/CriminalInvestigationSpecialResponseTeam.webp' } },
        'Nicole Demara': { image: 'images/NicoleDemara.webp', back_image: 'images/backImages/NicoleDemara.webp', faction: { name: '«Хитрые зайцы»', image: 'images/factions/CunningHares.webp' } },
        'Burnice White': { image: 'images/BurniceWhite.webp', back_image: 'images/backImages/BurniceWhite.webp', faction: { name: '«Сыны Калидона»', image: 'images/factions/SonsofCalydon.webp' } },
        'Caesar King': { image: 'images/CaesarKing.webp', back_image: 'images/backImages/CaesarKing.webp', faction: { name: '«Сыны Калидона»', image: 'images/factions/SonsofCalydon.webp' } },
        'Zhu Yuan': { image: 'images/Zhuyuan.webp', back_image: 'images/backImages/Zhuyuan.webp', faction: { name: '«Группа особого реагирования угрозыска»', image: 'images/factions/CriminalInvestigationSpecialResponseTeam.webp' } },
        'Hoshimi Miyabi': { image: 'images/Miyabi.webp', back_image: 'images/backImages/Miyabi.webp', faction: { name: '«Секция 6»', image: 'images/factions/Section6.webp' } },
        'Tsukishiro Yanagi': { image: 'images/Yanagi.webp', back_image: 'images/backImages/Yanagi.webp', faction: { name: '«Секция 6»', image: 'images/factions/Section6.webp' } },
        'Grace Howard': { image: 'images/GraceHoward.webp', back_image: 'images/backImages/GraceHoward.webp', faction: { name: '«Белобог»', image: 'images/factions/Belobog.webp' } },
        'Ellen Joe': { image: 'images/EllenJoe.webp', back_image: 'images/backImages/EllenJoe.webp', faction: { name: '«Агентство домашнего персонала Виктория»', image: 'images/factions/VictoriaHousekeeping.webp' } },
        'Evelyn Chevalier': { image: 'images/Evelyn.webp', back_image: 'images/backImages/Evelyn.webp', faction: { name: '«Созвездие Лиры»', image: 'images/factions/StarsofLyra.webp' } },
        'Astra Yao': { image: 'images/AstraYao.webp', back_image: 'images/backImages/AstraYao.webp', faction: { name: '«Созвездие Лиры»', image: 'images/factions/StarsofLyra.webp' } },
        'Belle': {image: 'images/Belle.webp', back_image: 'images/backImages/Belle.webp'},
        'Soldier 0 Anby': {image: 'images/Soldier0Anby.webp', back_image: 'images/backImages/Soldier0Anby.webp', faction: {name: '«Отряд Обол»', image: 'images/factions/Obol.webp'}},
        'Pulchra Fellini': {image: 'images/Pulchra.webp' , back_image: 'images/backImages/Pulchra.webp', faction: {name: '«Сыны Калидона»', image: 'images/factions/SonsofCalydon.webp '}},
        'Trigger' : {image: 'images/Trigger.webp', back_image: 'images/backImages/Trigger.webp', faction: {name: '«Отряд Обол»', image: 'images/factions/Obol.webp'}},
        'Vivian Banshee' : {image: 'images/Vivian.webp', back_image: 'images/backImages/Vivian.webp', faction: {name: '«Пересмешники»', image: 'images/factions/Mockingbird.webp'}},
        'Yixuan' : {image: 'images/Yixuan.webp', back_image: 'images/backImages/Yixuan.webp', faction: {name: '«Школа горы Юнькуй»', image: 'images/factions/YunkuiSummit.webp'}}
    };

    const container = document.querySelector('.grid-container');
    const isMobile = window.innerWidth <= 768;

    // Создаем карточки персонажей
    Object.entries(characters).forEach(([characterName, characterData], index) => {
        const card = document.createElement('div');
        card.className = 'character-card';
        
        // Для мобильных - добавляем задержку анимации для эффекта последовательного появления
        if (isMobile) {
            card.style.transitionDelay = `${index * 0.1}s`;
        }

        // Изображение персонажа
        const img = document.createElement('img');
        img.src = characterData.image;
        img.alt = characterName;
        img.className = 'char-image';
        card.appendChild(img);

        // Имя персонажа
        const name = document.createElement('h3');
        name.textContent = characterName;
        card.appendChild(name);

        // Информация о фракции
        const factionInfo = document.createElement('div');
        factionInfo.className = 'card-faction-info';

        if (characterData.faction) {
            const factionImg = document.createElement('img');
            factionImg.src = characterData.faction.image;
            factionImg.alt = characterData.faction.name;
            factionInfo.appendChild(factionImg);

            const factionName = document.createElement('span');
            factionName.textContent = characterData.faction.name;
            factionInfo.appendChild(factionName);
        } else {
            const noFactionName = document.createElement('span');
            noFactionName.textContent = 'Нет фракции';
            factionInfo.appendChild(noFactionName);
        }
        
        card.appendChild(factionInfo);
        container.appendChild(card);
    });

    // Анимация появления карточек при прокрутке (только для мобильных)
    if (isMobile) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -20px 0px'
        });

        document.querySelectorAll('.character-card').forEach(card => {
            observer.observe(card);
        });
    }
});
