import "./footer.css";

/** The house sign. Three hairline columns and one honesty line. */
export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="wrp">
        <div className="footer__grid">
          <div className="footer__brand">
            <div className="footer__mark">
              <span>switchyard</span>
              <span className="footer__ver mono">/1.0.0</span>
            </div>
            <p className="footer__pitch">
              A Go message broker you can run from one binary and understand
              from one file. Receipts, not hopes.
            </p>
          </div>

          <nav className="footer__col" aria-label="the broker">
            <p className="footer__head">THE BROKER</p>
            <a
              href="https://github.com/SukrutN/switchyard"
              target="_blank"
              rel="noreferrer"
            >
              the repository
            </a>
            <a
              href="https://github.com/SukrutN/switchyard#switchyard"
              target="_blank"
              rel="noreferrer"
            >
              the README
            </a>
            <a
              href="https://github.com/SukrutN/switchyard/blob/main/scripts/bench.ps1"
              target="_blank"
              rel="noreferrer"
            >
              the bench rod
            </a>
          </nav>

          <nav className="footer__col" aria-label="the documents">
            <p className="footer__head">THE DOCUMENTS</p>
            <a
              href="https://github.com/SukrutN/switchyard/blob/main/docs/PROTOCOL.md"
              target="_blank"
              rel="noreferrer"
            >
              PROTOCOL.md — the wire
            </a>
            <a
              href="https://github.com/SukrutN/switchyard/blob/main/CHANGELOG.md"
              target="_blank"
              rel="noreferrer"
            >
              CHANGELOG.md — the birthlog
            </a>
          </nav>

          <div className="footer__col" aria-label="the house">
            <p className="footer__head">THE HOUSE</p>
            <p className="footer__law">
              Every number on this page was printed by the yard first.
            </p>
            <p className="footer__lic mono">apache-2.0</p>
          </div>
        </div>

        <div className="footer__base">
          <span className="mono footer__base-line">
            switchyard-site — next.js, exported static, served from the repo
          </span>
          <span className="mono footer__base-line">
            <a
              className="footer__top"
              href="#top"
            >
              back to the yard ⇧
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}
