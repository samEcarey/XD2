import React from "react";
import { addDecorator } from "@storybook/react";
import { ThemeProvider } from "styled-components";

import { GlobalBaseStyles } from "../src/appbase";
import { ThemeGlobal, ThemeMilligram } from "../src/appbase/global/Theme";
// import { HtmlBody } from '../src/appbase/global/HtmlBody'
// import { Fonts } from '../src/appbase/global/Fonts'

const GlobalWrapper = (storyFn) => (
	<ThemeProvider theme={ThemeMilligram}>
		<GlobalBaseStyles />
		<ThemeGlobal />
		{storyFn()}
	</ThemeProvider>
);

addDecorator(GlobalWrapper);
