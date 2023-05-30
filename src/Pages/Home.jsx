import NavBarProjeto from '../components/NavBarProjeto';
import Cardon from '../components/Card';
import Caroussel1 from '../components/Carousel';
import Footer from '../components/Footer';
//import './cabeca.css'


function Home(){
  return (
    <div>
      <div className="cabecalho bg-dark">
        <h4 className='lala'>Natural+</h4>
        <p className='lolo'>A loja que utiliza apenas o natural</p>
      <NavBarProjeto></NavBarProjeto>
      </div>
      <Caroussel1></Caroussel1>
      <h2 className='popo'>Produtos</h2>
      <Cardon></Cardon>
      <Footer></Footer>
    </div>
  )
} export default Home