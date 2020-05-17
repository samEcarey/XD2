import styled from "styled-components";
import {
	flexDirectionFunc,
	justifyContentFunc,
	flexWrapFunc,
	alignItemsFunc,
	alignContentFunc,
	flexRowAlignFunc,
	flexColumnAlignFunc
} from "../helpers/Flex.helpers";

/** Flex default */
export const FlexSC = styled.section`
  display: flex;
  ${flexDirectionFunc}  /*** fd={} */
	${justifyContentFunc} /*** jc={} */
  ${flexWrapFunc}       /*** fw={}*/
  ${alignItemsFunc}     /*** ai={}*/
  ${alignContentFunc}   /*** ac={}*/
`;

/** Row */
export const FlexRowSC = styled(FlexSC)`
	flex-direction: row;
`;

/** Column */
export const FlexColSC = styled(FlexSC)`
	flex-direction: column;
`;

/********************************************/
/** QUiCK Tools *****************************/

/** ROW - QUiCK Tools ******/
/** Row - jf-flex-start ai-center ac-center */
export const FlexRowStartSC = styled(FlexSC)`
	justify-content: flex-start;
	${flexRowAlignFunc}
`;

/** Row - jf-flex-center ai-center ac-center */
export const FlexRowCenterSC = styled(FlexSC)`
	justify-content: center;
	${flexRowAlignFunc}
`;

/** Row - jf-flex-end ai-center ac-center */
export const FlexRowEndSC = styled(FlexSC)`
	justify-content: flex-end;
	${flexRowAlignFunc}
	justify-content: flex-end;
	align-content: center;
	align-items: center;
`;

/** Row - jf-flex-between ai-center ac-center */
export const FlexRowBetweenSC = styled(FlexSC)`
	justify-content: space-between;
	${flexRowAlignFunc}
`;

/** Row - jf-flex-around ai-center ac-center */
export const FlexRowAroundSC = styled(FlexSC)`
	justify-content: space-around;
	${flexRowAlignFunc}
`;

/** COLUMN - QUiCK Tools ******/
/** Column - jf-flex-start ai-center ac-center */
export const FlexColStartSC = styled(FlexSC)`
	justify-content: flex-start;
	${flexColumnAlignFunc}
`;

/** Column - jf-flex-center ai-center ac-center */
export const FlexColCenterSC = styled(FlexSC)`
	justify-content: center;
	${flexColumnAlignFunc}
`;

/** Column - jf-flex-end ai-center ac-center */
export const FlexColEndSC = styled(FlexSC)`
	justify-content: flex-end;
	${flexColumnAlignFunc}
`;

/** Column - jf-flex-between ai-center ac-center */
export const FlexColBetweenSC = styled(FlexSC)`
	justify-content: space-between;
	${flexColumnAlignFunc}
`;

/** Column - jf-flex-around ai-center ac-center */
export const FlexColAroundSC = styled(FlexSC)`
	justify-content: space-around;
	${flexColumnAlignFunc}
`;

// ${props => props.kind === "cancel" && "background: tomato"};
// background: ${props => (props.kind === "cancel" ? "tomato" : "indigo")};
// background: ${({ kind }) => (kind === "cancel" ? "tomato" : "green")};
// const ButtonStyles = `border: 2px solid orange;`; // ${ButtonStyles}

// ${({ size }) => {
// 	if (size === "xs") {
// 		return `padding: 0 .5rem; height: 1.8rem; line-height: 1.8rem; font-size: .5rem;`;
// 	} else if (size === "sm") {
// 		return `padding: 0 1.5rem; height: 2.8rem; line-height: 2.8rem; font-size: .8rem;`;
// 	} else {
// 		return null;
// 	}
// }}
