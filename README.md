# Techdegree-Project-1
My first techdegree project


var quotes = [ 
  { 
    quote: "Tough times never last, but tough people do",
    source: "Robert H. Schuller",
    citation: "Book",
    year: "1984"
  }, 
  { 
    quote: "Whoever does not love does not know God, because God is love.",
    source: "1 John 4:8.",
    citation: "Bible",
    categoration: "Love"
  }, 
  { 
    quote: "Above all, love each other deeply, because love covers over a multitude of sins.",
    source: "1 Peter 4:8",
    citation: "Bible",
    categoration: "Love"
  }, 
  { 
    quote: "For we walk by faith, not by sight.",
    source: "2 Corinthians 5:7",
    citation: "Bible"
  },
  { 
    quote: "A truly strong person does not need the approval of others any more than a lion needs the approval of sheep.",
    source: "Vernon Howard",
    categoration: "Strength"
}
];

console.log(quotes);

/*Change background color randomly */

   const button = document.getElementsByTagName('button')[0];
button.addEventListener('click', () => {
  document.body.style.backgroundColor = colors();
});

function colors() {
  let colorArray = [];    

  for(let i =0; i < 3 ; i++){
    colorArray.push(Math.floor(Math.random() * (255 - 0) + 0));
  }
  // rgb -> hex
  let color = colorArray
    .map( x => x.toString(16))
    .join('');

  return `#${color}`;
}


  /*Create a function named getRandomQuote. */

  function getRandomQuote(array) {
    var RandomNumber = Math.floor( Math.random() * quotes.length);      /* Random number generator */
    var randomQuote = array[RandomNumber];                             /* Random quote variable */
    
    return quotes[RandomNumber];                                      /* Return quote */
  }

  console.log(getRandomQuote);


  /* Create a function named printQuote */

  function printQuote() {
    var result = getRandomQuote(quotes);                            /* Call the getRandomQuote function */
    var message = "";                                              /* Create variable and set it to an empty string */
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





