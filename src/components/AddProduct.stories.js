import React from 'react';
import { storiesOf } from '@storybook/react';
import AddProduct  from "./AddProduct";


storiesOf('Add Product', module)
    .addDecorator(story => <div style={{ padding: '20px' }}>{story()}</div>)
    .add('default', () => <AddProduct  />)
    