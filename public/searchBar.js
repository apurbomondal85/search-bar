
const searchBar = document.querySelector('#inputFiled');
const tr = document.getElementsByTagName('tr');

searchBar.addEventListener('input', ()=> {
    search = searchBar.value;
    display(search);
})

function display(search) {
    for (let i = 0; i < tr.length; i++) {
        let td = tr[i].getElementsByTagName("td")[0].innerHTML.toUpperCase();
        search = search.toUpperCase();
        if (td.indexOf(search) > -1) {
            tr[i].style.display = "";
        }else{
            tr[i].style.display = "none";
        }
        
    }
}