import styled from 'styled-components';

export const Container = styled.li`
  width: 49.5%;
  margin-bottom: 15px;
  box-shadow: 0px 0px 3px #c3c2c2;
  background-color: #ffffff;
  border-radius: 3px;
`;

export const Top = styled.div`
  display: flex;
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
`;
