import { workAlbumsData } from '../data/workContent.js';

export function createWorkModal() {
  return `
    <!-- Work Album Detail Modal (Centered in User's Viewport) -->
    <div id="work-album-modal" class="modal-overlay" style="display: none; position: fixed; inset: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.82); backdrop-filter: blur(14px); -webkit-backdrop-filter: blur(14px); z-index: 999990; align-items: center; justify-content: center; padding: 1.5rem; box-sizing: border-box; overflow-y: auto;" onclick="window.closeWorkModal && window.closeWorkModal()">
      
      <div class="liquid-glass-card" style="position: relative; width: 100%; max-width: 920px; max-height: 86vh; background: var(--surface-card); border-radius: 28px; border: 2px solid var(--border); overflow: hidden; display: flex; flex-direction: column; box-shadow: 0 30px 90px rgba(0,0,0,0.65); margin: auto; z-index: 999995;" onclick="event.stopPropagation()">
        
        <!-- Modal Header Bar -->
        <div style="display: flex; align-items: center; justify-content: space-between; padding: 1.5rem 2rem; border-bottom: 1.5px solid var(--border); background: var(--surface);">
          <div>
            <span class="glass-badge-gold" id="work-modal-category" style="margin-bottom: 0.4rem; font-size: 0.85rem; font-weight: 800;">
              Category
            </span>
            <h3 class="font-display font-bold text-foreground" id="work-modal-title" style="font-size: 1.5rem; line-height: 1.25; margin: 0;">
              Album Title
            </h3>
          </div>

          <button id="close-work-modal" type="button" class="hover-lift" onclick="window.closeWorkModal && window.closeWorkModal()" style="width: 42px; height: 42px; border-radius: 50%; background: var(--surface-subtle); color: var(--foreground); border: 1.5px solid var(--border); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.35rem; font-weight: 800;" aria-label="Close Album">
            ✕
          </button>
        </div>

        <!-- Modal Body: Description & Centered Photo Grid -->
        <div style="padding: 1.75rem 2rem; overflow-y: auto; flex: 1;">
          <p class="text-foreground-muted" id="work-modal-desc" style="font-size: 1.125rem; line-height: 1.7; margin-bottom: 1.75rem;">
            Album Description
          </p>

          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1.25rem;">
            <h4 class="font-bold text-foreground" style="font-size: 1.2rem; display: flex; align-items: center; gap: 0.5rem; margin: 0;">
              <span>📸</span> <span>Photos Gallery</span> (<span id="work-modal-photo-count">0</span>)
            </h4>
            <span class="glass-badge" style="font-size: 0.85rem; font-weight: 700;">
              Click photo to enlarge
            </span>
          </div>

          <!-- Photo Grid Inside Modal -->
          <div id="work-modal-photo-grid" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(180px, 1fr)); gap: 1rem;">
            <!-- Rendered dynamically -->
          </div>
        </div>

      </div>
    </div>

    <!-- Full-Screen Center Lightbox Slideshow View -->
    <div id="work-fullscreen-lightbox" class="modal-overlay" style="display: none; position: fixed; inset: 0; width: 100vw; height: 100vh; background: rgba(0, 0, 0, 0.94); backdrop-filter: blur(8px); -webkit-backdrop-filter: blur(8px); z-index: 1000000; align-items: center; justify-content: center; padding: 1.5rem; box-sizing: border-box;" onclick="window.closeWorkLightbox && window.closeWorkLightbox()">
      
      <!-- Top Close Button -->
      <button type="button" class="hover-lift" onclick="window.closeWorkLightbox && window.closeWorkLightbox()" style="position: fixed; top: 1.75rem; right: 1.75rem; width: 48px; height: 48px; border-radius: 50%; background: rgba(255,255,255,0.2); color: #ffffff; border: 1.5px solid rgba(255,255,255,0.4); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 1.5rem; font-weight: 800; z-index: 1000020;" title="Close (Esc)">
        ✕
      </button>

      <!-- Prev Button -->
      <button type="button" class="hover-lift" id="work-lb-prev" onclick="event.stopPropagation(); window.prevWorkPhoto && window.prevWorkPhoto();" style="position: fixed; left: 1.75rem; top: 50%; transform: translateY(-50%); width: 54px; height: 54px; border-radius: 50%; background: rgba(255,255,255,0.2); color: #ffffff; border: 1.5px solid rgba(255,255,255,0.4); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800; z-index: 1000020;" aria-label="Previous Photo">
        ‹
      </button>

      <!-- Center Image Container -->
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; max-width: 90vw; max-height: 86vh; margin: auto; z-index: 1000010;" onclick="event.stopPropagation()">
        <img id="work-lb-img" src="" alt="Album photo full preview" style="max-width: 86vw; max-height: 76vh; object-fit: contain; border-radius: 16px; box-shadow: 0 25px 70px rgba(0,0,0,0.85); user-select: none; border: 1.5px solid rgba(255,255,255,0.15);" />
        
        <div id="work-lb-counter" style="color: #ffffff; margin-top: 1.25rem; font-size: 1.05rem; font-weight: 800; background: rgba(0,0,0,0.7); padding: 0.45rem 1.25rem; border-radius: 999px; border: 1px solid rgba(255,255,255,0.25); letter-spacing: 0.5px;">
          1 / 1
        </div>
      </div>

      <!-- Next Button -->
      <button type="button" class="hover-lift" id="work-lb-next" onclick="event.stopPropagation(); window.nextWorkPhoto && window.nextWorkPhoto();" style="position: fixed; right: 1.75rem; top: 50%; transform: translateY(-50%); width: 54px; height: 54px; border-radius: 50%; background: rgba(255,255,255,0.2); color: #ffffff; border: 1.5px solid rgba(255,255,255,0.4); cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 2rem; font-weight: 800; z-index: 1000020;" aria-label="Next Photo">
        ›
      </button>

    </div>
  `;
}
