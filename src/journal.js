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
