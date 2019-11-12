//user logic
import { JournalEntry } from './journal';
import './styles.css';


$(document).ready(function() {
  $(".entryForm").submit(function(event) {
    event.preventDefault();
    var titleInput = $('#title').val();
    var bodyInput = $('#body').val();
    console.log(titleInput, bodyInput);
  });
});
