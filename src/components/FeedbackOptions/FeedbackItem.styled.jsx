import styled from '@emotion/styled';
export const Button = styled.button`
  padding: 10px 20px;
  border-radius: 10px;
  border: none;
  color: #fff;
  background-color: ${({ option }) => {
    switch (option) {
      case 'bad':
        return '#ff0000';
      case 'good':
        return '#008000';
      case 'neutral':
        return '#0000ff';
      default:
        return '#ffffff';
    }
  }};
  &:hover {
    scale: 1.1;
  }
  &:active {
    scale: 0.8;
  }
`;
