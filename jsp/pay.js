function closeWindow() {
    window.close(); // This will close the current window/tab
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

function toggleSearchResults() {
    const searchResults = document.getElementById('searchResults');

    if (searchResults.classList.contains('active')) {
        searchResults.classList.remove('active');
    } else {
        searchResults.classList.add('active');
    }
}