"use client";

import { useState } from "react";

const invitationDetails = [
  "Sa zadovoljstvom vas pozivamo da prisustvujete našem venčanju",
  "31. maj 2026.",
  "14:00 venčanje u crkvi Svete Trojice",
  "16:00 slavlje u sali „Insomnia”",
  "Molimo vas da potvrdite vaš dolazak do 15. maja 2026."
];

export default function HomePage() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasInvitationImage, setHasInvitationImage] = useState(true);
  const assetBase = process.env.NODE_ENV === "production" ? "/PozivnicaDemo" : "";

  return (
    <main className="invitation-shell">
      <div className="ambient ambient-left" />
      <div className="ambient ambient-right" />

      <section className="stage">
        <div className={`scene ${isOpen ? "scene-open" : ""}`}>
          <button
            type="button"
            className="envelope-button"
            onClick={() => setIsOpen((current) => !current)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Zatvori pozivnicu" : "Otvori pozivnicu"}
          >
            <article className="envelope" aria-hidden="true">
              <img
                src={`${assetBase}/envelope-open.png`}
                alt=""
                className="envelope-layer envelope-open"
              />
              <img
                src={`${assetBase}/envelope-closed.png`}
                alt=""
                className="envelope-layer envelope-closed"
              />
            </article>

            <article className="invitation-card">
              {hasInvitationImage ? (
                <div className="invitation-image-wrap">
                  <img
                    src={`${assetBase}/invitation-card.jpg`}
                    alt="Wedding invitation"
                    className="invitation-image"
                    onError={() => setHasInvitationImage(false)}
                  />
                </div>
              ) : (
                <div className="card-frame">
                  <p className="card-intro">{invitationDetails[0]}</p>
                  <h1 className="card-names">Milan &amp; Kristina</h1>
                  <p className="card-date">{invitationDetails[1]}</p>
                  <div className="card-divider" />
                  <div className="card-schedule">
                    <p>{invitationDetails[2]}</p>
                    <p>{invitationDetails[3]}</p>
                  </div>
                  <p className="card-rsvp">{invitationDetails[4]}</p>
                  <p className="card-family">S poštovanjem porodice Mitrović &amp; Djekić</p>
                </div>
              )}
            </article>
          </button>
        </div>

        <div className="copy-block">
          <p className="eyebrow">Pozivnica</p>
          <button type="button" className="toggle-button" onClick={() => setIsOpen((current) => !current)}>
            {isOpen ? "Zatvori kovertu" : "Otvori kovertu"}
          </button>
        </div>
      </section>
    </main>
  );
}
