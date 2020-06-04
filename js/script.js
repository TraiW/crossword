// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		
		var puzzleData = [{"clue":"Mode de financement ou d’investissement alternatif, qui privilégie le lien social et de proximité. ","answer":"crowdfunding","position":1,"orientation":"down","starty":1,"startx":10},{"clue":"Réseau d’acteurs économiques, fortement ancrés territorialement, composés, selon les contextes, principalement de très petites entreprises (TPE)","answer":"cluster","position":2,"orientation":"down","starty":2,"startx":7},{"clue":"telier partagé et ouvert au public, orienté vers la fabrication numérique","answer":"fablab","position":3,"orientation":"across","starty":6,"startx":10},{"clue":"Technique de groupe destinée à stimuler l'imagination des participants en vue de leur faire produire le maximum d'idées dans le minimum de temps","answer":"brainstorming","position":4,"orientation":"across","starty":8,"startx":6},{"clue":"Données, structurées ou non, dont le très grand volume requiert des outils d'analyse adaptés","answer":"benchmarking","position":4,"orientation":"down","starty":8,"startx":6},{"clue":"Méthode qui accélère la remise en cause des conventions qui brident la créativité des entreprises. Elle permet de faire émerger les visions nouvelles qui sont à l'origine des grandes innovations","answer":"disruption","position":5,"orientation":"across","starty":10,"startx":9},{"clue":"Structure d'accompagnement de porteurs de projets de création d'entreprises. En mettant à leur disposition les compétences et les outils indispensables au bon démarrage et au développement d’une entreprise innovante","answer":"incubateur","position":6,"orientation":"across","starty":14,"startx":1},{"clue":"Représentation sous forme graphique d'un cheminement de pensée","answer":"mindmapping","position":7,"orientation":"across","starty":17,"startx":5}]
		
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
