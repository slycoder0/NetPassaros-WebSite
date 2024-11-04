import Atacado from '../../components/Atacado/Atacado';
import Banner from '../../components/Banner/Banner';
import ProdutosColecao from '../../components/ProdutosColecao/ProdutosColecao';
import SobreNos from '../../components/SobreNos/SobreNos';
import './Homepage.css';


export default function HomePage() {
  return (
    <div className='HomePage'>
      <Banner/>
      <ProdutosColecao/>
      <SobreNos/>
      <Atacado/>
    </div>
  )
}
