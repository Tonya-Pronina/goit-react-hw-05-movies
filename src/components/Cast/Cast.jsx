import React, { Suspense, useEffect, useState } from 'react';
import css from './Cast.module.css';
import { useParams } from 'react-router-dom';
import { fetchCast } from 'API/api';

const DEFAULT_URL = 'https://www.freeiconspng.com/uploads/no-image-icon-6.png';

export const Cast = () => {
  const [cast, setCast] = useState(null);
  const { movieId } = useParams();

  useEffect(() => {
    fetchCast(movieId).then(response => {
      setCast(response.cast);
    });
  }, [movieId]);

  return (
    <Suspense>
      <div>
        <ul>
          {cast.map(el => {
            const imageUrl = el.profile_path
              ? `https://image.tmdb.org/t/p/w200/${el.profile_path}`
              : DEFAULT_URL;
            return (
              <li key={el.id}>
                <img src={imageUrl} width="200" alt={el.name} />
                <div className={css.text}>
                  <p className={css.title}>{el.name}</p>
                  <p>Character: {el.character}</p>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </Suspense>
  );
};
