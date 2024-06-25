const wordDisplay = document.querySelector('.word-display')



window.addEventListener('keydown', function initGame(event){
    console.log(event.key);
    if(currentWord.includes(event.key)){
        [...currentWord].forEach ((letter,index) => {
            if(letter === event.key) {
                wordDisplay.querySelectorAll("li")[index].innerText = letter ;
                wordDisplay.querySelectorAll("li")[index].classList.add ('guessed');
            }
        })
    }
})
const getRandomWord = () => {
    let word = cityNames[Math.floor(Math.random() * cityNames.length)]
    wordDisplay.innerHTML = word.split('').map(() => `<li class="letter"></li>`).join('')
    console.log(word);
    currentWord = word
}
  

const cityNames = [
    'Aghdam',
    'Agdash',
    'Aghjabadi',
    'Agstafa',
    'Agsu',
    'Astara',
    'Aghdara',
    'Babek',
    'Baku',
    'Balaken',
    'Barda',
    'Beylagan',
    'Bilasuvar',
    'Dashkasan',
    'Shabran',
    'Fuzuli',
    'Gadabay',
    'Ganja',
    'Goranboy',
    'Goychay',
    'Goygol',
    'Hajigabul',
    'Imishli',
    'Ismayilli',
    'Jabrayil',
    'Julfa',
    'Kalbajar',
    'Khachmaz',
    'Khankendi',
    'Khojavend',
    'Khirdalan',
    'Kurdamir',
    'Lankaran',
    'Lerik',
    'Masally',
    'Mingachevir',
    'Nakhchivan',
    'Naftalan',
    'Neftchala',
    'Oghuz',
    'Ordubad',
    'Qabala',
    'Qakh',
    'Qazakh',
    'Quba',
    'Qubadli',
    'Qusar',
    'Saatli',
    'Sabirabad',
    'Shahbuz',
    'Shaki',
    'Shamakhi',
    'Shamkir',
    'Sharur',
    'Shirvan',
    'Siyazan',
    'Shusha',
    'Sumgait',
    'Tartar',
    'Tovuz',
    'Ujar',
    'Yardimli',
    'Yevlakh',
    'Zaqatala',
    'Zardab',
    'Zangilan'
]

getRandomWord ();

