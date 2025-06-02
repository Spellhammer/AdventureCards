let ac = {
    name: 'AdventureCards',
    npcs: [],
    rollNPCs: function() {
        this.npcs = [];
        for( let i = 0; i < 6; i++ ) {
            this.npcs.push({
                name: window.acFantasyNames.generate() + ' ' + window.acFantasySurnames.generate(),
                love: window.acFantasySubjects.generate(),
                fear: window.acFantasySubjects.generate(),
                goal: window.acFantasySubjects.generate()
            });
        }
    }
}

window.ac = ac;