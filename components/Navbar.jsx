
 


export default function Teste() {


  

  return (
    <>
      <section className="div-navbar">
        <a href="/">
          <div className="nav-logo">
             <img
              alt="Logo Portal"
              src="http://ec2-54-207-215-247.sa-east-1.compute.amazonaws.com:8000/imagens/logo.jpg"
              width="50"
              height="50"
              className="logo-top"
            /> 
            <div className="nav-name">
              <h3 className="Title-Navbar">Raposa</h3>
              <hr className="Title-Navbar line"></hr>
              <h5 className="Title-Navbar">Prefeitura</h5>
            </div>
          </div>
        </a>
        
        <div className="left-navbar-itens">
          {/* <div className="box-accessible1"> */}
          <div className="box-accessible">
            {/* <button className="oi" type="button" accessKey="=" >A+ </button> */}
            {/* <button className="oi"type="button" accessKey="-" >A-</button> */}
            <p title="| Acessibilidade | Libras | Contraste | (CTRL U) (CTRL +)(CTRL -)|">
              | Acessibilidade | Libras | Contraste | (CTRL U) (CTRL +)(CTRL -)|
            </p>
          </div>
          {/* </div> */}
{/*  
          <ul class="list-navbar lista-primaria-navbar">{arrayMap}</ul>  */}
        </div>
      </section>

      {/* {statusNavbarleft ? showSidebar() : ""} */}
    </>
  );
}
