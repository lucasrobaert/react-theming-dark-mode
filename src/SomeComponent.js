import React from 'react';
import styled from 'styled-components';
import theme from 'styled-theming';
function SomeComponent() {
  // defining theme properties based on `mode`
  const textColor = theme('mode', {
     light: 'black',
     dark: 'white'
  });
  // using those properties in our component
  const Wrapper = styled.div`
     color: ${textColor}
  `;
  return (
    <Wrapper>
        Text will be black in light mode, or white in dark mode.
    </Wrapper>
  );
}