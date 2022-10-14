        // Declariacion de variables globales 
let up = document.querySelectorAll('.works a')
let colour = document.getElementById('primeroida')
let menu = document.querySelector('.redes')

menu.addEventListener('mouseover',() => {
    document.getElementById('p').classList.remove('desactivo');
    document.getElementById('p').classList.add('activo');
})
 
menu.addEventListener('mouseout',() => {
    document.getElementById('p').classList.add('desactivo');
    document.getElementById('p').classList.remove('activo');
})   
        // Animacion de ida
let transition = (color) => {
    if(window.scrollY == 0 && color == 1){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://sarlaftend.vercel.app/";},2250)
    }
    if(window.scrollY == 0 && color == 2){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://github.com/ANGELcr95/backend-spinobrac";},2250)
    }
    if(window.scrollY == 0 && color == 3){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://mybleen.com/";},2250)
    }
    if(window.scrollY == 0 && color == 4){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://www.youtube.com/watch?v=tCodXFWW2gU";},2250)
    } 
    if(window.scrollY == 0 && color == 5){
        document.getElementById('primeroida').classList.add('unoida');
        document.getElementById('segundoida').classList.add('dosida');
        document.getElementById('spinprincipalida').classList.add('spinida');
        document.getElementById('spinunoida').classList.add('spin1ida');
        document.getElementById('spindosida').classList.add('spin2ida');
        document.getElementById('spintresida').classList.add('spin3ida');
        setTimeout( () => {window.location="https://www.youtube.com/watch?v=xaK9Jwv46W8";},2250)
    }  
}

document.addEventListener('scroll', transition)

        // Recorre los a de work en el assets y a esos a agregarles un evento para que ejecute una funcion anonima tipo flecha

up.forEach((a) => {
    a.addEventListener('click', (e) => {
        setTimeout( () => {transition(e.target.name)},1000)
    })
})

function generarNuevoColor(){
	var simbolos, color;
	simbolos = "0123456789ABCDEF";
	color = "#";
	for(var i = 0; i < 6; i++){
		color = color + simbolos[Math.floor(Math.random() * 16)];
	}
	colour.style.background = color;
}

generarNuevoColor()


let icons = document.querySelectorAll(".icons_banner-img")

let innerTexto = (id) =>{
    let divText = document.getElementById("inner-cart")
    console.log(id);
    
    switch (id) {
        case "safety":
            divText.classList.add("active")
            divText.innerHTML = "<h4><b>React / React-native </b></h4><p><b> Distribuidora Negociemos</b>, una aplicación react donde el alcance del proyecto es renderizar más de 1000 productos para determinados clientes, rol de LT dev y deployment del proyecto, implementando librerías para a gestión de data redux(Thunk), material UI etc..... <br /><b> Spinobrac</b>, Estos son algunos de los proyectos más relevantes y desafiantes sumados a otros proyectos, igual he hecho soporte en otras tecnologías como Frameworks como Laravel principalmente siguiendo arquitectura mvc.<br />Estos son algunos de los proyectos mas relevantes y desafiantes sumados a otros proyectos, igual he hecho soporte en otras tecnologias como Frameworks como Laravel principalmente siguiendo arquitectura mvc.</p>"
            break;
        case "salud":
            divText.classList.add("active")
            divText.innerHTML = "<h4><b>JS/ Python/LIQUID </b></h4><p><b> E-Learning Coomeva SARLAFT</b>,  fue un proyecto bastante retador desarrollado principalmente en vanilla usando AJAX,desplegado en  plataforma de Coomeva para la  capacitación  de sus empleados, particularmente me sentí muy satisfecho por el resultado visualmente es muy bonito, didáctico con juegos y muchas funcionalidades más.....  <br /><b> Bot Twitter</b>, proyecto desarrollado en py en el cual se encargaba de responder desplegando listado de opciones, consumíamos la api de Twitter,se automatiza bastante, ya que la tasa de mensajes era muy alta.... aplicamos analítica de datos<br /><b> Shopify</b>, multiples proyectos han sido desarrollados y he dado soporte Moderato, Bleen, Le frug store parisien....es un preprocesador para CMS shopify sintax unifica HTML y JS, en etiquetas custom.<br /> Son algunos de los proyectos en los cuales he trabajado, aplicando metodología clean code, SOLID... preprocesadores como SASS, Boostrap,Handlebars entre otras. </p>"
            break;
        case "ambiental":
            divText.classList.add("active")
            divText.innerHTML = "<h4><b>Node Js/PHP</b></h4><p><b> API Spinobrag</b>, una API desplegada en Heroku, como GDB mysql usamos FS para almacenar img`s y demas data proporcionada por los colaboradores de la empresa, usando ORM como sequalize o mysql2. <br /><b> API Registro ventas</b>, proyecto desarrollado en php el cual gestiona inventarios de productos, ventas y demas data que usa como GDB MariaDB. <br /><b> ApI Tasks</b>, LP backend Node Js y GDB mogondb.<br />De igual forma ocasionalmente desarrolle en Ruby para ejecutar scripts custom para shopify....</p>"
            break;
        default:
            divText.classList.remove("active")
            divText.innerHTML = ""
            break;
    }

}
icons.forEach((icon) => {
    icon.addEventListener('mouseout', () => {
        if (window.screen.width > 900) {
            innerTexto()
        }
    })
})

let select = document.getElementById("presentacion_id")

select.addEventListener('click', (e) => {
    if (window.screen.width < 900) {
        innerTexto(e.target.id)
    }
})

icons.forEach((icon) => {
    icon.addEventListener('mouseover', (e) => {
        if (window.screen.width > 900) {
            innerTexto(e.target.id)
        }
    })
})

icons.forEach((icon) => {
    icon.addEventListener('click', (e) => {
        if (window.screen.width < 900) {
            innerTexto(e.target.id)
        }
    })
})




