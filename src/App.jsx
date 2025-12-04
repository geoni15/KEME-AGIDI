import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <div style={{height: "87px", width: "100%"}} className='container'></div>
      <div className="container-fluid" style={{backgroundColor: "#4eae33", height: "calc(100vh - 56px)"}}>
          <div className="row h-100">
          <div className="col-lg-6 m-0 p-0" style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
            <img src="./src/assets/inicio-green.png" className="" style={{width: "400px", height: "400px", objectFit: "contain"}} alt="" />
          </div>
          <div className="col-lg-6" style={{backgroundColor: "white"}}>
            <div className="p-5" style={{display: "flex", flexDirection: "column", justifyContent: "center", height: "100%"}}>
            <br />
            <center><h1>lorem ipsum</h1></center>
     <br /><br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non nulla eos exercitationem? Labore soluta dignissimos eum aliquid voluptatem. Iste impedit et officiis fugiat voluptatem praesentium quibusdam pariatur dicta expedita illo?
            Corporis cumque repudiandae perspiciatis hic neque recusandae suscipit, libero autem ipsam fuga ullam quas laudantium velit. Officiis assumenda rem obcaecati voluptatum, laboriosam, adipisci delectus temporibus provident, asperiores repellat magni neque?
            A, qui. Magnam quaerat tempore sint quae at voluptate impedit consectetur, exercitationem rerum nesciunt nobis. Obcaecati unde, rerum qui suscipit voluptate temporibus fugiat ducimus quibusdam possimus iure dicta! Quas, dolorum?
            Harum voluptatem, culpa maxime fugit eaque illo unde voluptate reprehenderit temporibus perspiciatis aperiam, officiis veritatis iusto ut alias. Esse eveniet libero consequuntur natus ad aperiam aliquid necessitatibus, aut voluptate voluptas!</p>
            </div>
          </div>
          
          </div>
      </div>
      <br/><br /><br /><br /><br /><br /><br /><br /><br /><br />
    </>
  )
}

export default App
