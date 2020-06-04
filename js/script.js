// A javascript-enhanced crossword puzzle [c] Jesse Weisbeck, MIT/GPL 
(function($) {
	$(function() {
		// provide crossword entries in an array of objects like the following example
		// Position refers to the numerical order of an entry. Each position can have 
		// two entries: an across entry and a down entry
		
		var puzzleData = [{"clue":"Technique de groupe destinée à stimuler l'imagination des participants en vue de leur faire produire le maximum d'idées dans le minimum de temps","answer":"Blockchain","position":1,"orientation":"across","starty":1,"startx":3},{"clue":"Réseau d’acteurs économiques, fortement ancrés territorialement, composés, selon les contextes, principalement de très petites entreprises (TPE)","answer":"Brainstorming","position":1,"orientation":"down","starty":1,"startx":3},{"clue":"Données, structurées ou non, dont le très grand volume requiert des outils d'analyse adaptés","answer":"Benchmarking","position":2,"orientation":"across","starty":5,"startx":1},{"clue":"Mode de financement ou d’investissement alternatif, qui privilégie le lien social et de proximité. ","answer":"Cluster","position":3,"orientation":"down","starty":7,"startx":8},{"clue":"Processus de conception centré sur l'humain","answer":"Crowdfunding","position":4,"orientation":"across","starty":9,"startx":2}]
		
		$('#puzzle-wrapper').crossword(puzzleData);
		
	})
	
})(jQuery)
