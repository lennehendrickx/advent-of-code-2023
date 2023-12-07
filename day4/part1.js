export default (input) => {
    let points = 0;
    let line;
    while (line = input.next()) {
        const input = line.toString('ascii').split(':')[1].split('|');
        const winningNumbers = input[0].trim().split(/\s+/);
        const myNumbers = input[1].trim().split(/\s+/);
        const numberOfWinningNumbers = myNumbers.filter(number => winningNumbers.includes(number)).length;
        const cardPoints = numberOfWinningNumbers > 0 ? Math.pow(2, numberOfWinningNumbers - 1) : 0;
        points += cardPoints;
    }
    return points
}