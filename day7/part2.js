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


// 1 Five of a kind
// 2 Four of a kind, where four cards have the same label and one card has a different label: AA8AA
// 3 Full house, where three cards have the same label, and the remaining two cards share a different label: 23332
// 4 Three of a kind, where three cards have the same label, and the remaining two cards are each different from any other card in the hand: TTT98
// 5 Two pair, where two cards share one label, two other cards share a second label, and the remaining card has a third label: 23432
// 6 One pair, where two cards share one label, and the other three cards have a different label from the pair and each other: A23A4
// 7 High card, where all cards' labels are distinct: 23456




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
