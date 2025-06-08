import SearchForm from '@/components/form/SearchForm.tsx';
import UserProfile from '@/components/user/UserProfile.tsx';
import { useState } from 'react';

const App = () => {
  const [userName, setUserName] = useState('nlosinsky');

  return (
    <main className='mx-auto max-w-6xl px-8 py-20'>
      <SearchForm userName={userName} setUserName={setUserName}/>
      <UserProfile userName={userName}/>
    </main>
  );
};
export default App;
