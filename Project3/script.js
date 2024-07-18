/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon */
function Nav() {
    var state = document.getElementsByTagName("nav")[0].style.display;
    if (state == 'block') {
        document.getElementsByTagName("nav")[0].style.display = 'none';
    } else {
        document.getElementsByTagName("nav")[0].style.display = 'block';
    }
}