import styled from 'styled-components';

export const LayoutContainer = styled.div`
  max-width: 100%;
  height: calc(100vh - 2rem);
  margin: 1rem;
  padding: 2.5rem;
  display: flex;
`;

export const PagesContainer = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;
