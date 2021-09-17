import React from 'react'
import {Form, Col} from 'react-bootstrap'

const Search = ({ setJobName, setCity }) => {
    return (
        <Form className='mb-3'>
            <Form.Row>
                <Form.Group as={Col}>
                    <Form.Control onChange={(e) => setJobName(e.target.value)}  placeholder="Search for a job!" name="details" type="text" />
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Control onChange={(e) => setCity(e.target.value)}  placeholder="Search by City" name="details" type="text" />
                </Form.Group>
            </Form.Row>
        </Form>
    )
}

export default Search