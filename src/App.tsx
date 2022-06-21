import { useEffect, useState } from "react";
import axios from "axios";

import { Grid, Stack } from "@mui/material";

import AppBar from "./Components/AppBar";
import CharacterCard from "./Components/CharacterCard";
import Pagination from "./Components/Pagination";
import { SWResponse } from "./types";

function App() {
  const [currentPage, setCurrentPage] = useState(
    "https://swapi.dev/api/people"
  );
  const [people, setPeople] = useState<SWResponse>();

  const handleOnPaginationChange = (url: string) => {
    setCurrentPage(url);
  };

  useEffect(() => {
    axios
      .get<SWResponse>(currentPage)
      .then((r) => r.data)
      .then((r) => {
        setPeople(r);
      });
  }, [currentPage]);

  return (
    <Stack height={"100vh"}>
      <AppBar title="Star Wars GUI" />
      <Stack p={2} flex={1} sx={{ overflowY: "scroll" }}>
        <Grid container flex={1} spacing={2} justifyContent="center">
          {people?.results.map((c) => (
            <CharacterCard data={c} />
          ))}
        </Grid>
      </Stack>
      <Pagination
        total={people?.count}
        prevLink={people?.previous}
        nextLink={people?.next}
        onChange={handleOnPaginationChange}
      />
    </Stack>
  );
}

export default App;
