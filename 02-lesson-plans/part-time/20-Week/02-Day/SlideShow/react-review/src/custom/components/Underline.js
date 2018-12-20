import styled from "styled-components";
import { colors } from "../theme/utils";

export const Underline = styled.hr`
  border: 2px solid ${props => props.color ? props.color : colors.red }
`;
