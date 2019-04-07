import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  flex: 1;
  height: calc(100% - 60px);
  overflow-y: auto;
  padding: 25px;
`;

export const ListWrapper = styled.ul`
  list-style: none;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
