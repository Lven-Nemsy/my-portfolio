import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function Portfolio() {
	return (
		<section class="img-body">
            <Container>
                <Row><Col xs={6} md={4}>
                    <a href="https://github.com/Lven-Nemsy/semantic-html">
                        <Image
                            src="../../src/assets/images/virtual_reality_AdobeStock_321871791-e1638984826519.png"
                            fluid
                            alt="Image of a person using a 3D simulator"
                        />
                    </a>
                </Col></Row>
            </Container>
            <br></br>
            <br></br>
            <Container>
                <Row><Col xs={6} md={4}>
                    <a href="https://github.com/Lven-Nemsy/Group-3-project">
                        <Image
                            src="../../src/assets/images/istockphoto-1270377018-612x612.jpg"
                            fluid
                            alt="Image of people pumping a tech balloon"
                        />
                    </a>
                </Col></Row>
            </Container>
            <br></br>
            <br></br>
            <Container>
                <Row><Col xs={6} md={4}>
                    <a href="https://github.com/Lven-Nemsy/GET-YOUR-FIT-ON">
                        <Image
                            src="../../src/assets/images/360_F_308697506_9dsBYHXm9FwuW0qcEqimAEXUvzTwfzwe.jpg"
                            fluid
                            alt="Image of different pieces of tech" 
                        />
                    </a>
                </Col></Row>
            </Container>
            <br></br>
            <br></br>
            <Container>
                <Row><Col xs={6} md={4}>
                    <Image
                        src="../../src/assets/images/istockphoto-1148091793-612x612.jpg"
                        fluid
                        alt="Abstract image of networking" 
                    />
                </Col></Row>
            </Container>            
            <br></br>
            <br></br>
            <Container>
                <Row><Col xs={6} md={4}>
                    <Image
                    src="../../src/assets/images/istockphoto-1331376060-612x612.jpg"
                    fluid
                    alt="Image of company people working together on different aspects of tech" 
                    />
                </Col></Row>
            </Container>
		</section>
	);
}
