import React from 'react'
import { GlobalBaseStyles } from './appbase'
import { Button, Blockquote, Code, HR, Img, A, UL } from './appbase'
import { Table, THead, TBody, TR, TH, TD } from './appbase'

function App() {
	return (
		<div className="App">
			<GlobalBaseStyles/>
			<header className="App-header">
				<h1>App-header</h1>
			</header>
			<main>
				<p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, non suscipit quos voluptate est quas nesciunt eum enim modi dolores quod eius provident sit consequuntur, voluptatem quia doloribus placeat consectetur beatae nemo reiciendis. Iure sed magni dolorum possimus necessitatibus accusantium.</p>
				<HR/>
				<Button>Submit</Button>
				<HR/>
				<Blockquote>Hi again</Blockquote>
				<HR/>
				<Code>$ npm start</Code>
				<HR/>
				<Img 
					src="https://via.placeholder.com/150"
					alt="Image alt"
					title="Image title"
				/>
				<HR/>
				<A
					href="https://www.yahoo.com"
					title="Yahoo"
					target="_blank"
				>yahoo</A>
				<HR/>
				<UL>
					<li>test</li>
				</UL>
				<HR/>
				<Table>
					<THead>
						<TR>
							<TH>one</TH>
							<TH>two</TH>
						</TR>
					</THead>
					<TBody>
						<TR>
							<TD>one</TD>
							<TD>two</TD>
						</TR>
						<TR>
							<TD>one</TD>
							<TD>two</TD>
						</TR>
						<TR>
							<TD>one</TD>
							<TD>two</TD>
						</TR>
						<TR>
							<TD>one</TD>
							<TD>two</TD>
						</TR>
					</TBody>
				</Table>
				<HR/>
				<HR/>
				<HR/>
				<HR/>
				<HR/>
			</main>
		</div>
	)
}

export default App
