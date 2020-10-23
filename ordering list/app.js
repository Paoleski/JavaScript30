const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const ul = document.getElementById('bands');
const SortByNameButton = document.querySelector('.btn-primary');
const resetButton = document.querySelector('.btn-info');


function populateList(list) {
    ul.innerHTML = list.map(bandName => `<li>${bandName}</li>`).join('');

}

function strip(bandName) {
   return bandName.replace(/^(a |the |an )/i, '').trim();
}


function sortBands() {
    const copyBands = [...bands];
    const sortedBands = copyBands.sort((a,b) => strip(a) > strip(b) ? 1 : -1);
    populateList(sortedBands);
}

function resetFilter() {
    populateList(bands);
}


populateList(bands);
SortByNameButton.addEventListener('click', sortBands)
resetButton.addEventListener('click', resetFilter);


