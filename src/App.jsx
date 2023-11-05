import { useState } from "react";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from "./components/Sidebar";

function App() {
  let name = "Alin"
  const [isSingle, setIsSingle] = useState(true)
  const [showSideBar, setShowSidebar] = useState(false)
  const [data, setData] = useState([
    {
      id: 1,
      title: "title one",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis vitae hic repudiandae! Esse, dignissimos nulla accusamus, porro perspiciatis consequuntur fugiat aliquam possimus sequi veniam corrupti dolore sint placeat? Explicabo."
    },
    {
      id: 2,
      title: "title two",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis vitae hic repudiandae! Esse, dignissimos nulla accusamus, porro perspiciatis consequuntur fugiat aliquam possimus sequi veniam corrupti dolore sint placeat? Explicabo."
    },
    {
      id: 3,
      title: "title three",
      desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni veritatis vitae hic repudiandae! Esse, dignissimos nulla accusamus, porro perspiciatis consequuntur fugiat aliquam possimus sequi veniam corrupti dolore sint placeat? Explicabo."
    }
  ])

  const handleStatus = () =>{
    setIsSingle(!isSingle)
  }

  const handleSidebar = () =>{
    setShowSidebar(!showSideBar)
  }

  console.log("status", isSingle)

  return (
    <div>

      <button className="btn btn-primary me-2" onClick={handleSidebar}>
        {showSideBar? 'X' : '|||'}
      </button>
      {showSideBar && <Sidebar />}
      
      <Navbar />
        <h1 className="">hai {name} </h1>
        { isSingle? <p>single</p> : <p>married</p> }

        <button className="btn btn-primary me-2" onClick={handleStatus}>{ isSingle ? 'Single' : 'Married' }</button>
        <button className="btn btn-primary" onClick={handleStatus}>Change Status</button>

      {
        data.map((item, index)=>(
          <div className="col-4" key={index}>
            <p className="py-4 text-white mt-4" style={{ backgroundColor: '#1e1e1e' }}> { item.title } </p>
            <p> { item.desc } </p>
          </div>
        ))
      }
      <Footer />
    </div>
  );
}

export default App;