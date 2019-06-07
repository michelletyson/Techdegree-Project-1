// Michelle Tyson - Tech degree - Project 1


//Created a variable named quotes and inserted quotes in the array. 

var quotes = [ 
  { 
    quote: "Tough times never last, but tough people do",
    source: "Robert H. Schuller",           // Added 'source' property  to quote object
    citation: "Book",                       // Added 'citatiom' property to quote object 
    year: "1984"                            // Added 'year' propert to quote object 
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

  // Created a function named getRandomQuote. 

  function getRandomQuote(array) {
    var RandomNumber = Math.floor( Math.random() * quotes.length);      // Random number generator 
    return quotes[RandomNumber];                                      // Return quote
  };
  

  
// random background color fuction

  function bg_color_random()
  {
  var randomColor = '#' + Math.floor(Math.random()*16777215).toString(16);  // Creates random number between 0 - 16777215 
    document.body.style.backgroundColor = randomColor;          // Changes the bg color to a random color
  }

  // printQuote function

  function printQuote() {
    bg_color_random();                                              // Calls random bg color
    var message = "";                                               // Variable set to an empty string 
    var result = getRandomQuote(quotes);                            // Calls the getRandomQuote function 
    message += "<p class='quote'>" + result.quote + "</p>";        
    message += "<p class='source'>" + result.source;
    if (result.citation) {
      message += "<span class='citation'>" + result.citation + "</span>";  // if condition is true show citation
    }
    if (result.year) {
      message += "<span class='year'>" + result.year + "</span>"
    }
    message += "</p>";
    
    document.getElementById('quote-box').innerHTML = message;     // Set inner HTML to the HTML string 
  }

    printQuote();                                                // calls the printQuote function
    
    setInterval(function(){ printQuote(); }, 20000);             // Created function to change every 20 seconds
   
    document.getElementById('loadQuote').addEventListener("click", printQuote, false);  /* The event listener will be triggered and it will call, 
                                                                                            or "invoke", the 'printQuote' function when the 
                                                                                            "Show another quote" button is clicked.*/





 