import React from 'react'
import Portfolio from './Portfolio'
import App from '../App'
import {useParams} from 'react-router-dom'

export const RepoDetails = (repos) => {
  const {details} = useParams();

  return (
    <section className="info">
      <div className="container">
        {repos.filter(item => item.details === details).map((item) => (
        <div key = {item.id} className="details">
          <h1>{item.name}</h1>
          <p>{item.login}</p>
        </div>
        ))};
      </div>
    </section>
  );
};
