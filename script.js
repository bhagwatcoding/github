let header = document.createElement('header');
let body = document.querySelector('body');
body.insertBefore(header, body.children[0]);

fetch('header.html')
    .then(res => res.text())
    .then(res => {
        header.innerHTML = res;
    }).catch(err => {
        console.error(err);
    });