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
    var consonantCounter = newJournalEntry.consonantCounter(wordArray);
    var vowelCounter = newJournalEntry.vowelCounter(wordArray);
    $('#journalEntry').append("<h4 id='journalTitle'> Your Title: " + titleInput + "</h4><br><p id='journalBody'> Journal Entry: " + bodyInput + "</p><p id='wordNumber'>" + "Number of words: " + bodyLength + "</p>" + "Consonants: " + consonantCounter + "<br> Vowels: " + vowelCounter);
  });
});
