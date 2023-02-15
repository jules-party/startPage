export function getSearch() {
    let commands = ['!r', '!rs', '!yt', '!rym'];
    let inputText = document.getElementById('searchbox').value;
    let search;
    switch (true) {
        case inputText.startsWith(`${commands[0]} `):
            search = inputText.split(`${commands[0]} `).filter(n => n)[0];
            window.open(`https://old.reddit.com/search?q=${search.replace(' ', '+')}&include_over_18=on&sort=relevance&t=al`);
            break;
        case inputText.startsWith(`${commands[1]} `):
            search = inputText.split(`${commands[1]} `).filter(n => n)[0];
            window.open(`https://old.reddit.com/r/${search}`);
            break;
        case inputText.startsWith(`${commands[2]} `):
            search = inputText.split(`${commands[2]} `).filter(n => n)[0];
            window.open(`https://www.youtube.com/results?search_query=${search.replace(' ', '+')}`);
            break;
        case inputText.startsWith(`${commands[3]} `):
            search = inputText.split(`${commands[3]} `).filter(n => n)[0];
            window.open(`https://rateyourmusic.com/search?searchterm=${search.replace(' ', '+')}&searchtype=`);
            break;
    }
}
