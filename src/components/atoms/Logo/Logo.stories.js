import React from 'react';
import { storiesOf } from '@storybook/react';
import Logo from '../components/atoms/Logo';

storiesOf('Atoms/Logo', module)
  .add('Default', () => <Logo />);
