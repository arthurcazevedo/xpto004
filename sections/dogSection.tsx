import type { DogFacts } from "../loaders/dogLoader.ts";

// Props type that will be configured in deco.cx's Admin
export interface Props {
    title?: string;
    dogFacts?: DogFacts;
}

export default function DogFactsSection(
    { title, dogFacts }: Props,
) {
    return (
        <div class="p-4">
            <h1 class="font-bold">{title}</h1>
            <ul>
                {dogFacts?.map((fact,ind) => <li>Fato no. {ind} - {fact}</li>)}
            </ul>
        </div>
    );
}
