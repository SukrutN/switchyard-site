import Reveal from "./Reveal";
import "./consoleSection.css";

/**
 * The site mirrors the yardmaster console — the read-only companion
 * binary the broker repo now ships (PR: "feat: the yardmaster console").
 * Everything this panel prints is one REAL snapshot the console served
 * during a live bring-up (yard on 127.0.0.1:4780, lanes on, real spur
 * traffic): fetched 2026-10-22T17:28:00Z, 0 ms, duration_ms 0.
 * The select is disabled on purpose — this page is a mirror, not the
 * console; the binary is where the live thing runs.
 */
export default function ConsoleSection() {
  return (
    <section className="section section--pad consol" id="console">
      <div className="wrp">
        <p className="eyebrow">
          <span className="consol__signal">04</span> · the console
          <span className="consol__stamp">
            {" "}· snapshot 2026-10-22T17:28:00Z
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
          byte to the yard. The panel below is a mirror of its view of a
          real bring-up — one lane,{" "}
          <span className="mono">orders</span>, a durable consumer
          attached — the console&apos;s own words, at its own snapshot
          time. Run the binary and this is what a live yard answers.
        </p>

        <Reveal delay={80}>
          <div className="consol__band">
            {/* the console's gate, as it read that second */}
            <div className="consol__gate" aria-label="console gate">
              <span className="consol__chip">
                target <b>127.0.0.1:4780</b>
              </span>
              <span className="consol__chip consol__chip--warn">
                tls <b>plain</b>
              </span>
              <span className="consol__chip consol__chip--warn">
                token <b>auth off</b>
              </span>
              <span className="consol__chip consol__chip--live">
                <span className="consol__dot" />
                <b>watching</b>
              </span>
            </div>

            {/* the yard card */}
            <div className="consol__plate">
              <p className="consol__kicker">the yard</p>
              <dl className="consol__grid">
                <div className="consol__cell">
                  <dt>version</dt>
                  <dd>
                    <span className="consol__hot">1.0.0</span>
                  </dd>
                </div>
                <div className="consol__cell">
                  <dt>uptime</dt>
                  <dd>41s</dd>
                </div>
                <div className="consol__cell">
                  <dt>sessions</dt>
                  <dd>2</dd>
                </div>
                <div className="consol__cell">
                  <dt>lanes</dt>
                  <dd>1</dd>
                </div>
              </dl>
              <p className="consol__note">
                fetched 2026-10-22T17:28:00Z · snapshot in 0 ms
              </p>
            </div>

            {/* the lane table */}
            <div className="consol__plate">
              <p className="consol__kicker">lanes</p>
              <table className="consol__table">
                <thead>
                  <tr>
                    <th>lane</th>
                    <th className="num">seq</th>
                    <th className="num">journal</th>
                    <th className="num">keys</th>
                    <th className="num">consumers</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="consol__row--active">
                    <td className="consol__lane-name">orders</td>
                    <td className="num">4</td>
                    <td className="num">263 B</td>
                    <td className="num">2</td>
                    <td className="num">1</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* the drill-down */}
            <div className="consol__plate">
              <p className="consol__kicker">
                lane <b>orders</b>
              </p>
              <dl className="consol__grid">
                <div className="consol__cell">
                  <dt>seq</dt>
                  <dd>4</dd>
                </div>
                <div className="consol__cell">
                  <dt>journal</dt>
                  <dd>263 B</dd>
                </div>
                <div className="consol__cell">
                  <dt>keys</dt>
                  <dd>2</dd>
                </div>
                <div className="consol__cell">
                  <dt>consumers</dt>
                  <dd>1</dd>
                </div>
              </dl>
              <table className="consol__table" style={{ marginTop: "0.8rem" }}>
                <thead>
                  <tr>
                    <th>consumer</th>
                    <th className="num">floor</th>
                    <th className="num">pending</th>
                    <th>state</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>inspector</td>
                    <td className="num">4</td>
                    <td className="num">0</td>
                    <td>
                      <span className="consol__chip--state">attached</span>
                    </td>
                  </tr>
                </tbody>
              </table>
              <p className="consol__note">
                floor is the durable position a consumer resumes from
              </p>
            </div>

            {/* the KV index, look-only */}
            <div className="consol__plate">
              <p className="consol__kicker">
                key–value <span className="consol__roi">read-only</span>
              </p>
              <div className="consol__kvrow">
                <select
                  className="consol__sel"
                  aria-label="lane (mirror: disabled)"
                  disabled
                  defaultValue="orders"
                >
                  <option value="orders">orders</option>
                </select>
                <span className="consol__sep mono">·</span>
                <div className="consol__keyscol">
                  <ul className="consol__keys">
                    <li className="active">box-42</li>
                    <li>box-7</li>
                  </ul>
                  <p className="consol__note">2 key(s)</p>
                </div>
              </div>
              <div className="consol__value">
                <p className="consol__kicker">
                  key <b>box-42</b>{" "}
                  <span className="consol__roi">seq 3 | 29 B</span>
                </p>
                <pre className="consol__payload">
                  {"box 42 signed for at the door"}
                </pre>
              </div>
            </div>

            <p className="consol__foot" data-fill>
              read-only console · lanes §2.8–§2.17 · kv §2.18–§2.23 ·
              console §2.24–§2.27 · a client like any other
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
