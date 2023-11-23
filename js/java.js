var imagenes = ['../img/historia/1-2-scaled.jpg','../img/historia/2-2-scaled.jpg','../img/historia/3-2-scaled.jpg','../img/historia/4-2-scaled.jpg','../img/historia/5-2-scaled.jpg','../img/historia/6-1-scaled.jpg','../img/historia/7-1-scaled.jpg','../img/historia/8-1-scaled.jpg','../img/historia/9-1-scaled.jpg','../img/historia/10-1-scaled.jpg','../img/historia/11-1-scaled.jpg','../img/historia/12-1-scaled.jpg','../img/historia/13-1-scaled.jpg','../img/historia/14-1-scaled.jpg','../img/historia/15-1-scaled.jpg','../img/historia/16-1-scaled.jpg','../img/historia/17-1-scaled.jpg','../img/historia/18-1-scaled.jpg','../img/historia/19-scaled.jpg','../img/historia/20-1-scaled.jpg','../img/historia/21-1-scaled.jpg','../img/historia/22-1-scaled.jpg','../img/historia/23-scaled.jpg','../img/historia/24-scaled.jpg','../img/historia/25-scaled.jpg','../img/historia/26-scaled.jpg','../img/historia/27-scaled.jpg','../img/historia/28-scaled.jpg','../img/historia/29-scaled.jpg', '../img/historia/30-scaled.jpg','../img/historia/31-scaled.jpg','../img/historia/32-scaled.jpg','../img/historia/33.jpg']

var cont = 0;

function carrousel(contenedor){
    contenedor.addEventListener('click', e => {
        let atras = contenedor.querySelector('.atras'),
        adelante = contenedor.querySelector('.adelante'),
        img = contenedor.querySelector('img'),
        tgt = e.target;

        if(tgt == atras){
            if(cont > 0){
                img.src = imagenes[cont -1];
                cont --;
            } else {
                img.src = imagenes[imagenes.length - 1 ];
                cont = imagenes.length - 1;
            }
        } else if (tgt == adelante){
            if(cont < imagenes.length - 1){
                img.src = imagenes[cont +1];
                cont ++;
            } else {
                img.src = imagenes[0];
                cont = 0;
            } 
        }
    })
}

document.addEventListener("DOMContentLoaded", () => {
    let contenedor = document.querySelector('.contenedor');

    carrousel(contenedor);
})