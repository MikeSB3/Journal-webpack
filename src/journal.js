export function Journal(){
  this.journal = [];
  this.currentId = 0;
}

export function JournalEntry(title, body) {
  this.title = title;
  this.body = body;
}

Journal.prototype.addEntry = function (entry) {
  entry.id = this.assignId();
  this.journal.push(entry);
};

Journal.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

JournalEntry.prototype.vowelConsonantCounter = function (arr) {
  var vowels = ['a', 'A', 'e', 'E', 'i', 'I', 'o', 'O', 'u', 'U'];
  var consonants = ['b', 'c', 'd', 'f', 'g', 'h', 'j', 'k', 'l', 'm', 'n', 'p', 'q', 'r', 's', 't', 'v', 'w', 'y', 'z'];
  for(var i = 0; i <= arr.length; i++){
    console.log(arr);
    var counter = 0;
    if(arr[i].includes(vowels)){
    counter ++;
  } else if (arr[i].includes(consonants)){
    counter ++;
  } else {
    console.log('no vowels or consonants?');
  }
  console.log(counter);
  return counter;
}

};
