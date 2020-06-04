import styled from "styled-components";
import { Breakpoints } from "app/common";
import { PRIMARY_COLOR, PRIMARY_SHADE, GREY_500, GREY_950, WHITE_COLOR, PRIMARY_TINT } from "app/constants";

export const OverlayWorkflowStepFormStyled = styled.div`
    margin: 2rem 0;
    border: 1px solid ${PRIMARY_TINT};
    border-radius: 0.5rem;
    padding: 2rem 1rem;
    color: ${WHITE_COLOR};
`;
