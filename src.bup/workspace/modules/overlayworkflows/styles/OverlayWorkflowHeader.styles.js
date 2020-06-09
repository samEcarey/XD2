import styled from "styled-components";
import { motion } from "framer-motion";
import { Breakpoints } from "app/common";
import { PRIMARY_SHADE, GREY_950, WHITE_COLOR, PRIMARY_TINT, SUCCESS_SHADE, DANGER_COLOR } from "app/constants";

export const OverlayWorkflowHeaderStyled = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
	.Workflow-header-brand {
        display: flex;
        align-items: center;
        color: ${WHITE_COLOR};
		.info-icon {
			margin-right: 1rem;
			svg { font-size: 4rem; }
		}
		.info-details {
			h2 {
				text-transform: uppercase;
				margin: 0px;
				font-size: 2.2rem;
			}
		}
    }
    .Workflow-header-actions {
        display: flex;
        align-items: center;
        .button-group-action {
            display: none;
            @media ${Breakpoints.md} {  display: flex; }
            justify-content: space-between;               
           .button {
               color: ${WHITE_COLOR};
               background: transparent;
               width: 10rem;
               height: 3.6rem;
               font-size: 1.2rem;
               font-weight: bold;
               border: 1px solid;
               border-radius: 2rem;
               margin: 0rem 1rem;
               cursor: pointer;
               &.save { border-color: ${SUCCESS_SHADE}; }
               &.cancel { border-color: ${DANGER_COLOR}; }
           }
        }
        span.workflow-close {
            svg {
                cursor: pointer; 
                color: White; 
                width: 60px; 
                height: 60px;
            }
        }
    }
`;
