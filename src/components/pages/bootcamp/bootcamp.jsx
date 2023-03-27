
const Bootcamp = () => {
  return (
    <div className="container" style={{marginTop:'100px' , marginBottom:'300px'}}>
      <div className="row ">
        <center>
          <div className="col">
            <h1 style={{ fontWeight: "bold" ,marginBottom:'100px' ,marginTop:'20px' }}>BOOTCAMP</h1>
          </div>
        </center>
      </div>
      <div className="row">
        <div className="col-6">
          <h3 style={{marginBottom:'35px',color:'red',fontWeight:'bold',fontSize:'35px'}}>EN QUOI ÇA CONSISTE ?</h3>
          <p style={{marginBottom:'100px',marginBottom:'35px'}}>
            Home of Gaming propose la formule de <br style={{marginBottom:'15px'}}/> bootcamp pour que vous puissiez
            privatiser <br style={{marginBottom:'15px'}}/>  la salle et vous réunir afin de jouer ou vous <br style={{marginBottom:'15px'}}/>  entraîner
            dans un cadre unique! <br/> 
          </p>

          <h3 style={{color:'blue',fontWeight:'bold',fontSize:'31px',marginBottom:'15px'}}>QU'EST CE QUI EST COMPRIS ?</h3>
         <h5 style={{marginBottom:'15px'}}>    En réservant vous aurez droit à : <br/> </h5>
        
            <p style={{marginBottom:'15px'}}>L'accès exclusif à l'HOG pour vous et vos amis <br style={{marginBottom:'15px'}}/> </p>
            <p style={{marginBottom:'15px'}}>L'accès aux 10 PC haut de gamme & aux</p>
     
          <h5 style={{marginBottom:'15px'}}>2 salons consoles PS5</h5>
          <p style={{marginBottom:'15px'}}>
            • La possibilité de manger sur place sans <br/>  rien prévoir (livraison de
            snacks) <br/> 
          </p>
          <h3 style={{color:'red',fontWeight:'bold',fontSize:'31px',marginBottom:'15px'}}>COMBIEN ÇA COÛTE ?</h3>
          <p style={{marginBottom:'15px'}}>Le tarif est de :</p>
          <p style={{marginBottom:'15px'}}>
            • 40Dh par personne pour un bootcamp<br/>  de 3h. (10 - 15 personnes).<br/> 
          </p>

          <p style={{marginBottom:'15px'}}>• 80Dh par personne pour un bootcamp <br/> de 3h. (6 - 9 personnes).</p>
          <p style={{marginBottom:'15px'}}>• 100Dh par personne pour un bootcamp<br/>  de 3h. (5 personnes).</p>
        </div>

        <div className='col-6'>
        <form>
  <div class="form-group" style={{marginBottom:'40px'}}>
    <label  style={{marginBottom:'15px'}} for="nom">Nom :</label>
    <input  type="text" class="form-control" id="nom" placeholder="Entrez votre nom"/>
  </div>
  <div class="form-group" style={{marginBottom:'40px'}}>
    <label style={{marginBottom:'15px'}} for="prenom">Prénom :</label>
    <input type="text" class="form-control" id="prenom" placeholder="Entrez votre prénom"/>
  </div>
  <div class="form-group" style={{marginBottom:'40px'}}>
    <label style={{marginBottom:'40px'}} for="adresse">Adresse :</label>
    <input  type="text" class="form-control" id="adresse" placeholder="Entrez votre adresse"/>
  </div>
  <div class="form-group" style={{marginBottom:'40px'}}>

    
    <label for="range">Nombre de perssones :</label>
    <input  type="range" class="form-control-range" id="range"/>
  </div>
  <button type="submit" class="btn btn-primary">Soumettre</button>
</form>


          
        </div>
      </div>


  

    </div>



  );
};

export default Bootcamp;
