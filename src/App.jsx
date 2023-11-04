import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  let name = "Alin"
  let isSingle = true;
  const renderStatus = (param) =>{
    return param? <p>Single</p> : <p>Taken</p>
  }

  return (
    <div>
      <Navbar />
      <Footer />

      {/* <h1 className="">hai {name} </h1>
      {isSingle ? ( <p>single</p>) : ( <p>taken</p> )}
      {renderStatus(false)} */}
    </div>
  );
}

export default App;