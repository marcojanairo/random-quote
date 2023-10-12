// Quotes
const quotes = [
    {
        quote: "Great things come from hard work and perseverance. No excuses.",
        source: "Kobe Bryant",
    },
    {
        quote: "Nobody is gonna hit as hard as life, but it ain’t how hard you can hit. It’s how hard you can get hit and keep moving forward. It’s how much you can take, and keep moving forward. That’s how winning is done.",
        source: "Rocky Balboa",
        citation: "Movie - Rocky Balboa",
    },
    {
        quote: "You miss 100 percent of the shots you never take.",
        source: "Wayne Gretzky",
        year: "1999"
    },
    {
        quote: "A problem is a chance for you to do your best.",
        source: "Duke Ellington",
        citation: "",
        year: 1984
    },
    {
        quote: "When a defining moment comes along, you can do one of two things. Define the moment, or let the moment define you.",
        source: "Roy McAvoy",
        citation: "Movie - Tin Cup"
    },
    
]


// `getRandomQuote` function

function getRandomQuote() {
    const indexRandom = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[indexRandom];
    return randomQuote;
}

/**** `printQuote` function***/
// 1. Create a variable that calls the getRandomQuote() function
function printQuote(){
    const randomQuote = getRandomQuote();

    // 2. Create a variable that initiates your HTML string with the first two <p></p> elements, their classNames,
    // and the quote and source properties, but leave off the second closing `</p>` tag for now
    let html = '<p class="quote">' + randomQuote.quote + '</p>';
    html += '<p class="source">' + randomQuote.source; 
    
    
    // 3. Use an if statement to check if the citation property exists, and if it does, concatenate a <span></span>
    // element, appropriate className, and citation property to the HTML string
    if (randomQuote.citation) {
        html += '<span class="citation">' + randomQuote.citation + '</span>';
    }


    // 4. Use an if statement to check of the year property exists, and if it does, concatenate a <span></span> element,
    // appropriate className, and year property to the HTML string
    if (randomQuote.year) {
        html += '<span class="year">' + randomQuote.year + '</span>';
    }
    
    
    // 5. After the two if statements, concatenate the closing </p> tag to the HTML string
    html += '</p>';
    
    // 6. set the innerHTML of the quote-box div to equal the complete HTML string
    document.getElementById('quote-box').innerHTML = html;

}

// Click event listener for the print quote button
document.getElementById('load-quote').addEventListener('click', function () {
    printQuote();
});