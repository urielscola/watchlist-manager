import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  border-right: 1px solid ${({ theme }) => theme.colors.border};
`;

export const Image = styled.img`
  object-fit: contain;
  height: 170px;
  border-radius: 10px;
`;
