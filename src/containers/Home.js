function Home() {
  return (
    <body>
      <header>           
          <div class="container pt-5">
              <h1 class="text-center">PokeStore</h1>
          </div>
      </header>
      <main>
        <section class="container-fluid">
          <div class="container pt-5">
            <div class="row mt-5">
                <div class="col-lg-7 text-center text-lg-left">
                    <div class="mb-4">
                        <h1 class="fw-bold mb-4"> Bienvenido!</h1>
                        <h3 class="mb-4">Somos una tienda online de cartas de coleccion</h3>
                    </div>
                </div>
                <div class="col-lg-3 d-flex justify-content-center">
                    <img class="img-fluid mt-5 mb-lg-0" src="img/fondo.png" alt="fondo"/>
                </div>
          </div>
          </div>   
        </section>
        <section class="container-fluid">
            <div class="row">
                <div class="col-lg-12 text-center">
                    <h2 class="fw-bold mb-5 mt-5">¡Algunos de nuestros productos!</h2>
                </div>
                <div class="col-lg-12 d-flex flex-column flex-lg-row justify-content-around mb-4">
                    <div class="mt-4 mt-lg-0 text-center">
                        <img class="img-fluid" src="img/charmander.jpg" alt="charmander"/>
                        <h4 class="mt-2 mb-0">Charmander</h4>
                        <p class="mb-0 fst-italic">Pokemon Fuego</p>
                    </div>
                    <div class="mt-4 mt-lg-0 text-center">
                        <img class="img-fluid" src="img/eevee.jpg" alt="eevee"/>
                        <h4 class="mt-2 mb-0">Eevee</h4>
                        <p class="mb-0 fst-italic">Pokemon Normal</p>
                    </div>     
                    <div class="mt-4 mt-lg-0 text-center">
                        <img class="img-fluid" src="img/squirtle.jpg" alt="squirtle"/>
                        <h4 class="mt-2 mb-0">Squirtle</h4>
                        <p class="mb-0 fst-italic">Pokemon Acuatico</p>
                    </div>
                </div>    
            </div>
        </section>
      </main>
  </body> 
  );
}

export default Home;