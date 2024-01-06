import { Grid, GridItem } from "@chakra-ui/react";
import CountryList from "./components/CountryList";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(1, 1fr)">
        <GridItem rowSpan={2} colSpan={1}>
          <NavBar />
        </GridItem>
        <GridItem rowSpan={2} bg="tomato">
          {/* <CountryList /> */}
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
