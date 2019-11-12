//user logic
import { Journal } from './journal';
import { JournalEntry } from './journal';
import './styles.css';

var journal = new Journal;

$(document).ready(function() {
  $(".entryForm").submit(function(event) {
    var titleInput = $('#title').val();
    var bodyInput = $('#body').val();
    var newJournalEntry = new JournalEntry(titleInput, bodyInput);
    journal.addEntry(newJournalEntry);
    event.preventDefault();
    var bodyArray = bodyInput.split(" ");
    var bodyLength = bodyArray.length;
    var wordArray = bodyInput.split("");
    console.log(journal);
    newJournalEntry.vowelCounter(wordArray);
    newJournalEntry.consonantCounter(wordArray);
    $('#journalEntry').append("<h4 id='journalTitle'>" + titleInput + "</h4><br><p id='journalBody'>" + bodyInput + "</p><p id='wordNumber'>" + bodyLength + "</p>");
  });
});

//Need to create methods to check word and letter functionality
