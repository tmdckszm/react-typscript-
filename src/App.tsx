import Categories from 'component/Categories';
import NewsList from 'component/NewsList';
import React, { useCallback, useState } from 'react';

const App = () => {
  const [category, setCategory] = useState('all');
  const onSelect = useCallback((category) => setCategory(category), []);

  return (
    <>
      <Categories onSelect={onSelect} />
      <NewsList category={category} />
    </>
  );
};

export default App;
