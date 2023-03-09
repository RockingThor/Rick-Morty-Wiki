import React from 'react'

const FilterBTN = ({name,index,item, setPageNumber, task}) => {
  return (
    <div>
        <style jsx>
            {`
                input[type="radio"]{
                    display: none;
                }
                .x:checked+label{
                    background-color: #0b5ed7;
                    color:white;
                }
            `}
        </style>
        <div className="form-check">
            <input 
            onClick={()=>{
                setPageNumber(1);
                task(item);
            }}
            className="form-check-input x" 
            type="radio" 
            name={name}
            id={`${name}-${index}`}/>
            <label className="btn btn-outline-primary" for={`${name}-${index}`}>{item}</label>
        </div>
    </div>
  )
}

export default FilterBTN