import { fetchReviews } from 'API/api';
import css from './Review.module.css';
import React, { Suspense, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

export const Review = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    fetchReviews(movieId).then(response => {
      setReviews(response.results);
    });
  }, [movieId]);
  return (
    <Suspense>
      <ul className={css.list}>
        {reviews.length === 0 ? (
          <p className={css.text}>We don't have any reviews for this movie</p>
        ) : (
          reviews.map(element => {
            return (
              <li key={element.id} className={css.item}>
                <h3>Author: {element.author}</h3>
                <p className={css.content}>Character: {element.content}</p>
              </li>
            );
          })
        )}
      </ul>
    </Suspense>
  );
};
