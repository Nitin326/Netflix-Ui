import React from 'react';
import '../Assats/Style/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Accordion from 'react-bootstrap/Accordion'
import Form from 'react-bootstrap/Form'
import { Row, Col, Container } from 'react-bootstrap';
import Child from '../Assats/Images/child.png'
import Phone from '../Assats/Images/mobile.jpg'
import Tv from '../Assats/Images/tv.jpg'
import Navs from '../comp/Navs'

const Home = () => {
    return (
        <>
            <div className='landing'>
            <Navs />
                <div className='text'>
                    <h1>Unlimited movies, TV shows and more.</h1>
                    <h2>Watch anywhere. Cancel anytime.</h2>
                    <p className='ready-text'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <Form className='input-field mb-4 mt-3'>
                        <input className='input-box' type="email" placeholder="Enter email" required />
                        <input className='bttn' type="submit" value="Get Started >" required />
                    </Form>
                </div>
            </div>

            {/* Tv Section */}

            <Container fluid className='section mt-2'>
                <Row lg={12} className="mx-auto">
                    <Col lg={5} md={10} sm={12} xs={12} className="mx-auto sec-text" >
                        <h1>Enjoy on your TV.</h1>
                        <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                    </Col>
                    <Col lg={6} md={10} sm={12} xs={12} className="mx-auto">
                        <img src={Tv} className='sec-image' alt="child_Image" fluid />
                    </Col>
                </Row>
            </Container>

            {/* Phone Section */}

            <Container fluid className='section mt-2'>
                <Row lg={12} className="mx-auto">
                    <Col lg={6} md={10} sm={12} xs={12} className="mx-auto">
                        <img src={Phone} className='sec-phone-image' alt="child_Image" fluid />
                    </Col>
                    <Col lg={6} md={10} sm={12} xs={12} className="mx-auto sec-phone-text" >
                    <h1>Download your shows to watch offline.</h1>
                        <p>Save your favourites easily and always have something to watch.</p>
                    </Col>
                </Row>
            </Container>

            {/* Child Section */}

            <Container fluid className='section mt-2'>
                <Row lg={12} className="mx-auto">
                    <Col lg={5} md={10} sm={12} xs={12} className="mx-auto sec-text" >
                    <h1>Create profiles for children.</h1>
                        <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
                    </Col>
                    <Col lg={6} md={10} sm={12} xs={12} className="mx-auto">
                    <img src={Child} className='sec-image' alt="child_Image" fluid />
                    </Col>
                </Row>
            </Container>

            {/* Div for Faq */}

            <div className='faq'>
                <h1 className='pt-5 mt-2'>Frequently Asked Questions</h1>
                <Accordion className='mt-5 pb-5 pl-3 pr-3 accordion'>
                    <Accordion.Item className='mb-3' eventKey="0">
                        <Accordion.Header>What is Netflix?</Accordion.Header>
                        <Accordion.Body>
                            Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.
                            You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item className='mb-3' eventKey="1">
                        <Accordion.Header>How much does Netflix cost?</Accordion.Header>
                        <Accordion.Body>
                            Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item className='mb-3' eventKey="2">
                        <Accordion.Header>Where Can I Watch?</Accordion.Header>
                        <Accordion.Body>
                            Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.
                            You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item className='mb-3' eventKey="3">
                        <Accordion.Header>How do I cancel?</Accordion.Header>
                        <Accordion.Body>
                            Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item className='mb-3' eventKey="4">
                        <Accordion.Header>What can I watch on Netflix?</Accordion.Header>
                        <Accordion.Body>
                            Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item className='mb-3' eventKey="5">
                        <Accordion.Header>Is Netflix good for kids?</Accordion.Header>
                        <Accordion.Body>
                            The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.
                            Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.
                        </Accordion.Body>
                    </Accordion.Item>

                    <p className='ready-text'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <Form className='input-field'>
                        <input className='input-box' type="email" placeholder="Enter email" required />
                        <input className='bttn' type="submit" value="Get Started >" required />
                    </Form>
                </Accordion>
            </div>
        </>
    )
}

export default Home