import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";

export default function About() {
	return (
		<body>
			<section className="body">
				<div className="split left">
					<div className="positioning">
						<h2 className="body" id="About-Me">
							About Me
						</h2>
					</div>
				</div>
				<div className="split right">
					<div className="positioning">
						<Container>
							<Row>
								<Col xs={6} md={4}>
									<Image
										src="../../src/assets/images/001E0A6C-65CA-4380-AE34-43E657CA503E.jpg"
										roundedCircle fluid
										alt="Image of Nedda Elsayed"
									/>
								</Col>
							</Row>
						</Container>
					</div>
					<p className="p">
						With over five years of experience in office administration and one
						year of experience in construction, I am a versatile and skilled
						professional who can handle multiple tasks and projects efficiently
						and effectively.
						<br></br>
						<br></br>I have a Fullstack Flex Web Development certification from
						the University of California, Davis, via EdX which enables me to
						create and maintain web applications and websites for various
						purposes and clients.
						<br></br>
						<br></br>
						As a Construction Specialist at INTREN, LLC, I apply my technical
						and analytical skills to support the construction operations and
						management of the company. I also leverage my previous experience as
						an Office Coordinator and an Administrative Assistant at the same
						company, where I optimized the time entry auditing method, assisted
						with the movement and maintenance of company assets, and processed
						time entry and other requests. I am a skilled multi-tasker, with
						strong organization and communication skills.
						<br></br>
						<br></br>
						Additionally, I have a strong background in dentistry, having worked
						as a general dentist and a teaching assistant in Egypt for eight
						years, and having obtained a master's degree and an advanced
						education in general dentistry from MSA University. I am passionate
						about learning new skills and technologies, and I am always looking
						for opportunities to expand my knowledge and expertise.
						<br></br>
						<br></br>
						In my free time I play D&D and video games, as well as read the
						occasional book. I also enjoy spending time with my family and
						friends, and I am always looking for new adventures and experiences.
					</p>
				</div>
			</section>
		</body>
	);
}
