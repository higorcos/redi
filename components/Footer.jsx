import "../styles/footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-div ">
        <div className="div-list">
          <div className="list">
            <ul>
              <h2>Atendimento</h2>
              <li> De Segunda a Sexta, das 08h às 13h.</li>

              <li>
                <img
                  src="/icons/envelope.svg"
                  alt="logo email"
                  className="svg-footer"
                />
                faleconosco@raposa.ma.gov.br
              </li>
              <li>
                <img
                  src="/icons/telephone.svg"
                  alt="logo contato"
                  className="svg-footer"
                />
                (98) 3229-0202
              </li>
              {/* <li><img src="/icons/telephone.svg" alt="logo contato 2" className="svg-footer" />(99) 3554-1112</li> */}
            </ul>
          </div>
          <div className="list">
            <ul>
              <h2>Localização</h2>
              <li>
                <img
                  src="/icons/geo-alt.svg"
                  alt="logo localização"
                  className="svg-footer"
                />{" "}
                Estrada da Raposa, 120
              </li>
              <li>Raposa - MA - CEP: 65.138-000</li>
              <li>CPNJ: 01.612.325.0001-98</li>
            </ul>
          </div>
          <div className="list">
            <ul>
              <h2>E-SIC</h2>
              <li>Estrada da Raposa, 120</li>
              <li>Raposa - MA - CEP: 65.138-000</li>
              <li>
                <img
                  src="/icons/envelope.svg"
                  alt="logo email"
                  className="svg-footer"
                />
                esic@raposa.ma.gov.br
              </li>
            </ul>
          </div>
        </div>
        <div className="card-external">

        <div className="card-social">
    <a href="/" className="link-social">
              <img
                src="/icons/whatsapp.svg"
                alt="logo email"
                className="svg-footer-social"
              />
            </a>

            <a href="/"className="link-social">
              <img
                src="/icons/instagram.svg"
                alt="logo email"
                className="svg-footer-social"
              />
            </a>
            <a href="/"className="link-social">
              <img
                src="/icons/facebook.svg"
                alt="logo email"
                className="svg-footer-social"
              />
            </a>
          </div>
        </div>

        <div className="link-end-footer">
          <a href="http://www.workcenter.slz.br/">
            Copyright © 2022 Prefeitura Municipal de Raposa - Ma. Todos os
            direitos reservados.{" "}
          </a>
        </div>
      </div>
    </div>
  );
}

export default Footer;
