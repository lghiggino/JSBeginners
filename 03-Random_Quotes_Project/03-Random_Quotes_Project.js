console.log("curious errors. :) ")
    let quotes = [
        {quote: "abc", author: "abc1"},
        {quote: "def", author: "def1"},
        {quote: "ghi", author: "ghi1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "mno", author: "mno1"},
        {quote: "pqr", author: "pqr1"},
        {quote: "stu", author: "stu1"},
        {quote: "vwy", author: "vwy1"},
        {quote: "xz", author: "xz1"},
        {quote: "jkl", author: "jkl10"},
        {quote: "jkl", author: "jkl11"},
        {quote: "jkl", author: "jkl12"},
        {quote: "jkl", author: "jkl13"},
        {quote: "jkl", author: "jkl14"},
        {quote: "jkl", author: "jkl15"},
        {quote: "jkl", author: "jkl16"},
        {quote: "jkl", author: "jkl17"},
        {quote: "jkl", author: "jkl18"},
        {quote: "jkl", author: "jkl19"},
        {quote: "jkl", author: "jkl20"},
        {quote: "jkl", author: "jkl21"},
        {quote: "jkl", author: "jkl22"},
        {quote: "jkl", author: "jkl23"},
        {quote: "jkl", author: "jkl24"},
        {quote: "jkl", author: "jkl25"},
        {quote: "jkl", author: "jkl26"},
        {quote: "jkl", author: "jkl27"},
        {quote: "jkl", author: "jkl28"},
        {quote: "jkl", author: "jkl29"},
        {quote: "jkl", author: "jkl30"},
        {quote: "jkl", author: "jkl31"},
    ]

    let control = document.querySelector("#control");
    control.addEventListener("click", generate);

    function generate(e){
        let randomArrayNumber = Math.floor(Math.random()*31);
        console.log(randomArrayNumber)
        let theQuote = document.querySelector("#theQuote");
        let author = document.querySelector("#author");
        theQuote.textContent = quotes[randomArrayNumber]["quote"];
        author.textContent = quotes[randomArrayNumber]["author"];
    }