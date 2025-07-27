import Grid from "@mui/material/Grid";
import FactionSection from "../Factions/FactionSection";

function Board() {
    return (
        <Grid container spacing={2}>
            <Grid size={2}>
                <FactionSection></FactionSection>
            </Grid>
            <Grid size={8}>Main Board</Grid>
            <Grid size={2}>Imperium Row</Grid>
        </Grid>
    );
}

export default Board;
