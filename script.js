const menuIcon = document.getElementById("menu-icon");
menuIcon.addEventListener("click",()=>{
    const listItems = document.querySelector(".list-items");
    listItems.classList.toggle("show-sidebar");
});
window.addEventListener('scroll', () => {
    const items = document.querySelectorAll('.slider .lists .item');
    items.forEach((item) => {
        const rect = item.getBoundingClientRect();
        if (rect.top < window.innerHeight && rect.bottom > 0) {
            item.classList.add('animate');
        } else {
            item.classList.remove('animate');
        }

        // Animate child elements
        const img = item.querySelector('img');
        const heading = item.querySelector('h1');

        if (item.classList.contains('animate')) {
            if (img) img.classList.add('animate');
            if (heading) heading.classList.add('animate');
        } else {
            if (img) img.classList.remove('animate');
            if (heading) heading.classList.remove('animate');
        }
    });
});


window.addEventListener('load', () => {
    document.querySelectorAll('.fadeAnimation').forEach(element => {
        element.classList.add('visible');
    });
});