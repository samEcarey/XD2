import styled from "styled-components";

export const AgencySearchNavStyled = styled.nav`
	@media (min-width: 1024px) {
		display: flex;
		flex-direction: row;
		justify-content: center;
		align-content: center;
		align-items: center;
		/* background: red; */
	}
	&.Skeleton-Workheader-agencysearch {
		.Form-group {
			background-color: RED;
			background: -webkit-gradient(
				linear,
				left top,
				right top,
				color-stop(8%, RED),
				color-stop(18%, rgba(130, 130, 130, 0.3)),
				color-stop(33%, RED)
			);
			background: linear-gradient(
				to right,
				RED 8%,
				rgba(130, 130, 130, 0.3) 18%,
				RED 33%
			);
			background-size: 800px 100px;
			animation: wave-squares 2s infinite ease-out;
			@keyframes wave-squares {
				0% {
					background-position: -468px 0;
				}
				100% {
					background-position: 468px 0;
				}
			}
		}
	}
	form {
		margin: 0rem 0rem 0rem 0rem;
		padding: 0rem 0rem 0rem 0rem;
		/* border: 1px solid black; */
		.Form-group {
			margin: 0rem 0rem 0rem 0rem;
			padding: 0.3rem 0rem 0rem 0rem;
			background: rgba(26, 29, 31, 0.2);
			border-radius: 2.5rem;
			width: 100%;
			@media (min-width: 640px) {
				width: 28rem;
			}
			@media (min-width: 768px) {
				width: 32rem;
			}
			@media (min-width: 992px) {
				width: 30rem;
			}
			@media (min-width: 1024px) {
				width: 28rem;
			}
			@media (min-width: 1280px) {
				width: 32rem;
			}
			svg {
				margin-left: 0.6rem;
			}
			input {
				margin: 0rem 0rem 0rem 0rem;
				padding: 0.5rem 0.5rem 0.9rem 0.5rem;
				width: 100%;
				border-radius: 0rem;
				border: none;
				color: rgba(26, 29, 31, 0.4);
				&::placeholder {
					color: rgba(26, 29, 31, 0.2);
				}
			}
		}
	}
`;
