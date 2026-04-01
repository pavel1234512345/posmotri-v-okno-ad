document.getElementById("btn1").addEventListener("click", function() {
    const container4 = document.getElementById("container4");
    if (container4.style.display === "none") {
        container4.style.display = "flex";
        btn1.textContent = "Скрыть";
    } else {
        container4.style.display = "none";
        btn1.textContent = "Показать ещё";
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const input = document.getElementById('input');
    const cities = document.getElementById('cities');
    
    
    input.addEventListener('click', () => {
        cities.style.display = 'block';
    });
    
   
    window.addEventListener('click', event => {
        if (!event.target.closest('.input') && !event.target.closest('.cities')) {
            cities.style.display = 'none';
        }
    });
    
    
    Array.from(cities.children).forEach(city => {
        city.addEventListener('click', () => {
            input.value = city.textContent;
            cities.style.display = 'none'; 
        });
    });
});


document.querySelector('.btn2').addEventListener('click', function() {
    const city = document.getElementById('input').value.trim();
    const timeInputs = document.querySelectorAll('input[name="choice"]');
    let selectedTime = null;

    for (const input of timeInputs) {
        if (input.checked) {
            selectedTime = input.nextElementSibling.textContent; 
            break;
        }
    }

    if (!selectedTime) {
        const dayRadio = document.getElementById('radio2');
        if (dayRadio) {
            dayRadio.checked = true;
            selectedTime = 'День'; 
            selectedRadio = dayRadio;
        }
    }

    const cityTimeToImage = {
        'Белгород': {
            'Утро': '../Фотки спринт 2/Белгород утро.jpg', 
            'Ночь': '../Фотки спринт 2/Белгород ночь.jpg',
            'День': '../Фотки спринт 2/Белгород день.jpg'
        },
        'Адлер': {
            'Утро': '../Фотки спринт 2/Адлер утро.jpg',
            'День': '../Фотки спринт 2/Адлер день.jpg',
            'Ночь': '../Фотки спринт 2/Адлер ночь.jpg'
        },
        'Воронеж': {
            'День': '../Фотки спринт 2/Воронеж день.webp',
            'Утро': '../Фотки спринт 2/Воронеж утро.jpg',
            'Ночь': '../Фотки спринт 2/Воронеж ночь.jpg'
        },
        'Зеленоградск': {
            'Утро': '../Фотки спринт 2/Зеленоградск утро.jpg',
            'День': '../Фотки спринт 2/Зеленоградск день.jpg',
            'Ночь': '../Фотки спринт 2/Зеленоградск ночь.jpg'
        },
    };

const cityAliases = {
    'белгород': 'Белгород',
    'адлер': 'Адлер',
    'воронеж': 'Воронеж',
    'зеленоград': 'Зеленоградск',
    'зеленоградск': 'Зеленоградск'
};

const userInput = city.toLowerCase().trim();
const matchedCity = cityAliases[userInput] || null;

    if (matchedCity && cityTimeToImage[matchedCity][selectedTime]) {
        const imgPath = cityTimeToImage[matchedCity][selectedTime];
        document.getElementById('main-video').src = imgPath;
    } else {
    const notFoundImage = '../Фотки спринт 2/Frame 15.png';
    document.getElementById('main-video').src = notFoundImage;
}
});
