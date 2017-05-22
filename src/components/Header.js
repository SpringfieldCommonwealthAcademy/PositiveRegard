/**
 * Created by rixing on 5/22/17.
 */

import React from 'react';

class Header extends React.Component {
	render() {
		return (
			<div className="header">


					<div className="row">
						<h1 className="title orange-text text-darken-2"><b>POSITIVE REGARD</b></h1>
						<span className="subtitle">a family of education program</span>
					</div>

				<div className="row">
					<ul className="orange darken-2">
						<li><a href="#">HOME</a></li>
						<li><a href="#">ABOUT</a></li>
						<li><a href="#">OUR PROGRAMS</a></li>
						<li><a href="#">PARENTS</a></li>
						<li><a href="#">CONTACT</a></li>
					</ul>
				</div>

			</div>
		);
	}
}

export default Header;
