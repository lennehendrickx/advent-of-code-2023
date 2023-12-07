const cards = ['A', 'K', 'Q', 'J', 'T', '9', '8', '7', '6', '5', '4', '3', '2'];

export default (input) => {
    let line;

    const hands = [];
    while (line = input.next()) {
        const input = line.toString('ascii');
        const [hand, bid] = input.split(' ');
        hands.push({hand, bid});
    }

    hands.sort(({hand: hand1}, {hand: hand2}) => {
        const type1 = determineType(hand1);
        const type2 = determineType(hand2);

        if (type1 === type2) {
            for(let i = 0; i <= 4; i++) {
                const card1 = hand1[i];
                const card2 = hand2[i];
                if (card1 !== card2) {
                    return cards.indexOf(card2) - cards.indexOf(card1);
                }
            }
            return 0;
            
        }
        return type2 - type1;
    });
    return hands.reduce((total, hand, rank) => total += hand.bid * (rank + 1), 0)
}


function determineType(hand) {
    const cards = hand.split('');
    const countsPerCard = cards.reduce(count, {});
    const duplicates = Object.values(countsPerCard).reduce(count, {});
    return (duplicates[5] && 1) 
        || (duplicates[4] && 2)
        || (duplicates[3] && duplicates[2] && 3)
        || (duplicates[3] && 4)
        || (duplicates[2] == 2 && 5)
        || (duplicates[2] && 6)
        || 7;

}

function count(count, item) {
    count[item] = (count[item] ?? 0) + 1;
    return count;
}
