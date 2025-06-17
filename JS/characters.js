const characters = {
    'character-1': {
        name: 'Jane Doe',
        image: 'images/JaneDoe.webp',
        back_image: 'images/backImages/JaneDoe.webp',
        faction: { name: '«Группа особого реагирования угрозыска»', image: 'images/factions/CriminalInvestigationSpecialResponseTeam.webp' },
        description: 'Кто я? Чистокровная кошка-тирен! Ах, такое редкое происхождение когда-то доставляло мне немало хлопот. Ну зачем же мне врать? Мяу!',
        quote: 'Ой, ну это было тогда! Сейчас-то я точно говорю правду! Честно-честно!',
        rank: 'S',
        height: '170 см',
        birthdate: '16 Февраля'
    },
    'character-2': {
        name: 'Nicole Demara',
        image: 'images/NicoleDemara.webp',
        back_image: 'images/backImages/NicoleDemara.webp',
        faction: { name: '«Хитрые зайцы»', image: 'images/factions/CunningHares.webp' },
        description: 'Глава агентства мастеров на все руки «Хитрые зайцы», готовая взяться за самые разные заказы по исследованию каверн После долгих лет на улицах Нью-Эриду Николь заработала среди коллег определённую репутацию. Про неё говорят, что ни одна лиса не может состязаться в хитрости с этой зайкой-пронырой. Из-за хитрости и неразборчивости в средствах Николь многие клиенты внесли её в чёрный список. Несмотря на её любовь к денни, Николь удивительно бездарна в области управления финансами, из-за чего «Хитрые зайцы» вечно оказываются в долгах.',
        quote: 'Мудрый выбор! Но сразу предупреждаю: мои услуги стоят недешёво!',
        rank: 'A',
        height: '165 см',
        birthdate: '11 Ноября'
    },
    'character-3': {
        name: 'Burnice White',
        image: 'images/BurniceWhite.webp',
        back_image: 'images/backImages/BurniceWhite.webp',
        faction: { name: '«Сыны Калидона»', image: 'images/factions/SonsofCalydon.webp' },
        description: 'Неплохо, да? Для этого нового вкуса "Нитро-топлива" я привезла из города особые ингредиенты. Что? Ты пойдёшь вздремнуть в машину? Боишься, что не уснёшь, если допьёшь? Значит... у тебя есть машина! А у меня тут как раз есть специальное энергосберегающее топливо! Попробуй!',
        quote: 'Что-то ты совсем без настроения. Не хочешь подзаправиться?',
        rank: 'S',
        height: '160 см',
        birthdate: '23 Мая'
    },
    'character-4': {
        name: 'Caesar King',
        image: 'images/CaesarKing.webp',
        back_image: 'images/backImages/CaesarKing.webp',
        faction: { name: '«Сыны Калидона»', image: 'images/factions/SonsofCalydon.webp' },
        description: 'Можешь сесть где угодно. Чувствуй себя как дома». Если уж тебя занесло на Объездную, теперь ты гость Сынов Калидона! Хм... Папаша, а что значит "Долг платежом красен"?',
        quote: 'Я Цезарь, глава Сынов Калидона.',
        rank: 'S',
        height: '176 см',
        birthdate: '16 Марта'
    },
    'character-5': {
        name: 'Zhu Yuan',
        image: 'images/Zhuyuan.webp',
        back_image: 'images/backImages/Zhuyuan.webp',
        faction: { name: '«Группа особого реагирования угрозыска»', image: 'images/factions/CriminalInvestigationSpecialResponseTeam.webp' },
        description: 'Минуточку. У вас есть разрешение на это интервью? «Да. Вот разрешение от пресс-службы. Ясно. У вас пять минут. Отсчёт пошёл.',
        quote: 'Капитан Чжу Юань, начальник отдела угрозыска Службы общественной безопасности. Жду указаний.',
        rank: 'S',
        height: '175 см',
        birthdate: '1 Сентября'
    },
    'character-6': {
        name: 'Hoshimi Miyabi',
        image: 'images/Miyabi.webp',
        back_image: 'images/backImages/Miyabi.webp',
        faction: { name: '«Секция 6»', image: 'images/factions/Section6.webp' },
        description: 'Нельзя стать мастером, слепо подражая чужому искусству обращения с мечом. Это как новый ксерокс у нас в офисе. Он, конечно, энергосберегающий и экологичный, но если копировать на нём документы без тщательной подготовки, появятся шумы и искажения цвета. Эти искажения станут твоей слабостью. Подобная беспечность недопустима.',
        quote: 'Нарушение порядка недопустимо.',
        rank: 'S',
        height: '170 см (с ушами)',
        birthdate: '19 Июня'
    },
    'character-7': {
        name: 'Tsukishiro Yanagi',
        image: 'images/Yanagi.webp',
        back_image: 'images/backImages/Yanagi.webp',
        faction: { name: '«Секция 6»', image: 'images/factions/Section6.webp' },
        description: 'Янаги — специалист по дальнему бою и высоким технологиям. Её дрон-напарник и энергетическая винтовка позволяют контролировать поле боя с безопасного расстояния.',
        quote: 'Цель захвачена. Начинаю ликвидацию.',
        rank: 'S',
        height: '169 см',
        birthdate: '21 Сентября'
    },
    'character-8': {
        name: 'Grace Howard',
        image: 'images/GraceHoward.webp',
        back_image: 'images/backImages/GraceHoward.webp',
        faction: { name: '«Белобог»', image: 'images/factions/Belobog.webp' },
        description: 'Грейс, говоришь? — гаечный ключ подскочил с ответом.  — О, благодаря её доброте я впервые в жизни попробовал массаж». Она такая деликатная, — быстро добавил винт. — Мне нравится, как она прикручивает гайки — не слишком туго, в самый раз. Шестерёнка вмешалась: Её разум работает чётко, как хорошо отлаженная коробка передач! «И как она точна, — пробормотало машинное масло. — В её словаре нет места для "капельки" или "среднего количества", одни только абсолютно ясные "миллилитры".',
        quote: 'Такие чёткие и прямые линии, просто красота... Не могу удержаться, чтобы не вскрыть и не посмотреть.',
        rank: 'S',
        height: '170 см',
        birthdate: '14 Апреля'
    },
    'character-9': {
        name: 'Ellen Joe',
        image: 'images/EllenJoe.webp',
        back_image: 'images/backImages/EllenJoe.webp',
        faction: { name: '«Агентство домашнего персонала Виктория»', image: 'images/factions/VictoriaHousekeeping.webp' },
        description: 'Чем проще, тем лучшеЛишним сложностям здесь не рады. Работа не волк Важно вовремя делать перерывы... чтобы работа поменьше бесила. Полная сосредоточенность Подходит она к делу всерьёз или нет, страдают от этого почему-то всегда её враги. Почему бы не побаловать себя сладким? Конфету в рот, а мысли на замок.',
        quote: 'Уф, опять придётся возиться с заказом... Надо было выбрать другую смену.',
        rank: 'S',
        height: '161 см',
        birthdate: '4 Января'
    },
    'character-10': {
        name: 'Evelyn Chevalier',
        image: 'images/Evelyn.webp',
        back_image: 'images/backImages/Evelyn.webp',
        faction: { name: '«Созвездие Лиры»', image: 'images/factions/StarsofLyra.webp' },
        description: 'На десять часов подозрительный мужчина в чёрном. Я разберусь. Вы следите за периметром — к Астре никто не должен приближаться. Ближе этого места никого не подпускайте.',
        quote: 'Госпожа Яо отдыхает. Никаких интервью.',
        rank: 'S',
        height: '173 см',
        birthdate: '17 Октября'
    },
    'character-11': {
        name: 'Astra Yao',
        image: 'images/AstraYao.webp',
        back_image: 'images/backImages/AstraYao.webp',
        faction: { name: '«Созвездие Лиры»', image: 'images/factions/StarsofLyra.webp' },
        description: 'Поздно-поздно! Я официально приглашаю тебя поучаствовать в моём побеге! План такой: забить на работу, сбежать и, наконец, попасть на Реверб-арену! «А знаешь, это приятно, когда люди тебя узнают! Каждому поколению нужна своя звезда. Люди вручают ей свои мечты, а она должна принести им надежду. Привет, Нью-Эриду! Вы готовы? Сейчас здесь начнётся невероятное волшебство!',
        quote: 'Следующую песню я посвящаю этому миру!',
        rank: 'S',
        height: '176 см',
        birthdate: '31 Января'
    },
    'character-12': {
        name: 'Belle',
        image: 'images/Belle.webp',
        back_image: 'images/backImages/Belle.webp',
        faction: null,
        description: 'Белль — небоевой играбельный персонаж и один из двух возможных протагонистов Zenless Zone Zero. В начале игры игрок может выбрать между Белль и Вайзом в качестве своего контролируемого персонажа, а второй персонаж станет помощником. Вместе со своим братом, Вайзом, она владеет магазином видеопроката Random Play, являющимся прикрытием для их основной деятельности. Они — прокси, вместе работающие под псевдонимом «Фаэтон».',
        quote: '',
        rank: '???',
        height: '???',
        birthdate: '???'
    },
    'character-13': {
        name: 'Soldier 0 Anby',
        image: 'images/Soldier0Anby.webp',
        back_image: 'images/backImages/Soldier0Anby.webp',
        faction: {name: '«Отряд Обол»', image: 'images/factions/Obol.webp'},
        description: 'Загадочная девушка, которая никогда не рассказывает о своей биографии, словно бы у неё нет прошлого. Спокойная и сдержанная, она обладает чрезвычайно эффективными боевыми навыками, за которыми явно кроются долгие годы подготовки. Когда Николь «подобрала» её после одного происшествия, Энби стала одной из «Хитрых зайцев» и сильно привязалась к Николь. Больше всего она любит смотреть кино, но из-за своей неискушённости принимает истории на экране за правду.',
        quote: 'Новая экипировка перед большой битвой. Хм, в кино всегда так делают',
        rank: 'S',
        height: '156 см',
        birthdate: '20 Февраля'
    },
    'character-14': {
        name: 'Pulchra Fellini',
        image: 'images/Pulchra.webp' ,
        back_image: 'images/backImages/Pulchra.webp',
        faction: {name: '«Сыны Калидона»', image: 'images/factions/SonsofCalydon.webp'},
        description: 'Я, Пульхра, готова присоединиться к вам, Сыны Калидона. Предательство? К чему такие громкие слова?. Это всего лишь разумный выбор. Не радуйтесь раньше времени. Вы ещё не прошли испытательный срок. А когда он кончится, это уж мне решать.',
        quote: 'Я безоговорочно предана только победителю. А кто у нас побеждает? Я и каждый раз я',
        rank: 'A',
        height: '173 см',
        birthdate: '19 Июня'
    },
    'character-15': {
        name: 'Trigger' ,
        image: 'images/Trigger.webp',
        back_image: 'images/backImages/Trigger.webp',
        faction: {name: '«Отряд Обол»', image: 'images/factions/Obol.webp'},
        description: 'Я найду истинных виновников падения старой столицы, и они заплатят за всё. Если лодочник, готовый переправить меня в земли истины, потребует плату... я не пожалею собственной жизни. Под защитой воли, держащей ненависть под контролем, я беру истину на прицел.',
        quote: 'Я тебя вижу',
        rank: 'S',
        height: '173 см',
        birthdate: '21 Апреля'
    },
    'character-16': {
        name: 'Vivian Banshee' ,
        image: 'images/Vivian.webp',
        back_image: 'images/backImages/Vivian.webp',
        faction: {name: '«Пересмешники»', image: 'images/factions/Mockingbird.webp'},
        description: 'Разбойники? Воры? Называй как хочешь, я не спорю с отребьем. Мой зонтик я разделю только с господином Фаэтоном. Как же я хочу, чтобы взгляд Фаэтона был прикован только ко мне.',
        quote: 'Не закрывай окно: птицы принесут любовь и унесут смерть',
        rank: 'S',
        height: '162 см',
        birthdate: '10 Апреля'
    },
    'character-17': {
        name: 'Yixuan' ,
        image: 'images/Yixuan.webp',
        back_image: 'images/backImages/Yixuan.webp',
        faction: {name: '«Школа горы Юнькуй»', image: 'images/factions/YunkuiSummit.webp'},
        description: 'Хочешь научиться читать небесные знамения и предсказывать погоду? Понятно. Возьми несколько из этих наспех нарисованных талисманов. Сфотографируй и поставь себе на обои. А потом просто открывай приложение погоды — оно и скажет, завтра солнечно, облачно или дождь пойдёт. И да, понадобится стабильное интернет-соединение.',
        quote: 'Переступив порог монастыря, оставьте мирские заботы и церемонии у подножия горы',
        rank: 'S',
        height: '172 см',
        birthdate: '3 Декабря'
    }
};

let currentCharacterContext = {
    id: null,
    name: null
};

document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.grid-container');
    
    Object.entries(characters).forEach(([characterId, characterData]) => {
        const card = document.createElement('div');
        card.className = 'character-card';
        const index = parseInt(characterId.split('-')[1]) - 1;
        card.style.animationDelay = `${index * 0.05}s`;

        const img = document.createElement('img');
        img.src = characterData.image.trim();
        img.alt = characterData.name;
        img.className = 'char-image';
        card.appendChild(img);

        const name = document.createElement('h3');
        name.textContent = characterData.name;
        card.appendChild(name);

        const factionInfo = document.createElement('div');
        factionInfo.className = 'card-faction-info';

        if (characterData.faction) {
            const factionImg = document.createElement('img');
            factionImg.src = characterData.faction.image.trim();
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
        
        const detailsButton = document.createElement('button');
        detailsButton.className = 'details-button';
        detailsButton.textContent = 'Подробнее';
        detailsButton.dataset.characterId = characterId;
        detailsButton.dataset.characterName = characterData.name;
        card.appendChild(detailsButton);

        container.appendChild(card);
    });

    const modal = document.getElementById('characterModal');
    const modalCloseButton = modal.querySelector('.close-button');
    const modalCharImage = document.getElementById('modalCharImage');
    const modalCharName = document.getElementById('modalCharName');
    const modalCharFaction = document.getElementById('modalCharFaction');
    const modalFactionImage = document.getElementById('modalFactionImage');
    const modalFactionName = document.getElementById('modalFactionName');
    const modalCharDescription = document.getElementById('modalCharDescription');
    const modalScrollableContent = modal.querySelector('.modal-scrollable-content');
    const modalQuoteContainer = document.querySelector('.modal-quote-container');
    const modalCharQuote = document.getElementById('modalCharQuote');
    const modalCharRank = document.getElementById('modal-char-weapon');
    const modalCharHeight = document.getElementById('modal-char-height');
    const modalCharBirthdate = document.getElementById('modal-char-birthdate');
    
    function openModal(characterId, characterName) {
        currentCharacterContext = { id: characterId, name: characterName };
        const data = characters[characterId];
        if (!data) return;

        modalScrollableContent.scrollTop = 0;

        modalCharImage.src = data.back_image.trim();
        modalCharImage.alt = characterName;
        modalCharName.textContent = characterName;
        modalCharDescription.textContent = data.description || 'Описание отсутствует.';
        modalCharQuote.textContent = `“${data.quote || 'Цитата отсутствует...'}”`;
        modalCharRank.textContent = data.rank || 'н/д';
        modalCharHeight.textContent = data.height || 'н/д';
        modalCharBirthdate.textContent = data.birthdate || 'н/д';

        modalQuoteContainer.style.display = 'block';

        if (data.faction) {
            modalFactionImage.src = data.faction.image.trim();
            modalFactionImage.alt = data.faction.name;
            modalFactionName.textContent = data.faction.name;
            modalCharFaction.style.display = 'inline-flex';
        } else {
             modalCharFaction.style.display = 'none';
        }
        
        modalCharRank.contentEditable = 'true';
        modalCharHeight.contentEditable = 'true';
        modalCharBirthdate.contentEditable = 'true';
        modalCharQuote.contentEditable = 'true';

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }
    
    function closeModal() {
        modalCharRank.contentEditable = 'false';
        modalCharHeight.contentEditable = 'false';
        modalCharBirthdate.contentEditable = 'false';
        modalCharQuote.contentEditable = 'false';
        
        currentCharacterContext = { id: null, name: null };

        modal.classList.remove('active');
        document.body.style.overflow = '';
    }

    function handleBlurOnEditable(event) {
        if (!currentCharacterContext.id) return;
        
        const data = characters[currentCharacterContext.id];
        if (!data) return;

        const targetId = event.target.id;
        const value = event.target.textContent.trim();

        switch (targetId) {
            case 'modal-char-weapon':
                data.rank = value;
                break;
            case 'modal-char-height':
                data.height = value;
                break;
            case 'modal-char-birthdate':
                data.birthdate = value;
                break;
            case 'modalCharQuote':
                const newQuote = value.replace(new RegExp('^“|”$','g'), '').trim();
                data.quote = newQuote;
                if (event.target.textContent !== `“${newQuote}”`) {
                    event.target.textContent = `“${newQuote}”`;
                }
                break;
        }
    }

    modalCharRank.addEventListener('blur', handleBlurOnEditable);
    modalCharHeight.addEventListener('blur', handleBlurOnEditable);
    modalCharBirthdate.addEventListener('blur', handleBlurOnEditable);
    modalCharQuote.addEventListener('blur', handleBlurOnEditable);

    container.addEventListener('click', (event) => {
        const button = event.target.closest('.details-button');
        if (button) {
            const charId = button.dataset.characterId;
            const charName = button.dataset.characterName;
            if (charId && charName) {
                openModal(charId, charName);
            }
        }
    });
    
    modalCloseButton.addEventListener('click', closeModal);
    
    modal.addEventListener('click', (event) => {
        if (event.target === modal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});
