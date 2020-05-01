import React from 'react'
import { Normalize, Milligram, Bootstrap } from '../vendors'
import { HtmlBody } from './HtmlBody'
import { Fonts } from './Fonts'

export function GlobalBaseStyles(){
  return (
		<>
			<Normalize/>
			{/* <Milligram/> */}
			{/* <Bootstrap/> */}
			<HtmlBody/>
			<Fonts/>
		</>
	)
}