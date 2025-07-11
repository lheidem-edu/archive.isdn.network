import { MetadataRoute } from "next";
import { getArtifacts } from "../lib/artifacts";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const routes: Array<{
        url: string;
        lastModified: Date;
        changeFrequency: "monthly" | "yearly" | "always" | "hourly" | "daily" | "weekly" | "never";
        priority: number;
    }> = [
            {
                url: "https://archive.isdn.network/",
                lastModified: new Date("2025-01-01"),
                changeFrequency: "monthly",
                priority: 1.0
            },
            {
                url: "https://archive.isdn.network/artifacts/",
                lastModified: new Date("2025-01-01"),
                changeFrequency: "monthly",
                priority: 1.0
            }
        ]

    const artifacts = await getArtifacts();
    artifacts.forEach(artifact => {
        routes.push({
            url: `https://archive.isdn.network/artifacts/${artifact.id}`,
            lastModified: new Date(artifact.updated_at),
            changeFrequency: "yearly",
            priority: 0.8
        });
    });

    return routes;
}
