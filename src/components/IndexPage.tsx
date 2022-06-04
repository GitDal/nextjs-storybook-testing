import { TestImages } from "@fluentui/example-data";
import { PersonaSize } from "@fluentui/react";
import { Button } from "./Button";
import { PersonaCard } from "./PersonaCard";
import { initializeIcons } from "@fluentui/react";
initializeIcons(undefined, { disableWarnings: true });

interface IIndexPageProps { }

export default function IndexPage(props: IIndexPageProps): JSX.Element {
    const json = {
        imageUrl: TestImages.personaFemale,
        imageInitials: "AL",
        text: "Annie Lindqvist",
        secondaryText: "Software Engineer",
        tertiaryText: "In a meeting",
        optionalText: "Available at 4:00pm",
        size: PersonaSize.size120,
    };

    return (
        <>
            <div>Index</div>
            <Button />
            <PersonaCard {...json} />
        </>
    );
}