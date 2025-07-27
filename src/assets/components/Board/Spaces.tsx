type Resources = {
    spice?: number;
    solari?: number;
    water?: number;
};

export type Spaces = {
    name: string;
    cost?: Resources;
    accessRequired?: {
        Emperor?: number;
        SpacingGuild?: number;
        BeneGesserit?: number;
        Fremen?: number;
    };
    reward: {
        resource?: Resources;
        factionBump?: boolean;
        troops?: number;
        intrigueCard?: boolean;
        foldspaceCard?: boolean;
        trashCard?: boolean;
        drawCards?: number;
    };
    combatSpace?: boolean;
};
