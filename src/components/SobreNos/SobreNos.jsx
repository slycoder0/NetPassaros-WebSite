import './SobreNos.css';

// Importação das imagens
import LicenciadosImage from '../../assets/img/licenciados.png';
import QualidadeImage from '../../assets/img/qualidade.png';
import MaterialImage from '../../assets/img/material.png';

export default function SobreNos() {
  return (
    <div className='sobreNos'>
      <div className="full-text">
        <h2 className="sobre-nos-title">Quem somos?</h2>
        <p className="sobre-nos-text">
          Uma empresa focada na entrega de produtos exclusivos de decoração com a qualidade e tecnologia mais moderna disponível no mercado. <br /><br />
        
        
          Entendemos que as pequenas coisas do dia a dia tornam-se mais marcantes e expressivas quando conseguimos tocá-las e admirá-las.<br /><br />

          Com esse conceito, surgiu a ideia de entregar eternização nos momentos das pessoas, seja pelo amor, pela fé, pela gratidão, ou simplesmente pelo fato de decorar seus ambientes com um material de excelente qualidade.<br /><br />

          Nossa missão é de fato eternizar momentos e paixões, e com isso estarmos presentes em todos os lares deixando nossa marca.<br /><br />
        </p>
      </div>
      <div className="sobre-nos-container">
        <div className="sobre-nos-card">
          <img src={LicenciadosImage} alt="Produtos Licenciados" className="sobre-nos-image" />
          <div className="sobre-nos-content">
            <h2 className="sobre-nos-title">Produtos licenciados</h2>
            <p className="sobre-nos-text">
              Todos os produtos em nosso catálogo são aprovados e licenciados pelos clubes.
            </p>
          </div>
        </div>
        <div className="sobre-nos-card reverse">
          <div className="sobre-nos-content">
            <h2 className="sobre-nos-title">Qualidade</h2>
            <p className="sobre-nos-text">
              Trabalhamos com material retro iluminado que se destacam em ambientes e em fotos com iluminação focada em nossos objetos.
            </p>
          </div>
          <img src={QualidadeImage} alt="Qualidade" className="sobre-nos-image" />
        </div>
        <div className="sobre-nos-card">
          <img src={MaterialImage} alt="Material" className="sobre-nos-image" />
          <div className="sobre-nos-content">
            <h2 className="sobre-nos-title">Material</h2>
            <p className="sobre-nos-text">
              Trabalhamos nossas placas com alumínio e nossa película retro iluminada, dando a nossos produtos uma maior longevidade e resistência a adversidades que podem vir a ocorrer no dia a dia.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
