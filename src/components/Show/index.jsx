import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Parser from "react-html-parser";

import { api } from "../../services/api";
import { Container } from "../Container";
import { Cover } from "../Cover";
import styles from "./styles.module.css";

// Home page Component that renders information about the show and a list of episodes
export const Show = (props) => {
  const [showInfo, setShowInfo] = useState({});
  const [episodes, setEpisodes] = useState([]);

  // Request that runs when the component renders to get information about the show
  useEffect(() => {
    api.get("/shows/6771").then((response) =>
      setShowInfo({
        name: response.data.name,
        summary: response.data.summary,
        image: response.data.image.original,
      })
    );
  }, []);

  // An API request to get the episode list
  useEffect(() => {
    api
      .get("/shows/6771/episodes")
      .then((response) => setEpisodes(response.data));
  }, []);

  return (
    <Container>
      <div className={styles.content}>
        <Cover source={showInfo.image} />
        <div className={styles.info}>
          <h1 className={styles.title}>{showInfo.name}</h1>

          <div className={styles.description}>{Parser(showInfo.summary)}</div>
        </div>
      </div>

      <h3 className={styles.listTitle}>Episode List</h3>

      {/* Map throughout all episodes that returned from the API an show them based on the name, episode number and season */}
      <div className={styles.episodeList}>
        {episodes.map((episode, index) => (
          <div key={`episode-${index}`} className={styles.episode}>
            <Link
              to={`/episode/${episode.id}`}
            >{`EP${episode.number}S${episode.season}: ${episode.name}`}</Link>
          </div>
        ))}
      </div>
    </Container>
  );
};
