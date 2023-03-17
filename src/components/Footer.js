import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

function Footer() {
	return (
		<div className="footer">
			<a href="https://github.com/enesseval" target="_blank">
				<FontAwesomeIcon icon={faGithub} size="4x" />
			</a>
			<a href="https://www.instagram.com/sofwarediaries/" target="_blank">
				<FontAwesomeIcon icon={faInstagram} size="4x" />
			</a>
			<a href="https://www.linkedin.com/in/enes-seval-162679230/" target="_blank">
				<FontAwesomeIcon icon={faLinkedin} size="4x" />
			</a>
		</div>
	);
}

export default Footer;
