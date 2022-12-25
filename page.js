function Refresh(){
    size = Quotes.all.length
    random_index = Math.floor(size*Math.random())
    q = Quotes.all[random_index]
    $("#quote").empty().append(q.text)
    console.log(q.text)
}

Refresh();

$("#mybtn").on("click", Refresh)