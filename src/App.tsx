import { Grid, GridItem } from "@chakra-ui/react";
import CountryList from "./components/CountryList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(1, 1fr)">
        <GridItem paddingY={7} paddingX={5} rowSpan={2} colSpan={1}>
          <NavBar />
        </GridItem>
        <GridItem rowSpan={2}>
          <CountryList />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
