// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL
(function ($) {
    $(function () {
        // provide crossword entries in an array of objects like the following example
        // Position refers to the numerical order of an entry. Each position can have
        // two entries: an across entry and a down entry

        var puzzleData = [
            {
                "clue": "2. Méthode qui accélère la remise en cause des conventions qui brident la créat" +
                        "ivité des entreprises. Elle permet de faire émerger les visions nouvelles qui " +
                        "sont à l'origine des grandes innovations",
                "answer": "disruption",
                "position": 2,
                "orientation": "across",
                "startx": 2,
                "starty": 2
            }, {
                "clue": "4. Atelier partagé et ouvert au public, orienté vers la fabrication numérique",
                "answer": "fablab",
                "position": 4,
                "orientation": "across",
                "startx": 10,
                "starty": 6
            }, {
                "clue": "6. Technique de groupe destinée à stimuler l'imagination des participants en vu" +
                        "e de leur faire produire le maximum d'idées dans le minimum de temps",
                "answer": "brainstorming",
                "position": 6,
                "orientation": "across",
                "startx": 1,
                "starty": 8
            }, {
                "clue": "7. Structure d'accompagnement de porteurs de projets de création d'entreprises." +
                        " En mettant à leur disposition les compétences et les outils indispensables au" +
                        " bon démarrage et au développement d’une entreprise innovante",
                "answer": "incubateur",
                "position": 7,
                "orientation": "across",
                "startx": 7,
                "starty": 12
            }, {
                "clue": "8. Représentation sous forme graphique d'un cheminement de pensée",
                "answer": "mindmapping",
                "position": 8,
                "orientation": "across",
                "startx": 3,
                "starty": 16
            }, {
                "clue": "1. Mode de financement ou d’investissement alternatif, qui privilégie le lien s" +
                        "ocial et de proximité. ",
                "answer": "crowdfunding",
                "position": 1,
                "orientation": "down",
                "startx": 5,
                "starty": 1
            }, {
                "clue": "3. Réseau d’acteurs économiques, fortement ancrés territorialement, composés, s" +
                        "elon les contextes, principalement de très petites entreprises (TPE)",
                "answer": "cluster",
                "position": 3,
                "orientation": "down",
                "startx": 7,
                "starty": 4
            }, {
                "clue": "5. Données, structurées ou non, dont le très grand volume requiert des outils d" +
                        "'analyse adaptés",
                "answer": "benchmarking",
                "position": 5,
                "orientation": "down",
                "startx": 12,
                "starty": 6
            }
        ]
        $('#puzzle-wrapper').crossword(puzzleData);

    })

})(jQuery)
