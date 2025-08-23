import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import type { Resources, Spaces } from "../Board/Spaces";
import InfluenceTrack from "../Board/InfluenceTrack";

type FactionProps = {
    spaces: Spaces[];
    influenceTrackSpots: InfluenceSpot[];
    factionName: string;
};

export type InfluenceSpot = {
    spotNumber: number;
    reward?: Resources | Spaces["reward"];
};

function Faction({ factionName, influenceTrackSpots, spaces }: FactionProps) {
    return (
        <Box sx={{ border: "1px solid grey", p: 1, mb: 1 }}>
            <Grid container spacing={1}>
                <Grid size={4}>
                    <InfluenceTrack spots={influenceTrackSpots} factionName={factionName} />
                </Grid>
                <Grid size={8} container spacing={1}>
                    {spaces.map((space) => (
                        <Grid size={12} key={space.name}>
                            <Paper sx={{ p: 1, bgcolor: "#f0f0f0" }}>
                                {space.name}
                            </Paper>
                        </Grid>
                    ))}
                </Grid>
            </Grid>
        </Box>
    );
}

export default Faction;
