import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Parser from "react-html-parser";

import { Cover } from "../Cover";
import { api } from "../../services/api";
import { Container } from "../Container";
import styles from "./styles.module.css";

// Episode page component
export const Episode = () => {
  const [episodeInfo, setEpisodeInfo] = useState({});
  const { episodeId } = useParams();

  useEffect(() => {
    // Request Episode information when the component gets rendered
    api.get(`/episodes/${episodeId}`).then((response) =>
      setEpisodeInfo({
        name: response.data.name,
        summary: response.data.summary,
        image: response.data.image?.original,
      })
    );
  }, [episodeId]);

  return (
    <Container>
      <Cover source={episodeInfo.image} />

      <div className={styles.info}>
        <h2 className={styles.title}>{episodeInfo.name}</h2>

        <div className={styles.description}>
          {/* Check if the API returns a summary, if not show a placeholder message */}
          {!!Parser(episodeInfo.summary).length
            ? Parser(episodeInfo.summary)
            : "No description available for this episode"}
        </div>
      </div>
    </Container>
  );
};
