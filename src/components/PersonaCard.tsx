
import { IconButton } from "@fluentui/react/lib/Button";
import { IPersonaProps, Persona } from "@fluentui/react/lib/Persona";

interface IPersonaCardProps extends IPersonaProps {
}

export function PersonaCard(props: IPersonaCardProps): JSX.Element {
    return (
        <div>
            <Persona {...props} />
            <IconButton menuIconProps={{ iconName: "MailCheck" }} />
        </div>
    );
}