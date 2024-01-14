import { Grid, GridItem } from "@chakra-ui/react";
import CountryList from "./components/CountryList";
import NavBar from "./components/NavBar";
import RegionSelector from "./components/RegionSelector";
import { useState } from "react";

function App() {
  const [selectedRegion, setSelectedRegion] = useState<string | null>(null);

  return (
    <>
      <Grid templateRows="repeat(2, 1fr)" templateColumns="repeat(1, 1fr)">
        <GridItem paddingY={7} paddingX={5} rowSpan={2} colSpan={1}>
          <NavBar />
        </GridItem>
        <GridItem rowSpan={2}>
          <RegionSelector
            onSelectRegion={(regions) => setSelectedRegion(regions)}
          />
          <CountryList selectedRegion={selectedRegion} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
