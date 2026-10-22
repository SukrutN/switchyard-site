import Reveal from "./Reveal";
import "./milestones.css";

/**
 * The birthlog, straight from CHANGELOG.md — every release landed on
 * 2026-10-21, a fact the timeline prints rather than hides.
 */
const MILESTONES = [
  { v: "0.1.0", label: "M1 · pub/sub core", note: "wire v1, the subject charter, the yard, spur — and the suite over real sockets." },
  { v: "0.2.0", label: "M2 · durable streams", note: "lanes, the append-only journal, durable consumers, the sweeper." },
  { v: "0.3.0", label: "M2 · kv", note: "a bucket is a lane; every write a receipt, every read the same on-disk story." },
  { v: "0.4.0", label: "M3 · the yardmaster console", note: "the yard's state on the wire, read-only: a lens, not a lever." },
  { v: "0.5.0", label: "M4 · the gate and the wrap", note: "a token before HELLO; TLS wrapping every byte of every session." },
  { v: "0.6.0", label: "M4 · yardstick", note: "the honest bench rod, plus the drain arithmetic it exposed and the fix it forced." },
  { v: "1.0.0", label: "the promise release", note: "the surface is frozen: families append, op numbers never move. The yard ships." },
];

export default function Milestones() {
  return (
    <section className="section section--pad milestones" id="milestones">
      <div className="wrp">
        <p className="eyebrow">
          <span className="milestones__signal">06</span> · the birthlog
        </p>
        <h2 className="display milestones__title">Every release, in order.</h2>

        <div className="milestones__list">
          {MILESTONES.map((m, i) => (
            <Reveal key={m.v} delay={i * 55}>
              <div
                className={`mrow ${m.v === "1.0.0" ? "mrow--ship" : ""}`}
              >
                <span className="mrow__v mono">{m.v}</span>
                <span className="mrow__node" aria-hidden="true" />
                <span className="mrow__label">{m.label}</span>
                <span className="mrow__note">{m.note}</span>
              </div>
            </Reveal>
          ))}
        </div>

        <p className="milestones__foot mono">
          all seven dated 2026-10-21 · the full changelog is{" "}
          <a
            className="milestones__link"
            href="https://github.com/SukrutN/switchyard/blob/main/CHANGELOG.md"
            target="_blank"
            rel="noreferrer"
          >CHANGELOG.md</a>
        </p>
      </div>
    </section>
  );
}
