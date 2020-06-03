import { createGlobalStyle } from "styled-components";
import {
	helperButton,
	helperButtonHover,
	helperButtonOutlined,
	helperButtonDisabled,
	helperButtonDisabledHover,
	helperButtonOutlinedHover,
	helperButtonOutlinedDisabled,
	helperButtonClear,
	helperButtonClearHover,
	helperButtonClearHoverDisabled,
	helperButtonPrimary,
	helperButtonPrimaryHover,
	helperButtonSecondary,
	helperButtonSecondaryHover,
	helperButtonTertiary,
	helperButtonTertiaryHover,
	helperButtonInfo,
	helperButtonInfoHover,
	helperButtonSuccess,
	helperButtonSuccessHover,
	helperButtonWarning,
	helperButtonWarningHover,
	helperButtonDanger,
	helperButtonDangerHover,
	helperButtonDark,
	helperButtonDarkHover,
	helperButtonMedium,
	helperButtonMediumHover,
	helperButtonLight,
	helperButtonLightHover
} from "./helpers";

export const ButtonStyles = createGlobalStyle`
	.button,
	button,
	input[type='button'],
	input[type='reset'],
	input[type='submit'] {
		${helperButton}
		&:focus,
		&:hover {
			${helperButtonHover}
		}

		&[disabled] {
			${helperButtonDisabled}
			&:focus,
			&:hover {
				${helperButtonDisabledHover}
			}
		}

		&.button-outline {
			${helperButtonOutlined}
			&:focus,
			&:hover {
				${helperButtonOutlinedHover}
			}
			&[disabled] {
					${helperButtonOutlinedDisabled}
				&:focus,
				&:hover {
					${helperButtonOutlinedDisabled}
				}
			}
		}
		

		&.button-clear {
			${helperButtonClear}
			&:focus,
			&:hover {
				${helperButtonClearHover}
			}
			&[disabled] {
				&:focus,
				&:hover {
					${helperButtonClearHoverDisabled}
				}
			}
		}

		/*** Custom (non-milligarm) */
		&.button-primary, &.button-secondary, &.button-tertiary, &.button-info, &.button-success, &.button-warning, &.button-danger, &.button-dark, &.button-medium, &.button-light {
			&[disabled] {
					${helperButtonDisabled}
				&:focus,
				&:hover {
				opacity: .6;
					${helperButtonDisabledHover}
				}
			}
		}

		&.button-primary {
			${helperButtonPrimary}
			&:focus,
			&:hover {
				${helperButtonPrimaryHover}
			}
		}

		&.button-secondary {
			${helperButtonSecondary}
			&:focus,
			&:hover {
				${helperButtonSecondaryHover}
			}
		}

		&.button-tertiary {
			${helperButtonTertiary}
			&:focus,
			&:hover {
				${helperButtonTertiaryHover}
			}
		}

		&.button-info {
			${helperButtonInfo}
			&:focus,
			&:hover {
				${helperButtonInfoHover}
			}
		}

		&.button-success {
			${helperButtonSuccess}
			&:focus,
			&:hover {
				${helperButtonSuccessHover}
			}
		}

		&.button-warning {
			${helperButtonWarning}
			&:focus,
			&:hover {
				${helperButtonWarningHover}
			}
		}

		&.button-danger {
				${helperButtonDanger}
			&:focus,
			&:hover {
				${helperButtonDangerHover}
			}
		}
		
		&.button-dark {
			${helperButtonDark}
			&:focus,
			&:hover {
				${helperButtonDarkHover}
			}
		}
		
		&.button-medium {
			${helperButtonMedium}
			&:focus,
			&:hover {
				${helperButtonMediumHover}
			}
		}

		&.button-light {
			${helperButtonLight}
			&:focus,
			&:hover {
				${helperButtonLightHover}
			}
		}
	}
`;
