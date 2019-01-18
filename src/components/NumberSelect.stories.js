import React from 'react';
import { storiesOf } from '@storybook/react';
import NumberSelect  from "./NumberSelect";



storiesOf('Number Select', module)
    .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
    .add('default', () => <NumberSelect />)
