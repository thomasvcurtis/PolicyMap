function openTab(event, tabName) {
    // Needed variables.
    var i, tabContent, tabLinks;

    // Sets the display of all elements of class tabcontent equal to "none".
    tabContent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabContent.length; ++i) {
        tabContent[i].style.display = "none";
    }

    // Removes all occurrences of class active from all elements where the class is tablinks.
    tabLinks = document.getElementsByClassName("tabslink");
    for (i = 0; i < tabLinks.length; ++i) {
        tabLinks[i].className = tabLinks[i].className.replace(" active", "");
    }

    // Activates the selected tab.
    document.getElementById(tabName).style.display = "block";
    event.currentTarget.className += " active";
}