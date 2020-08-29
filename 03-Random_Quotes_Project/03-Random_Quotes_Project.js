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
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
        {quote: "jkl", author: "jkl1"},
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