import './App.css';
import Header from './components/Header/Header';
import Body from './components/Body/Body';
import FloatIcon from './components/FloatIcon/FloatIcon';


function App() {
   const productId = window.location.pathname.split('/product/')[1];
  return (
    <div className="App">
      <Header productId={productId} />
      <Body productId={productId} />
      <FloatIcon productId={productId} />
    </div>
  );
}

export default App;
