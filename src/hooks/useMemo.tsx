import { useMemo, useState } from 'react';
import { heavyOperation } from '../utils/performance';

const UseMemo = () => {
  const [name, setName] = useState('');
  const [nickname, setNickname] = useState('');

  const memoized = useMemo(() => {
    heavyOperation();
    return {
      name,
      role: 'User',
    };
  }, [name]);

  return (
    <main>
      <h1>Use Memo Hook</h1>
      <p>
        Updating name includes a heavy operation but it is memoized performance
        issues should not be noticed when updating nickname
      </p>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        type="text"
        onChange={(e) => setName(e.target.value)}
        placeholder="Update name"
      />
      <h4>{memoized.name}</h4>

      <label htmlFor="nickname">Nickname</label>
      <input
        id="nickname"
        type="text"
        onChange={(e) => setNickname(e.target.value)}
        placeholder="Update nickname"
      />
      <h4>{nickname}</h4>
    </main>
  );
};

export default UseMemo;
