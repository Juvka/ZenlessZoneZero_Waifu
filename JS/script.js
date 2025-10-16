document.addEventListener('DOMContentLoaded', () => {
    const translations = {
        'ru': {
            'newCharacterButton': 'Выбрать агента',
            'chooseAnother': 'Выбрать другую',
            'noFaction': 'Нет фракции',
            'allCharactersButton': 'Все персонажи',
            'factions': {
                '«Группа особого реагирования угрозыска»': '«Threat Investigation Special Response Team»',
                '«Хитрые зайцы»': '«Cunning Hares»',
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
            'allCharactersButton': 'All characters',
            'factions': {
                // Здесь ключи - это русские названия, а значения - их английские переводы
                '«Группа особого реагирования угрозыска»': '«Threat Investigation Special Response Team»',
                '«Хитрые зайцы»': '«Cunning Hares»',
                '«Сыны Калидона»': '«Sons of Calydon»',
                '«Секция 6»': '«Section 6»',
                '«Белобог»': '«Belobog»',
                '«Агентство домашнего персонала Виктория»': '«Victoria Housekeeping Agency»',
                '«Созвездие Лиры»': '«Constellation of Lyra»',
                '«Отряд Обол»': '«Obol Squad»',
                '«Пересмешники»': '«Mockingbirds»',
                '«Школа горы Юнькуй»': '«Yunkui Summit School»'
            }
        }
    };

    let currentLanguage = localStorage.getItem('language') || 'ru';
    const languageButton = document.getElementById('languageButton');

    function applyTranslation() {
        languageButton.textContent = currentLanguage === 'ru' ? 'EN' : 'RU';

        const initialButton = document.querySelector('body > #newCharacterButton');
        if (initialButton) {
            initialButton.textContent = translations[currentLanguage]['newCharacterButton'];
        }

        const dynamicButtons = document.querySelectorAll('.container #newCharacterButton');
        dynamicButtons.forEach(btn => {
            btn.textContent = translations[currentLanguage]['chooseAnother'];
        });

        const allCharactersButton = document.getElementById('allCharactersButton');
        if (allCharactersButton) {
            allCharactersButton.textContent = translations[currentLanguage]['allCharactersButton'];
        }

        const factionNames = document.querySelectorAll('#faction-name');
        factionNames.forEach(el => {
            const originalName = el.dataset.originalName; // Получаем оригинальное (русское) название

            if (originalName) {
                // Если текущий язык английский, ищем перевод по русскому названию
                if (currentLanguage === 'en') {
                    el.textContent = translations['en']['factions'][originalName] || originalName;
                } else {
                    // Если текущий язык русский, используем оригинальное название
                    el.textContent = originalName;
                }
            } else if (el.textContent === translations['ru']['noFaction'] || el.textContent === translations['en']['noFaction']) {
                // Обработка "Нет фракции" / "No faction"
                el.textContent = translations[currentLanguage]['noFaction'];
            }
        });
    }

    function translatePage() {
        currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
        localStorage.setItem('language', currentLanguage);
        applyTranslation();
    }

    // Применяем перевод при загрузке страницы, если язык уже выбран
    applyTranslation();

    languageButton.addEventListener('click', translatePage);

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
        // Fufu
    };

    // Единая ссылка для перехода при клике на любую карточку видео
    const TELEGRAM_CHANNEL_URL = 'https://t.me/+hSIHiYHmWyQyOTMy';

    // Индивидуальные ссылки на видео для каждого персонажа.
    // Заполните значения ссылками (Telegram/YouTube и т.п.).
    // Оставьте пустым или undefined, чтобы использовать автоматический поиск на YouTube.
    const characterVideos = {
        // Указывайте короткие превью-видео (mp4/webm, 3-8 секунд, без звука) — для легкой загрузки
        // previewX - превью для карточки, urlX - ссылка при клике
        'Jane Doe': { gameplay: '', build: '', story: '', previewGameplay: '', previewBuild: '', previewStory: '' },
        'Nicole Demara': { gameplay: '', build: '', story: '' },
        'Burnice White': { gameplay: '', build: '', story: '' },
        'Caesar King': { gameplay: '', build: '', story: '' },
        'Zhu Yuan': { gameplay: '', build: '', story: '', previewGameplay: 'videos/zhuHati.webm', previewBuild: 'videos/zhuMan.webm', previewStory: ''},
        'Hoshimi Miyabi': { gameplay: '', build: '', story: '' },
        'Tsukishiro Yanagi': { gameplay: '', build: '', story: '' },
        'Grace Howard': { gameplay: '', build: '', story: '' },
        'Ellen Joe': { gameplay: '', build: '', story: '' },
        'Evelyn Chevalier': { gameplay: '', build: '', story: '' },
        'Astra Yao': { gameplay: '', build: '', story: '' },
        'Belle': { gameplay: '', build: '', story: '' },
        'Soldier 0 Anby': { gameplay: '', build: '', story: '' },
        'Pulchra Fellini': { gameplay: '', build: '', story: '' },
        'Trigger': { gameplay: '', build: '', story: '' },
        'Vivian Banshee': { gameplay: '', build: '', story: '' },
        'Yixuan': { gameplay: '', build: '', story: '' },
    };

    // Количество карточек в слайдере для каждого персонажа и заглушки
    const characterVideoCounts = {
        'Zhu Yuan': 15,
        'Jane Doe': 7,
        'Nicole Demara': 7,
        'Caesar King': 4,
        'Hoshimi Miyabi': 5,
        'Tsukishiro Yanagi': 4,
        'Grace Howard': 0, // заглушка
        'Ellen Joe': 6,
        'Evelyn Chevalier': 4,
        'Astra Yao': 3,
        'Belle': 7,
        'Soldier 0 Anby': 0, // заглушка
        'Pulchra Fellini': 2,
        'Trigger': 4,
        'Vivian Banshee': 0, // заглушка
        'Yixuan': 2,
    };

    // Тексты на карточках видео (дефолтные и переопределения по персонажу)
    const videoLabelsDefault = { gameplay: 'Геймплей', build: 'Сборка / билд', story: 'История / лор' };
    const characterVideoTexts = {
        // Пример переопределения:
        // 'Grace Howard': { gameplay: 'Комбо', build: 'Артефакты', story: 'Сюжет' },
        'Zhu Yuan': { gameplay: 'С псом эфириалов', build: 'С подростком', story: 'С рейдерами каверн' },
    };

    const arr = Object.keys(characters);
    const newCharacterButton = document.getElementById('newCharacterButton'); // Изначальная кнопка
    let lastCharacter = null; // Переменная для хранения последнего выбранного персонажа

    function createCharacterContainer() {
        const container = document.createElement('div');
        container.className = 'container'; // Изначально без анимационного класса

        const characterWrapper = document.createElement('div');
        characterWrapper.id = 'character-wrapper';

        const characterDiv = document.createElement('div');
        characterDiv.id = 'character';

        characterDiv.addEventListener('contextmenu', (e) => {
            e.preventDefault();
        });

        const cardInner = document.createElement('div');
        cardInner.className = 'character-card-inner';

        const cardFront = document.createElement('div');
        cardFront.className = 'character-card-front';
        const imgElementFront = document.createElement('img');
        imgElementFront.alt = 'Character Image Front';
        imgElementFront.loading = 'lazy';
        cardFront.appendChild(imgElementFront);

        const cardBack = document = document.createElement('div');
        cardBack.className = 'character-card-back';
        const imgElementBack = document.createElement('img');
        imgElementBack.alt = 'Character Image Back';
        imgElementBack.loading = 'lazy';
        cardBack.appendChild(imgElementBack);

        cardInner.appendChild(cardFront);
        cardInner.appendChild(cardBack);
        characterDiv.appendChild(cardInner);

        const infoWrapper = document.createElement('div');
        infoWrapper.id = 'info-wrapper';

        const characterName = document.createElement('div');
        characterName.id = 'character-name';

        const buttonWrapper = document.createElement('span');
        const newButton = document.createElement('button'); // Новая кнопка "Выбрать другую"
        newButton.id = 'newCharacterButton'; // Даем ей тот же ID, чтобы CSS стили применялись
        newButton.textContent = translations[currentLanguage]['chooseAnother'];

        infoWrapper.appendChild(characterName);
        buttonWrapper.appendChild(newButton);
        infoWrapper.appendChild(buttonWrapper);
        characterWrapper.appendChild(characterDiv);
        characterWrapper.appendChild(infoWrapper);
        container.appendChild(characterWrapper);

        document.body.appendChild(container);

        // Создаем (если нет) секцию для видео под основным контентом
        let videosSection = document.getElementById('videos-section');
        if (!videosSection) {
            videosSection = document.createElement('section');
            videosSection.id = 'videos-section';
            document.body.appendChild(videosSection);
        }

        cardInner.addEventListener('click', () => {
            cardInner.classList.toggle('is-flipped');
        });

        return { container, imgElementFront, imgElementBack, characterName, newButton, infoWrapper, cardInner };
    }

    function displayRandomCharacter(imgElementFront, imgElementBack, characterName, infoWrapper, containerElement) {
        // Убираем класс анимации перед сменой контента, чтобы его можно было добавить снова
        if (containerElement && containerElement.classList.contains('animate-in')) {
            containerElement.classList.remove('animate-in');
            // Принудительная перерисовка, чтобы браузер осознал удаление класса
            void containerElement.offsetWidth;
        }

        let randomItem;
        let availableCharacters = [...arr]; // Создаем копию массива всех персонажей

        // Если предыдущий персонаж был, удаляем его из доступных для выбора
        if (lastCharacter && availableCharacters.length > 1) { // Проверяем, что есть еще персонажи для выбора
            const lastCharacterIndex = availableCharacters.indexOf(lastCharacter);
            if (lastCharacterIndex > -1) {
                availableCharacters.splice(lastCharacterIndex, 1);
            }
        }

        // Выбираем случайного персонажа из доступных
        randomItem = availableCharacters[Math.floor(Math.random() * availableCharacters.length)];
        lastCharacter = randomItem; // Обновляем последний выбранный персонаж

        const characterData = characters[randomItem];

        if (characterData) {
            imgElementFront.src = characterData.image;
            imgElementBack.src = characterData.back_image;
            characterName.textContent = randomItem;

            const factionInfo = document.getElementById('faction-info');
            if (factionInfo) factionInfo.remove();

            if (characterData.faction) {
                const newFactionInfo = document.createElement('div');
                newFactionInfo.id = 'faction-info';

                const factionImage = document.createElement('img');
                factionImage.id = 'faction-image';
                factionImage.src = characterData.faction.image;
                factionImage.alt = 'Faction Image';
                factionImage.loading = 'lazy';

                const factionName = document.createElement('span');
                factionName.id = 'faction-name';
                // Сохраняем оригинальное (русское) название фракции в dataset
                factionName.dataset.originalName = characterData.faction.name;
                // Присваиваем текст в зависимости от текущего языка
                factionName.textContent = currentLanguage === 'ru'
                    ? characterData.faction.name
                    : (translations['en']['factions'][characterData.faction.name] || characterData.faction.name);


                newFactionInfo.appendChild(factionImage);
                newFactionInfo.appendChild(factionName);
                infoWrapper.insertBefore(newFactionInfo, infoWrapper.lastChild);
            } else {
                const newFactionInfo = document.createElement('div');
                newFactionInfo.id = 'faction-info';

                const factionName = document.createElement('span');
                factionName.id = 'faction-name';
                // Для "Нет фракции" также сохраняем в dataset, чтобы можно было переключать
                factionName.dataset.originalName = translations['ru']['noFaction']; // Сохраняем русское "Нет фракции"
                factionName.textContent = translations[currentLanguage]['noFaction'];

                newFactionInfo.appendChild(factionName);
                infoWrapper.insertBefore(newFactionInfo, infoWrapper.lastChild);
            }
        }

        // Добавляем класс анимации снова после обновления контента
        if (containerElement) {
            containerElement.classList.add('animate-in');
        }

        // Рендерим секцию видео, соответствующую выбранному персонажу
        renderVideosSection(randomItem);
    }

    // Рендер секции видео под контентом
    function renderVideosSection(characterDisplayName) {
        const section = document.getElementById('videos-section');
        if (!section) return;

        // Заголовок и сетка
        section.innerHTML = '';
        const title = document.createElement('h2');
        title.className = 'videos-title';
        title.textContent = `Горячие фуллы с ${characterDisplayName}`;

        let count = characterVideoCounts[characterDisplayName];
        // По умолчанию 3, но не больше 3 и сохраняя нули как пустые состояния
        count = count == null ? 3 : Math.min(3, count);

        // Заглушка для отсутствующих видео
        if (count === 0) {
            const empty = document.createElement('div');
            empty.className = 'videos-empty';
            empty.textContent = 'Видео пока не появилось :(';
            section.appendChild(title);
            section.appendChild(empty);
            document.body.appendChild(section);
            return;
        }

        const grid = document.createElement('div');
        grid.className = 'videos-grid';

        // Темы карточек (подписи могут переопределяться для персонажа)
        const topics = [
            { key: 'gameplay', label: characterVideoTexts[characterDisplayName]?.gameplay || videoLabelsDefault.gameplay },
            { key: 'build', label: characterVideoTexts[characterDisplayName]?.build || videoLabelsDefault.build },
            { key: 'story', label: characterVideoTexts[characterDisplayName]?.story || videoLabelsDefault.story },
        ];

        const makeCard = (topic) => {
            const query = encodeURIComponent(`${characterDisplayName} Zenless Zone Zero ${topic.key}`);
            const fallbackUrl = `https://www.youtube.com/results?search_query=${query}`;
            const specific = (characterVideos[characterDisplayName] || {})[topic.key];
            const url = TELEGRAM_CHANNEL_URL; // всегда ведём на Телеграм-канал

            const card = document.createElement('a');
            card.className = 'video-card';
            card.href = url;
            card.target = '_blank';
            card.rel = 'noopener noreferrer';

            // Лёгкое фоновое превью-видео, если задано
            const previews = characterVideos[characterDisplayName] || {};
            const previewMap = {
                gameplay: previews.previewGameplay,
                build: previews.previewBuild,
                story: previews.previewStory,
            };
            const previewSrc = previewMap[topic.key];
            if (previewSrc) {
                const vid = document.createElement('video');
                vid.className = 'video-bg';
                vid.muted = true;
                vid.loop = true;
                vid.playsInline = true;
                vid.preload = 'none'; // экономим трафик
                vid.setAttribute('data-src', previewSrc); // отложенная загрузка
                card.appendChild(vid);
            }

            const overlay = document.createElement('div');
            overlay.className = 'video-card-overlay';

            const label = document.createElement('div');
            label.className = 'video-card-label';
            label.textContent = topic.label;

            // Fallback-превью: используем картинку персонажа, если видео не задано
            if (!previewSrc) {
                card.style.backgroundImage = `url(${characters[characterDisplayName].image})`;
                card.style.backgroundSize = 'cover';
                card.style.backgroundPosition = 'center';
            }

            overlay.appendChild(label);
            card.appendChild(overlay);
            return card;
        };

        // Заполняем карточки циклически по темам до нужного количества
        for (let i = 0; i < count; i++) {
            const topic = topics[i % topics.length];
            grid.appendChild(makeCard(topic));
        }

        section.appendChild(title);
        section.appendChild(grid);

        // Убрана логика слайдера: без автопрокрутки, прогресс-бара и drag-to-scroll

        // Гарантируем, что секция расположена внизу всего контента
        // (перемещает элемент в конец body, не дублируя его)
        document.body.appendChild(section);

        // Автовоспроизведение превью при появлении в видимой области
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                const video = entry.target;
                if (entry.isIntersecting) {
                    if (video.dataset.src && !video.src) {
                        video.src = video.dataset.src;
                    }
                    const playPromise = video.play();
                    if (playPromise && typeof playPromise.then === 'function') {
                        playPromise.catch(() => {});
                    }
                } else {
                    video.pause();
                }
            });
        }, { rootMargin: '100px' });

        document.querySelectorAll('#videos-section .video-bg').forEach(v => observer.observe(v));
    }

    // Обработчик для первой кнопки "Выбрать агента"
    newCharacterButton.addEventListener('click', () => {
        newCharacterButton.style.display = 'none'; // Скрываем первую кнопку

        const { container, imgElementFront, imgElementBack, characterName, newButton, infoWrapper, cardInner } = createCharacterContainer();
        displayRandomCharacter(imgElementFront, imgElementBack, characterName, infoWrapper, container); // Передаем контейнер

        // Обработчик для новой кнопки "Выбрать другую"
        newButton.addEventListener('click', () => {
            // Если карточка перевернута, сначала вернем ее
            if (cardInner.classList.contains('is-flipped')) {
                cardInner.classList.remove('is-flipped');
                setTimeout(() => {
                    displayRandomCharacter(imgElementFront, imgElementBack, characterName, infoWrapper, container); // Передаем контейнер
                }, 600); // Дождемся завершения анимации переворота
            } else {
                displayRandomCharacter(imgElementFront, imgElementBack, characterName, infoWrapper, container); // Передаем контейнер
            }
        });
    });
});
