(function () {
    const burgerItem = document.querySelector('.burger');
    // console.log(burgerItem);
    const menu = document.querySelector('.header-nav');
    const menuCloseItem = document.querySelector('.nav-close');
    burgerItem.addEventListener('click', () => {
        // console.log(1);
        menu.classList.add('header-nav-active');
    })
    menuCloseItem.addEventListener('click', () => {
        menu.classList.remove('header-nav-active');
    });
}())


let countPrice = 1;

document.getElementById('basic').onclick = function () {
    if (document.getElementById('standart-open').style.display === 'flex' || document.getElementById('procare-open').style.display === 'flex') {
        document.getElementById('standart-open').style.display = 'none';
        document.getElementById('standart').style.background = '#EDF2EC';
        document.getElementById('accord-rev2').style.display = 'none';
        document.getElementById('accord-ligth2').style.display = 'initial';
        document.getElementById('procare-open').style.display = 'none';
        document.getElementById('procare').style.background = '#EDF2EC';
        document.getElementById('accord-rev3').style.display = 'none';
        document.getElementById('accord-ligth3').style.display = 'initial';
        countPrice = 1;
    }
    countPrice += 1;
    if (countPrice % 2 === 0) {
        document.getElementById('basic-open').style.display = 'flex';
        document.getElementById('basic').style.background = '#D6E7D2';
        document.getElementById('price-dash').style.paddingBottom = '26px';
        document.getElementById('accord-rev').style.display = 'initial';
        document.getElementById('accord-ligth').style.display = 'none';

    } else {
        document.getElementById('basic-open').style.display = 'none';
        document.getElementById('basic').style.background = '#EDF2EC';
        document.getElementById('price-dash').style.paddingBottom = '115px';
        document.getElementById('accord-rev').style.display = 'none';
        document.getElementById('accord-ligth').style.display = 'initial';
    }
}

document.getElementById('order').onclick = function () {
    document.getElementById('basic-open').style.display = 'none';
    document.getElementById('basic').style.background = '#EDF2EC';
    document.getElementById('accord-rev').style.display = 'none';
    document.getElementById('accord-ligth').style.display = 'initial';
    document.getElementById('price-dash').style.paddingBottom = '115px';
    countPrice = 1;
}


document.getElementById('standart').onclick = function () {
    if (document.getElementById('basic-open').style.display === 'flex' || document.getElementById('procare-open').style.display === 'flex') {
        document.getElementById('basic-open').style.display = 'none';
        document.getElementById('basic').style.background = '#EDF2EC';
        document.getElementById('accord-rev').style.display = 'none';
        document.getElementById('accord-ligth').style.display = 'initial';
        document.getElementById('procare-open').style.display = 'none';
        document.getElementById('procare').style.background = '#EDF2EC';
        document.getElementById('accord-rev3').style.display = 'none';
        document.getElementById('accord-ligth3').style.display = 'initial';
        countPrice = 1;
    }
    countPrice += 1;
    if (countPrice % 2 === 0) {
        document.getElementById('standart-open').style.display = 'flex';
        document.getElementById('standart').style.background = '#D6E7D2';
        document.getElementById('price-dash').style.paddingBottom = '26px';
        document.getElementById('accord-rev2').style.display = 'initial';
        document.getElementById('accord-ligth2').style.display = 'none';
    } else {
        document.getElementById('standart-open').style.display = 'none';
        document.getElementById('standart').style.background = '#EDF2EC';
        document.getElementById('price-dash').style.paddingBottom = '115px';
        document.getElementById('accord-rev2').style.display = 'none';
        document.getElementById('accord-ligth2').style.display = 'initial';
    }
}

document.getElementById('order2').onclick = function () {
    document.getElementById('standart-open').style.display = 'none';
    document.getElementById('standart').style.background = '#EDF2EC';
    document.getElementById('accord-rev2').style.display = 'none';
    document.getElementById('accord-ligth2').style.display = 'initial';
    document.getElementById('price-dash').style.paddingBottom = '115px';
    countPrice = 1;
}

document.getElementById('procare').onclick = function () {
    if (document.getElementById('basic-open').style.display === 'flex' || document.getElementById('standart-open').style.display === 'flex') {
        document.getElementById('basic-open').style.display = 'none';
        document.getElementById('basic').style.background = '#EDF2EC';
        document.getElementById('accord-rev').style.display = 'none';
        document.getElementById('accord-ligth').style.display = 'initial';
        document.getElementById('standart-open').style.display = 'none';
        document.getElementById('standart').style.background = '#EDF2EC';
        document.getElementById('accord-rev2').style.display = 'none';
        document.getElementById('accord-ligth2').style.display = 'initial';
        countPrice = 1;
    }
    countPrice += 1;
    if (countPrice % 2 === 0) {
        document.getElementById('procare-open').style.display = 'flex';
        document.getElementById('procare').style.background = '#D6E7D2';
        document.getElementById('price-dash').style.paddingBottom = '26px';
        document.getElementById('accord-rev3').style.display = 'initial';
        document.getElementById('accord-ligth3').style.display = 'none';
    } else {
        document.getElementById('procare-open').style.display = 'none';
        document.getElementById('procare').style.background = '#EDF2EC';
        document.getElementById('price-dash').style.paddingBottom = '115px';
        document.getElementById('accord-rev3').style.display = 'none';
        document.getElementById('accord-ligth3').style.display = 'initial';
    }
}

document.getElementById('order3').onclick = function () {
    document.getElementById('procare-open').style.display = 'none';
    document.getElementById('procare').style.background = '#EDF2EC';
    document.getElementById('accord-rev3').style.display = 'none';
    document.getElementById('accord-ligth3').style.display = 'initial';
    document.getElementById('price-dash').style.paddingBottom = '115px';
    countPrice = 1;
}


document.getElementById('contact-title').onclick = function () {
    document.getElementById('main-title').innerText = 'City'
    if (document.getElementById('contact-list').style.display !== 'flex') {
        document.getElementById('contact-list').style.display = 'flex';
        document.getElementById('contact-title').style.background = '#C1E698';
        document.getElementById('city-accord2').style.display = 'initial';
        document.getElementById('city-accord1').style.display = 'none';
        document.getElementById('canandaigua').style.display = 'none';
        document.getElementById('nyc').style.display = 'none';
        document.getElementById('yonkers').style.display = 'none';
        document.getElementById('sherrill').style.display = 'none';
    }else{
        document.getElementById('contact-list').style.display = 'none';
        document.getElementById('contact-title').style.background = '#D6E7D2';
        document.getElementById('city-accord2').style.display = 'none';
        document.getElementById('city-accord1').style.display = 'initial';
    }
}

document.getElementById('item1').onclick = function () {
    document.getElementById('contact-list').style.display = 'none';
    document.getElementById('canandaigua').style.display = 'flex';
    document.getElementById('main-title').innerText = document.getElementById('item1').innerText
}

document.getElementById('item2').onclick = function () {
    document.getElementById('contact-list').style.display = 'none';
    document.getElementById('nyc').style.display = 'flex';
    document.getElementById('main-title').innerText = document.getElementById('item2').innerText
}

document.getElementById('item3').onclick = function () {
    document.getElementById('contact-list').style.display = 'none';
    document.getElementById('yonkers').style.display = 'flex';
    document.getElementById('main-title').innerText = document.getElementById('item3').innerText
}

document.getElementById('item4').onclick = function () {
    document.getElementById('contact-list').style.display = 'none';
    document.getElementById('sherrill').style.display = 'flex';
    document.getElementById('main-title').innerText = document.getElementById('item4').innerText
}

document.getElementById('b1').onclick = function () {
    document.getElementById('canandaigua').style.display = 'none';
    document.getElementById('city-accord2').style.display = 'none';
    document.getElementById('city-accord1').style.display = 'initial';
}

document.getElementById('b2').onclick = function () {
    document.getElementById('nyc').style.display = 'none';
    document.getElementById('city-accord2').style.display = 'none';
    document.getElementById('city-accord1').style.display = 'initial';
}

document.getElementById('b3').onclick = function () {
    document.getElementById('yonkers').style.display = 'none';
    document.getElementById('city-accord2').style.display = 'none';
    document.getElementById('city-accord1').style.display = 'initial';
}

document.getElementById('b4').onclick = function () {
    document.getElementById('sherrill').style.display = 'none';
    document.getElementById('city-accord2').style.display = 'none';
    document.getElementById('city-accord1').style.display = 'initial';
}