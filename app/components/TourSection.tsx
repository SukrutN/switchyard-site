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
            built on{" "}
            <span className="mono toursec__chip">internal/client</span>: the
            same library the test suite drives. Every verb shares one dial
            set (
            <span className="mono toursec__chip">-addr -auth -tls -insecure</span>
            ).
          </p>
          <p className="toursec__body toursec__body--mut">
            The panel right replays the README&apos;s quickstart on a loop:
            a ping, a pub/sub round trip, a journaled push, a KV set, then
            the yardmaster&apos;s read. What prints are the answers the wire
            actually sends.
          </p>
        </div>

        <Reveal delay={80}>
          <Tour />
        </Reveal>
      </div>
    </section>
  );
}
