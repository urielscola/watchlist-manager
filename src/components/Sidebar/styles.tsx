import styled from 'styled-components';

export const Container = styled.aside`
  background-color: #273143;
  width: 300px;
  height: calc(100% - 60px);
  padding: 30px 25px;
  overflow-y: auto;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 20px;
  border-bottom: 1px solid #323b4c;

  span,
  h2 {
    color: #ffffff;
    margin: 0;
    font-weight: 300;
  }

  span {
    font-size: 0.8em;
    text-decoration: underline;
    cursor: pointer;
  }
`;

export const FilterItem = styled.div`
  margin-bottom: 25px;
`;

export const FilterTitle = styled.h6`
  font-weight: 300;
  margin-bottom: 10px;
  color: #ffffff;
`;
