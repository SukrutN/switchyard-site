import Reveal from "./Reveal";
import Tour from "./Tour";
import "./tourSection.css";

/**
 * The yardmaster's lens: on the left, the argument for driving the yard
 * by hand; on the right, the quickstart typing itself out.
 */
export default function TourSection() {
  return (
    <section className="section section--pad toursec" id="tour">
      <div className="wrp toursec__grid">
        <div className="toursec__copy">
          <p className="eyebrow">
            <span className="toursec__signal">03</span> · operate it
          </p>
          <h2 className="display toursec__title">
            Drive the yard from a terminal.
          </h2>
          <p className="toursec__body">
            <span className="mono toursec__chip">spur</span> is the reference
            CLI:{" "}
            <span className="mono toursec__chip">
              ping · pub · sub · stream · kv · yard
            </span>{" "}
            — one verb vocabulary, one dial set (
            <span className="mono toursec__chip">-addr -auth -tls -insecure</span>
            ) on every verb, speaking the same{" "}
            <span className="mono toursec__chip">internal/client</span>{" "}
            library the test suite drives.
          </p>
          <p className="toursec__body toursec__body--mut">
            The console replays the README&apos;s quickstart on a loop:
            gossip round trips, a fan-out delivery, a journaled row, a KV
            receipt, the yardmaster&apos;s read-only lens. Every answer on
            screen is a response the wire actually sends.
          </p>
        </div>

        <Reveal delay={80}>
          <Tour />
        </Reveal>
      </div>
    </section>
  );
}
