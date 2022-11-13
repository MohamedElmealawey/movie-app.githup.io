let search=document.querySelector(".search");
let header=document.querySelector("header");

window.addEventListener("scroll",()=>{
    header.classList.toggle("shadow", window.scrollY>0);
})
function getMovies(name){
    if(name==undefined){
        return(
            Error
        )
    }
    else{
        fetch(`http://www.omdbapi.com/?s=${name}&apikey=c9b75979`).then(res=>res.json())
        .then(data=>{
            showMovies(data.Search);
        })
    }
}

function showMovies(data){
    let box="";
    if(data.length>0){
        data.forEach(movie => {
            box +=`
            <div class="box">
                <div class="box-img">
                    <img src="${movie.Poster}" alt="">
                </div>
                <div class="info">
                    <h3>Movie Title :</h3>
                    <p>${movie.Title}</p>
                    <span>Year : ${movie.Year}</span>
                    <span>Type : ${movie.Type}</span>
                </div>
                </div>
            `
        });
        document.querySelector(".movies").innerHTML=box;
    }
    else{
        box=`
        <div class="box">
            <h1>No data to show</h1>
            </div>
        `
        document.querySelector(".movies").innerHTML=box;
    }
}
getMovies();