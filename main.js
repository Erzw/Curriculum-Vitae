/*Carrousel*/
var imagenes = ['img/img1.jpg', 'img/img2.jpeg', 'img/img3.png', 'img/img4.png'],
cont = 0;

function fotos(contenedor){
    contenedor.addEventListener('click', e=> {
        let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont-1];
                cont --;
            }else{
                img.src = imagenes[imagenes.length -1];
                cont = imagenes.length -1;
            }

        } else if(tgt == adelante){
            if(cont < imagenes.length-1){
                img.src = imagenes[cont+1];
                cont ++;
            }else{
                img.src = imagenes[0];
                cont = 0;
            }
        }
    });
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.carrousel');

    fotos(contenedor);
});

/* Rellenar el esqueleto para las skills*/ 
function escribir(habilidad_arreglo)
{
    const lista_habilidades = document.querySelector('#lista_habilidades');
    
    for(let i=0 ; i<habilidad_arreglo.length ; i++)

    {
        let item = document.createElement('div');
        item.classList.add('item')

        let item_text = document.createElement('div');
        item_text.classList.add('texto-item');

        let skill_name = document.createElement('span')
        skill_name.innerText = habilidad_arreglo[i].habilidad;

        let skill_progress = document.createElement('span');
        skill_progress.innerText = `${habilidad_arreglo[i].estado}%`;
        skill_progress.style = `margin-left: ${habilidad_arreglo[i].estado-2}%`;

        let estado = document.createElement('div');
        estado.classList.add('estado');

        let barra_estado = document.createElement('div');
        barra_estado.classList.add('barra-estado');
        barra_estado.style = `width: ${habilidad_arreglo[i].estado}%`;

        item_text.appendChild(skill_name);
        item_text.appendChild(skill_progress);
        item.appendChild(item_text);
        estado.appendChild(barra_estado);
        item.appendChild(estado);
        lista_habilidades.appendChild(item);
    }
}

    fetch('habilidades.json')
    .then(response => response.json())
    .then(info => escribir(info))