import { examData, assessmentMetrics } from '../data/examData.js';

export function createImpactChart(content, currentLang) {
  const isMr = currentLang === 'mr';
  const isHi = currentLang === 'hi';
  const imp = (content[currentLang] || content['mr']).impact;

  const hintTextDesktop = isMr
    ? 'माउस किंवा टचने कोणत्याही रेषेवर जा - थेट गुण आणि प्रगती विश्लेषण पहा'
    : isHi
    ? 'माउस या टच से किसी भी रेखा पर जाएं - लाइव स्कोर एवं विश्लेषण देखें'
    : 'Hover or tap anywhere along a curve to inspect live scores and cohort progression';

  const hintTextMobile = isMr
    ? 'खालील गट निवडा किंवा थेट आलेखावर टॅप करा'
    : isHi
    ? 'नीचे समूह चुनें या सीधे ग्राफ पर टैप करें'
    : 'Tap any cohort tab or curve to inspect live scores';

  const filterAll = isMr ? 'सर्व गट' : isHi ? 'सभी समूह' : 'All';
  const filterAnkur = isMr ? 'अंकुर (40%)' : isHi ? 'अंकुर (40%)' : 'Ankur (40%)';
  const filterArun = isMr ? 'अरुण (55%)' : isHi ? 'अरुण (55%)' : 'Arun (55%)';
  const filterArunuday = isMr ? 'अरुणोदय (60%)' : isHi ? 'अरुणोदय (60%)' : 'Arunuday (60%)';

  const cohorts = [
    {
      id: 'arunuday',
      name: isHi ? 'अरुणोदय 2025' : isMr ? 'अरुणोदय 2025' : 'Arunuday 2025',
      level: isHi ? 'उन्नत स्तर' : isMr ? 'प्रगत गट' : 'Advanced Cohort',
      start: '35%',
      end: '60%',
      growth: '+25%',
      color: '#fbbf24',
      colorBg: 'rgba(251, 191, 36, 0.12)',
      colorBorder: 'rgba(251, 191, 36, 0.35)'
    },
    {
      id: 'arun',
      name: isHi ? 'अरुण 2025' : isMr ? 'अरुण 2025' : 'Arun 2025',
      level: isHi ? 'मध्यम स्तर' : isMr ? 'मध्यम गट' : 'Intermediate Cohort',
      start: '25%',
      end: '55%',
      growth: '+30%',
      color: '#34d399',
      colorBg: 'rgba(52, 211, 153, 0.12)',
      colorBorder: 'rgba(52, 211, 153, 0.35)'
    },
    {
      id: 'ankur',
      name: isHi ? 'अंकुर 2025' : isMr ? 'अंकुर 2025' : 'Ankur 2025',
      level: isHi ? 'बुनियादी स्तर' : isMr ? 'पायाभूत गट' : 'Foundational Cohort',
      start: '20%',
      end: '40%',
      growth: '+20%',
      color: '#60a5fa',
      colorBg: 'rgba(96, 165, 250, 0.12)',
      colorBorder: 'rgba(96, 165, 250, 0.35)'
    }
  ];

  return `
    <div id="impact-chart-scroll-track" style="width: 100%; max-width: 1400px; margin: 0 auto; position: relative; display: flex; justify-content: center;">
      <div id="dynamic-zoom-chart-container" class="liquid-glass-card" style="margin: 0 auto; transform-origin: center center; width: 100%; box-shadow: 0 30px 80px -15px rgba(0, 0, 0, 0.65);">
        
        <!-- Top Title & Filter Controls -->
        <div style="display: flex; flex-wrap: wrap; align-items: center; justify-content: space-between; gap: 1rem; margin-bottom: 1.25rem;">
          <div style="display: flex; align-items: center; gap: 0.85rem;">
            <img src="/assets/khan-academy.jpg" alt="Khan Academy" style="width: 44px; height: 44px; border-radius: 12px; object-fit: cover; box-shadow: 0 6px 16px rgba(0,0,0,0.35); flex-shrink: 0;" />
            <div>
              <h3 class="font-display font-bold text-lg md:text-2xl" style="margin-bottom: 0.15rem; color: #f8fafc; line-height: 1.25;">
                ${imp.chartTitle}
              </h3>
              <p class="hidden md:block" style="font-size: 0.85rem; color: #94a3b8; margin: 0;">
                ${hintTextDesktop}
              </p>
              <p class="block md:hidden" style="font-size: 0.8rem; color: #34d399; font-weight: 600; margin: 0;">
                ${hintTextMobile}
              </p>
            </div>
          </div>

          <!-- Filter Tabs (Touch-Friendly Responsive Buttons) -->
          <div style="display: flex; gap: 0.45rem; flex-wrap: wrap;" id="interactive-chart-filters">
            <button class="btn btn-sm btn-primary chart-filter-btn active-filter" data-group="all" style="padding: 0.4rem 0.85rem; font-size: 0.82rem; font-weight: 700; border-radius: 10px;">${filterAll}</button>
            <button class="btn btn-sm btn-secondary chart-filter-btn" data-group="arunuday" style="background: rgba(251, 191, 36, 0.12); color: #fbbf24; border-color: rgba(251, 191, 36, 0.35); padding: 0.4rem 0.85rem; font-size: 0.82rem; font-weight: 700; border-radius: 10px;">${filterArunuday}</button>
            <button class="btn btn-sm btn-secondary chart-filter-btn" data-group="arun" style="background: rgba(52, 211, 153, 0.12); color: #34d399; border-color: rgba(52, 211, 153, 0.35); padding: 0.4rem 0.85rem; font-size: 0.82rem; font-weight: 700; border-radius: 10px;">${filterArun}</button>
            <button class="btn btn-sm btn-secondary chart-filter-btn" data-group="ankur" style="background: rgba(96, 165, 250, 0.12); color: #60a5fa; border-color: rgba(96, 165, 250, 0.35); padding: 0.4rem 0.85rem; font-size: 0.82rem; font-weight: 700; border-radius: 10px;">${filterAnkur}</button>
          </div>
        </div>

        <!-- Dedicated Live Interactive Status Banner (Always Visible on Mobile & Desktop) -->
        <div id="chart-active-status-bar" style="background: rgba(15, 23, 42, 0.75); border: 1.5px solid rgba(52, 211, 153, 0.3); border-radius: 14px; padding: 0.65rem 1rem; margin-bottom: 1rem; display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 0.5rem;">
          <div style="display: flex; align-items: center; gap: 0.6rem;">
            <span id="active-status-dot" style="width: 10px; height: 10px; border-radius: 50%; background: #34d399; display: inline-block; box-shadow: 0 0 8px #34d399;"></span>
            <strong id="active-status-title" style="color: #f8fafc; font-size: 0.92rem;">
              ${isHi ? 'सभी समूह (All Cohorts)' : 'All Cohorts Progression'}
            </strong>
          </div>
          <div style="display: flex; align-items: center; gap: 0.75rem; font-size: 0.85rem;">
            <span id="active-status-score" style="color: #94a3b8; font-weight: 600;">Prelim 1 ➔ Prelim 5</span>
            <span id="active-status-growth" style="background: rgba(16, 185, 129, 0.2); color: #34d399; font-weight: 800; padding: 0.2rem 0.6rem; border-radius: 8px; border: 1px solid rgba(16, 185, 129, 0.4);">
              +30% Avg Jump
            </span>
          </div>
        </div>

        <!-- SVG Chart Canvas Frame -->
        <div style="position: relative; width: 100%; overflow-x: auto; display: flex; justify-content: center; touch-action: pan-y; padding: 0;" id="svg-chart-wrapper">
          
          <!-- Floating Interactive Tooltip (Desktop Mouse Track) -->
          <div id="chart-tooltip" class="chart-hover-tooltip" style="padding: 0.75rem 1.25rem; font-size: 0.875rem;">
            <strong id="tooltip-cohort" style="display: block; color: #34d399; font-size: 0.975rem; margin-bottom: 0.25rem;"></strong>
            <span id="tooltip-score" style="display: block; font-size: 0.875rem; font-weight: 700; color: #f8fafc; margin-bottom: 0.15rem;"></span>
            <span id="tooltip-desc" style="display: block; font-size: 0.8rem; color: #cbd5e1;"></span>
          </div>

          <svg id="live-interactive-svg" viewBox="0 0 1200 330" preserveAspectRatio="none" style="width: 100%; max-width: 100%; min-width: 100%; height: 310px; font-family: var(--font-sans); margin: 0 auto; display: block; overflow: visible;">
            
            <!-- Background Grid Lines -->
            <line x1="70" y1="35" x2="1140" y2="35" stroke="rgba(255, 255, 255, 0.08)" stroke-dasharray="4 4" />
            <line x1="70" y1="90" x2="1140" y2="90" stroke="rgba(255, 255, 255, 0.08)" stroke-dasharray="4 4" />
            <line x1="70" y1="145" x2="1140" y2="145" stroke="rgba(255, 255, 255, 0.08)" stroke-dasharray="4 4" />
            <line x1="70" y1="200" x2="1140" y2="200" stroke="rgba(255, 255, 255, 0.08)" stroke-dasharray="4 4" />
            <line x1="70" y1="255" x2="1140" y2="255" stroke="rgba(255, 255, 255, 0.2)" stroke-width="1.5" />

            <!-- Y Axis Labels -->
            <text x="55" y="39" fill="#94a3b8" font-size="13" font-weight="700" text-anchor="end">80%</text>
            <text x="55" y="94" fill="#94a3b8" font-size="13" font-weight="700" text-anchor="end">60%</text>
            <text x="55" y="149" fill="#94a3b8" font-size="13" font-weight="700" text-anchor="end">40%</text>
            <text x="55" y="204" fill="#94a3b8" font-size="13" font-weight="700" text-anchor="end">20%</text>
            <text x="55" y="259" fill="#94a3b8" font-size="13" font-weight="700" text-anchor="end">0%</text>

            <!-- X Axis Prelims Columns -->
            <text x="180" y="285" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">Prelim 1</text>
            <text x="410" y="285" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">Prelim 2</text>
            <text x="640" y="285" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">Prelim 3</text>
            <text x="870" y="285" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">Prelim 4</text>
            <text x="1080" y="285" fill="#f8fafc" font-size="14" font-weight="700" text-anchor="middle">Prelim 5</text>

            <!-- Interactive Group 1: Arunuday 2025 (Golden Amber, Solid) -->
            <g class="chart-interactive-group" data-cohort="Arunuday 2025" data-start="35%" data-end="60%" data-growth="+25% (Advanced Cohort)" data-color="#fbbf24">
              <path d="M 180 148 L 410 108 L 640 108 L 870 108 L 1080 90" fill="none" stroke="#fbbf24" stroke-width="5.5" stroke-linecap="round" class="chart-interactive-path line-arunuday25" />
              <path d="M 180 148 L 410 108 L 640 108 L 870 108 L 1080 90" class="chart-hit-area" />
              <circle cx="180" cy="148" r="6" fill="#fbbf24" />
              <circle cx="410" cy="108" r="6" fill="#fbbf24" />
              <circle cx="640" cy="108" r="6" fill="#fbbf24" />
              <circle cx="870" cy="108" r="6" fill="#fbbf24" />
              <circle cx="1080" cy="90" r="9" fill="#fbbf24" stroke="#0f172a" stroke-width="2" />
              <text x="1080" y="72" font-size="15" font-weight="900" fill="#fbbf24" text-anchor="middle">60%</text>
            </g>

            <!-- Interactive Group 2: Arun 2025 (Emerald Green, Solid) -->
            <g class="chart-interactive-group" data-cohort="Arun 2025" data-start="25%" data-end="55%" data-growth="+30% (Intermediate Cohort)" data-color="#34d399">
              <path d="M 180 172 L 410 135 L 640 120 L 870 108 L 1080 102" fill="none" stroke="#34d399" stroke-width="5.5" stroke-linecap="round" class="chart-interactive-path line-arun25" />
              <path d="M 180 172 L 410 135 L 640 120 L 870 108 L 1080 102" class="chart-hit-area" />
              <circle cx="180" cy="172" r="6" fill="#34d399" />
              <circle cx="410" cy="135" r="6" fill="#34d399" />
              <circle cx="640" cy="120" r="6" fill="#34d399" />
              <circle cx="870" cy="108" r="6" fill="#34d399" />
              <circle cx="1080" cy="102" r="9" fill="#34d399" stroke="#0f172a" stroke-width="2" />
              <text x="1080" y="85" font-size="15" font-weight="900" fill="#34d399" text-anchor="middle">55%</text>
            </g>

            <!-- Interactive Group 3: Ankur 2025 (Royal Blue, Solid) -->
            <g class="chart-interactive-group" data-cohort="Ankur 2025" data-start="20%" data-end="40%" data-growth="+20% (Foundational Cohort)" data-color="#60a5fa">
              <path d="M 180 190 L 410 178 L 640 148 L 870 135 L 1080 135" fill="none" stroke="#60a5fa" stroke-width="5.5" stroke-linecap="round" class="chart-interactive-path line-ankur25" />
              <path d="M 180 190 L 410 178 L 640 148 L 870 135 L 1080 135" class="chart-hit-area" />
              <circle cx="180" cy="190" r="6" fill="#60a5fa" />
              <circle cx="410" cy="178" r="6" fill="#60a5fa" />
              <circle cx="640" cy="148" r="6" fill="#60a5fa" />
              <circle cx="870" cy="135" r="6" fill="#60a5fa" />
              <circle cx="1080" cy="135" r="9" fill="#60a5fa" stroke="#0f172a" stroke-width="2" />
              <text x="1080" y="118" font-size="15" font-weight="900" fill="#60a5fa" text-anchor="middle">40%</text>
            </g>

            <!-- 2024 Baseline Dashed Lines -->
            <g class="chart-baseline-2024">
              <path d="M 180 160 L 410 135 L 640 135 L 870 120 L 1080 120" fill="none" stroke="#fde68a" stroke-width="2.5" stroke-dasharray="6 6" opacity="0.45" />
              <path d="M 180 190 L 410 160 L 640 160 L 870 148 L 1080 135" fill="none" stroke="#a7f3d0" stroke-width="2.5" stroke-dasharray="6 6" opacity="0.45" />
              <path d="M 180 202 L 410 190 L 640 178 L 870 160 L 1080 148" fill="none" stroke="#bfdbfe" stroke-width="2.5" stroke-dasharray="6 6" opacity="0.45" />
            </g>

          </svg>
        </div>

        <!-- Cohort Quick Numbers Summary Cards Grid -->
        <div id="chart-mobile-data-cards" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 0.75rem; margin-top: 1.25rem;">
          ${cohorts.map(c => `
            <div class="cohort-summary-card" data-group="${c.id}" style="background: ${c.colorBg}; border: 1.5px solid ${c.colorBorder}; border-radius: 16px; padding: 0.85rem 1rem; cursor: pointer; transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;">
              <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 0.4rem;">
                <span style="font-weight: 800; color: ${c.color}; font-size: 0.95rem;">${c.name}</span>
                <span style="font-size: 0.75rem; font-weight: 700; background: rgba(0,0,0,0.3); color: #f8fafc; padding: 0.15rem 0.5rem; border-radius: 6px;">${c.level}</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between;">
                <div style="font-size: 0.82rem; color: #cbd5e1;">
                  Prelim 1 <strong style="color: #f8fafc;">${c.start}</strong> ➔ Prelim 5 <strong style="color: #f8fafc;">${c.end}</strong>
                </div>
                <span style="font-size: 0.88rem; font-weight: 900; color: ${c.color}; background: rgba(0,0,0,0.4); padding: 0.2rem 0.55rem; border-radius: 8px;">
                  ${c.growth}
                </span>
              </div>
            </div>
          `).join('')}
        </div>

        <!-- Legend -->
        <div style="display: flex; flex-wrap: wrap; justify-content: center; gap: 1.25rem; margin-top: 1rem; padding-top: 0.75rem; border-top: 1px solid rgba(255,255,255,0.12); font-size: 0.82rem;">
          <div class="chart-legend-item" style="display: inline-flex; align-items: center; gap: 0.4rem;">
            <span class="legend-dot" style="background: #fbbf24; width: 10px; height: 10px; border-radius: 50%;"></span>
            <span style="color: #f8fafc; font-weight: 600;">${isHi ? 'अरुणोदय 2025 (60%)' : 'Arunuday 2025 (60%)'}</span>
          </div>
          <div class="chart-legend-item" style="display: inline-flex; align-items: center; gap: 0.4rem;">
            <span class="legend-dot" style="background: #34d399; width: 10px; height: 10px; border-radius: 50%;"></span>
            <span style="color: #f8fafc; font-weight: 600;">${isHi ? 'अरुण 2025 (55%)' : 'Arun 2025 (55%)'}</span>
          </div>
          <div class="chart-legend-item" style="display: inline-flex; align-items: center; gap: 0.4rem;">
            <span class="legend-dot" style="background: #60a5fa; width: 10px; height: 10px; border-radius: 50%;"></span>
            <span style="color: #f8fafc; font-weight: 600;">${isHi ? 'अंकुर 2025 (40%)' : 'Ankur 2025 (40%)'}</span>
          </div>
          <div class="chart-legend-item hidden md:inline-flex" style="align-items: center; gap: 0.4rem;">
            <span style="display: inline-block; width: 18px; border-bottom: 2px dashed #94a3b8;"></span>
            <span style="color: #94a3b8; font-weight: 500;">${isHi ? '2024 आधार' : '2024 Baseline'}</span>
          </div>
        </div>

      </div>
    </div>
  `;
}

/**
 * Attaches interactive line hover, cohort filtering, status updates,
 * progressive curve drawing, and deterministic smooth scroll zoom.
 */
export function setupImpactChartComponent(currentLang = 'en') {
  try {
    const track = document.getElementById('impact-chart-scroll-track');
    const container = document.getElementById('dynamic-zoom-chart-container');
    const wrapper = document.getElementById('svg-chart-wrapper');
    const tooltip = document.getElementById('chart-tooltip');
    const cohortLabel = document.getElementById('tooltip-cohort');
    const scoreLabel = document.getElementById('tooltip-score');
    const descLabel = document.getElementById('tooltip-desc');
    const groups = Array.from(document.querySelectorAll('.chart-interactive-group'));
    const filterBtns = Array.from(document.querySelectorAll('.chart-filter-btn'));
    const summaryCards = Array.from(document.querySelectorAll('.cohort-summary-card'));
    const statusDot = document.getElementById('active-status-dot');
    const statusTitle = document.getElementById('active-status-title');
    const statusScore = document.getElementById('active-status-score');
    const statusGrowth = document.getElementById('active-status-growth');

    if (!container || !wrapper || !groups.length) return;

    const isHi = currentLang === 'hi';
    const isMr = currentLang === 'mr';

    // 1. Initial Progressive SVG Curve Draw on Scroll Reveal
    if ('IntersectionObserver' in window) {
      const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            container.classList.add('chart-draw-animate');
            revealObserver.unobserve(entry.target);
          }
        });
      }, { threshold: 0.15 });

      revealObserver.observe(track || container);
    } else {
      container.classList.add('chart-draw-animate');
    }

    // 2. Status Bar and Filtering Functions
    function updateStatusBar(cohort, start, end, growth, color) {
      if (statusDot) {
        statusDot.style.background = color;
        statusDot.style.boxShadow = `0 0 10px ${color}`;
      }
      if (statusTitle) {
        statusTitle.textContent = cohort;
        statusTitle.style.color = color;
      }
      if (statusScore) {
        statusScore.innerHTML = `Prelim 1: <strong style="color: #f8fafc;">${start}</strong> ➔ Prelim 5: <strong style="color: #f8fafc;">${end}</strong>`;
      }
      if (statusGrowth) {
        statusGrowth.textContent = growth;
        statusGrowth.style.color = color;
        statusGrowth.style.borderColor = color;
        statusGrowth.style.background = `${color}22`;
      }
    }

    function resetStatusBar() {
      updateStatusBar(
        isHi ? 'सभी समूह (All Cohorts)' : isMr ? 'सर्व गट (All Cohorts)' : 'All Cohorts Progression',
        '20%',
        '60%',
        '+30% Avg Jump',
        '#34d399'
      );
    }

    function getActiveFilter() {
      const activeBtn = document.querySelector('.chart-filter-btn.btn-primary');
      return activeBtn ? (activeBtn.dataset.group || 'all').toLowerCase() : 'all';
    }

    function activateGroup(group, clientX, clientY) {
      if (!group) return;
      const cohort = group.dataset.cohort || '';
      const start = group.dataset.start || '';
      const end = group.dataset.end || '';
      const growth = group.dataset.growth || '';
      const color = group.dataset.color || '#34d399';

      if (cohortLabel) {
        cohortLabel.textContent = cohort;
        cohortLabel.style.color = color;
      }
      if (scoreLabel) scoreLabel.textContent = `Prelim 1: ${start} ➔ Prelim 5: ${end}`;
      if (descLabel) descLabel.textContent = `Progress: ${growth}`;
      if (tooltip) tooltip.classList.add('visible');

      updateStatusBar(cohort, start, end, growth, color);

      const filter = getActiveFilter();
      groups.forEach(other => {
        const otherName = (other.dataset.cohort || '').toLowerCase();
        const isMatch = filter === 'all' || otherName.includes(filter);
        if (!isMatch) {
          other.style.display = 'none';
          other.style.opacity = '0';
        } else if (other === group) {
          other.style.opacity = '1';
          other.style.display = '';
        } else {
          other.style.opacity = '0.2';
          other.style.display = '';
        }
      });

      if (tooltip && clientX !== undefined && clientY !== undefined) {
        const rect = wrapper.getBoundingClientRect();
        const x = clientX - rect.left;
        const y = clientY - rect.top;
        const clampedX = Math.max(70, Math.min((rect.width || 800) - 70, x));
        const clampedY = Math.max(25, Math.min((rect.height || 300) - 10, y));
        tooltip.style.left = `${clampedX}px`;
        tooltip.style.top = `${clampedY}px`;
      }
    }

    function deactivateGroup() {
      if (tooltip) tooltip.classList.remove('visible');
      const filter = getActiveFilter();
      groups.forEach(g => {
        const name = (g.dataset.cohort || '').toLowerCase();
        if (filter === 'all' || name.includes(filter)) {
          g.style.display = '';
          g.style.opacity = '1';
        } else {
          g.style.display = 'none';
          g.style.opacity = '0';
        }
      });
      if (filter === 'all') {
        resetStatusBar();
      }
    }

    function selectFilter(filterName) {
      const filter = (filterName || 'all').toLowerCase();

      filterBtns.forEach(b => {
        const bGroup = (b.dataset.group || 'all').toLowerCase();
        if (bGroup === filter) {
          b.classList.remove('btn-secondary');
          b.classList.add('btn-primary');
          b.style.boxShadow = '0 0 12px rgba(16, 185, 129, 0.4)';
        } else {
          b.classList.remove('btn-primary');
          b.classList.add('btn-secondary');
          b.style.boxShadow = 'none';
        }
      });

      summaryCards.forEach(card => {
        const cGroup = (card.dataset.group || '').toLowerCase();
        if (filter === 'all' || cGroup === filter) {
          card.style.opacity = '1';
          card.style.transform = cGroup === filter ? 'scale(1.02)' : 'scale(1)';
          card.style.boxShadow = cGroup === filter ? '0 10px 25px rgba(0,0,0,0.5)' : 'none';
        } else {
          card.style.opacity = '0.45';
          card.style.transform = 'scale(0.98)';
          card.style.boxShadow = 'none';
        }
      });

      let targetGroup = null;
      groups.forEach(g => {
        const name = (g.dataset.cohort || '').toLowerCase();
        if (filter === 'all' || name.includes(filter)) {
          g.style.display = '';
          g.style.opacity = '1';
          g.style.pointerEvents = 'all';
        } else {
          g.style.display = 'none';
          g.style.opacity = '0';
          g.style.pointerEvents = 'none';
        }
        if (name.includes(filter)) targetGroup = g;
      });

      if (targetGroup) {
        const cohort = targetGroup.dataset.cohort || '';
        const start = targetGroup.dataset.start || '';
        const end = targetGroup.dataset.end || '';
        const growth = targetGroup.dataset.growth || '';
        const color = targetGroup.dataset.color || '#34d399';
        updateStatusBar(cohort, start, end, growth, color);
      } else {
        resetStatusBar();
      }
    }

    groups.forEach(group => {
      group.addEventListener('mouseenter', (e) => activateGroup(group, e.clientX, e.clientY));
      group.addEventListener('mousemove', (e) => {
        const rect = wrapper.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const clampedX = Math.max(70, Math.min((rect.width || 800) - 70, x));
        const clampedY = Math.max(25, Math.min((rect.height || 300) - 10, y));
        if (tooltip) {
          tooltip.style.left = `${clampedX}px`;
          tooltip.style.top = `${clampedY}px`;
        }
      });
      group.addEventListener('mouseleave', deactivateGroup);

      group.addEventListener('pointerdown', (e) => {
        activateGroup(group, e.clientX, e.clientY);
      });

      group.addEventListener('touchstart', (e) => {
        if (e.touches && e.touches.length) {
          const t = e.touches[0];
          activateGroup(group, t.clientX, t.clientY);
        }
      }, { passive: true });
    });

    filterBtns.forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const filter = (btn.dataset.group || 'all').toLowerCase();
        selectFilter(filter);
      });
    });

    summaryCards.forEach(card => {
      card.addEventListener('click', () => {
        const group = (card.dataset.group || 'all').toLowerCase();
        selectFilter(group);
      });
    });

    document.addEventListener('touchstart', (e) => {
      if (!wrapper.contains(e.target) && !e.target.closest('#interactive-chart-filters') && !e.target.closest('#chart-mobile-data-cards')) {
        deactivateGroup();
      }
    }, { passive: true });

    // 3. Flawless Deterministic Smooth Scroll Zoom (Measures Static Track to Prevent Transform Feedback Loop)
    let zoomRafId = null;
    let isChartInView = false;

    const targetTrack = track || container.parentElement || container;
    if ('IntersectionObserver' in window && targetTrack) {
      const chartObserver = new IntersectionObserver((entries) => {
        isChartInView = entries[0].isIntersecting;
        if (isChartInView) onScrollOrResize();
      }, { rootMargin: '150px 0px' });
      chartObserver.observe(targetTrack);
    } else {
      isChartInView = true;
    }

    function computeScrollZoom() {
      zoomRafId = null;
      if (!container || !isChartInView) return;
      const rect = targetTrack.getBoundingClientRect();
      const windowH = window.innerHeight || 800;

      // Check if completely outside viewport
      if (rect.bottom < -50 || rect.top > windowH + 50) {
        container.style.transform = 'scale3d(1, 1, 1)';
        container.classList.remove('is-fullscreen-zoom');
        return;
      }

      // Center-distance factor: peaks exactly at 1.0 when track center is in viewport center
      const trackCenter = rect.top + (rect.height / 2);
      const viewportCenter = windowH / 2;
      const distFromCenter = Math.abs(trackCenter - viewportCenter);
      const maxDistance = (windowH / 2) + (rect.height / 2);

      const normalizedDist = Math.min(1, Math.max(0, distFromCenter / maxDistance));
      // Smooth cosine bell curve (1.0 at center, 0 at viewport edges)
      const factor = (Math.cos(normalizedDist * Math.PI) + 1) / 2;

      const isMobile = window.innerWidth <= 768;
      const maxBonus = isMobile ? 0.04 : 0.10;
      const currentScale = 1 + (factor * maxBonus);

      container.style.transform = `scale3d(${currentScale.toFixed(4)}, ${currentScale.toFixed(4)}, 1)`;

      if (factor >= 0.35) {
        container.classList.add('is-fullscreen-zoom');
      } else {
        container.classList.remove('is-fullscreen-zoom');
      }
    }

    function onScrollOrResize() {
      if (!zoomRafId && isChartInView) {
        zoomRafId = requestAnimationFrame(computeScrollZoom);
      }
    }

    window.addEventListener('scroll', onScrollOrResize, { passive: true });
    window.addEventListener('resize', onScrollOrResize, { passive: true });
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden && isChartInView) computeScrollZoom();
    });

  } catch (err) {
    console.warn('setupImpactChartComponent recovered gracefully from error:', err);
  }
}
