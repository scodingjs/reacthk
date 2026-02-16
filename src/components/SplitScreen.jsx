import styled from 'styled-components';
import PropTypes from 'prop-types';

const Container = styled.div`
  display: flex;
  gap: 1rem;
  padding: 1rem;
`;

const Pane = styled.div`
  flex: ${(props) => props.$weight};
  padding: 1rem;
  background: rgba(30, 41, 59, 0.5);
  border-radius: 1rem;
  border: 1px solid rgba(71, 85, 105, 0.5);
`;

/**
 * SplitScreen component for flexible two-column layouts
 * Uses compound component pattern with children
 */
export const SplitScreen = ({ leftSize = 2, rightSize = 1, children }) => {
  const [leftComponent, rightComponent] = children;

  return (
    <Container data-testid="split-screen-container">
      <Pane $weight={leftSize} data-testid="split-screen-left">
        {leftComponent}
      </Pane>
      <Pane $weight={rightSize} data-testid="split-screen-right">
        {rightComponent}
      </Pane>
    </Container>
  );
};

SplitScreen.propTypes = {
  leftSize: PropTypes.number,
  rightSize: PropTypes.number,
  children: PropTypes.node.isRequired,
};

export default SplitScreen;
