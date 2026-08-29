export function createWorkModal() {
  return `
    <!-- Work Album Detail Modal (Centered in User's Viewport) -->
    <div id="work-album-modal" class="modal-overlay" style="display: none; position: fixed; inset: 0; width: 100vw; height: 100vh; height: 100dvh; background: rgba(0, 0, 0, 0.85); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); z-index: 999990; align-items: center; justify-content: center; padding: 1rem; box-sizing: border-box; overflow-y: auto;" onclick="if(event.target === this) window.closeWorkModal && window.closeWorkModal()">
      
      <div class="liquid-glass-card" style="position: relative; width: 100%; max-width: 920px; max-height: 88vh; max-height: 88dvh; background: var(--surface-card); border-radius: 24px; border: 2px solid var(--border); overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 30px 90px rgba(0,0,0,0.65); margin: auto; z-index: 999995;" onclick="event.stopPropagation()">
        
        <!-- Modal Header Bar -->
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.25rem 1.5rem; border-bottom: 1.5px solid var(--border); background: var(--surface);">
          <div style="min-width: 0; flex: 1; padding-right: 0.75rem;">
            <span class="glass-badge-gold" id="work-modal-category" style="margin-bottom: 0.35rem; font-size: 0.8rem; font-weight: 800; display: inline-block;">
              Category
            </span>
            <h3 class="font-display font-bold text-foreground" id="work-modal-title" style="font-size: clamp(1.15rem, 2.5vw, 1.45rem); line-height: 1.25; margin: 0; word-break: break-word;">
              Album Title
            </h3>
          </div>

          <button id="close-work-modal-btn" type="button" class="hover-lift" onclick="window.closeWorkModal && window.closeWorkModal()" style="width: 42px; height: 42px; min-width: 42px; border-radius: 50%; background: var(--surface-subtle); color: var(--foreground); border: 1.5px solid var(--border); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.35rem; font-weight: 800; flex-shrink: 0;" aria-label="Close Album">
            ✕
          </button>
        </div>

        <!-- Modal Body: Description & Centered Photo Grid -->
        <div style="padding: 1.25rem 1.5rem; overflow-y: auto; flex: 1; -webkit-overflow-scrolling: touch;">
          <p class="text-foreground-muted" id="work-modal-desc" style="font-size: 1.05rem; line-height: 1.65; margin-bottom: 1.35rem;">
            Album Description
          </p>

          <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem; margin-bottom: 1rem;">
            <h4 class="font-bold text-foreground" style="font-size: 1.15rem; display: flex; align-items: center; gap: 0.5rem; margin: 0;">
              <span>📸</span> <span>Photos Gallery</span> (<span id="work-modal-photo-count">0</span>)
            </h4>
            <span class="glass-badge" style="font-size: 0.8rem; font-weight: 700;">
              Click photo to enlarge
            </span>
          </div>

          <!-- Photo Grid Inside Modal -->
          <div id="work-modal-photo-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(130px, 1fr)); gap: 0.75rem;">
            <!-- Rendered dynamically -->
          </div>
        </div>

      </div>
    </div>

    <!-- Full-Screen Center Lightbox Slideshow View (Viewport Centered on Mobile & Desktop) -->
    <div id="work-fullscreen-lightbox" class="lightbox-modal" style="display: none; position: fixed; inset: 0; width: 100vw; height: 100vh; height: 100dvh; background: rgba(0, 0, 0, 0.96); backdrop-filter: blur(16px); -webkit-backdrop-filter: blur(16px); z-index: 10000050; align-items: center; justify-content: center; padding: 1rem; box-sizing: border-box; touch-action: pan-y pinch-zoom;" onclick="if(event.target === this) window.closeWorkLightbox && window.closeWorkLightbox()">
      
      <!-- Top Fixed Close Button -->
      <button type="button" class="hover-lift" id="work-lb-close-btn" onclick="event.stopPropagation(); window.closeWorkLightbox && window.closeWorkLightbox()" style="position: fixed; top: 1.25rem; right: 1.25rem; width: 46px; height: 46px; border-radius: 50%; background: rgba(255,255,255,0.22); color: #ffffff; border: 1.5px solid rgba(255,255,255,0.45); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 800; z-index: 10000070; backdrop-filter: blur(10px); box-shadow: 0 4px 16px rgba(0,0,0,0.5);" title="Close (Esc)" aria-label="Close Lightbox">
        ✕
      </button>

      <!-- Prev Button (Desktop & Mobile Safe) -->
      <button type="button" class="hover-lift" id="work-lb-prev" onclick="event.stopPropagation(); window.prevWorkPhoto && window.prevWorkPhoto();" style="position: fixed; left: 1rem; top: 50%; transform: translateY(-50%); width: 48px; height: 48px; border-radius: 50%; background: rgba(255,255,255,0.22); color: #ffffff; border: 1.5px solid rgba(255,255,255,0.45); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800; z-index: 10000060; backdrop-filter: blur(10px); box-shadow: 0 4px 16px rgba(0,0,0,0.5);" aria-label="Previous Photo">
        ‹
      </button>

      <!-- Center Image Container (Centered in Viewport) -->
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; width: 100%; max-width: 94vw; max-height: 88vh; max-height: 88dvh; margin: auto; z-index: 10000055;" onclick="event.stopPropagation()">
        <img id="work-lb-img" src="" alt="Album photo full preview" style="max-width: 90vw; max-height: 75vh; max-height: 75dvh; width: auto; height: auto; object-fit: contain; border-radius: 14px; box-shadow: 0 20px 60px rgba(0,0,0,0.9); user-select: none; border: 1.5px solid rgba(255,255,255,0.2); transition: transform 0.2s ease;" />
        
        <div id="work-lb-counter" style="color: #ffffff; margin-top: 0.85rem; font-size: 0.95rem; font-weight: 800; background: rgba(0,0,0,0.75); padding: 0.35rem 1.1rem; border-radius: 999px; border: 1px solid rgba(255,255,255,0.3); letter-spacing: 0.5px; user-select: none;">
          1 / 1
        </div>
      </div>

      <!-- Next Button (Desktop & Mobile Safe) -->
      <button type="button" class="hover-lift" id="work-lb-next" onclick="event.stopPropagation(); window.nextWorkPhoto && window.nextWorkPhoto();" style="position: fixed; right: 1rem; top: 50%; transform: translateY(-50%); width: 48px; height: 48px; border-radius: 50%; background: rgba(255,255,255,0.22); color: #ffffff; border: 1.5px solid rgba(255,255,255,0.45); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800; z-index: 10000060; backdrop-filter: blur(10px); box-shadow: 0 4px 16px rgba(0,0,0,0.5);" aria-label="Next Photo">
        ›
      </button>

    </div>
  `;
}
