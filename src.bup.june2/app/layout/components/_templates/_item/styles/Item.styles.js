import styled from "styled-components";
import { itemPadding, itemPaddingTop } from "../helpers/Item.helpers";

export const ItemSC = styled.section`
	background-color: blue;
`;

export const ItemTemplateSC = styled.section`
	background-color: orange;
	${itemPadding}
`;
