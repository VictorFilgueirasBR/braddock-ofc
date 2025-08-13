import React, { useEffect, useRef, useState } from "react";
import "./Presentation.css";

export default function Presentation() {
  const cardRef = useRef(null);
  const iframeRef = useRef(null);
  const [animateBadge, setAnimateBadge] = useState(false);
  const [animateMedia, setAnimateMedia] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  const videoId = "PW3lBDa5o-8"; // id do YouTube
  const baseSrc = `https://www.youtube.com/embed/${videoId}`;
  const highResThumbnailUrl = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
  const defaultResThumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setAnimateBadge(true);
            setTimeout(() => setAnimateMedia(true), 450);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.35 }
    );

    if (cardRef.current) observer.observe(cardRef.current);
    return () => observer.disconnect();
  }, []);

  function handlePlayClick() {
    setShowIframe(true);
    if (iframeRef.current) {
      iframeRef.current.src = `${baseSrc}?rel=0&autoplay=1`;
    }
  }

  return (
    <div className="presentation-page">
      <aside className="left-accent" aria-hidden="true"></aside>

      <div className="presentation-container" ref={cardRef}>
        <div className="presentation-card">
          <span className={`presentation-badge ${animateBadge ? "animate-badge" : ""}`}>
            Conheça a Bradock Intelligence
          </span>

          <div className={`media-wrap ${animateMedia ? "animate-video" : ""}`}>
            <div className="video-wrapper">
              {showIframe ? (
                <iframe
                  ref={iframeRef}
                  className="presentation-iframe"
                  src={`${baseSrc}?rel=0&autoplay=1`}
                  title="Apresentação"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              ) : (
                <>
                  <img
                    src={highResThumbnailUrl}
                    onError={(e) => {
                      e.target.onerror = null; // Evita loop infinito
                      e.target.src = defaultResThumbnailUrl;
                    }}
                    alt="Thumbnail do Vídeo"
                    className="thumbnail"
                  />
                  <div className="play-button" onClick={handlePlayClick}>
                    <div className="triangle"></div>
                  </div>
                </>
              )}
            </div>

            <div className={`caption-bar ${animateMedia ? "fade-in" : ""}`}>
              <div className="quote">“</div>
              <div className="caption-text">
              Capacitação estratégica em segurança corporativa e empresarial.
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
