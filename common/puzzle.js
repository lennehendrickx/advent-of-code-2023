import nReadlines from 'n-readlines';


function run(inputPath, solution, description) {
    if (!solution) {
        console.warn(`[${description}][Not implemented yet]`);
        return;
    }
    try {
        const result = solution(new nReadlines(inputPath))
        console.log(`[${description}][Success] ${result}`);
    } catch(e) {
        console.error(`[${description}][Error] ${e}`);
        throw e;
    }
}

export default {
    run: ({inputPath, name, part1, part2}) => {
        run(inputPath, part1, `${name}>Part 1`);
        run(inputPath, part2, `${name}>Part 2`);
    }
}

