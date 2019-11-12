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
    console.log(journal);
    var wordLength = bodyInput.split(" ").length;
    console.log(wordLength);
    console.log(journal);
    $('#journalEntry').append("<h4 id='journalTitle'>" + titleInput + "</h4><br><p id='journalBody'>" + bodyInput + "</p>");
  });
});

//Need to create methods to check word and letter functionality
