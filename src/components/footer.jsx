import styled from 'styled-components';
import { Link } from 'react-router-dom'
// import {
// 	FaFacebookSquare,
// 	FaInstagram,
// 	FaSnapchatSquare,
// 	FaYoutube,
// } from 'react-icons/fa';

const Footer = () => {
	return (
		<FooterDiv style={{ textAlign:'center',color:'red',alignItems:'center'}}>
			<Links>
				<Link to='/'>FAQs</Link>
				<Link to='/'>About us</Link>
				<Link to='/'>Contact us</Link>
			</Links>
			<Socials>
				<span>
					Facebook
				</span>
				<span>
					Instagram 
				</span>
				<span>
					Snapchat
				</span>
				<span>
					Youtube 
				</span>
			</Socials>
		</FooterDiv>
	);
};

export default Footer;

const FooterDiv = styled.div`
	width: 100%;
	padding: 1rem;
	background-color: black;
	color: white;
`;

const Socials = styled.div`
	margin-top: 1rem;
	& span {
		font-size: 1.2rem;
		margin: 0.4rem;
	}
`;

const Links = styled.div`
	margin: 1rem;
	& a {
		color: white;
		margin: 1rem;
		text-decoration: none;
		font-weight: 600;
	}
`;