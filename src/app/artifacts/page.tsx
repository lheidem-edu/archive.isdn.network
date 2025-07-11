import Link from "next/link";
import { getArtifacts } from "../../lib/artifacts";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Artifacts - archive @ isdn.network",
    description: "A list of all available artifacts.",
};

export default async function ArtifactsPage() {
    const artifacts = await getArtifacts();

    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-200">
                    Artifacts
                </h1>
                <p className="text-neutral-400">
                    This page lists all available artifacts.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-200">
                    Available Artifacts
                </h2>
                <ul className="list-none space-y-2">
                    {artifacts.map(artifact => (
                        <li key={artifact.id}>
                            <Link
                                className="text-neutral-400 text-ellipsis hover:text-neutral-200 transition-colors overflow-hidden"
                                href={`/artifacts/${artifact.id}`}
                            >
                                {artifact.file_name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    );
}
