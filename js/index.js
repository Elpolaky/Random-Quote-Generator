var quoteList = [
  "“Be yourself; everyone else is already taken.”",
  "“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",
  "“So many books, so little time.”",
  "“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",
  "“A room without books is like a body without a soul.”",
];
var quoteAuthor = [
  "― Oscar Wilde",
  "― Marilyn Monroe",
  "― Frank Zappa",
  "― Albert Einstein",
  "― Marcus Tullius Cicero",
];
var quoteCheck = null;

function newQuote() {
  var quoteNum = Math.floor(Math.random() * (quoteList.length - 1 + 1));
  while (quoteNum == quoteCheck) {
    quoteNum = Math.floor(Math.random() * (quoteList.length - 1 + 1));
  }
  quoteCheck = quoteNum;
  displayQuote(quoteNum);

  console.log(quoteNum);
}
function displayQuote(quoteNum) {
  var blackBox = `
  <p class="m-0">
   ${quoteList[quoteNum]}
 </p>
 <span class="text-black">
 ${quoteAuthor[quoteNum]}
 </span> `;

  document.getElementById("quote").innerHTML = blackBox;
}
