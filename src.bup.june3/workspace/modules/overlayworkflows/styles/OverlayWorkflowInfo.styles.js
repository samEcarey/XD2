import styled from "styled-components";
import { motion } from "framer-motion";
import { Breakpoints } from "app/common";
import { PRIMARY_SHADE, GREY_950, WHITE_COLOR, PRIMARY_TINT, SUCCESS_SHADE, DANGER_COLOR } from "app/constants";

export const OverlayWorkflowInfoStyled = styled.div`
    color: ${WHITE_COLOR}; 
    padding: 2rem 0 0 0 ;
	h3 {
        text-transform: uppercase;
    }
    span.datetime {
        margin: 0.5rem 0;
        display: block;
    }
    p {

    }
    .Workflow-info-actions {
        margin-top: 2rem;
        @media ${Breakpoints.md} { 
            margin-top: 0rem;
            display: none;
        }
        .button-group-action {
             display: flex;
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
                margin: 0rem;
                cursor: pointer;
                &.save { border-color: ${SUCCESS_SHADE}; }
                &.cancel { border-color: ${DANGER_COLOR}; }
            }
        }
           
    }
`;
