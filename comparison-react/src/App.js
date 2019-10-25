import React from 'react';

import Message from './components/Message';

function App() {
  const message = 'Oiii, tudo bom contigo?';

  return (
    <Message message={ message }></Message>
  );
}

export default App;
