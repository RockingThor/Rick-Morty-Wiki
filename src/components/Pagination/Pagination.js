import React, {useState, useEffect} from 'react'
import ReactPaginate from 'react-paginate'

export const Pagination = ({pageNumber,setPageNumber,info}) => {
    let[width, setWidth]=useState(window.innerWidth);
    let updateDimension=()=>{
        setWidth(window.innerWidth);
    }
    useEffect(()=>{
        window.addEventListener("resize", updateDimension);
        return () =>window.removeEventListener("resize", updateDimension);
    },[])
    
  return (
    <>
    <style jsx>
        {`
            @media (max-width: 768px){
                .next{
                    display: none;
                }
                .prev{
                    display: none;
                }
                .pagination{
                    font-size: 14px;
                }
            }
        `}
    </style>
    <ReactPaginate className='pagination justify-content-center gap-4 my-4'
    nextAriaLabel='Next'
    previousLabel="Prev"
    forcePage={pageNumber===1? 0 :pageNumber-1}
    nextclassNameName='btn btn-primary next'
    previousclassNameName='btn btn-primary prev'
    pageclassNameName='page-item'
    pageLinkclassNameName='page-link'
    marginPagesDisplayed={width<576 ? 1:2}
    pageRangeDisplayed={width<576 ? 1:2}
    activeclassNameName='active'
    onPageChange={(data)=>{
        setPageNumber(data.selected+1)
    }}
    pageCount={info?.pages}></ReactPaginate>
    </>
  )
}
export default Pagination