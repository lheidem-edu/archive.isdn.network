export default function NotFound() {
    return (
        <div className="space-y-8">
            <section className="space-y-4">
                <h1 className="text-3xl font-extrabold tracking-tight text-neutral-200">
                    Page Not Found
                </h1>
                <p className="text-sm text-neutral-400">
                    The requested page does not exist or has been removed.
                </p>
            </section>
        </div>
    );
}
