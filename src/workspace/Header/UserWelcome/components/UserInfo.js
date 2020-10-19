import React, { useState } from "react";
import { IconMoreVertical, IconClose } from "../assets";
import { UserInfoStyled } from "../styles";
import { useUser } from "app/data";

export function UserInfo() {
	const [isMore, setIsMore] = useState(false);
	const user = useUser();

	const getUserInfo = () => {
		return (
			<UserInfoStyled className="User-info">
				{/**<figure class="User-profile"></figure>*/}
				<div class="User-text">
					<small>Welcome,</small>
					<span>
						<a href="/">{user.userState.usercontext[0].friendlyname}</a>
					</span>
				</div>
				<div class="User-more">
					<span onClick={() => setIsMore(true)}>
						<IconMoreVertical />
					</span>
					<div className={isMore ? "User-more-popup show" : "User-more-popup"}>
						<span className="close-icon" onClick={() => setIsMore(false)}>
							<IconClose />
						</span>
						<h2>Title lorem ipsum</h2>
						<p>Lorem ipsum dolor sit amet consectetur</p>
						<div class="User-logout">
							<a href="">Not Now</a>
							<button>logout</button>
						</div>
					</div>
				</div>
			</UserInfoStyled>
		);
	};

	return <>{user.userState ? getUserInfo() : <div />}</>;
}
