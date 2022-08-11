import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Cart from "./Pages/Cart/Cart";
import Home from "./Pages/Home/Home";
import ProductId from "./Pages/ProductId/ProductId";
import ProductList from "./Pages/ProductList/ProductList";

function App() {
  return (
    <div className="App">
      <Header />
      <ProductId />
      <Footer />
    </div>
  );
}

export default App;
