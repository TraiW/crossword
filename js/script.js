// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function ($) {
    $(function () {
        // provide crossword entries in an array of objects like the following example
        // Position refers to the numerical order of an entry. Each position can have
        // two entries: an across entry and a down entry

        var puzzleData = [{"clue":"3.Données, structurées ou non, dont le très grand volume requiert des outils d'analyse adaptés","answer":"benchmarking","position":3,"orientation":"across","startx":3,"starty":3},{"clue":"4.Atelier partagé et ouvert au public, orienté vers la fabrication numérique","answer":"fablab","position":4,"orientation":"across","startx":1,"starty":5},{"clue":"5.Représentation sous forme graphique d'un cheminement de pensée","answer":"mindmapping","position":5,"orientation":"across","startx":8,"starty":6},{"clue":"6.Méthode qui accélère la remise en cause des conventions qui brident la créativité des entreprises. Elle permet de faire émerger les visions nouvelles qui sont à l'origine des grandes innovations","answer":"disruption","position":6,"orientation":"across","startx":2,"starty":9},{"clue":"7.Mode de financement ou d’investissement alternatif, qui privilégie le lien social et de proximité. ","answer":"crowdfunding","position":7,"orientation":"across","startx":1,"starty":12},{"clue":"1.Structure d'accompagnement de porteurs de projets de création d'entreprises. En mettant à leur disposition les compétences et les outils indispensables au bon démarrage et au développement d’une entreprise innovante","answer":"incubateur","position":1,"orientation":"down","startx":6,"starty":1},{"clue":"2.Technique de groupe destinée à stimuler l'imagination des participants en vue de leur faire produire le maximum d'idées dans le minimum de temps","answer":"brainstorming","position":2,"orientation":"down","startx":10,"starty":2},{"clue":"7.Réseau d’acteurs économiques, fortement ancrés territorialement, composés, selon les contextes, principalement de très petites entreprises (TPE)","answer":"cluster","position":7,"orientation":"down","startx":1,"starty":12}]
        $('#puzzle-wrapper').crossword(puzzleData);

    })

})(jQuery)
