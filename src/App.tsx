import React from 'react';
import Button from './component/Button/Button';

const App = () => (
  <div>
    <Button
      type="primary"
      text="Test Button"
      // eslint-disable-next-line no-console
      onClick={() => console.log('hello')}
    />
  </div>
);

export default App;
