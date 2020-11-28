import styled from 'styled-components';

export const Input = styled.input.attrs((props) => ({
  type: props.type,
  id: props.id,
  name: props.name,
}))``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
