import React from "react";
import styled from "styled-components";
import { Link, NavLink, useLocation } from "react-router-dom";

export function WorkHeader() {
	const { pathname } = useLocation();
	return (
		<header className="Workspace-header">
			<Link to="/" isActive={pathname === "/"}>
				Home
			</Link>
			<Link to="/login" isActive={pathname === "/login"}>
				Login
			</Link>
			<Link to="/workspace" isActive={pathname === "/workspace"}>
				Workspace
			</Link>
		</header>
	);
}
