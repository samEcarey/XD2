import styled from "styled-components";
import { Breakpoints } from "app/common";
import { GREY_700, WHITE_COLOR, PRIMARY_COLOR, PRIMARY_TINT } from "app/constants";

export const WorkflowStepInfoStyled = styled.div`
    margin: 2rem 0;
    border: 1px solid ${PRIMARY_TINT};
    border-radius: 0.5rem;
    padding: 2rem 1rem;
    color: ${WHITE_COLOR};
    .workflow-step-details {
        & > h3 {
            text-transform: uppercase;
            margin-bottom: 0.5rem;
        }
        & > p { }
    }
    .workflow-step-actions {
        margin: 2rem 1rem 0rem;
        .button-group-step {
            display: flex;
            flex-direction: row;
            justify-content: center;
            align-items: center;
            
            @media ${Breakpoints.xl} { 
                margin-top: 0rem;
            }
            .button {
                color: ${WHITE_COLOR};
                background-color: ${PRIMARY_TINT};
                width: 11rem;
                height: 3.6rem;
                font-size: 1.2rem;
                font-weight: bold;
                border: 0px solid;
                cursor: pointer;
                display: flex;
                align-items: center;
                svg {
                    color: ${WHITE_COLOR};
                }
                &.prev { 
                    border-radius: 1rem 0rem 0rem 1rem; 
                    svg {
                        margin-right: 0.5rem;
                    }
                }
                &.next { 
                    border-radius: 0rem 1rem 1rem 0rem; 
                    svg {
                        margin-left: 0.5rem;
                    }
                }
                &:hover {
                    background-color: ${PRIMARY_COLOR};
                }
                &:disabled {
                    background-color: ${WHITE_COLOR};
                    color: ${GREY_700};
                    opacity:1;
                }
            }
        }
    }
`;
