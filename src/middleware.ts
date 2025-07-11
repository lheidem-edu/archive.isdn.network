import { NextRequest, NextResponse } from "next/server";
import { getArtifacts } from "./lib/artifacts";

export async function middleware(request: NextRequest) {
    const match = request.nextUrl.pathname.match(/^\/windows\/(.+)/);

    if (!match) {
        return NextResponse.next();
    }

    const requestedFile = match[1];

    const artifacts = await getArtifacts();
    const matched = artifacts.find(artifact => artifact.file_name === requestedFile);

    if (!matched) {
        return NextResponse.next();
    }

    const url = request.nextUrl.clone();
    url.pathname = `/artifacts/${matched.id}`;

    return NextResponse.redirect(url);
}

export const config = {
    matcher: ["/windows/:path"],
};
