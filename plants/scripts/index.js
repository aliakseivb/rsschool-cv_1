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

let countContact = 1;

document.getElementById('contact-title').onclick = function () {
    if (document.getElementById('contact-list').style.display !== 'flex') {
        document.getElementById('contact-list').style.display = 'flex';
    }else{
        document.getElementById('contact-list').style.display = 'none';
    }
}

