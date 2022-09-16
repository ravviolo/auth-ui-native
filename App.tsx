import { LoginPage, SignUpPage } from 'pages';
import { useState } from 'react';

const App = () => {
  const [page, setPage] = useState<'login' | 'signup'>('signup');

  return page === 'login' ? <LoginPage navigate={setPage} /> : <SignUpPage navigate={setPage} />;
};

export default App;
