import { getSearch } from "./search.js";
let isSearching = false;
document.addEventListener('keydown', (e) => {
    if (e.key == ' ') {
        if (isSearching == false) {
            let dimElement = document.getElementById('dim');
            let searchBox = document.getElementById('searchdiv');
            dimElement.style.display = "inline-block";
            searchBox.style.display = "inline-block";
            console.log("aasd");
            isSearching = true;
        }
    }
    else if (e.key == 'Escape') {
        if (isSearching == true) {
            let dimElement = document.getElementById('dim');
            let searchBox = document.getElementById('searchdiv');
            dimElement.style.display = "none";
            searchBox.style.display = "none";
            isSearching = false;
        }
    }
    else if (e.key == 'Enter') {
        let searchInput = document.getElementById('searchbox');
        if (document.activeElement == searchInput) {
            getSearch();
        }
    }
});
