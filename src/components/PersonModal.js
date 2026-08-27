export function createPersonModal() {
  return `
    <div id="person-full-detail-modal" class="modal-backdrop" role="dialog" aria-modal="true" aria-label="Person Profile Detail">
      <div id="person-full-modal-card" class="modal-panel" onclick="event.stopPropagation()">
        <div style="position: absolute; top: 1.25rem; right: 1.25rem; z-index: 10;">
          <button id="close-person-modal-btn" aria-label="Close Profile" style="background: var(--surface-subtle); border: 1.5px solid var(--border); color: var(--foreground); width: 38px; height: 38px; border-radius: 50%; display: flex; align-items: center; justify-content: center; cursor: pointer; transition: transform 0.2s ease, background 0.2s ease;">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
          </button>
        </div>
        <div id="person-full-modal-content"></div>
      </div>
    </div>
  `;
}
