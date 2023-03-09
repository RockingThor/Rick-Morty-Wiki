import React from 'react'
import Gender from './Category/Gender'
import Species from './Category/Species'
import Status from './Category/Status'

const Filters = ({setStatus, setPageNumber, setGender, setSpecies}) => {
  let clear=()=>{
    setStatus("");
    setPageNumber(1);
    setGender("");
    setSpecies("");
    window.location.reload(false);
  }
  return (
    <div className='col-lg-3 col-12 mb-5'>
      <div className="text-center fw-bold fs-4 mb-2">Filter</div>
      <div style={{cursor: "pointer"}}
           onClick={clear}
           className="text-center text-primary text-decoration-underline mb-4">Clear Filter
      </div>

      <div className="accordion" id="accordionExample">
        <Status setPageNumber={setPageNumber} setStatus={setStatus}></Status>
        <Species setSpecies={setSpecies} setPageNumber={setPageNumber}></Species>
        <Gender setGender={setGender} setPageNumber={setPageNumber}></Gender>
      </div>

    </div>
  )
}

export default Filters