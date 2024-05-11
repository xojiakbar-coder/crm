import styled from "styled-components";
import { getValue } from "../../../hooks";

export const Container = styled.div`
  display: flex;
  align-items: center;
  overflow: hidden;
  border: 1px solid var(--primaryColor);
  width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height)};
  max-width: ${({ width }) => getValue(width)};
  border-radius: ${({ borderRadius }) => getValue(borderRadius)};
`;

export const Input = styled.input`
  flex: 1;
  border: none;
  outline: none;
  width: ${({ width }) => getValue(width)};
  height: ${({ height }) => getValue(height)};
  font-size: ${({ fontSize }) => getValue(fontSize)};
  font-weight: ${({ fontWeight }) => getValue(fontWeight)};
  line-height: ${({ lineHeight }) => getValue(lineHeight)};
  border-radius: ${({ borderRadius }) => getValue(borderRadius)};
  color: ${({ color }) => (color ? color : "#bbc3cd")};
  &::placeholder {
    font-size: ${(placeholderStyle) => getValue(placeholderStyle?.fontSize)};
    font-weight: ${(placeholderStyle) =>
      getValue(placeholderStyle?.fontWeight)};
    line-height: ${(placeholderStyle) =>
      getValue(placeholderStyle?.lineHeight)};
    color: ${(placeholderStyle) =>
      placeholderStyle?.color ? placeholderStyle?.color : "#bbc3cd"};
  }
`;
