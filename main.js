let inp = document.querySelector('input');
let but = document.querySelector('button');
but.addEventListener('click', function() {

    let bod = document.querySelector('body');
    let div2 = document.createElement('div');
    let h2 = document.createElement('h2');
    let ol = document.createElement('ol');
    let li = document.createElement('li');
    let but1 = document.createElement("button");

    but1.value = "-";
    but1.innerHTML = but1.value;
    div2.className = 'inrow';
    h2.className = 'h2';
    h2.innerHTML = inp.value;

    bod.appendChild(div2);
    div2.appendChild(ol);
    ol.appendChild(li);
    div2.appendChild(h2);
    div2.appendChild(but1);
    but1.addEventListener('click', function() {
        div2.remove();
    })
})