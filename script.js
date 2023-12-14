const shortBtn = document.getElementById('short-btn')
const reloadBtn = document.getElementById('reload-btn')

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl(){
    var originalUrl = document.getElementById('originalUrl').value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);
    shortenedTextarea = document.getElementById('shortenedUrl');

    fetch(apiUrl).then(response => response.text()).then(data => {
        shortenedTextarea.value = data;
    }).catch(error => {
        shortenedTextarea.value = "Error: Não foi possível encurtar a URL!";
    })
}

reloadBtn.addEventListener('click', ()=>{
    location.reload();
})