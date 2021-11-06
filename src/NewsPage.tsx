import React from 'react';
import NewsList from 'component/NewsList';
import Categories from 'component/Categories';

const NewsPage = ({ match }: any) => {
  const category = match.params.catergory || 'all';
  return (
    <>
      <Categories />
      {category && <NewsList catergory={category} />}
    </>
  );
};

export default NewsPage;
