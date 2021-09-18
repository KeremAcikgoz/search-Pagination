import React from 'react'

const Pages = ({ page, setPage, pages}) => {


    return (
        <div className="buttons ml-3 mb-3">
            {pages.map((number) => (
                <button className={number === pages[page/10] ? "button active" : "button"} onClick={() => setPage((number-1)*10)}>{number}</button>
            ))}        
        </div>
     
    )
}

export default Pages;
