import { Button } from "./Button";

interface IIndexPageProps { }
export default function IndexPage(props: IIndexPageProps): JSX.Element {
    return (
        <>
            <div>Index</div>
            <Button />
        </>
    );
}