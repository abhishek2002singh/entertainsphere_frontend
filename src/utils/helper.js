export const formatViews = (views) => {
  if (!views) return "0 views";
  if (views >= 1_000_000) return (views / 1_000_000).toFixed(1) + "M views";
  if (views >= 1_000) return (views / 1_000).toFixed(1) + "K views";
  return views + " views";
};
 
export const formatDuration = (isoDuration) => {
  const match = isoDuration.match(/PT(\d+H)?(\d+M)?(\d+S)?/);
  const hours = (match[1] || '0H').slice(0, -1);
  const minutes = (match[2] || '0M').slice(0, -1);
  const seconds = (match[3] || '0S').slice(0, -1);

  const h = parseInt(hours);
  const m = parseInt(minutes);
  const s = parseInt(seconds);

  if (h > 0) return `${h}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  else return `${m}:${s.toString().padStart(2, '0')}`;
};

export const formatTimeAgo = (dateStr) => {
  const date = new Date(dateStr);
  const seconds = Math.floor((new Date() - date) / 1000);

  const intervals = [
    { label: 'year', seconds: 31536000 },
    { label: 'month', seconds: 2592000 },
    { label: 'week', seconds: 604800 },
    { label: 'day', seconds: 86400 },
    { label: 'hour', seconds: 3600 },
    { label: 'minute', seconds: 60 },
    { label: 'second', seconds: 1 },
  ];

  for (const interval of intervals) {
    const count = Math.floor(seconds / interval.seconds);
    if (count > 0) return `${count} ${interval.label}${count !== 1 ? 's' : ''} ago`;
  }
  return 'just now';
};