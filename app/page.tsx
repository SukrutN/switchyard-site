// The scaffold screen — a real frame, not lorem. Units 02+ build the
// sections (hero, proofs, console, promise) into this main.
export default function Page() {
  return (
    <main>
      <section className="section section--pad">
        <div className="wrp">
          <p className="eyebrow">switchyard — v1.0</p>
          <h1 className="display" style={{ fontSize: "var(--step-hero)" }}>
            The yard never lies.
          </h1>
          <hr className="hairline" />
          <p className="lede" style={{ marginTop: "2rem" }}>
            The showroom is under construction: units 02–05 build the hero, the
            proofs, the operator console, and the promise into this frame.
          </p>
        </div>
      </section>
    </main>
  );
}
