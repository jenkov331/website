import React, { Component } from 'react';
import './Diploma.css';
import diploma from '../Images/diploma.png';
import cecredentialtrust from '../Images/cecredentialtrust.png';
import {Grid, Row, Col} from 'react-bootstrap';

class Diploma extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Row className="show-grid">
                        <Col lg={6}>
                            <img src={diploma} className="diploma" alt="diploma" />
                        </Col>
                        <Col lg={6}>
                            <h2><strong>Validation</strong></h2>
                            <p className="validation">Visit <a href='https://services.student.ufl.edu/cediploma/?p=ceDiplomaValidation'>student.ufl.edu/cediploma/validation</a> and enter the following:</p>
                            <div className="validation">
                                <p><strong>CeDiD:</strong> <u>186A-F298-J7S9</u></p>
                                <p><strong>1st Two Letters of Name:</strong> <u>Je</u></p>
                            </div>
                            <img src={cecredentialtrust} alt="CeCredentialTrust" />
                        </Col>
                    </Row>
                </Grid>
            </div>
        );
    }
}

export default Diploma;