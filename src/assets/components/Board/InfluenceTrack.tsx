import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import type { InfluenceSpot } from "../Factions/Faction";

type InfluenceTrackProps = {
    spots: InfluenceSpot[];
    factionName: string;
};

export default function InfluenceTrack({ spots }: InfluenceTrackProps) {
    return (
        <Grid container spacing={1}>
            {spots.map((spot) => (
                <Grid size={12} key={spot.spotNumber}>
                    <Paper>{spot.spotNumber}</Paper>
                </Grid>
            ))}
        </Grid>
    );
}
