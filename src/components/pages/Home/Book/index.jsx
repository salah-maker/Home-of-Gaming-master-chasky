import Icon from "../../signup/Sign";
import "./book.css"
import Img1 from "/img/img1.jpeg";
import Img3 from "/img/img3.jpeg";



const Book = () => {
  return (
    <>
    <section className="book mt-5" id="book">
      <div className="container">
        <div className="main-text">
          <h1>SUIVI DU STATU EL TEMPS REEL</h1>
        </div>

        <div className="row justify-content-between">
          <div className="col-lg-5 py-3 py-md-0">
            <h2>
              Home of Gaming <br /> la référence Gaming à <br /> Quida
            </h2>
            <p>
              Viens seul ou avec les amis et profites de <br /> Jouer aux leux
              du moment dans un cadre <br /> convivial et vis une expérience
              unique <br /> dans la région !
            </p>
            <p>
              Tu t'ennuies chez toi, t'as du temps de <br /> ilibre ? Passe
              faire un tour !
            </p>
          </div>





          <div className="col-lg-5  py-3 py-md-0">
            <div className="card">
              <div
                id="carouselExampleControls"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="scrol carousel-inner">
                  <div className=" carousel-item active">
                    <img
                      src={Img1}
                      height="600"
                      className="d-block w-100 object-fit-cover"
                      alt="..."
                    />
                  </div>
                  <div className="carousel-item">
                    <img
                      src={Img3}
                      height="600"
                      className="d-block w-100 object-fit-cover"
                      alt="..."
                    />
                  </div>
                </div>
                <button
                  className="carousel-control-prev"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="prev"
                >
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next"
                  type="button"
                  data-bs-target="#carouselExampleControls"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  ></span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>



          
          <div class="row justify-content-center">

            <div class="col-2 suivi-bt ">
              <a href=""><button type="button" class="btn btn-danger ">JE RESERVE</button></a>
            </div>
          </div>
        </div>
      </div>


      
    </section>


    <div class="row" >

<div class="col-md-4 py-3 py-md-0">

  <div class="card">

    <div class="card-body">
      <h3>IN The Game</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
    </div>
  </div>

</div>
<div class="col-md-4 py-3 py-md-0">

  <div class="card">
    <i class="fas fa-plane"></i>
    <div class="card-body">
      <h3>About</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
    </div>
  </div>

</div>
<div class="col-md-4 py-3 py-md-0">

  <div class="card">
    <i class="fas fa-hiking"></i>
    <div class="card-body">
      <h3>VESION</h3>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. A, eaque.</p>
    </div>
  </div>

</div>



</div>

    </>
  );
};

export default Book;
