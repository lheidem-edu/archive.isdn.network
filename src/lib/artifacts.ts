import { UUID } from "crypto";

export type Artifact = {
    id: UUID;
    file_name: string;
    file_length: number;
    created_at: string;
    updated_at: string;
};

export async function getArtifacts(): Promise<Artifact[]> {
    try {
        const response = await fetch("https://api.isdn.network/api/v1/artifacts", {
            next: {
                revalidate: 3600
            }
        });

        if (!response.ok) {
            throw new Error(`An error has occurred while fetching artifacts: HTTP ${response.status}`);
        }

        const artifacts = await response.json();
        return artifacts;
    } catch (error) {
        console.error(error);
        return [];
    }
}

export async function getArtifact(artifactId: UUID | string): Promise<Artifact> {
    try {
        const response = await fetch(`https://api.isdn.network/api/v1/artifacts/${artifactId}`, {
            next: {
                revalidate: 3600
            }
        });

        if (response.status === 404) {
            throw new Error(`An artifact with unique identifier ${artifactId} was not found.`);
        }

        if (!response.ok) {
            throw new Error(`An error has occurred while fetching the artifact with unique identifier ${artifactId}: HTTP ${response.status}`);
        }

        const artifact = await response.json();
        return artifact;
    } catch (error) {
        console.error(error);
    }
}

export function getArtifactDownloadUrl(artifactId: UUID | string): string {
    return `https://api.isdn.network/api/v1/artifacts/${artifactId}/download`;
}
