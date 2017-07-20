const VerseStructure = require('../models/VerseStructure');

function wordsWichEndWith(words, end){
	return words.filter((wordCont)=>{
	  let word = wordCont.content;
		return word.slice(word.length - end.length) === end;
	})
}

function randomWord(words){
  let index = Math.floor(Math.random()*words.length);
  return words[index].content;
}

function randomStructure( data){
	let index = Math.floor(Math.random()*data.length);
  return data[index].structure;
}

function randomWordWithType(words, type){
  let wordsOfType = words.filter((obj)=> obj.type == type);
  return randomWord(wordsOfType);
}

function randomWordWhichRimes(words, type, rime){
	let wordsOfType = words.filter(
		(obj)=> obj.type == type && obj.content !== rime
	);

	let candidates = [];

	for(let i = rime.length; i >= 0; i--){
		candidates = wordsOfType.filter((word)=>{
			let content = word.content;
			let contentEnd = content.slice(content.length - i);
			let rimeEnd = rime.slice(rime.length - i);
			return contentEnd === rimeEnd;
		})
		if(candidates.length != 0) break;
	}

	return randomWord(candidates);
}

function pushTimes(array, word, times){
  for(var i = 0; i < times; i++){
    array.push(word);
  }
}

// let firstSchema = ['2#_Papi','1@-adj','1@_who','1@_verb','1@_verb','1@_what','1@_how','1@_where', '1@_who', '1@-adj','1@_when'];
let firstSchema = ['1#_hace tiempo','1@_who','1#_que','1@-where','1@_what','1@_when','1@_where','1@-when'];

function verse(words){
	return new Promise((resolve, reject)=>{

		let newVerse = [];
		let rimedWord;
		VerseStructure.find()
		.exec()
		.then(data => {
			const structure = randomStructure(data);
			structure.forEach((elm, k)=>{
				let times = parseInt(elm[0]);
				let type = elm[1];
				let rime = elm[2];
				let cont = elm.slice(3);


				if(type === '@'){
					let wordToAdd;

					if(rime === '_'){
						wordToAdd = randomWordWithType(words, cont);
					}else{
						if(!rimedWord){
							wordToAdd =  randomWordWithType(words, cont);
							rimedWord = wordToAdd;
						}else{
							wordToAdd = randomWordWhichRimes(words, cont, rimedWord);
						}
					}
					for(let i = 0; i < times; i++ ){
						newVerse.push(wordToAdd);
					}
				}else{
					for(let i = 0; i < times; i++ ){
						newVerse.push(cont);
					}
				}
			});

			resolve(newVerse.join(' '));
		})
	})
}

module.exports = verse;
