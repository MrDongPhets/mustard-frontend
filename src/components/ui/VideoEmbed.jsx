/* ============================================================
   MUSTARD DIGITALS - VideoEmbed
   Version: v1.0  |  Last Updated: 09 Sep 2026
   Prepared By: Sergette Angela Napoles (Wibiz)

   A single YouTube sample tile: lazy iframe + caption.
   orientation 'v' renders a 9:16 vertical (reels) frame.
   ============================================================ */

export default function VideoEmbed({ youtubeId, title, caption, orientation = 'h' }) {
  const vertical = orientation === 'v';
  return (
    <div className="pf-video-item">
      <div className={`pf-video${vertical ? ' pf-video-vertical' : ''}`}>
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
      <div className="pf-video-caption">
        <h4>{title}</h4>
        <p>{caption}</p>
      </div>
    </div>
  );
}
