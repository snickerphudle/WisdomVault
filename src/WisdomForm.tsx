import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function WisdomForm() {
    return (
        <div className='d-flex justify-content-center align-items-center w-100 vh-100'>
            <Form>
                <Form.Group className="mb-3" controlId="wisdom_input">
                    <Form.Label>Enter your wisdom here</Form.Label>
                    <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        </div >
    );
}

export default WisdomForm;