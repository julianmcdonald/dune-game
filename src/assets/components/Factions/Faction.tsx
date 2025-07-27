import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import type { Spaces } from "../Board/Spaces";

type FactionProps = {
    factionName: string;
    spaces: Spaces[];
};

function Faction({ factionName, spaces }: FactionProps) {
    return (
        <Box sx={{ border: "1px solid grey", p: 1, mb: 1 }}>
            <Grid container spacing={1}>
                <Grid size={4}>
                    <Paper sx={{ p: 2 }}>{factionName}</Paper>
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
