import React from 'react';
import { storiesOf } from '@storybook/react';
import CustomTextField from './CustomTextField';
import { action } from '@storybook/addon-actions';

export const actions = {
  onChange: action('onChange'),
};


storiesOf('Text Field Count', module)
  .addDecorator(story => <div style={{ padding: '3rem', backgroundColor: '#F2F2F0' }}>{story()}</div>)
  .add('with count', () => <CustomTextField limit={10} {...actions}  />)
  .add('without count', () => <CustomTextField {...actions} />)
  