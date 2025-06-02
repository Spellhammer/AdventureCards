let acFantasySurnames = {
    generate: function() {
        let namePart1 = this.namePart1[Math.floor(Math.random() * this.namePart1.length)];
        let namePart2 = this.namePart2[Math.floor(Math.random() * this.namePart2.length)];
        return namePart1 + namePart2;
    },
    namePart1: [
        'Big',
        'Small',
        'Mighty',
        'Weak',
        'Fire',
        'Water',
        'Earth',
        'Air',
        'Light',
        'Shadow',
        'Under',
        'Over',
        'High',
        'Low',
        'North',
        'South',
        'East',
        'West',
        'Red',
        'Blue',
        'Green',
    ],
    namePart2: [
        'blood',
        'wood',
        'brine',
        'stone',
        'mist',
        'sky',
        'hearth',
        'home',
        'wing',
        'heart',
        'shield',
        'sword',
        'wall',
        'garden',
        'gate',
        'foot',
        'arm',
        'hand',
        'eye'
    ],
}

window.acFantasySurnames = acFantasySurnames;