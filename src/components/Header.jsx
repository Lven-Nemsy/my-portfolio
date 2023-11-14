import Image from "react-bootstrap/Image";

export default function Header() {
	return (
		<header className="header">
			<h1 className="my-name">Nedda</h1>
			<h1 className="my-last-name">Elsayed</h1>
			<div><Image src="../../src/assets/images/img_0951.jpeg" fluid></Image> </div>
		</header>
	)
}