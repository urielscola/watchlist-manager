import styled from 'styled-components';

export const Container = styled.div`
  padding: 15px 0;
  flex: 1;
`;

export const Top = styled.div`
  border-bottom: 1px solid ${({ theme }) => theme.colors.border};
  padding: 0 30px 25px 30px;
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.colors.primary};
  font-size: 1.25em;
`;

export const Genres = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
