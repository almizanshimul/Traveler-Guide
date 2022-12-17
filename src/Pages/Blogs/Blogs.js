import React from 'react';
import { Accordion, Col, Container, Row } from 'react-bootstrap';

const Blogs = () => {
    return (
        <Container className='my-5'>
            <Row>
                <Col>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Difference between authorization and authentication</Accordion.Header>
                            <Accordion.Body>
                                Authentication, in the form of a key. The lock on the door only grants access to someone with the correct key in much the same way that a system only grants access to users who have the correct credentials. Authorization, in the form of permissions. Once inside, the person has the authorization to access the kitchen and open the cupboard that holds the pet food. The person may not have permission to go into the bedroom for a quick nap.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Why are you using firebase? What other options do you have to implement authentication?
                            </Accordion.Header>
                            <Accordion.Body>
                                Firebase is a less technical and time-saving alternative to writing full-fledged backend code for dynamic apps. Organizations and developer use it for authentication, hosting and other purposes. With Firebase, you can focus your time and attention on developing the best app(s) possible for your business. Since the operations and internal functions are so solid, and taken care of by the Firebase interface, you can spend more time developing the high quality app that users are going to want to use.

                                There are plenty excellent open-source alternative to Firebase like MongoDB, Parse, Heroku, Realm etc.
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item>
                            <Accordion.Header>
                                What other services does firebase provide other than authentication
                            </Accordion.Header>
                            <Accordion.Body>
                                Firebase is a full package that can help in developing your mobile or web applications faster with fewer resources and more efficiency. Now, let's look at some of the services and use of it. <b>There are many services which Firebase provides, Most useful of them are:</b><br />
                                <ul>
                                    <li>Cloud Firestore</li>
                                    <li>Cloud Functions</li>
                                    <li>Hosting</li>
                                    <li>Cloud Storage</li>
                                    <li>Google Analytics</li>
                                    <li>Predictions</li>
                                    <li>Cloud Messaging</li>
                                    <li>Dynamic Links</li>
                                    <li>Remote Config</li>
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>
                    </Accordion>
                </Col>
            </Row>
        </Container>
    );
};

export default Blogs;