import Reveal from "./Reveal";
import ConsoleReplay from "./ConsoleReplay";
import "./consoleSection.css";

/**
 * The site mirrors the yardmaster console — the read-only companion
 * binary the broker repo ships (switchyard PR #10) — and lets the page
 * drive it: a replay seeded from the REAL snapshot the console served
 * (2026-10-22T17:28:00Z), with buttons for the recorded bring-up. Wire
 * receipts print spur's own words; every replayed op costs the journal
 * delta the yard actually charged, measured live during the bring-up.
 * The section's copy keeps the honesty law: this is a replay, the live
 * console runs where the binary runs.
 */
export default function ConsoleSection() {
  return (
    <section className="section section--pad consol" id="console">
      <div className="wrp">
        <p className="eyebrow">
          <span className="consol__signal">04</span> · the console
          <span className="consol__stamp">
            {" "}· replay from snapshot 2026-10-22T17:28:00Z
          </span>
        </p>
        <h2 className="display consol__title" data-anim="wipe">
          <span className="wl" style={{ "--i": 0 } as React.CSSProperties}>
            <span className="wl__t">
              The yard has a browser now.
            </span>
          </span>
        </h2>
        <p className="consol__body" data-fill>
          <span className="mono">yardmaster</span> is the yard&apos;s
          console: a companion binary that dials the running yard as an
          ordinary client — same gate, same wrap, same dial vocabulary —
          and mirrors what the console family (§2.24–§2.27) and the KV
          reads (§2.19–§2.21) answer, in pages that ride inside the
          binary itself.
        </p>
        <p className="consol__body consol__body--mut" data-fill>
          It owns no levers: every panel is a read, quarantine is
          reported, not cleared, and the console cannot write a single
          byte to the yard. The panel below is a replay — the buttons
          publish, attach, ack, and cut the wire the way the recorded
          bring-up went, and the console answers in its own words. The
          live thing runs where the binary runs.
        </p>

        <Reveal delay={80}>
          <ConsoleReplay />
        </Reveal>
      </div>
    </section>
  );
}
