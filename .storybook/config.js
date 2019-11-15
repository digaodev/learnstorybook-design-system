import React from 'react';
import { GlobalStyle } from '../src/components/shared/global';

import { configure, addDecorator } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';


addDecorator(withA11y);
addDecorator(story => (
  <>
    <GlobalStyle />
    {story()}
  </>
));

// automatically import all files ending in *.stories.js|mdx
configure(
  [
    require.context('../src', true, /\.stories\.(js|mdx)$/),
  ],
  module
);
