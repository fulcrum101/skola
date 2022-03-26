function dienas(){
    var one_day = 1000 * 60 * 60 * 24;
    var present_date = new Date();
    var date_entered = new Date(document.getElementById("datums").value);
    var Result = Math.round(date_entered.getTime()-present_date.getTime()) / (one_day) + 1;
    document.write("<h1>Līdz svētkiem atlikuša "+Result.toFixed(0)+" dienas : ))</h1>")
    document.write("<iframe src='https://giphy.com/embed/0OgdJVNjbcIifqSb7U' width='480' height='412' frameBorder='0' class='giphy-embed' allowFullScreen></iframe>")
}