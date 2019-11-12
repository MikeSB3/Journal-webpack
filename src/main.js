//user logic
import { JournalEntry } from './journal';
import './styles.css';


$(document).ready(function() {
  $(".entryForm").submit(function(event) {
    var titleInput = $('#title').val();
    var bodyInput = $('#body').val();
    var journalEntry = new JournalEntry(titleInput, bodyInput);
    event.preventDefault();
    console.log(titleInput, bodyInput);
    console.log(journalEntry);
    // console.log(journalEntry);
    // console.log(journalEntry.title);
    // console.log(Object.keys(journalEntry));
    $('#journalEntry').html("<h4 id='journalTitle'>" + titleInput + "</h4><br><p id='journalBody'>" + bodyInput + "</p>");
    // $('#journalBody').
  });
});
