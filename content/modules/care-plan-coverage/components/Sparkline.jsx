import { useMemo } from 'preact/hooks';

export const Sparkline = ({ scores, width = 48, height = 16 }) => {
  const { points, color, isSingle } = useMemo(() => {
    if (!scores || scores.length === 0) {
      return { points: null, color: null, isSingle: false };
    }

    const first = scores[0].score;
    const last = scores[scores.length - 1].score;
    const c = last > first ? '#22c55e' : last < first ? '#ef4444' : '#9ca3af';

    if (scores.length === 1) {
      return { points: null, color: c, isSingle: true };
    }

    const pad = 1;
    const xStep = (width - pad * 2) / (scores.length - 1);
    const yRange = height - pad * 2;

    const pts = scores
      .map((s, i) => {
        const x = pad + i * xStep;
        const y = pad + yRange - (s.score / 100) * yRange;
        return `${x},${y}`;
      })
      .join(' ');

    return { points: pts, color: c, isSingle: false };
  }, [scores, width, height]);

  if (!scores || scores.length === 0) return null;

  return (
    <svg
      class="cpc-cv__sparkline"
      width={width}
      height={height}
      viewBox={`0 0 ${width} ${height}`}
      style={{ display: 'inline-block', verticalAlign: 'middle' }}
    >
      {isSingle ? (
        <circle cx={width / 2} cy={height / 2} r={2} fill={color} />
      ) : (
        <polyline
          points={points}
          fill="none"
          stroke={color}
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      )}
    </svg>
  );
};
