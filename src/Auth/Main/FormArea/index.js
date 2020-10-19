import React from "react";
import { StyledFormArea } from "../../styles";

export const AuthMainFormArea = ({ children }) => {
	return <StyledFormArea classname="Form-area"><div>{children}</div></StyledFormArea>;
};

export * from "./Login";
export * from "./LoggedOut";
export * from "./ForgotPassword";
export * from "./ConfirmCode"
export * from "./ResetPassword"
export * from "./ForgotSplash"
