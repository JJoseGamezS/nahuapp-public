//Componente del head
class head extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `
            <!--CSS Bootstrap-->
            <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous">
            
              <!--Iconos-->
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css">
            
            <!--Archivo style-->
            <link rel="stylesheet" type="text/css" href="../css/style.css">          
            `
    }
}
//Menu header
class header extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `
            <style>
            nav,
            .offcanvas {
                background-color: #1e293b;
            }
        
            .navbar-toggler {
                border: none;
            }
        
            .navbar-toggler:focus {
                outline: none;
                box-shadow: none;
            }
        
            @media(max-width:768px) {
                .navbar-nav>li:hover {
                    background-color: #0dcaf0;
                }
            }
        </style>
        
            <!--Header-->
            <nav class="navbar navbar-expand-lg navbar-dark">
        
                <!--Contenedor del header-->
                <div class="container-fluid">
        
                    <!--Logo-->
                    <a href="/" class="navbar-brand text-info fw-semibold fs-3">Nahuapp</a>
        
                    <!--Nav boton-->
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#menuLateral">
                        <span class="navbar-toggler-icon"></span>
                    </button>
        
                    <!--Contenedor del menu fuera del canvas-->
                    <section class="offcanvas offcanvas-start" id="menuLateral" tabindex="-1">
        
                        <div class="offcanvas-header" data-bs-theme="dark">
                            <h5 class="offcanvas-title text-info">Menú</h5>
                            <button class="btn-close" type="button" aria-label="Close" data-bs-dismiss="offcanvas"></button>
                        </div>
        
                        <div class="offcanvas-body d-flex flex-column justify-content-between px-0">
        
                            <ul class="navbar-nav fs-5 justify-content-evenly">
                                <li class="nav-item p-3 py-md-1"><a href="/"
                                        class="nav-link">Inicio</a></li>
                                <li class="nav-item p-3 py-md-1"><a href="/Resumenes"
                                        class="nav-link">Resumenes</a></li>
                                <li class="nav-item p-3 py-md-1"><a href="/Ejercicios"
                                        class="nav-link">Ejercicios</a></li>
                                <li class="nav-item p-3 py-md-1"><a href="/Vocabulario"
                                        class="nav-link">Vocabulario</a></li>
                            </ul>

                        </div>
                        <!--Contenedor de logos-->
                        <div class="col-sm-8 d-flex align-items-center justify-content-center py-4 d-block d-sm-block d-md-none">
                            <!--Logo-->
                            <a href="" class="">
                                <img src="./../../ico/logo_fesa.png" alt="Logo" class="img-fluid" style="width: 50%;">
                                <img src="./../../ico/logo_mac.png" alt="Logo" class="img-fluid" style="width: 40%;">
                            </a>
                        </div>
                    
                    </section>
                </div>
            </nav>
            <!--Menu end-->
        
            <!--Encabezado-->
            <header class="container-fluid bg-primary d-flex justify-content-center">
                <p class="text-light mb-0 p-2 fs-5">Aviso</p>
            </header>
        
            <!--JS Bootstrap-->
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
                integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
                crossorigin="anonymous"></script>
            `
    }
}

//Menu footer
class footer extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML =
            `
            <style>
            #footer {
                background-color: #1e293b;
                border: none;
                outline: none;
                box-shadow: none;
            }
            </style>
        
            <!--Footer-->
            <footer class="text-secondary py-3 my-3" id="footer">
        
            <!--Contenedor del footer-->
            <div class="container-fluid">
        
                <nav class="row align-items-center">
                    <div class="col-sm-3 d-flex align-items-center justify-content-center">
                        <!--Logo-->
                        <a href="" class="d-sm-flex d-none d-sm-none d-md-block">
                            <img src="./../../ico/logo_fesa.png" alt="Logo" class="img-fluid" style="width: 40%;">
                            <img src="./../../ico/logo_mac.png" alt="Logo" class="img-fluid" style="width: 40%;">
                        </a>
                    </div>
                    <ul class="col-sm-3 list-unstyled">
                        <!--Menu-->
                        <li class="fw-semibold align text-info"> Sitio </li>
                        <li class="font-weight-bold">
                            <a href="/" class="nav-link">nahuapp.com</a>
                        </li>
                    </ul>
                    <ul class="col-sm-3 list-unstyled">
                        <!--Menu 2-->
                        <li class="fw-semibold text-info">Informacion</li>
                        <li class="font-weight-bold">
                            <a href="" class="nav-link">Sobre nosotros</a>
                        </li>
                    </ul>
                    <ul class="col-sm-3 list-unstyled">
                        <!--Redes-->
                        <li class="fw-semibold text-info">Redes</li>
                        <li class="">
                            <a href="" class="text-reset px-1"><i class="bi bi-tiktok"></i></a>
                            <a href="" class="text-reset px-1"><i class="bi bi-youtube"></i></a>
                        </li>
                    </ul>
                </nav>
            </div>
            </footer>
            `
    }
}

//Alta de componenetes
window.customElements.define("head-component", head);
window.customElements.define("header-component", header);
window.customElements.define("footer-component", footer);


//Agregar Bootstrap js
const bootsrapScript = document.createElement('script');
bootsrapScript.src = "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";
bootsrapScript.setAttribute("integrity", "sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN");
bootsrapScript.setAttribute("crossorigin", "anonymous");

//Agregar jQuerry
const jQuerryScript = document.createElement('script');
jQuerryScript.src="https://code.jquery.com/jquery-3.7.1.min.js" 
jQuerryScript.setAttribute("integrity", "sha256-/JqT3SQfawRcv/BIHPThkBvs0OEvtFFmqPF/lYI/Cxo="); 
jQuerryScript.setAttribute("crossorigin","anonymous");

// Agregar scripts al sitio
const headAdd = document.headAdd || document.getElementsByTagName('head')[0];
headAdd.appendChild(bootsrapScript);
headAdd.appendChild(jQuerryScript);