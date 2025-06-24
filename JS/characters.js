document.addEventListener('DOMContentLoaded', () => {
    // Полный словарь переводов
    const translations = {
        'ru': {
            'pageTitle': 'Все персонажи - Zenless Zone Zero',
            'homeButton': 'На главную',
            'detailsButton': 'Подробнее',
            'noFaction': 'Нет фракции',
            'selectFaction': 'Выбрать фракцию',
            'allFactions': 'Все фракции',
            'rankLabel': 'Ранг:',
            'heightLabel': 'Рост:',
            'birthdateLabel': 'Дата рождения:',
            'languageButton': 'EN',
            'searchPlaceholder': 'Поиск персонажа...',
            'characters': {
                'character-1': { name: 'Jane Doe', factionName: '«Группа особого реагирования угрозыска»', height: '170 см', birthdate: '16 Февраля', description: 'Кто я? Чистокровная кошка-тирен! Ах, такое редкое происхождение когда-то доставляло мне немало хлопот. Ну зачем же мне врать? Мяу!', quote: 'Ой, ну это было тогда! Сейчас-то я точно говорю правду! Честно-честно!' },
                'character-2': { name: 'Nicole Demara', factionName: '«Хитрые зайцы»', height: '165 см', birthdate: '11 Ноября', description: 'Глава агентства мастеров на все руки «Хитрые зайцы»...несмотря на её любовь к денни, Николь удивительно бездарна в области управления финансами, из-за чего «Хитрые зайцы» вечно оказываются в долгах.', quote: 'Мудрый выбор! Но сразу предупреждаю: мои услуги стоят недешёво!' },
                'character-3': { name: 'Burnice White', factionName: '«Сыны Калидона»', height: '160 см', birthdate: '23 Мая', description: 'Неплохо, да? Для этого нового вкуса "Нитро-топлива" я привезла из города особые ингредиенты... А у меня тут как раз есть специальное энергосберегающее топливо! Попробуй!', quote: 'Что-то ты совсем без настроения. Не хочешь подзаправиться?' },
                'character-4': { name: 'Caesar King', factionName: '«Сыны Калидона»', height: '176 см', birthdate: '16 Марта', description: 'Можешь сесть где угодно. Чувствуй себя как дома». Если уж тебя занесло на Объездную, теперь ты гость Сынов Калидона! Хм... Папаша, а что значит "Долг платежом красен"?', quote: 'Я Цезарь, глава Сынов Калидона.' },
                'character-5': { name: 'Zhu Yuan', factionName: '«Группа особого реагирования угрозыска»', height: '175 см', birthdate: '1 Сентября', description: 'Минуточку. У вас есть разрешение на это интервью? «Да. Вот разрешение от пресс-службы. Ясно. У вас пять минут. Отсчёт пошёл.', quote: 'Капитан Чжу Юань, начальник отдела угрозыска Службы общественной безопасности. Жду указаний.' },
                'character-6': { name: 'Hoshimi Miyabi', factionName: '«Секция 6»', height: '170 см (с ушами)', birthdate: '19 Июня', description: 'Нельзя стать мастером, слепо подражая чужому искусству обращения с мечом... Подобная беспечность недопустима.', quote: 'Нарушение порядка недопустимо.' },
                'character-7': { name: 'Tsukishiro Yanagi', factionName: '«Секция 6»', height: '169 см', birthdate: '21 Сентября', description: 'Янаги — специалист по дальнему бою и высоким технологиям. Её дрон-напарник и энергетическая винтовка позволяют контролировать поле боя с безопасного расстояния.', quote: 'Цель захвачена. Начинаю ликвидацию.' },
                'character-8': { name: 'Grace Howard', factionName: '«Белобог»', height: '170 см', birthdate: '14 Апреля', description: 'Грейс, говоришь? — гаечный ключ подскочил с ответом... В её словаре нет места для "капельки" или "среднего количества", одни только абсолютно ясные "миллилитры".', quote: 'Такие чёткие и прямые линии, просто красота... Не могу удержаться, чтобы не вскрыть и не посмотреть.' },
                'character-9': { name: 'Ellen Joe', factionName: '«Агентство домашнего персонала Виктория»', height: '161 см', birthdate: '4 Января', description: 'Чем проще, тем лучше. Лишним сложностям здесь не рады. Работа не волк. Важно вовремя делать перерывы... чтобы работа поменьше бесила.', quote: 'Уф, опять придётся возиться с заказом... Надо было выбрать другую смену.' },
                'character-10': { name: 'Evelyn Chevalier', factionName: '«Созвездие Лиры»', height: '173 см', birthdate: '17 Октября', description: 'На десять часов подозрительный мужчина в чёрном. Я разберусь. Вы следите за периметром — к Астре никто не должен приближаться.', quote: 'Госпожа Яо отдыхает. Никаких интервью.' },
                'character-11': { name: 'Astra Yao', factionName: '«Созвездие Лиры»', height: '176 см', birthdate: '31 Января', description: 'Поздно-поздно! Я официально приглашаю тебя поучаствовать в моём побеге! План такой: забить на работу, сбежать и, наконец, попасть на Реверб-арену!', quote: 'Следующую песню я посвящаю этому миру!' },
                'character-12': { name: 'Belle', height: '???', birthdate: '???', description: 'Белль — небоевой играбельный персонаж... Вместе со своим братом, Вайзом, она владеет магазином видеопроката Random Play, являющимся прикрытием для их основной деятельности. Они — прокси, вместе работающие под псевдонимом «Фаэтон».', quote: '' },
                'character-13': { name: 'Soldier 0 Anby', factionName: '«Отряд Обол»', height: '156 см', birthdate: '20 Февраля', description: 'Загадочная девушка, которая никогда не рассказывает о своей биографии... Больше всего она любит смотреть кино, но из-за своей неискушённости принимает истории на экране за правду.', quote: 'Новая экипировка перед большой битвой. Хм, в кино всегда так делают' },
                'character-14': { name: 'Pulchra Fellini', factionName: '«Сыны Калидона»', height: '173 см', birthdate: '19 Июня', description: 'Я, Пульхра, готова присоединиться к вам, Сыны Калидона. Предательство? К чему такие громкие слова?.. Это всего лишь разумный выбор.', quote: 'Я безоговорочно предана только победителю. А кто у нас побеждает? Я и каждый раз я' },
                'character-15': { name: 'Trigger', factionName: '«Отряд Обол»', height: '173 см', birthdate: '21 Апреля', description: 'Я найду истинных виновников падения старой столицы, и они заплатят за всё... Под защитой воли, держащей ненависть под контролем, я беру истину на прицел.', quote: 'Я тебя вижу' },
                'character-16': { name: 'Vivian Banshee', factionName: '«Пересмешники»', height: '162 см', birthdate: '10 Апреля', description: 'Разбойники? Воры? Называй как хочешь, я не спорю с отребьем. Мой зонтик я разделю только с господином Фаэтоном.', quote: 'Не закрывай окно: птицы принесут любовь и унесут смерть' },
                'character-17': { name: 'Yixuan', factionName: '«Школа горы Юнькуй»', height: '172 см', birthdate: '3 Декабря', description: 'Хочешь научиться читать небесные знамения и предсказывать погоду? Понятно. Возьми несколько из этих наспех нарисованных талисманов... понадобится стабильное интернет-соединение.', quote: 'Переступив порог монастыря, оставьте мирские заботы и церемонии у подножия горы' }
            }
        },
        'en': {
            'pageTitle': 'All Characters - Zenless Zone Zero',
            'homeButton': 'To main',
            'detailsButton': 'Details',
            'noFaction': 'No Faction',
            'selectFaction': 'Select Faction',
            'allFactions': 'All Factions',
            'rankLabel': 'Rank:',
            'heightLabel': 'Height:',
            'birthdateLabel': 'Birthdate:',
            'languageButton': 'RU',
            'searchPlaceholder': 'Search character...',
            'characters': {
                'character-1': { name: 'Jane Doe', factionName: 'Criminal Investigation Special Response Team', height: '170 cm', birthdate: 'February 16', description: "Who am I? A purebred cat-thiren! Ah, such a rare origin once caused me a lot of trouble. Why should I lie? Meow!", quote: "Oh, well that was then! Now I'm telling the truth! For real!" },
                'character-2': { name: 'Nicole Demara', factionName: 'Cunning Hares', height: '165 cm', birthdate: 'November 11', description: 'The head of the "Cunning Hares" jack-of-all-trades agency... Despite her love for denni, Nicole is surprisingly talentless in financial management, which is why the "Cunning Hares" are constantly in debt.', quote: 'A wise choice! But I must warn you: my services are not cheap!' },
                'character-3': { name: 'Burnice White', factionName: 'Sons of Calydon', height: '160 cm', birthdate: 'May 23', description: 'Not bad, huh? For this new "Nitro-fuel" flavor, I brought special ingredients from the city... And I happen to have a special energy-saving fuel right here! Try it!', quote: "You seem a bit down. Don't you want to refuel?" },
                'character-4': { name: 'Caesar King', factionName: 'Sons of Calydon', height: '176 cm', birthdate: 'March 16', description: 'You can sit anywhere. Make yourself at home." If you ended up on the Bypass, you are now a guest of the Sons of Calydon! Hmm... Dad, what does "A debt paid is a debt repaid" mean?', quote: 'I am Caesar, leader of the Sons of Calydon.' },
                'character-5': { name: 'Zhu Yuan', factionName: 'Criminal Investigation Special Response Team', height: '175 cm', birthdate: 'September 1', description: 'Just a moment. Do you have permission for this interview? "Yes. Here is the permission from the press service." I see. You have five minutes. The countdown has begun.', quote: 'Captain Zhu Yuan, head of the Criminal Investigation Department of the Public Security Service. Awaiting your orders.' },
                'character-6': { name: 'Hoshimi Miyabi', factionName: 'Section 6', height: '170 cm (with ears)', birthdate: 'June 19', description: "You can't become a master by blindly imitating someone else's swordsmanship... Such carelessness is unacceptable.", quote: 'Disorder is unacceptable.' },
                'character-7': { name: 'Tsukishiro Yanagi', factionName: 'Section 6', height: '169 cm', birthdate: 'September 21', description: 'Yanagi is a specialist in long-range combat and high technology. Her drone companion and energy rifle allow her to control the battlefield from a safe distance.', quote: 'Target acquired. Commencing liquidation.' },
                'character-8': { name: 'Grace Howard', factionName: 'Belobog', height: '170 cm', birthdate: 'April 14', description: 'Grace, you say? — the wrench chimed in with an answer... In her vocabulary, there\'s no room for "a little bit" or "an average amount," only absolutely clear "milliliters."', quote: 'Such clear and straight lines, just beautiful... I can\'t resist opening it up to take a look.' },
                'character-9': { name: 'Ellen Joe', factionName: 'Victoria Housekeeping', height: '161 cm', birthdate: 'January 4', description: 'The simpler, the better. Unnecessary complexities are not welcome here. Work is not a wolf. It\'s important to take breaks on time... so that work is less annoying.', quote: 'Ugh, I have to deal with an order again... I should have chosen a different shift.' },
                'character-10': { name: 'Evelyn Chevalier', factionName: 'Stars of Lyra', height: '173 cm', birthdate: 'October 17', description: 'At ten o\'clock, a suspicious man in black. I\'ll take care of it. You watch the perimeter — no one should get near Astra.', quote: 'Miss Yao is resting. No interviews.' },
                'character-11': { name: 'Astra Yao', factionName: 'Stars of Lyra', height: '176 cm', birthdate: 'January 31', description: 'Late, late! I officially invite you to participate in my escape! The plan is this: ditch work, run away, and finally get to the Reverb Arena!', quote: 'I dedicate the next song to this world!' },
                'character-12': { name: 'Belle', height: '???', birthdate: '???', description: 'Belle is a non-combat playable character... Together with her brother, Wise, she owns the video rental store Random Play, which is a front for their main business. They are proxies, working together under the pseudonym "Phaethon".', quote: '' },
                'character-13': { name: 'Soldier 0 Anby', factionName: 'Obol Squad', height: '156 cm', birthdate: 'February 20', description: 'A mysterious girl who never talks about her past... She loves watching movies most of all, but due to her inexperience, she takes the stories on the screen as truth.', quote: 'New equipment before a big battle. Hmm, they always do that in the movies' },
                'character-14': { name: 'Pulchra Fellini', factionName: 'Sons of Calydon', height: '173 cm', birthdate: 'June 19', description: 'I, Pulchra, am ready to join you, Sons of Calydon. Betrayal? Why such strong words? It\'s just a reasonable choice.', quote: 'I am unconditionally loyal only to the winner. And who wins? Me, and every time, me' },
                'character-15': { name: 'Trigger', factionName: 'Obol Squad', height: '173 cm', birthdate: 'April 21', description: 'I will find the true culprits behind the fall of the old capital, and they will pay for everything... Protected by the will that keeps hatred in check, I take aim at the truth.', quote: 'I see you' },
                'character-16': { name: 'Vivian Banshee', factionName: 'Mockingbirds', height: '162 cm', birthdate: 'April 10', description: 'Robbers? Thieves? Call it what you want, I don\'t argue with riffraff. I will share my umbrella only with Mr. Phaethon.', quote: 'Don\'t close the window: the birds will bring love and take away death' },
                'character-17': { name: 'Yixuan', factionName: 'Yunkui Summit School', height: '172 cm', birthdate: 'December 3', description: 'Do you want to learn to read the celestial signs and predict the weather? I see. Take a few of these hastily drawn talismans... you will need a stable internet connection.', quote: 'Having crossed the threshold of the monastery, leave worldly cares and ceremonies at the foot of the mountain' }
            }
        }
    };
    
    // Структура с данными персонажей
    const characters = {
        'character-1': { image: 'images/JaneDoe.webp', back_image: 'images/mental/JaneDoe.webp', faction: { image: 'images/factions/CriminalInvestigationSpecialResponseTeam.webp' }, rank: 'S' },
        'character-2': { image: 'images/NicoleDemara.webp', back_image: 'images/mental/NicoleDemara.webp', faction: { image: 'images/factions/CunningHares.webp' }, rank: 'A' },
        'character-3': { image: 'images/BurniceWhite.webp', back_image: 'images/mental/BurniceWhite.webp', faction: { image: 'images/factions/SonsofCalydon.webp' }, rank: 'S' },
        'character-4': { image: 'images/CaesarKing.webp', back_image: 'images/mental/CaesarKing.webp', faction: { image: 'images/factions/SonsofCalydon.webp' }, rank: 'S' },
        'character-5': { image: 'images/Zhuyuan.webp', back_image: 'images/mental/ZhuYuan.webp', faction: { image: 'images/factions/CriminalInvestigationSpecialResponseTeam.webp' }, rank: 'S' },
        'character-6': { image: 'images/Miyabi.webp', back_image: 'images/mental/HoshimiMiyabi.webp', faction: { image: 'images/factions/Section6.webp' }, rank: 'S' },
        'character-7': { image: 'images/Yanagi.webp', back_image: 'images/mental/Yanagi.webp', faction: { image: 'images/factions/Section6.webp' }, rank: 'S' },
        'character-8': { image: 'images/GraceHoward.webp', back_image: 'images/mental/GraceHoward.webp', faction: { image: 'images/factions/Belobog.webp' }, rank: 'S' },
        'character-9': { image: 'images/EllenJoe.webp', back_image: 'images/mental/EllenJoe.webp', faction: { image: 'images/factions/VictoriaHousekeeping.webp' }, rank: 'S' },
        'character-10': { image: 'images/Evelyn.webp', back_image: 'images/mental/Evelyn.webp', faction: { image: 'images/factions/StarsofLyra.webp' }, rank: 'S' },
        'character-11': { image: 'images/AstraYao.webp', back_image: 'images/mental/AstraYao.webp', faction: { image: 'images/factions/StarsofLyra.webp' }, rank: 'S' },
        'character-12': { image: 'images/Belle.webp', back_image: 'images/backImages/Belle.webp', faction: null, rank: '???' },
        'character-13': { image: 'images/Soldier0Anby.webp', back_image: 'images/mental/Soldier0Anby.webp', faction: { image: 'images/factions/Obol.webp' }, rank: 'S' },
        'character-14': { image: 'images/Pulchra.webp', back_image: 'images/mental/Pulchra.webp', faction: { image: 'images/factions/SonsofCalydon.webp' }, rank: 'A' },
        'character-15': { image: 'images/Trigger.webp', back_image: 'images/mental/Trigger.webp', faction: { image: 'images/factions/Obol.webp' }, rank: 'S' },
        'character-16': { image: 'images/Vivian.webp', back_image: 'images/mental/Vivian.webp', faction: { image: 'images/factions/Mockingbird.webp' }, rank: 'S' },
        'character-17': { image: 'images/Yixuan.webp', back_image: 'images/mental/YixuanCinema.webp', faction: { image: 'images/factions/YunkuiSummit.webp' }, rank: 'S' }
    };

    // Список всех фракций
    const factions = {
        'all': { name: { 'ru': 'Все фракции', 'en': 'All Factions' }, image: '' },
        'CriminalInvestigationSpecialResponseTeam': { name: { 'ru': '«Группа особого реагирования угрозыска»', 'en': 'Criminal Investigation Special Response Team' }, image: 'images/factions/CriminalInvestigationSpecialResponseTeam.webp' },
        'CunningHares': { name: { 'ru': '«Хитрые зайцы»', 'en': 'Cunning Hares' }, image: 'images/factions/CunningHares.webp' },
        'SonsofCalydon': { name: { 'ru': '«Сыны Калидона»', 'en': 'Sons of Calydon' }, image: 'images/factions/SonsofCalydon.webp' },
        'Section6': { name: { 'ru': '«Секция 6»', 'en': 'Section 6' }, image: 'images/factions/Section6.webp' },
        'Belobog': { name: { 'ru': '«Белобог»', 'en': 'Belobog' }, image: 'images/factions/Belobog.webp' },
        'VictoriaHousekeeping': { name: { 'ru': '«Агентство домашнего персонала Виктория»', 'en': 'Victoria Housekeeping' }, image: 'images/factions/VictoriaHousekeeping.webp' },
        'StarsofLyra': { name: { 'ru': '«Созвездие Лиры»', 'en': 'Stars of Lyra' }, image: 'images/factions/StarsofLyra.webp' },
        'Obol': { name: { 'ru': '«Отряд Обол»', 'en': 'Obol Squad' }, image: 'images/factions/Obol.webp' },
        'Mockingbird': { name: { 'ru': '«Пересмешники»', 'en': 'Mockingbirds' }, image: 'images/factions/Mockingbird.webp' },
        'YunkuiSummit': { name: { 'ru': '«Школа горы Юнькуй»', 'en': 'Yunkui Summit School' }, image: 'images/factions/YunkuiSummit.webp' },
        'none': { name: { 'ru': 'Без фракции', 'en': 'No Faction' }, image: '' }
    };

    let currentLanguage = localStorage.getItem('language') || 'ru';
    let currentCharacterContext = { id: null };
    let currentFactionFilter = 'all';
    let currentSearchQuery = '';

    const container = document.querySelector('.grid-container');
    const modal = document.getElementById('characterModal');
    const languageButton = document.getElementById('languageButton');
    
    // Инициализация приложения
    function init() {
        createFilterControls();
        renderCharacterCards();
        setupEventListeners();
    }

    // Создание элементов управления фильтрами
    function createFilterControls() {
        const controlsContainer = document.getElementById('top-left-controls');
        
        // Создаем контейнер для левой части (поиск будет слева)
        const controlsLeft = document.createElement('div');
        controlsLeft.className = 'controls-left';
        
        // Переносим существующие кнопки в новый контейнер
        const languageButton = document.getElementById('languageButton');
        const homeButton = document.getElementById('homeButton');
        
        // Добавляем кнопки в правильном порядке
        controlsLeft.appendChild(languageButton);
        controlsLeft.appendChild(homeButton);
        
        // Добавляем поисковую строку (теперь она будет слева)
        const searchField = createSearchField();
        controlsLeft.appendChild(searchField);
        
        // Вставляем левую часть в начало контейнера
        controlsContainer.insertBefore(controlsLeft, controlsContainer.firstChild);
        
        // Фильтр фракций (теперь он будет справа)
        const factionFilter = createFactionFilter();
        controlsContainer.appendChild(factionFilter);
    }

    // Создание фильтра фракций
    function createFactionFilter() {
        const filterContainer = document.createElement('div');
        filterContainer.className = 'faction-filter-container';
        
        const filterButton = document.createElement('button');
        filterButton.className = 'faction-filter-button';
        filterButton.innerHTML = `
            <span class="faction-filter-text">${translations[currentLanguage].selectFaction}</span>
            <svg class="filter-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
        
        const dropdown = document.createElement('div');
        dropdown.className = 'faction-dropdown';
        
        function updateFactionOptions() {
            dropdown.innerHTML = '';
            
            Object.entries(factions).forEach(([id, data]) => {
                const option = document.createElement('div');
                option.className = 'faction-option';
                option.dataset.factionId = id;
                
                if (id !== 'all' && id !== 'none' && data.image) {
                    option.innerHTML = `
                        <img src="${data.image}" alt="${data.name[currentLanguage]}" class="faction-option-icon">
                        <span>${data.name[currentLanguage]}</span>
                    `;
                } else {
                    option.innerHTML = `<span>${data.name[currentLanguage]}</span>`;
                }
                
                option.addEventListener('click', () => {
                    currentFactionFilter = id;
                    updateFactionButton(filterButton, id, data);
                    toggleDropdown();
                    renderCharacterCards();
                });
                
                dropdown.appendChild(option);
            });
        }
        
        function toggleDropdown() {
            const isShowing = dropdown.classList.contains('show');
            
            if (isShowing) {
                dropdown.classList.remove('show');
                dropdown.classList.add('hide');
                
                dropdown.addEventListener('animationend', () => {
                    dropdown.classList.remove('hide');
                }, { once: true });
            } else {
                // Сначала убираем предыдущие классы анимации
                dropdown.classList.remove('hide');
                
                // Затем добавляем класс для показа
                dropdown.classList.add('show');
                
                // Обновляем варианты при каждом открытии
                updateFactionOptions();
            }
        }
        
        filterButton.addEventListener('click', (e) => {
            e.stopPropagation();
            toggleDropdown();
        });
        
        // Закрытие при клике вне элемента
        document.addEventListener('click', (e) => {
            if (!filterContainer.contains(e.target)) {
                if (dropdown.classList.contains('show')) {
                    dropdown.classList.remove('show');
                    dropdown.classList.add('hide');
                    
                    dropdown.addEventListener('animationend', () => {
                        dropdown.classList.remove('hide');
                    }, { once: true });
                }
            }
        });
        
        filterContainer.appendChild(filterButton);
        filterContainer.appendChild(dropdown);
        
        return filterContainer;
    }

    // Обновление кнопки фильтра
function updateFactionButton(button, factionId, factionData) {
    if (factionId === 'all') {
        button.innerHTML = `
            <span class="faction-filter-text">${translations[currentLanguage].selectFaction}</span>
            <svg class="filter-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
    } else {
        const faction = factions[factionId];
        button.innerHTML = `
            ${faction.image ? `<img src="${faction.image}" alt="${faction.name[currentLanguage]}" class="faction-button-icon">` : ''}
            <span class="faction-filter-text">${faction.name[currentLanguage]}</span>
            <svg class="filter-arrow" width="12" height="8" viewBox="0 0 12 8" fill="none">
                <path d="M1 1L6 6L11 1" stroke="white" stroke-width="2" stroke-linecap="round"/>
            </svg>
        `;
    }
}

    // Создание поля поиска
    function createSearchField() {
        const searchContainer = document.createElement('div');
        searchContainer.className = 'search-container';
        
        // Заменяем SVG на изображение
        const searchIcon = document.createElement('img'); // Изменяем с div на img
        searchIcon.className = 'search-icon';
        searchIcon.src = 'images/Agents.webp'; // Укажите путь к вашему изображению
        searchIcon.alt = 'Search'; // Добавляем alt для доступности
        
        const searchInput = document.createElement('input');
        searchInput.type = 'text';
        searchInput.className = 'search-input';
        searchInput.placeholder = translations[currentLanguage].searchPlaceholder;
        
        searchInput.addEventListener('input', (e) => {
            currentSearchQuery = e.target.value.toLowerCase();
            renderCharacterCards();
        });
        
        searchContainer.appendChild(searchIcon);
        searchContainer.appendChild(searchInput);
        
        return searchContainer;
    }

    // Фильтрация персонажей
    function filterCharacters() {
    return Object.entries(characters).filter(([id, data]) => {
        // Получаем ключ фракции из объекта characters
        let factionKey = null;
        if (data.faction) {
            // Извлекаем имя файла без расширения
            const factionImage = data.faction.image.split('/').pop().split('.')[0];
            // Находим соответствующую фракцию в factions
            factionKey = Object.keys(factions).find(key => 
                factions[key].image && factions[key].image.includes(factionImage)
            );
        }

        // Проверка фракции
        const factionMatch = 
            currentFactionFilter === 'all' || 
            (currentFactionFilter === 'none' && !data.faction) ||
            (factionKey && currentFactionFilter === factionKey);
        
        // Проверка поиска
        const searchMatch = 
            currentSearchQuery === '' || 
            translations[currentLanguage].characters[id].name.toLowerCase().includes(currentSearchQuery);
        
        return factionMatch && searchMatch;
    });
}

    // Отрисовка карточек персонажей
    function renderCharacterCards() {
        container.innerHTML = '';
        const filteredCharacters = filterCharacters();
        
        filteredCharacters.forEach(([id, data]) => {
            const card = createCharacterCard(id, data);
            container.appendChild(card);
        });
        
        translatePage();
    }

    // Создание карточки персонажа
    function createCharacterCard(id, data) {
        const card = document.createElement('div');
        card.className = 'character-card';
        card.dataset.characterId = id;
        
        const img = document.createElement('img');
        img.src = data.image.trim();
        img.className = 'char-image';
        card.appendChild(img);
        
        const name = document.createElement('h3');
        card.appendChild(name);
        
        const factionInfo = document.createElement('div');
        factionInfo.className = 'card-faction-info';
        
        if (data.faction) {
            const factionImg = document.createElement('img');
            factionImg.src = data.faction.image.trim();
            factionInfo.appendChild(factionImg);
            const factionName = document.createElement('span');
            factionInfo.appendChild(factionName);
        } else {
            const noFactionName = document.createElement('span');
            factionInfo.appendChild(noFactionName);
        }
        card.appendChild(factionInfo);
        
        const detailsButton = document.createElement('button');
        detailsButton.className = 'details-button';
        card.appendChild(detailsButton);
        
        return card;
    }

    // Перевод страницы
    function translatePage() {
        const lang = currentLanguage;
        const trans = translations[lang];
        
        document.title = trans.pageTitle;
        document.getElementById('homeButton').textContent = trans.homeButton;
        languageButton.textContent = trans.languageButton;
        
        // Обновление фильтра фракций
        const filterButton = document.querySelector('.faction-filter-button');
        if (filterButton) {
            if (currentFactionFilter === 'all') {
                filterButton.querySelector('.faction-filter-text').textContent = trans.selectFaction;
            } else {
                const factionData = factions[currentFactionFilter];
                if (factionData) {
                    filterButton.querySelector('.faction-filter-text').textContent = factionData.name[lang];
                }
            }
        }
        
        // Обновление поиска
        const searchInput = document.querySelector('.search-input');
        if (searchInput) {
            searchInput.placeholder = trans.searchPlaceholder;
        }
        
        // Обновление карточек персонажей
        document.querySelectorAll('.character-card').forEach(card => {
            const charId = card.dataset.characterId;
            if (charId && trans.characters[charId]) {
                card.querySelector('h3').textContent = trans.characters[charId].name;
                card.querySelector('.details-button').textContent = trans.detailsButton;
                
                const factionNameSpan = card.querySelector('.card-faction-info span');
                if (characters[charId].faction) {
                    factionNameSpan.textContent = trans.characters[charId].factionName;
                } else {
                    factionNameSpan.textContent = trans.noFaction;
                }
            }
        });
        
        // Обновление выпадающего списка фракций
        updateFactionDropdown();
        
        // Обновление модального окна, если открыто
        if (modal.classList.contains('active') && currentCharacterContext.id) {
            translateModal(currentCharacterContext.id);
        }
    }

    function updateFactionDropdown() {
    const dropdown = document.querySelector('.faction-dropdown');
    if (!dropdown) return;
    
    dropdown.innerHTML = ''; // Очищаем текущие варианты
    
    // Добавление вариантов фракций с актуальным переводом
    Object.entries(factions).forEach(([id, data]) => {
        const option = document.createElement('div');
        option.className = 'faction-option';
        option.dataset.factionId = id;
        
        if (id !== 'all' && id !== 'none' && data.image) {
            option.innerHTML = `
                <img src="${data.image}" alt="${data.name[currentLanguage]}" class="faction-option-icon">
                <span>${data.name[currentLanguage]}</span>
            `;
        } else {
            option.innerHTML = `<span>${data.name[currentLanguage]}</span>`;
        }
        
        option.addEventListener('click', () => {
            currentFactionFilter = id;
            updateFactionButton(document.querySelector('.faction-filter-button'), id, data);
            dropdown.style.display = 'none';
            renderCharacterCards();
        });
        
        dropdown.appendChild(option);
    });
}

    // Перевод модального окна
    function translateModal(characterId) {
        const lang = currentLanguage;
        const trans = translations[lang];
        const charTrans = trans.characters[characterId];
        const charData = characters[characterId];
        
        if (!charTrans || !charData) return;
        
        document.getElementById('modalCharName').textContent = charTrans.name;
        document.getElementById('modalCharDescription').textContent = charTrans.description;
        document.getElementById('modalCharQuote').textContent = charTrans.quote ? `“${charTrans.quote}”` : '';
        
        const details = document.querySelector('.modal-char-details');
        details.querySelector('p:nth-child(1) strong').textContent = trans.rankLabel;
        details.querySelector('p:nth-child(2) strong').textContent = trans.heightLabel;
        details.querySelector('p:nth-child(3) strong').textContent = trans.birthdateLabel;
        
        document.getElementById('modal-char-height').textContent = charTrans.height || '???';
        document.getElementById('modal-char-birthdate').textContent = charTrans.birthdate || '???';
        
        const factionContainer = document.getElementById('modalCharFaction');
        if (charData.faction) {
            factionContainer.querySelector('span').textContent = charTrans.factionName;
            document.getElementById('modalFactionImage').alt = charTrans.factionName;
            factionContainer.style.display = 'inline-flex';
        } else {
            factionContainer.style.display = 'none';
        }
    }

    // Открытие модального окна
    function openModal(characterId) {
        currentCharacterContext = { id: characterId };
        const data = characters[characterId];
        const trans = translations[currentLanguage].characters[characterId];
        
        if (!data || !trans) return;
        
        modal.querySelector('.modal-scrollable-content').scrollTop = 0;
        
        document.getElementById('modalCharImage').src = data.back_image.trim();
        document.getElementById('modalCharImage').alt = trans.name;
        document.getElementById('modal-char-weapon').textContent = data.rank || '???';
        
        if (data.faction) {
            document.getElementById('modalFactionImage').src = data.faction.image.trim();
        }
        
        translateModal(characterId);
        
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    // Закрытие модального окна
    function closeModal() {
        modal.classList.add('closing');
        modal.addEventListener('animationend', () => {
            modal.classList.remove('active', 'closing');
            currentCharacterContext = { id: null };
            document.body.style.overflow = '';
        }, { once: true });
    }

    // Настройка обработчиков событий
    function setupEventListeners() {
        languageButton.addEventListener('click', () => {
            currentLanguage = currentLanguage === 'ru' ? 'en' : 'ru';
            localStorage.setItem('language', currentLanguage);
            translatePage();
        });
        
        container.addEventListener('click', (e) => {
            const button = e.target.closest('.details-button');
            if (button) {
                const charId = button.closest('.character-card').dataset.characterId;
                if (charId) openModal(charId);
            }
        });
        
        modal.querySelector('.close-button').addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });
    }

    init();
    setupMobileMenu();

// Новая функция для настройки мобильного меню
function setupMobileMenu() {
    const menuPanel = document.getElementById('mobile-menu-panel');
    
    // Создаем и добавляем поиск в меню
    const mobileSearch = createSearchField();
    mobileSearch.classList.add('mobile-search');
    menuPanel.insertBefore(mobileSearch, menuPanel.querySelector('.mobile-menu-footer'));
    
    // Создаем и добавляем фильтр фракций в меню
    const mobileFactionFilter = createFactionFilter();
    mobileFactionFilter.classList.add('mobile-faction-filter');
    menuPanel.insertBefore(mobileFactionFilter, menuPanel.querySelector('.mobile-menu-footer'));
    
    // Настройка обработчиков для бургер-меню
    const burgerButton = document.getElementById('burger-menu-button');
    const closeButton = document.getElementById('close-menu-button');
    const menuOverlay = document.getElementById('menu-overlay');
    
    burgerButton.addEventListener('click', () => {
        const isExpanded = burgerButton.getAttribute('aria-expanded') === 'true';
        burgerButton.setAttribute('aria-expanded', !isExpanded);
        
        if (!isExpanded) {
            menuPanel.classList.add('active');
            menuOverlay.classList.add('active');
            document.body.style.overflow = 'hidden';
        } else {
            closeMenu();
        }
    });
    
    closeButton.addEventListener('click', closeMenu);
    menuOverlay.addEventListener('click', closeMenu);
    
    function closeMenu() {
        burgerButton.setAttribute('aria-expanded', 'false');
        menuPanel.classList.remove('active');
        menuPanel.classList.add('closing');
        menuOverlay.classList.remove('active');
        menuOverlay.classList.add('closing');
        document.body.style.overflow = '';
        
        // Удаляем классы после завершения анимации
        menuPanel.addEventListener('animationend', () => {
            menuPanel.classList.remove('closing');
        }, { once: true });
        
        menuOverlay.addEventListener('animationend', () => {
            menuOverlay.classList.remove('closing');
        }, { once: true });
    }
}})
