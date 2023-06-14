function tossCoin() {
    return Math.random() > 0.5 ? "heads" : "tails";
}


function fiveHeadsSync() {
    let headsCount = 0;
    let attempts = 0;
    while (headsCount < 5) {
        attempts++;
        let result = tossCoin();
        console.log(`${result} was flipped`);
        if (result === "heads") {
            headsCount++;
        } else {
            headsCount = 0;
        }
    }
    return `It took ${attempts} tries to flip five "heads"`;
}
console.log(fiveHeadsSync());
console.log("This is run after the fiveHeadsSync function completes");

function fiveHeads() {
    return new Promise((resolve, reject) => {
        let headsCount = 0;
        let flipsCount = 0;

        const flipCoin = () => {
            flipsCount++;
            const result = Math.random() < 0.5 ? 'heads' : 'tails';

            if (result === 'heads'){
                headsCount++;
            } else {
                headsCount = 0;
            }
            if(headsCount === 5) {
                resolve('It took ${flipsCount} flips to get five heads.');
            } else {
                flipCoin();
            }
        };
        flipCoin();
    });
}

fiveHeads()
    .then(res => console.log(res))
    .catch(err => console.log(err));
console.log("When does this run now?");