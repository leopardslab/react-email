import React from 'react';
import Button from './component/Button';

const App = () => (
  <div>
    <Button
      type="primary"
      text="Test Button"
      onClick={() => console.log('hello')}
    />
  </div>
);

export default App;
