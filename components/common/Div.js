import styled from 'styled-components';

const Div = styled.div`
  display: flex;
  flex: ${props => props.flex || 'initial'};
`;

export default Div;
