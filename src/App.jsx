import './App.css';
import { About, Header, Product , Banana_da_Terra, Batata_Comum, Brocolis,
  Kiwi_Verde, Laranja_Bahia, Pimentao, Tomate_Longa_Vida, Uva, Price, 
  Banner_50off,
  Banner_Frete_Gratis} from './components';

function App () {
  
  return (
    <>
      <Header />
      <About />
      <h2 className="section-heading text-color text-uppercase">Nossos Produtos</h2>
      <div className="product-container">
        {/* Produtos */}
        <div className="product-item">
          <Product nomeProduto="Banana da Terra"/>
          <Banana_da_Terra/>
          <Price price="R$ 10,00"/> 
        </div>
        <div className="product-item">
          <Product nomeProduto="Batata Comum"/>
          <Batata_Comum/>
          <Price price="R$ 12,00"/>
        </div>
        <div className="product-item">
          <Product nomeProduto="Brócolis"/>
          <Brocolis/>
          <Price price="R$ 8,00"/>
        </div>
        <div className="product-item">
          <Product nomeProduto="Kiwi Verde"/>
          <Kiwi_Verde/>
          <Price price="R$ 17,00"/>
        </div>
        <div className="product-item">
          <Product nomeProduto="Laranja"/>
          <Laranja_Bahia/>
          <Price price="R$ 10,00"/>
        </div>
        <div className="product-item">
          <Product nomeProduto="Pimentão"/>
          <Pimentao/>
          <Price price="R$ 14,00"/>
        </div>
        <div className="product-item">
          <Product nomeProduto="Tomate Longa Vida"/>
          <Tomate_Longa_Vida/>
          <Price price="R$ 10,00"/>
        </div>
        <div className="product-item">
          <Product nomeProduto="Uva"/>
          <Uva/>
          <Price price="R$ 20,00"/>
        </div>
      </div>
      
      
      <div className="banner-container">
        <Banner_50off/>
        <Banner_Frete_Gratis/>
      </div>
    </>
  );
};

export { App };
