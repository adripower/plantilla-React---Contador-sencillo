import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = (props) => {

	

	return (
		<div className="text-center">
			
			<p>
				<img src={rigoImage} />
			</p>
			<a href="#" className="btn btn-success">
				If you see this green button... bootstrap is working...
			</a>
			<p>
				Made by{" "}
				<a href="http://www.4geeksacademy.com">4Geeks Academy</a>, with
				love!
			</p>
			<p>Cuando tenga tiempo pondre los bonus.</p>
			<span>{props.digito8}{props.digito7}{props.digito6}{props.digito5}{props.digito4}{props.digito3}{props.digito2}{props.digito1}</span>
			

		</div>
		
	);
};

export default Home;
