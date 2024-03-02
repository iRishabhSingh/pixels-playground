// Navigation Bar JS is here...
function activeNav(position) {
    let allNavLinks = document.getElementsByClassName('nav-link');
    let allBtns = document.getElementsByClassName('btns');
    
    for (let i = 0; i < allNavLinks.length; i++) {
        allNavLinks[i].classList.remove('selected-nav-option');
        document.getElementById(allBtns[i].id).style.display = 'none';
    }

    document.getElementById(allNavLinks[position].id).classList.add('selected-nav-option');
    document.getElementById(allBtns[position].id).style.display = 'flex';
}