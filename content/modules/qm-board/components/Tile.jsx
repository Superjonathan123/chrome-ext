/**
 * QM tile — single measure at-a-glance card.
 */
export function Tile({ tile, onClick }) {
  const { status, label, triggering, alerts } = tile;

  return (
    <button
      className={`qmb-tile qmb-tile--${status}`}
      onClick={() => onClick(tile.id)}
      type="button"
    >
      <div className="qmb-tile__label">{label}</div>
      <div className="qmb-tile__num-wrap">
        <div className="qmb-tile__num">{triggering}</div>
        <div className="qmb-tile__sub">
          {status === 'clean' ? '✓ clean' : status === 'skipped' ? 'n/a' : 'triggering'}
        </div>
      </div>
      <div className="qmb-tile__foot">
        {alerts > 0 ? <span className="qmb-tile__alert">⚡ {alerts}</span> : <span>·</span>}
        <span className="qmb-tile__trend qmb-tile__trend--flat">→</span>
      </div>
    </button>
  );
}
