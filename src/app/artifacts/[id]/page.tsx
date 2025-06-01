import { UUID } from "crypto";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getArtifact, getArtifactDownloadUrl } from "../../../lib/artifacts";

export async function generateMetadata({ params }: { params: Promise<{id: UUID | string}>}): Promise<Metadata> {
    const { id } = await params;

    const artifact = await getArtifact(id);
    if (!artifact) {
        notFound();
    }

    return {
        title: `${artifact.artifact_file_name} - archive @ isdn.network`,
        description: `${artifact.artifact_file_name} (${artifact.artifact_file_length} bytes)`,
    };
}

export default async function ArtifactDetailPage({ params }: { params: Promise<{id: UUID | string}>}) {
    const { id } = await params;

    const artifact = await getArtifact(id);
    if (!artifact) {
        notFound();
    }

    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-200">
                    Artifact Details
                </h1>
                <p className="text-neutral-400">
                    {artifact.artifact_file_name} ({artifact.artifact_file_length} bytes)
                </p>
                <p className="text-neutral-400">
                    <a
                        className="px-3 py-2 bg-neutral-900 text-sm rounded-lg border border-neutral-600/10 hover:bg-neutral-800 transition-colors"
                        href={getArtifactDownloadUrl(id)}
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Download Artifact
                    </a>
                </p>
            </section>
        </div>
    );
}
