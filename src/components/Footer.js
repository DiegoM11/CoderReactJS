function Footer() { 
  return (
<footer>    
        <section class="container-fluid bg-danger">
            <div class="row">
                <div class="col-lg-4 text-center text-lg-center mt-lg-0">
                    <img class="img-fluid mb-3 mt-5" src="../img/logo.png" alt=""/>
                    <p class="mb-0 fst-italic">PokeStore</p>
                </div>
                <div class="col-lg-4 text-center text-lg-center mt-lg-0">
                    <h4 class="fw-bold mb-3 mt-5">Contacto</h4>
                    <h5 class="mt-2">Correo: PokeStore@gmail.com</h5>
                    <h5 class="mt-2">Telefono: +52 1 55 55 55 55</h5>
                </div>
                <div class="row">
                    <div class="col-12">
                        <hr class="border-top border-light"/>
                    </div>    
                    <div class="col-12 text-center text-lg-left mb-1">
                        <small class="text-white">Diego Massara © 2021 - Todos los derechos reservados</small>
                    </div>
                </div>
            </div>
        </section>
      </footer>
  );
}

export default Footer;