export default (input) => {
    let line;
    while (line = input.next()) {
        const input = line.toString('ascii');
        
        const seeds = Seeds.from(input);
        
    }
}


class Seeds {

    constructor(seeds) {
        this.seeds = seeds;
    }

    static from(line) {
        const matches = /seeds: (.*)/.exec(line);
        return matches?.at(1)?.split(' ');
    }
}

class Mappings {

    mappings = [];

    addMapping(mapping) {
        this.mappings.push(mapping)
    }
}

class Mapping {

    ranges = [];
    
    constructor(source, destination) {
        this.source = source;
        this.destination = destination;
    }

    addRange(range) {
        this.ranges.push(range);
    }

}

class Range {

    constructor(destination, source, length) {
        this.destination = destination;
        this.source = source;
        this.length = length;
    }
}