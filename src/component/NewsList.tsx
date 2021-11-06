import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import NewsItem from './NewsItem';

const NewsList = ({ category }: any) => {
  const [articles, setArticle] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const query = category === 'all' ? '' : `&catergory=${category}`;
        const response = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=kr${query}&apiKey=470afb7e87fb479b968804ea89e471f2`,
        );
        setArticle(response.data.articles);
      } catch (e) {
        console.log(e);
      }
    };
    fetchData();
  });

  return (
    <NewsListBlock>
      {articles.map((article: any) => (
        <NewsItem key={article.url} article={article} />
      ))}
    </NewsListBlock>
  );
};

const NewsListBlock = styled.div`
  box-sizing: border-box;
  padding-bottom: 3rem;
  width: 768px;
  margin: 0 auto;
  margin-top: 2rem;
  @media screen and (max-width: 768px) {
    width: 100%;
    padding-left: 1rem;
    padding-right: 1rem;
  }
`;

export default NewsList;
