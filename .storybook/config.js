import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { GlobalBaseStyles } from "../src/app/common";
import { ThemeGlobal, ThemeMilligram } from "../src/app/common/global/Theme";
// import { HtmlBody } from '../src/app/common/global/HtmlBody'
// import { Fonts } from '../src/app/common/global/Fonts'

const GlobalWrapper = storyFn => (
	<ThemeProvider theme={ThemeMilligram}>
		<GlobalBaseStyles />
		<ThemeGlobal />
		{storyFn()}
	</ThemeProvider>
);

addDecorator(GlobalWrapper);
