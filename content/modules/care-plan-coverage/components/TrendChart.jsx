import { useMemo } from 'preact/hooks';

function formatDate(dateStr) {
  return new Date(dateStr).toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function getTierColor(score) {
  if (score >= 80) return '#22c55e';
  if (score >= 50) return '#f59e0b';
  return '#ef4444';
}

export function TrendChart({ days }) {
  const hasData = days && days.length >= 3;

  const { points, polygonPoints, color, latestScore, firstDate, lastDate } = useMemo(() => {
    if (!hasData) return {};

    const pts = days.map((d, i) => {
      const x = 5 + (i / (days.length - 1)) * 290;
      const y = 75 - (d.averageScore / 100) * 70;
      return { x, y };
    });

    const pointsStr = pts.map(p => `${p.x},${p.y}`).join(' ');
    const lastPt = pts[pts.length - 1];
    const firstPt = pts[0];
    const polygonStr = pointsStr + ` ${lastPt.x},75 ${firstPt.x},75`;

    const latest = days[days.length - 1];

    return {
      points: pointsStr,
      polygonPoints: polygonStr,
      color: getTierColor(latest.averageScore),
      latestScore: latest.averageScore,
      firstDate: formatDate(days[0].date),
      lastDate: formatDate(latest.date),
    };
  }, [days, hasData]);

  if (!hasData) return null;

  return (
    <div class="cpc-cv__trend">
      <svg viewBox="0 0 300 80" width="100%" height="80" class="cpc-cv__trend-svg">
        <polygon
          points={polygonPoints}
          fill={color}
          opacity="0.1"
        />
        <polyline
          points={points}
          fill="none"
          stroke={color}
          stroke-width="2"
        />
      </svg>
      <div class="cpc-cv__trend-labels" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', color: '#64748b', marginTop: '4px' }}>
        <span class="cpc-cv__trend-date-start">{firstDate}</span>
        <span class="cpc-cv__trend-score" style={{ fontSize: '18px', fontWeight: 700, color }}>{latestScore}%</span>
        <span class="cpc-cv__trend-date-end">{lastDate}</span>
      </div>
    </div>
  );
}
