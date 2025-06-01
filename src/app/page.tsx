import { Metadata } from "next";

export const metadata: Metadata = {
    title: "archive @ isdn.network",
    description: "A repository of legacy Windows installation media.",
};

export default function Page() {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-200">
                    archive @ isdn.network
                </h1>
                <p className="text-neutral-400 text-justify">
                    This website serves as a repository for legacy Windows installation media.
                </p>
            </section>

            <section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-200">
                    Bandwidth Policy
                </h2>
                <p className="text-neutral-400 text-justify">
                    Bandwidth is limited to a single gigabit connection &mdash; fast enough for most, but not for everyone. Please avoid saturating the connection, or we'll all be reminiscing about the sweet symphony of 56k modems and the thrill of dial-up tones.
                </p>
            </section>

            			<section className="space-y-4">
                <h2 className="text-2xl font-semibold tracking-tight text-neutral-200">Disclaimer</h2>
                <p className="text-neutral-400 text-justify">This platform is a private, non-commercial project. All content provided is for learning, research and experimentation purposes only. Use is at your own risk &mdash; we accept no liability for any damage or loss of data.</p>
                <p className="text-neutral-400 text-justify">External links lead to resources outside our sphere of influence. The respective operators are solely responsible for their content. No violations were apparent at the time of linking. It is not technically feasible to continuously check external content. Should any legal infringements become known, the corresponding links will be removed immediately.</p>
                <p className="text-neutral-400 text-justify">This project is not affiliated with Microsoft Corporation or its subsidiaries. All trademarks and copyrights mentioned remain the property of their respective owners.</p>
            </section>
        </div>
    );
}
