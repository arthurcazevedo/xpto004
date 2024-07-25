export type DogFacts = string[];

export interface Props {
    numberOfFacts?: number;
}

async function loader(
    { numberOfFacts = 1 }: Props,
    _req: Request,
): Promise<DogFacts> {
    const dataRequest = await fetch(
        `https://dogapi.dog/api/facts?number=${numberOfFacts ?? 1}`,
    );
    const data: { facts: DogFacts } = await dataRequest.json();

    return data.facts;
}

export default loader;
