import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import Cards from "./components/Cards/Cards";
import Filters from "./components/Filters/Filters";
import Pagination from './components/Pagination/Pagination';
import Search from './components/Search/Search';
import Navbar from './components/Navbar/Navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Episodes from './Pages/Episodes';
import Location from './Pages/Location';
import CardDetails from './components/Cards/CardDetails';

function App() {
  return(
    <Router>
      <div className="App">
        <Navbar></Navbar>
      </div>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/:id' element={<CardDetails/>}></Route>
        <Route path='/episodes/:id' element={<CardDetails/>}></Route>
        <Route path='/location/:id' element={<CardDetails/>}></Route>
        <Route path='/episodes' element={<Episodes/>}></Route>
        <Route path='/location' element={<Location/>}></Route>
      </Routes>
    </Router>
  )
}

const Home=() =>{
  let [pageNumber, setPageNumber] = useState(1);
  let [search, setSearch]= useState("");
  let [status, setStatus]= useState("");
  let [gender, setGender]= useState("");
  let [species, setSpecies]= useState("");
  let [fetchedData, updateFetchedData] = useState([]);
  let {info, results}= fetchedData;
  let api= `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`;
  useEffect(() => {
    (async function(){
      let data= await fetch(api).then(res=>res.json());
      updateFetchedData(data);
    })()
  
  }, [api])
  

  return (
    <div className="App">
     <div className="text-center"><Search setPageNumber={setPageNumber} setSearch={setSearch}></Search></div>
      <div className="container">
        <div className="row">
            <Filters setStatus={setStatus} setPageNumber={setPageNumber} setGender={setGender} setSpecies={setSpecies}></Filters>
          <div className="col-lg-8 col-12">
              <Cards page="/" results={results}/>
          </div>
        </div>
      </div>
        <Pagination info={info} pageNumber={pageNumber} setPageNumber={setPageNumber}></Pagination>
    </div>
  );
}

export default App;
