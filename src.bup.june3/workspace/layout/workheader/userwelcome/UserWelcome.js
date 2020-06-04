import React, { useState } from "react";
import { IconMoreVertical, IconClose } from "./assets";
import { UserWelcomeStyled } from "./styles";

export function UserWelcome({ children }) {
	const [isMore, setIsMore] = useState(false)
	const handleUserMore = () => {

	}
	return (
		<UserWelcomeStyled className="Workheader-userwelcome">
			<figure class="User-profile"></figure>
			<div class="User-text"><small>Welcome,</small><span><a href="/">Dan Ryanmanowski</a></span></div>
			<div class="User-more">
				<span onClick={()=>setIsMore(true)}><IconMoreVertical /></span>
				<div className={isMore ? "User-more-popup show" : "User-more-popup"}>
					<span className="close-icon" onClick={()=>setIsMore(false)}><IconClose /></span>
					<h2>Title lorem ipsum</h2>
					<p>Lorem ipsum dolor sit amet consectetur</p>
					<div class="User-logout">
						<a href="">Not Now</a>
						<button>logout</button>
					</div>
				</div>
			</div>
			
		</UserWelcomeStyled>
	);
}
