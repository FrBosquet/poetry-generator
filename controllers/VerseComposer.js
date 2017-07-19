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

function randomWordWithType(words, type){
  let wordsOfType = words.filter((obj)=> obj.type == type);
  return randomWord(wordsOfType);
}

//Fer rodri amzing work
function findRime( rime, words, matchs){
  let compArr = [];
  let rimeArr = [];
  let defRime = [];
  let counter = 0;

  let comparable = rime.slice(rime.length - matchs);
  compArr.push(comparable);
  words.forEach((word)=>{
    let comparison = (word.content.slice(word.length - matchs));
    compArr.push(comparison);
  });

  while(compArr.length > 1){
    counter ++;
    if(compArr[0] === compArr[1]){
      rimeArr.push(compArr[1]);
      rimeArr.push(counter);
      compArr.splice(1,1);
    }else{
      compArr.splice(1,1);
    }
  }

  for (var i = 1; i < rimeArr.length; i += 2) {
    defRime.push((words[rimeArr[i]-1]))
  }

  return defRime;
}

function recursiveRime(words, type, rime){
  console.log("En recursiveRime", rime);
  filteredWords = words.filter((w)=>{
    return w.type = type && w.content !== rime
  })
  for(let i = rime.length; i > 0; i--){
    console.log("En loop de rec rime", i);
    let finalRime = findRime(rime, words, i);
    console.log("En loop de rec rime tras final time");
    if(finalRime.length > 0){
      return finalRime;
    }
  }
  console.log("En recursiveRime 2");
  return words.map((w)=>w.content);
}

function pushTimes(array, word, times){
  for(var i = 0; i < times; i++){
    array.push(word);
  }
}

// let firstSchema = ['2#_Papi','1@-adj','1@_who','1@_verb','1@_verb','1@_what','1@_how','1@_where', '1@_who', '1@-adj','1@_when'];
let firstSchema = ['1@-when','1@-where'];

function verse(words){
  let newVerse = [];
  var rimedWord;

  console.log("pre loop of schema");

  firstSchema.forEach((elm, k)=>{
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
          console.log("Hola caracola")
          let listOfWords = recursiveRime(words, cont, rimedWord);
          console.log("Hola caracola 2")
          let index = Math.floor(Math.random()*listOfWords.length);
          wordToAdd = listOfWords[index].content;
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
  })

  return newVerse.join(' ');
}

module.exports = verse;
