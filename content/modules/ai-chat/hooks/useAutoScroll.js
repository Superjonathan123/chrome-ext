// Auto-scroll hook — scrolls to bottom when new messages arrive
import { useEffect, useRef, useCallback } from 'preact/hooks';

export function useAutoScroll(messages, status) {
  const containerRef = useRef(null);
  const isUserScrolledUp = useRef(false);

  // Track if user has scrolled up
  const handleScroll = useCallback(() => {
    const el = containerRef.current;
    if (!el) return;

    const threshold = 80;
    const isAtBottom = el.scrollHeight - el.scrollTop - el.clientHeight < threshold;
    isUserScrolledUp.current = !isAtBottom;
  }, []);

  // Scroll to bottom when messages change (if user hasn't scrolled up)
  useEffect(() => {
    if (isUserScrolledUp.current) return;

    const el = containerRef.current;
    if (!el) return;

    // Use requestAnimationFrame to wait for DOM update
    requestAnimationFrame(() => {
      el.scrollTo({ top: el.scrollHeight, behavior: 'smooth' });
    });
  }, [messages, status]);

  return { containerRef, handleScroll };
}
