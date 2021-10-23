const accordion = document.getElementsByClassName('question');

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}
// This script will access all of our lists by classname of container.

// Then we will loop through the list.For each container, we simply want to register an event listener to it.When it gets clicked, we want to toggle the class "active" on that element.

//Now we are going to test this effect. Click the first container with the label What is HTML, open your DevTools (click on F12), and inspect it inside of the elements tab.