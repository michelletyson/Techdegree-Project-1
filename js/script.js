/*Created a variable named quotes and inserted quotes in the array. */

var quotes = [ 
  { 
    quote: "Tough times never last, but tough people do",
    source: "Robert H. Schuller",           /* Added 'source' property  to quote object*/
    citation: "Book",                       /* Added 'citatiom' property to quote object */
    year: "1984"                            /* Added 'year' propert to quote object */
  }, 
  { 
    quote: "Whoever does not love does not know God, because God is love.",
    source: "1 John 4:8.",
    citation: "Bible",
    category: "Love"
  }, 
  { 
    quote: "Above all, love each other deeply, because love covers over a multitude of sins.",
    source: "1 Peter 4:8",
    citation: "Bible",
    category: "Love"
  }, 
  { 
    quote: "For we walk by faith, not by sight.",
    source: "2 Corinthians 5:7",
    citation: "Bible"
  },
  { 
    quote: "A truly strong person does not need the approval of others any more than a lion needs the approval of sheep.",
    source: "Vernon Howard",
    category: "Motivation"
}
];

console.log(quotes);


/* random background color*/

function random_bg_color() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
console.log(bgColor);

  document.body.style.background = bgColor;
  }

random_bg_color();

 

  /*Created a function named getRandomQuote. */

  function getRandomQuote(array) {
    var RandomNumber = Math.floor( Math.random() * quotes.length);      /* Created a Random number generator */
    var randomQuote = array[RandomNumber];                             /* Created a Random quote variable */
    
    return quotes[RandomNumber];                                      /* Return quote */
  }

  console.log(getRandomQuote);


  /* Create a function named printQuote */

  function printQuote() {
    var result = getRandomQuote(quotes);                            /* Calls the getRandomQuote function */
    var message = "";                                              /* Created a variable to set it to an empty string */
    message = "<p class='quote'>" + result.quote + "</p>";        
    message += "<p class='source'>" + result.source;
    message += "<span class='citation'>" + result.citation + "</span>";
    message += "<span class='year'>" + result.year + "</span>"
    message += "</p>";

    document.getElementById('quote-box').innerHTML = message;     /* Set inner HTML to the HTML string */

    console.log(printQuote);
  }

/*
The event listener will be triggered and it will call, or "invoke", the 'printQuote' 
function when the "Show another quote" button is clicked.
 */

document.getElementById('loadQuote').addEventListener("click", printQuote, false);  



 