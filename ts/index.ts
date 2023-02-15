import {getSearch} from "./search.js";

let isSearching: boolean = false;

document.addEventListener('keydown', (e) => {
    if ((e as KeyboardEvent).key == ' ') {
        if(isSearching == false) {
            let dimElement: HTMLElement = document.getElementById('dim');
            let searchBox: HTMLElement  = document.getElementById('searchdiv');

            dimElement.style.display = "inline-block";
            searchBox.style.display  = "inline-block";
            isSearching = true;
        }
    } else if((e as KeyboardEvent).key == 'Escape') {
        if(isSearching == true) {
            let dimElement: HTMLElement = document.getElementById('dim');
            let searchBox: HTMLElement  = document.getElementById('searchdiv');

            dimElement.style.display = "none";
            searchBox.style.display  = "none";
            isSearching = false;
        }
    } else if((e as KeyboardEvent).key == 'Enter') {
        let searchInput: HTMLElement = document.getElementById('searchbox');
        if (document.activeElement == searchInput) {
            getSearch();
        }
    }
});