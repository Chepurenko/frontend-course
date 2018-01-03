;(function () {
	"use strict";
	var playList = [{
			author: "led zeppelin",
			song: "stairway to heaven",
			duration: "2:03"
		},
		{
			author: "queen",
			song: "bohemian rhapsody",
			duration: "2:30"
		},
		{
			author: "lynyrd skynyrd",
			song: "free bird",
			duration: "1:56"
		},
		{
			author: "deep purple",
			song: "smoke on the water",
			duration: "3:03"
		},
		{
			author: "jimi hendrix",
			song: "all along the watchtower",
			duration: "2:53"
		},
		{
			author: "AC/DC",
			song: "back in black",
			duration: "2:43"
		},
		{
			author: "queen",
			song: "we will rock you",
			duration: "2:13"			
		},
		{
			author: "metallica",
			song: "enter sandman",
			duration: "3:03"			
		}
	];

	var list = document.getElementById('list');
	var listElement = document.getElementById('listElement').innerHTML;
	var listHTML = '';

	for (var i = 0; i < playList.length; i++) {
		listHTML += listElement;
	};

	list.innerHTML = listHTML;


	var duration = document.querySelectorAll('.element_duration');
	var author = document.querySelectorAll('.element_author');
	var song = document.querySelectorAll('.element_song');

	for (var i = 0; i < playList.length; i++){
		duration[i].innerHTML = playList[i].duration;
		author[i].innerHTML = playList[i].author;
		song[i].innerHTML = playList[i].song;
	};
})();
