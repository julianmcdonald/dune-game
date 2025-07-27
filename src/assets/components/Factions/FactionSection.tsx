import Grid from "@mui/material/Grid";
import Faction from "./Faction";

function FactionSection() {
    return (
        <Grid container>
            <Grid size={12}>
                <Faction
                    factionName={"EMPEROR"}
                    spaces={[
                        {
                            name: "CONSPIRE",
                            cost: {
                                spice: 4,
                            },
                            accessRequired: {
                                Emperor: 2,
                            },
                            reward: {
                                factionBump: true,
                                resource: {
                                    solari: 5,
                                },
                                troops: 2,
                                intrigueCard: true,
                            },
                        },
                        {
                            name: "WEALTH",
                            reward: {
                                factionBump: true,
                                foldspaceCard: true,
                            },
                        },
                    ]}
                />
            </Grid>
            <Grid size={12}>
                <Faction
                    factionName={"SPACING GUILD"}
                    spaces={[
                        {
                            name: "HEIGHLINER",
                            cost: {
                                spice: 6,
                            },
                            accessRequired: {
                                SpacingGuild: 2,
                            },
                            reward: {
                                troops: 5,
                                resource: {
                                    water: 2,
                                },
                            },
                        },
                        {
                            name: "FOLDSPACE",
                            reward: {
                                foldspaceCard: true,
                            },
                        },
                    ]}
                />
            </Grid>
            <Grid size={12}>
                <Faction
                    factionName={"BENE GESSERIT"}
                    spaces={[
                        {
                            name: "SELECTIVE BREEDING",
                            cost: {
                                spice: 2,
                            },
                            accessRequired: {
                                BeneGesserit: 2,
                            },
                            reward: {
                                trashCard: true,
                                drawCards: 2,
                            },
                        },
                        {
                            name: "SECRETS",
                            reward: {
                                intrigueCard: true,
                            },
                        },
                    ]}
                />
            </Grid>
            <Grid size={12}>
                <Faction
                    factionName={"FREMEN"}
                    spaces={[
                        {
                            name: "HARDY WARRIORS",
                            cost: {
                                water: 1,
                            },
                            reward: {
                                troops: 2,
                            },
                            combatSpace: true,
                        },
                        {
                            name: "STILLSUITS",
                            reward: {
                                resource: {
                                    water: 1,
                                },
                            },
                            combatSpace: true,
                        },
                    ]}
                />
            </Grid>
        </Grid>
    );
}

export default FactionSection;
