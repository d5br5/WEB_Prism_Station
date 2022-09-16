import styled from "@emotion/styled";
import { COLOR } from "@shared/constants";

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	gap: 20px;
	width: 100%;
	max-width: 400px;
	margin: 0 auto;
	padding: 0 10px;
`;

export const FieldWithBtn = styled.div`
	display: flex;
	width: 100%;
	position: relative;
	align-items: center;
`;

export const FieldBox = styled.div`
	width: 100%;
	display: flex;
	flex-direction: column;
`;

export const CheckBtn = styled.div<{ checked: boolean }>`
	border: 1px solid ${(props) => (props.checked ? COLOR.confirm : COLOR.darkgray)};
	padding: 2px 5px;
	font-size: small;
	text-align: center;
	position: absolute;
	right: 10px;
	cursor: ${(props) => (props.checked ? "default" : "pointer")};
	border-radius: 4px;
	color: ${(props) => (props.checked ? COLOR.confirm : COLOR.darkgray)};
`;

export const TextFieldContainer = styled.div`
	display: flex;
	flex-direction: column;
`;

export const InputGuide = styled.p<{ fullfilled?: boolean; banned?: boolean }>`
	color: ${(props) =>
		props.fullfilled ? COLOR.confirm : props.banned ? COLOR.up : COLOR.darkgray};
	font-size: small;
	margin: 8px 5px;
`;

export const Submit = styled.button`
	height: 40px;
	border-radius: 5px;
	border: 1px solid ${COLOR.darkgray};
	font-weight: 500;
	font-size: medium;
	margin-top: 20px;
	cursor: pointer;
	&:focus {
		outline: 1px solid ${COLOR.main};
		border: 1px solid ${COLOR.main};
		outline-offset: 1px;
		color: ${COLOR.main};
	}
`;