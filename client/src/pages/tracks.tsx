import React from "react";
import { Layout } from "../components";
import { gql, useQuery } from "@apollo/client";
import TrackCard from "../containers/track-card";
import QueryResult from "../components/query-result";
const TRACKS = gql`
  query GetHomeTrack {
    tracksForHome {
      author {
        name
        id
        photo
      }
      id
      moduleCount
      thumbnail
      title
      length
    }
  }
`;

/**
 * Tracks Page is the Catstronauts home page.
 * We display a grid of tracks fetched with useQuery with the TRACKS query
 */
const Tracks = () => {
  const { loading, error, data } = useQuery(TRACKS);
  console.log(data);
  
  return (
    <Layout grid>
      <QueryResult error={error} loading={loading} data={data}>
        {data?.tracksForHome?.map((track: any) => {
          return <TrackCard key={track.id} track={track} />;
        })}{" "}
      </QueryResult>
    </Layout>
  );
};

export default Tracks;
