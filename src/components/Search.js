import React from 'react'
import {Form, Col} from 'react-bootstrap'

const Search = ({ setJobName, setCity }) => {
    return (
        <Form className='mb-3 ml-3'>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Control onChange={(e) => setJobName(e.target.value)}  placeholder="Find a post!"  type="text" />
                </Form.Group>
                {/* <Form.Group as={Col}>
                    <Form.Control onChange={(e) => setCity(e.target.value)}  placeholder="Search by City" type="text" />
                </Form.Group> */}
            </Form.Row>
        </Form>
    )
}

export default Search
