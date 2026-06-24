export function trackPageView(path: string) {
  const analyticsId = import.meta.env.VITE_ANALYTICS_ID;
  if (!analyticsId) return;

  window.dispatchEvent(
    new CustomEvent("portfolio:page-view", {
      detail: { path, analyticsId }
    })
  );
}
