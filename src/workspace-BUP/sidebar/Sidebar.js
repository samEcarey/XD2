import React from 'react'

export function Sidebar() {
	return (
		<section className="Workspace-sidebar">
			<header className="Sidebar-header">
				<h1>Sidebar</h1>
			</header>
			<nav className="Apps-navigation">
				<ul>
					<li>OnDuty Customer Service</li>
					<li>OnDuty Accounting</li>
				</ul>
				<ul>
					<li>XtraDuty Customer Service</li>
					<li>XtraDuty Accounting</li>
				</ul>
			</nav>
			<nav className="Admin-navigation">
				<ul>
					<li>Settings</li>
					<li>Themes</li>
					<li>Users</li>
					<li>Profile</li>
					<li>Documentation</li>
				</ul>
			</nav>
		</section>
	)
}