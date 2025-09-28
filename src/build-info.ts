const updateBuildInfo = () => {
  const buildInfo = document.getElementById('build-info');
  if (!buildInfo) {
    return;
  }

  const rawDate = (import.meta.env.VITE_BUILD_DATE ?? '').toString().trim();
  const displayDate = rawDate.length > 0 ? rawDate : new Date().toLocaleDateString('fr-FR');
  buildInfo.textContent = `Build: ${displayDate}`;
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateBuildInfo, { once: true });
} else {
  updateBuildInfo();
}
