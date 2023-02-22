function getAllAccronyms() {
    let words = document.body.textContent.trim().split(/[\n\s\t]/);



    let acronyms = new Set();

    for(let w of words) {
        let currentWord = w.trim();

        if(currentWord == "" || currentWord.length < 3) {
            continue;
        }
        if(currentWord.toUpperCase() == currentWord && currentWord.match(/^[A-Z]+/g)) {
            acronyms.add(currentWord.replace(/[\:\?\.,\"]/,""));
        }
    }

    console.info("Acronym found:");
    console.info(acronyms);
    return JSON.stringify({'acronyms':Array.from(acronyms)});
}

getAllAccronyms();
