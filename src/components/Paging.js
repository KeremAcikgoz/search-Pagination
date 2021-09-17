import React from 'react'
import {Pagination} from 'react-bootstrap'


const Paging = ({page, setPage, hasNextPage}) => {

    const changePage = (number) => {
        setPage(prev => prev + number)
    }

    return (
        <Pagination>
            {page !== 1 && <Pagination.Prev onClick={() => changePage(-1)} />}
            {page !== 1 && <Pagination.Item onClick={() => setPage(1)}>1</Pagination.Item>}
            {page > 2 && <Pagination.Ellipsis />}
            {page > 2 && <Pagination.Item onClick={() => changePage(-1)}>{page-1}</Pagination.Item>}
            <Pagination.Item active>{page}</Pagination.Item>
            {page < 10 && <Pagination.Item onClick={() => changePage(1)}>{page+1}</Pagination.Item>}
            {page < 10 && <Pagination.Next onClick={() => changePage(1)} />}
        </Pagination>
    )
}

export default Paging
