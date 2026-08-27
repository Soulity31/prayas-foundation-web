export function createGalleryModal() {
  return `
    <div id="gallery-lightbox-modal" class="lightbox-modal" role="dialog" aria-modal="true" aria-label="Image Preview Lightbox" style="position: fixed; inset: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.92); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); z-index: 9999999; display: none; align-items: center; justify-content: center; padding: 1.25rem; box-sizing: border-box;" onclick="window.closeProgramLightbox && window.closeProgramLightbox()">
      
      <!-- Top Fixed Close Button (Always visible on all screen sizes) -->
      <button id="lightbox-close-btn" class="lightbox-btn lightbox-close-btn" aria-label="Close Lightbox" title="Close (Esc)" onclick="window.closeProgramLightbox && window.closeProgramLightbox()">
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
      </button>

      <!-- Navigation Buttons (Fixed on Left & Right) -->
      <button id="lightbox-prev-btn" class="lightbox-btn lightbox-nav-prev" aria-label="Previous Image" title="Previous">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="15 18 9 12 15 6"></polyline></svg>
      </button>

      <button id="lightbox-next-btn" class="lightbox-btn lightbox-nav-next" aria-label="Next Image" title="Next">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="9 18 15 12 9 6"></polyline></svg>
      </button>

      <!-- Centered Display Card Container -->
      <div class="lightbox-content liquid-glass-card" style="position: relative; width: 100%; max-width: 860px; max-height: 88vh; background: var(--surface-card); border-radius: 24px; border: 2px solid var(--border); overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 35px 100px rgba(0,0,0,0.8); margin: auto; z-index: 9999999;" onclick="event.stopPropagation()">
        
        <!-- Main Display Image Frame -->
        <div class="lightbox-img-frame" style="width: 100%; max-height: 58vh; overflow: hidden; background: #000000; display: flex; align-items: center; justify-content: center;">
          <img id="lightbox-main-img" src="/assets/celebrations.jpg" alt="Program Detail" class="lightbox-image" onerror="this.onerror=null; this.src='/assets/celebrations.jpg';" style="width: 100%; height: 100%; max-height: 58vh; object-fit: contain; display: block;" />
        </div>

        <!-- Caption Box (High Contrast) -->
        <div id="lightbox-caption" class="lightbox-caption" style="padding: 1.25rem 1.75rem; width: 100%; box-sizing: border-box; background: var(--surface-card); border-top: 1.5px solid var(--border); text-align: center;">
          <h3 id="lightbox-caption-title" class="font-display font-bold text-foreground" style="font-size: 1.35rem; font-weight: 800; margin: 0 0 0.4rem 0; color: var(--foreground);"></h3>
          <p id="lightbox-caption-desc" class="text-foreground-muted" style="font-size: 1.05rem; line-height: 1.6; margin: 0; color: var(--foreground-muted);"></p>
        </div>

      </div>
    </div>
  `;
}
