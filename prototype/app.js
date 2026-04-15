const NAV_GROUPS = [
  {
    title: "대시보드",
    items: [
      { path: "/dashboard", icon: "dashboard", label: "생산 대시보드" },
      { path: "/dashboard/board", icon: "tv", label: "생산 현황판" },
    ],
  },
  {
    title: "생산관리",
    items: [
      { path: "/production/results", icon: "bar_chart", label: "생산실적 조회" },
      { path: "/production/progress", icon: "conversion_path", label: "공정 진행 조회" },
      { path: "/production/label", icon: "print", label: "라벨 출력" },
    ],
  },
  {
    title: "품질관리",
    items: [
      { path: "/quality/register", icon: "playlist_add_check", label: "부적합 등록" },
      { path: "/quality/analysis", icon: "monitoring", label: "부적합 분석" },
      { path: "/quality/certificate", icon: "description", label: "성적서 발행" },
    ],
  },
  {
    title: "재고/출하",
    items: [
      { path: "/inventory/yard", icon: "inventory_2", label: "야적장 위치 조회" },
      { path: "/inventory/shipping", icon: "local_shipping", label: "출하 현황 조회" },
      { path: "/inventory/material", icon: "deployed_code", label: "원자재/로트 조회" },
    ],
  },
  {
    title: "추적관리",
    items: [
      { path: "/trace", icon: "route", label: "제작번호 추적 조회" },
    ],
  },
  {
    title: "설비관리",
    items: [
      { path: "/facility/status", icon: "precision_manufacturing", label: "설비 상태 모니터링" },
      { path: "/facility/alert", icon: "notifications_active", label: "설비 알림/안돈" },
    ],
  },
  {
    title: "외주공정관리",
    items: [
      { path: "/outsource", icon: "partner_exchange", label: "조립 외주 지시/상태" },
    ],
  },
];

const ROUTES = {
  "/dashboard": {
    title: "생산 대시보드",
    breadcrumb: "대시보드 / 생산 현황과 주요 이상 신호를 한 화면에서 확인합니다",
    render: renderDashboard,
  },
  "/dashboard/board": {
    title: "생산 현황판",
    breadcrumb: "대시보드 / 현장과 사무실이 같은 기준으로 생산량을 봅니다",
    render: renderBoard,
  },
  "/production/results": {
    title: "생산실적 조회",
    breadcrumb: "생산관리 / 공정별 실적 집계와 보정 내역을 확인합니다",
    render: renderResults,
  },
  "/production/progress": {
    title: "공정 진행 조회",
    breadcrumb: "생산관리 / 제작번호 기준 공정 진행 상태를 추적합니다",
    render: renderProgress,
  },
  "/production/label": {
    title: "라벨 출력",
    breadcrumb: "생산관리 / 공정 라벨과 KS 라벨을 출력합니다",
    render: renderLabel,
  },
  "/quality/register": {
    title: "부적합 등록",
    breadcrumb: "품질관리 / 현장 부적합을 즉시 기록합니다",
    render: () => renderQuality("register"),
  },
  "/quality/analysis": {
    title: "부적합 분석",
    breadcrumb: "품질관리 / 기간별 품질 추세를 분석합니다",
    render: () => renderQuality("analysis"),
  },
  "/quality/certificate": {
    title: "성적서 발행",
    breadcrumb: "품질관리 / 고객사 제출용 성적서를 발행합니다",
    render: renderCertificate,
  },
  "/inventory/yard": {
    title: "야적장 위치 조회",
    breadcrumb: "재고/출하 / 현장명, 슬리퍼, 패킹번호 기준 위치를 조회합니다",
    render: () => renderInventory("yard"),
  },
  "/inventory/shipping": {
    title: "출하 현황 조회",
    breadcrumb: "재고/출하 / 적재와 출하 상태를 바로 확인합니다",
    render: () => renderInventory("shipping"),
  },
  "/inventory/material": {
    title: "원자재/로트 조회",
    breadcrumb: "재고/출하 / 로트와 FIFO 흐름을 확인합니다",
    render: renderMaterial,
  },
  "/trace": {
    title: "제작번호 추적 조회",
    breadcrumb: "추적관리 / 원자재부터 출하까지 이력을 추적합니다",
    render: renderTrace,
  },
  "/facility/status": {
    title: "설비 상태 모니터링",
    breadcrumb: "설비관리 / 주요 설비 상태와 수집 방식을 확인합니다",
    render: () => renderFacility("status"),
  },
  "/facility/alert": {
    title: "설비 알림/안돈",
    breadcrumb: "설비관리 / 안돈과 주요 설비 이상 이력을 확인합니다",
    render: () => renderFacility("alert"),
  },
  "/outsource": {
    title: "조립 외주 지시/상태",
    breadcrumb: "외주공정관리 / 외주 조립 진행과 후속 야적 흐름을 관리합니다",
    render: renderOutsource,
  },
};

const appEl = document.getElementById("app");
const navEl = document.getElementById("sidebar-nav");
const titleEl = document.getElementById("page-title");
const breadcrumbEl = document.getElementById("breadcrumb");
const topbarActionsEl = document.getElementById("topbar-actions");

function parseHashState() {
  const raw = location.hash.replace(/^#/, "") || "/dashboard";
  const [pathPart, queryString = ""] = raw.split("?");
  return {
    path: pathPart || "/dashboard",
    params: new URLSearchParams(queryString),
  };
}

function init() {
  renderNav();
  window.addEventListener("hashchange", renderRoute);
  if (!location.hash) {
    location.hash = "#/dashboard";
  } else {
    renderRoute();
  }
}

function getCurrentPath() {
  return parseHashState().path;
}

function buildHash(path, params) {
  const search = new URLSearchParams();
  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined && value !== null && value !== "") {
      search.set(key, value);
    }
  });
  const query = search.toString();
  return `#${path}${query ? `?${query}` : ""}`;
}

function filterChipLink(label, path, params, active = false) {
  return `<a class="filter-chip ${active ? "active" : ""}" href="${buildHash(path, params)}">${label}</a>`;
}

function filterField(label, value) {
  return `
    <div class="filter-field">
      <div class="filter-field-label">${label}</div>
      <div class="filter-field-value">${value}</div>
    </div>
  `;
}

function renderNav() {
  navEl.innerHTML = NAV_GROUPS.map(
    (group) => `
      <div class="nav-group">
        <div class="nav-group-title">${group.title}</div>
        <div class="nav-group-items">
          ${group.items
            .map(
              (item) => `
                <a class="nav-item ${item.path === getCurrentPath() ? "active" : ""}" href="#${item.path}">
                  <span class="material-symbols-outlined">${item.icon}</span>
                  <span>${item.label}</span>
                </a>
              `
            )
            .join("")}
        </div>
      </div>
    `
  ).join("");
}

function renderRoute() {
  const { path, params } = parseHashState();
  const route = ROUTES[path] || ROUTES["/dashboard"];
  titleEl.textContent = route.title;
  breadcrumbEl.textContent = route.breadcrumb;
  topbarActionsEl.dataset.scope = path === "/dashboard" || path === "/dashboard/board" ? "dashboard" : "default";
  topbarActionsEl.innerHTML = renderTopbarActions(path);
  renderNav();
  appEl.innerHTML = route.render(params);
}

function renderTopbarActions(path) {
  if (path === "/dashboard" || path === "/dashboard/board") {
    return `
      <div class="topbar-badge">기준일 2026-04-15</div>
      <button class="ghost-btn">현황 새로고침</button>
      <button class="primary-btn">보고서 다운로드</button>
    `;
  }

  if (path.startsWith("/production") || path === "/trace" || path.startsWith("/inventory")) {
    return `
      <label class="search-box">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder="제작번호, 현장명, 패킹번호 검색" />
      </label>
      <button class="ghost-btn">필터 초기화</button>
      <button class="primary-btn">조회 실행</button>
    `;
  }

  if (path.startsWith("/quality")) {
    return `
      <label class="search-box">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder="제작번호, 부적합 유형 검색" />
      </label>
      <button class="ghost-btn">초기화</button>
      <button class="primary-btn">저장/발행</button>
    `;
  }

  if (path.startsWith("/facility")) {
    return `
      <label class="search-box">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder="설비명, 알림 유형 검색" />
      </label>
      <button class="ghost-btn">알림 새로고침</button>
      <button class="primary-btn">설비 이력 보기</button>
    `;
  }

  if (path === "/outsource") {
    return `
      <label class="search-box">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder="제작번호, 외주 상태 검색" />
      </label>
      <button class="ghost-btn">지시 등록</button>
      <button class="primary-btn">상태 저장</button>
    `;
  }

  return `
    <label class="search-box">
      <span class="material-symbols-outlined">search</span>
      <input type="text" placeholder="검색" />
    </label>
  `;
}

function metricCard(label, value, sub, tone = "") {
  return `
    <div class="metric-card ${tone}">
      <div class="metric-label">${label}</div>
      <div class="metric-value">${value}</div>
      <div class="metric-sub">${sub}</div>
    </div>
  `;
}

function statusCard(name, state, temp, pressure, efficiency, tone = "") {
  return `
    <div class="status-card ${tone}">
      <div class="status-name">${name}</div>
      <div class="status-value">${state}</div>
      <div class="status-meta">
        <span>온도 ${temp}</span>
        <span>압력 ${pressure}</span>
      </div>
      <div class="status-meta">
        <span>효율</span>
        <span>${efficiency}</span>
      </div>
    </div>
  `;
}

function equipmentCard(name, state, signal, score, tone = "") {
  return `
    <div class="equipment-card ${tone}">
      <div class="equipment-head">
        <div class="equipment-name">${name}</div>
        <div class="equipment-score">${score}</div>
      </div>
      <div class="equipment-body">
        <span class="equipment-dot ${tone || "normal"}"></span>
        <div class="equipment-text">
          <div class="equipment-state">${state}</div>
          <div class="equipment-signal">${signal}</div>
        </div>
      </div>
    </div>
  `;
}

function trendChart() {
  return `
    <div class="trend-chart">
      <div class="trend-legend">
        <div class="legend-item"><span class="legend-swatch tg"></span><span>TG</span></div>
        <div class="legend-item"><span class="legend-swatch assembly"></span><span>조립</span></div>
        <div class="legend-item"><span class="legend-swatch wire"></span><span>신선</span></div>
        <div class="legend-item"><span class="legend-swatch forming"></span><span>포밍</span></div>
      </div>
      <svg viewBox="0 0 720 220" class="trend-svg" role="img" aria-label="시간대별 생산량 추이">
        <line x1="44" y1="22" x2="44" y2="176" class="trend-axis"></line>
        <line x1="44" y1="176" x2="684" y2="176" class="trend-axis"></line>

        <line x1="44" y1="48" x2="684" y2="48" class="trend-grid"></line>
        <line x1="44" y1="80" x2="684" y2="80" class="trend-grid"></line>
        <line x1="44" y1="112" x2="684" y2="112" class="trend-grid"></line>
        <line x1="44" y1="144" x2="684" y2="144" class="trend-grid"></line>

        <text x="10" y="52" class="trend-y-label">1200</text>
        <text x="16" y="84" class="trend-y-label">900</text>
        <text x="16" y="116" class="trend-y-label">600</text>
        <text x="16" y="148" class="trend-y-label">300</text>

        <polyline points="64,166 146,154 228,138 310,122 392,108 474,92 556,76 638,56" class="trend-line tg"></polyline>
        <polyline points="64,170 146,160 228,148 310,136 392,124 474,112 556,96 638,84" class="trend-line assembly"></polyline>
        <polyline points="64,172 146,164 228,154 310,142 392,130 474,120 556,108 638,96" class="trend-line wire"></polyline>
        <polyline points="64,174 146,168 228,160 310,150 392,140 474,132 556,122 638,112" class="trend-line forming"></polyline>

        <circle cx="64" cy="166" r="4" class="trend-point tg"></circle>
        <circle cx="146" cy="154" r="4" class="trend-point tg"></circle>
        <circle cx="228" cy="138" r="4" class="trend-point tg"></circle>
        <circle cx="310" cy="122" r="4" class="trend-point tg"></circle>
        <circle cx="392" cy="108" r="4" class="trend-point tg"></circle>
        <circle cx="474" cy="92" r="4" class="trend-point tg"></circle>
        <circle cx="556" cy="76" r="4" class="trend-point tg"></circle>
        <circle cx="638" cy="56" r="4" class="trend-point tg"></circle>

        <circle cx="64" cy="170" r="4" class="trend-point assembly"></circle>
        <circle cx="146" cy="160" r="4" class="trend-point assembly"></circle>
        <circle cx="228" cy="148" r="4" class="trend-point assembly"></circle>
        <circle cx="310" cy="136" r="4" class="trend-point assembly"></circle>
        <circle cx="392" cy="124" r="4" class="trend-point assembly"></circle>
        <circle cx="474" cy="112" r="4" class="trend-point assembly"></circle>
        <circle cx="556" cy="96" r="4" class="trend-point assembly"></circle>
        <circle cx="638" cy="84" r="4" class="trend-point assembly"></circle>

        <circle cx="64" cy="172" r="4" class="trend-point wire"></circle>
        <circle cx="146" cy="164" r="4" class="trend-point wire"></circle>
        <circle cx="228" cy="154" r="4" class="trend-point wire"></circle>
        <circle cx="310" cy="142" r="4" class="trend-point wire"></circle>
        <circle cx="392" cy="130" r="4" class="trend-point wire"></circle>
        <circle cx="474" cy="120" r="4" class="trend-point wire"></circle>
        <circle cx="556" cy="108" r="4" class="trend-point wire"></circle>
        <circle cx="638" cy="96" r="4" class="trend-point wire"></circle>

        <circle cx="64" cy="174" r="4" class="trend-point forming"></circle>
        <circle cx="146" cy="168" r="4" class="trend-point forming"></circle>
        <circle cx="228" cy="160" r="4" class="trend-point forming"></circle>
        <circle cx="310" cy="150" r="4" class="trend-point forming"></circle>
        <circle cx="392" cy="140" r="4" class="trend-point forming"></circle>
        <circle cx="474" cy="132" r="4" class="trend-point forming"></circle>
        <circle cx="556" cy="122" r="4" class="trend-point forming"></circle>
        <circle cx="638" cy="112" r="4" class="trend-point forming"></circle>

        <text x="64" y="202" text-anchor="middle" class="trend-x-label">08시</text>
        <text x="146" y="202" text-anchor="middle" class="trend-x-label">09시</text>
        <text x="228" y="202" text-anchor="middle" class="trend-x-label">10시</text>
        <text x="310" y="202" text-anchor="middle" class="trend-x-label">11시</text>
        <text x="392" y="202" text-anchor="middle" class="trend-x-label">12시</text>
        <text x="474" y="202" text-anchor="middle" class="trend-x-label">13시</text>
        <text x="556" y="202" text-anchor="middle" class="trend-x-label">14시</text>
        <text x="638" y="202" text-anchor="middle" class="trend-x-label">15시</text>
      </svg>
    </div>
  `;
}

function productionCompareChart() {
  return `
    <div class="compare-chart">
      <div class="compare-toolbar">
        <div class="compare-legend">
          <div class="legend-item"><span class="legend-swatch compare-today"></span><span>오늘</span></div>
          <div class="legend-item"><span class="legend-swatch compare-yesterday"></span><span>어제</span></div>
        </div>
        <div class="tab-row">
          <div class="tab-chip active">전일</div>
          <div class="tab-chip">전주</div>
        </div>
      </div>
      <svg viewBox="0 0 720 220" class="compare-svg" role="img" aria-label="공정별 생산량 비교">
        <line x1="46" y1="24" x2="46" y2="178" class="trend-axis"></line>
        <line x1="46" y1="178" x2="686" y2="178" class="trend-axis"></line>

        <line x1="46" y1="48" x2="686" y2="48" class="trend-grid"></line>
        <line x1="46" y1="80" x2="686" y2="80" class="trend-grid"></line>
        <line x1="46" y1="112" x2="686" y2="112" class="trend-grid"></line>
        <line x1="46" y1="144" x2="686" y2="144" class="trend-grid"></line>

        <text x="12" y="52" class="trend-y-label">1200</text>
        <text x="18" y="84" class="trend-y-label">900</text>
        <text x="18" y="116" class="trend-y-label">600</text>
        <text x="18" y="148" class="trend-y-label">300</text>

        <rect x="72" y="70" width="54" height="108" rx="6" class="compare-bar today"></rect>
        <rect x="134" y="82" width="54" height="96" rx="6" class="compare-bar yesterday"></rect>

        <rect x="236" y="38" width="54" height="140" rx="6" class="compare-bar today"></rect>
        <rect x="298" y="56" width="54" height="122" rx="6" class="compare-bar yesterday"></rect>

        <rect x="400" y="112" width="54" height="66" rx="6" class="compare-bar today"></rect>
        <rect x="462" y="98" width="54" height="80" rx="6" class="compare-bar yesterday"></rect>

        <rect x="564" y="132" width="54" height="46" rx="6" class="compare-bar today"></rect>
        <rect x="626" y="144" width="54" height="34" rx="6" class="compare-bar yesterday"></rect>

        <text x="130" y="206" text-anchor="middle" class="trend-x-label">신선</text>
        <text x="294" y="206" text-anchor="middle" class="trend-x-label">TG</text>
        <text x="458" y="206" text-anchor="middle" class="trend-x-label">포밍</text>
        <text x="622" y="206" text-anchor="middle" class="trend-x-label">조립(외주)</text>
      </svg>
    </div>
  `;
}

function renderDashboard() {
  return `
    <div class="stack">
      <div class="metric-grid">
        ${metricCard("금일 총 생산량", "2,847t", "전일 대비 +12.4%", "success")}
        ${metricCard("목표 달성률", "94%", "금일 목표 3,028t", "success")}
        ${metricCard("부적합 건수", "3건", "전일 대비 1건 증가", "warning")}
        ${metricCard("설비 정지 (30분+)", "1건", "TG-03 설비 알림 확인 필요", "danger")}
      </div>

      <div class="dashboard-top-layout">
        <div class="dashboard-main-column">
          <section class="panel">
            <div class="panel-title">
              <h3>시간대별 생산량 추이</h3>
              <span class="panel-note">금일 기준 4개 공정 누계</span>
            </div>
            ${trendChart()}
          </section>
        </div>

        <div class="dashboard-side-column">
          <section class="panel equipment-panel">
            <div class="panel-title">
              <h3>주요 설비 상태</h3>
              <span class="card-badge">7대</span>
            </div>
            <div class="equipment-grid">
              ${equipmentCard("TG-01", "가동중", "가동중 · 점검신호", "98%", "normal")}
              ${equipmentCard("TG-02", "가동중", "가동중 · 점검신호", "91%", "normal")}
              ${equipmentCard("TG-03", "정지 42분", "정지 42분", "—", "danger")}
              ${equipmentCard("TG-04", "가동중", "가동중 · 점검신호", "87%", "normal")}
              ${equipmentCard("TG-05", "가동중", "가동중 · 점검신호", "95%", "normal")}
              ${equipmentCard("TG-06", "대기", "대기", "—", "warning")}
              ${equipmentCard("TG-07", "가동중", "가동중 · 점검신호", "93%", "normal")}
            </div>
          </section>
        </div>
      </div>

      <div class="dashboard-bottom-layout">
        <section class="panel">
          <div class="panel-title">
            <h3>공정별 생산량 비교</h3>
            <span class="panel-note">오늘/어제 기준 비교</span>
          </div>
          ${productionCompareChart()}
        </section>

        <section class="panel">
          <div class="panel-title">
            <h3>공정별 목표 달성률</h3>
          </div>
          <div class="progress-list">
            <div class="progress-item">
              <div class="progress-head">
                <span class="progress-name">신선</span>
                <span class="progress-value">840 / 900</span>
              </div>
              <div class="progress-track"><div class="progress-fill wire" style="width:93%"></div></div>
            </div>
            <div class="progress-item">
              <div class="progress-head">
                <span class="progress-name">TG</span>
                <span class="progress-value">1,124 / 1,200</span>
              </div>
              <div class="progress-track"><div class="progress-fill tg" style="width:94%"></div></div>
            </div>
            <div class="progress-item">
              <div class="progress-head">
                <span class="progress-name">포밍</span>
                <span class="progress-value">520 / 600</span>
              </div>
              <div class="progress-track"><div class="progress-fill forming" style="width:87%"></div></div>
            </div>
            <div class="progress-item">
              <div class="progress-head">
                <span class="progress-name">조립 (외주)</span>
                <span class="progress-value">363 / 328</span>
              </div>
              <div class="progress-track"><div class="progress-fill assembly" style="width:100%"></div></div>
            </div>
          </div>
        </section>

        <section class="panel recent-alerts-panel">
          <div class="panel-title">
            <h3>최근 알림</h3>
            <span class="panel-note">4건</span>
          </div>
          <div class="alert-list">
            <div class="alert-item">
              <div class="alert-head">
                <div class="alert-title">TG-03 설비 이상 감지</div>
                <div class="alert-time">14:23</div>
              </div>
              <div class="alert-text">설비 이상 확인이 필요합니다.</div>
            </div>
            <div class="alert-item warning">
              <div class="alert-head">
                <div class="alert-title">부적합 등록 — 포밍 / 치수 불량</div>
                <div class="alert-time">13:47</div>
              </div>
              <div class="alert-text">재작업 여부 확인이 필요합니다.</div>
            </div>
            <div class="alert-item info">
              <div class="alert-head">
                <div class="alert-title">원자재 LOT-0142 FIFO 경고</div>
                <div class="alert-time">12:10</div>
              </div>
              <div class="alert-text">이전 로트 먼저 사용이 필요합니다.</div>
            </div>
            <div class="alert-item info">
              <div class="alert-head">
                <div class="alert-title">외주 조립 W-2024-0681 지연</div>
                <div class="alert-time">11:00</div>
              </div>
              <div class="alert-text">완료 예정 초과 상태입니다.</div>
            </div>
          </div>
        </section>
      </div>
    </div>
  `;
}

function renderBoard() {
  return `
    <div class="stack">
      <div class="metric-grid">
        ${metricCard("신선", "318t", "금일 생산량", "")}
        ${metricCard("TG", "274t", "실시간 집계", "")}
        ${metricCard("포밍", "296t", "완료 수량", "")}
        ${metricCard("조립", "244t", "패킹 완료", "")}
      </div>
      <section class="panel">
        <div class="panel-title">
          <h3>현장 사이니지 화면</h3>
          <span class="panel-note">TV / 대형 모니터 전용</span>
        </div>
        <div class="status-grid">
          ${statusCard("TG 7대 상태", "6대 정상 / 1대 점검", "-", "-", "-", "warning")}
          ${statusCard("조립 5라인", "4라인 정상 / 1라인 지연", "-", "-", "-", "")}
          ${statusCard("품질 이상", "금일 4건", "-", "-", "-", "danger")}
          ${statusCard("출하 예정", "18건", "-", "-", "-", "success")}
        </div>
      </section>
    </div>
  `;
}

function renderResults(params = new URLSearchParams()) {
  const period = params.get("period") || "day";
  const process = params.get("process") || "all";
  const periodMap = {
    day: {
      total: "1,284t",
      target: "목표 달성률 92%",
      tg: "274t",
      correction: "12건",
      rows: [
        ["2026-04-14 08:00", "TG", "TG-01", "46t", "접점 신호", '<span class="pill">자동</span>'],
        ["2026-04-14 09:00", "포밍", "FM-02", "61t", "OPC", '<span class="pill">자동</span>'],
        ["2026-04-14 10:00", "조립", "조립 3라인", "44t", "수동 입력", '<span class="pill warning">보정</span>'],
        ["2026-04-14 11:00", "신선", "DR-01", "72t", "OPC", '<span class="pill">자동</span>'],
      ],
    },
    week: {
      total: "6,842t",
      target: "목표 달성률 96%",
      tg: "1,524t",
      correction: "21건",
      rows: [
        ["2026-04-08", "TG", "TG-01", "318t", "접점 신호", '<span class="pill">자동</span>'],
        ["2026-04-09", "포밍", "FM-02", "402t", "OPC", '<span class="pill">자동</span>'],
        ["2026-04-10", "조립", "조립 2라인", "356t", "수동 입력", '<span class="pill warning">보정</span>'],
        ["2026-04-11", "신선", "DR-01", "441t", "OPC", '<span class="pill">자동</span>'],
      ],
    },
    month: {
      total: "27,410t",
      target: "목표 달성률 91%",
      tg: "6,120t",
      correction: "68건",
      rows: [
        ["2026-04-01", "TG", "TG-01", "1,284t", "접점 신호", '<span class="pill">자동</span>'],
        ["2026-04-04", "포밍", "FM-02", "1,462t", "OPC", '<span class="pill">자동</span>'],
        ["2026-04-07", "조립", "조립 3라인", "1,208t", "수동 입력", '<span class="pill warning">보정</span>'],
        ["2026-04-10", "신선", "DR-01", "1,534t", "OPC", '<span class="pill">자동</span>'],
      ],
    },
  };
  const processMap = {
    all: { label: "전체", total: null, tg: null, correction: null },
    wire: { label: "신선", total: "324t", tg: "신선 324t", correction: "보정 2건" },
    tg: { label: "TG", total: "274t", tg: "TG 274t", correction: "보정 5건" },
    forming: { label: "포밍", total: "296t", tg: "포밍 296t", correction: "보정 3건" },
    assembly: { label: "조립", total: "244t", tg: "조립 244t", correction: "보정 2건" },
  };
  const scenario = structuredClone(periodMap[period] || periodMap.day);
  if (process !== "all") {
    const targetProcess = process === "wire" ? "신선" : process === "tg" ? "TG" : process === "forming" ? "포밍" : "조립";
    scenario.rows = scenario.rows.filter((row) => row[1] === targetProcess);
    scenario.total = processMap[process].total || scenario.total;
    scenario.tg = processMap[process].tg || scenario.tg;
    scenario.correction = processMap[process].correction || scenario.correction;
    scenario.target = `${processMap[process].label} 기준 목표 달성률`;
  }
  return `
    <div class="stack">
      <div class="filter-row">
        ${filterChipLink("금일", "/production/results", { period: "day", process }, period === "day")}
        ${filterChipLink("주간", "/production/results", { period: "week", process }, period === "week")}
        ${filterChipLink("월간", "/production/results", { period: "month", process }, period === "month")}
        ${filterChipLink("전체", "/production/results", { period, process: "all" }, process === "all")}
        ${filterChipLink("신선", "/production/results", { period, process: "wire" }, process === "wire")}
        ${filterChipLink("TG", "/production/results", { period, process: "tg" }, process === "tg")}
        ${filterChipLink("포밍", "/production/results", { period, process: "forming" }, process === "forming")}
        ${filterChipLink("조립", "/production/results", { period, process: "assembly" }, process === "assembly")}
      </div>
      <div class="metric-grid">
        ${metricCard("총 생산량", scenario.total, scenario.target, "")}
        ${metricCard("핵심 공정 집계", scenario.tg, process === "tg" ? "접점 신호 수집" : "공정별 집계", "")}
        ${metricCard("수동 보정", scenario.correction, "자동 수집 예외", "warning")}
        ${metricCard("보고 자동화", "완료", "일마감 기준 생성", "success")}
      </div>
      <section class="table-card">
        <div class="panel-title">
          <h3>생산실적 상세</h3>
          <span class="panel-note">공정별 실적이 흩어져 보이던 문제를 해결하기 위한 화면입니다</span>
        </div>
        <table>
          <thead>
            <tr>
              <th>일시</th>
              <th>공정</th>
              <th>설비</th>
              <th>생산량</th>
              <th>수집 방식</th>
              <th>보정 여부</th>
            </tr>
          </thead>
          <tbody>
            ${scenario.rows
              .map(
                (row) => `<tr><td>${row[0]}</td><td>${row[1]}</td><td>${row[2]}</td><td>${row[3]}</td><td>${row[4]}</td><td>${row[5]}</td></tr>`
              )
              .join("")}
          </tbody>
        </table>
      </section>
    </div>
  `;
}

function renderProgress(params = new URLSearchParams()) {
  const status = params.get("status") || "all";
  const allRows = [
    { workId: "LX-20948", site: "삼성 A현장", flow: "신선 · TG · 포밍 · 조립", pill: '<span class="pill success">조립 완료</span>', status: "done" },
    { workId: "LX-20952", site: "현대 B현장", flow: "신선 · TG · 포밍", pill: '<span class="pill warning">포밍 진행중</span>', status: "progress" },
    { workId: "LX-21004", site: "삼성 C현장", flow: "신선 · TG", pill: '<span class="pill danger">TG 보정 필요</span>', status: "correction" },
    { workId: "LX-21102", site: "음성 물류센터", flow: "신선", pill: '<span class="pill">대기</span>', status: "all" },
  ];
  const filteredRows = status === "all" ? allRows : allRows.filter((row) => row.status === status);
  const selected = filteredRows[0] || allRows[0];
  return `
    <div class="stack">
      <div class="filter-row">
        ${filterChipLink("전체", "/production/progress", { status: "all" }, status === "all")}
        ${filterChipLink("진행중", "/production/progress", { status: "progress" }, status === "progress")}
        ${filterChipLink("완료", "/production/progress", { status: "done" }, status === "done")}
        ${filterChipLink("보정 필요", "/production/progress", { status: "correction" }, status === "correction")}
      </div>
      <div class="split-layout">
        <section class="table-card">
          <div class="panel-title">
            <h3>제작번호 진행 목록</h3>
            <span class="panel-note">제작번호 기준 진행 상황 파악이 어려운 문제를 해결하기 위한 화면입니다</span>
          </div>
          <table>
            <thead>
              <tr>
                <th>제작번호</th>
                <th>현장명</th>
                <th>공정 흐름</th>
                <th>상태</th>
              </tr>
            </thead>
            <tbody>
              ${filteredRows
                .map(
                  (row) =>
                    `<tr><td class="mono">${row.workId}</td><td>${row.site}</td><td>${row.flow}</td><td>${row.pill}</td></tr>`
                )
                .join("")}
            </tbody>
          </table>
        </section>

        <aside class="detail-panel">
          <div class="detail-block">
            <h4>선택 건 상세</h4>
            <div class="kv">
              <div class="kv-row"><span>제작번호</span><strong>${selected.workId}</strong></div>
              <div class="kv-row"><span>현장명</span><strong>${selected.site}</strong></div>
              <div class="kv-row"><span>현재 공정</span><strong>${status === "done" ? "조립" : status === "progress" ? "포밍" : status === "correction" ? "TG" : "신선"}</strong></div>
              <div class="kv-row"><span>마지막 실적</span><strong>${status === "done" ? "2026-04-14 15:20" : status === "progress" ? "2026-04-14 13:05" : status === "correction" ? "2026-04-14 11:20" : "2026-04-14 08:32"}</strong></div>
            </div>
          </div>
          <div class="detail-block">
            <h4>공정 타임라인</h4>
            <div class="timeline">
              <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">신선 완료</div><div class="timeline-sub">실적 74t 반영</div></div><div class="timeline-time">08:32</div></div>
              ${
                status === "done"
                  ? '<div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">TG 완료</div><div class="timeline-sub">접점 수집 정상 반영</div></div><div class="timeline-time">11:20</div></div><div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">포밍 완료</div><div class="timeline-sub">형상 검수 통과</div></div><div class="timeline-time">13:05</div></div><div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">조립 완료</div><div class="timeline-sub">패킹 번호 생성</div></div><div class="timeline-time">15:20</div></div>'
                  : status === "progress"
                    ? '<div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">TG 완료</div><div class="timeline-sub">접점 수집 정상 반영</div></div><div class="timeline-time">11:20</div></div><div class="timeline-item"><div class="timeline-dot open"></div><div><div class="timeline-title">포밍 진행중</div><div class="timeline-sub">형상 가공 진행</div></div><div class="timeline-time">13:05</div></div>'
                    : status === "correction"
                      ? '<div class="timeline-item"><div class="timeline-dot open"></div><div><div class="timeline-title">TG 진행중</div><div class="timeline-sub">접점 수집 지연, 보정 필요</div></div><div class="timeline-time">11:20</div></div>'
                      : '<div class="timeline-item"><div class="timeline-dot open"></div><div><div class="timeline-title">신선 진행중</div><div class="timeline-sub">초기 생산 대기</div></div><div class="timeline-time">08:32</div></div>'
              }
            </div>
          </div>
          <div class="btn-row">
            <button class="outline-btn">부적합 등록</button>
            <button class="secondary-btn">추적 조회 이동</button>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function renderLabel() {
  return `
    <div class="split-layout">
      <section class="hero-panel">
        <div class="panel-title">
          <h3>라벨 출력 설정</h3>
          <span class="panel-note">공정별 라벨 기준이 분절된 문제를 해결하기 위한 화면입니다</span>
        </div>
        <div class="section-grid-2">
          <div class="detail-block">
            <h4>출력 조건</h4>
            <div class="kv">
              <div class="kv-row"><span>공정</span><strong>신선</strong></div>
              <div class="kv-row"><span>설비</span><strong>DR-01</strong></div>
              <div class="kv-row"><span>제작번호</span><strong>LX-21044</strong></div>
              <div class="kv-row"><span>라벨 종류</span><strong>KS 라벨</strong></div>
              <div class="kv-row"><span>출력 수량</span><strong>2매</strong></div>
            </div>
          </div>
          <div class="detail-block">
            <h4>자동 삽입 항목</h4>
            <div class="kv">
              <div class="kv-row"><span>현장명</span><strong>현대 B현장</strong></div>
              <div class="kv-row"><span>KS 규격</span><strong>KS-DK-004</strong></div>
              <div class="kv-row"><span>로트번호</span><strong>LOT-20260414-03</strong></div>
              <div class="kv-row"><span>생산일자</span><strong>2026-04-14</strong></div>
            </div>
          </div>
        </div>
        <div class="section-grid-2">
          <div class="detail-block">
            <h4>프린터 선택</h4>
            <div class="kv">
              <div class="kv-row"><span>지정 프린터</span><strong>신선-PRN-01</strong></div>
              <div class="kv-row"><span>연결 상태</span><strong>정상</strong></div>
              <div class="kv-row"><span>용지 상태</span><strong>여유 있음</strong></div>
            </div>
          </div>
          <div class="detail-block">
            <h4>필수 항목 점검</h4>
            <div class="kv">
              <div class="kv-row"><span>현장명</span><strong>입력 완료</strong></div>
              <div class="kv-row"><span>로트번호</span><strong>입력 완료</strong></div>
              <div class="kv-row"><span>KS 규격</span><strong>입력 완료</strong></div>
            </div>
          </div>
        </div>
        <div class="btn-row">
          <button class="outline-btn">미리보기</button>
          <button class="secondary-btn">라벨 출력</button>
        </div>
      </section>
      <aside class="detail-panel">
        <div class="detail-block">
          <h4>최근 출력 이력</h4>
          <div class="timeline">
            <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">LX-21044 / KS 라벨</div><div class="timeline-sub">출력자 OP-03</div></div><div class="timeline-time">12:10</div></div>
            <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">LX-21041 / 공정 라벨</div><div class="timeline-sub">출력자 OP-01</div></div><div class="timeline-time">11:42</div></div>
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderQuality(mode) {
  const isRegister = mode === "register";
  return `
    <div class="stack">
      ${
        isRegister
          ? `
          <div class="split-layout">
            <section class="hero-panel">
              <div class="panel-title">
                <h3>부적합 등록</h3>
                <span class="panel-note">현장에서 즉시 부적합을 기록하기 위한 화면입니다</span>
              </div>
              <div class="section-grid-2">
                <div class="detail-block"><h4>등록 정보</h4><div class="kv">
                  <div class="kv-row"><span>공정</span><strong>포밍</strong></div>
                  <div class="kv-row"><span>제작번호</span><strong>LX-21018</strong></div>
                  <div class="kv-row"><span>부적합 유형</span><strong>형상 오차</strong></div>
                  <div class="kv-row"><span>중량</span><strong>12.4kg</strong></div>
                </div></div>
                <div class="detail-block"><h4>품질 대응</h4><div class="kv">
                  <div class="kv-row"><span>품질팀 알림</span><strong>자동 발송</strong></div>
                  <div class="kv-row"><span>저울 연계</span><strong>검토 필요</strong></div>
                  <div class="kv-row"><span>등록 상태</span><strong>즉시 저장</strong></div>
                </div></div>
              </div>
              <div class="btn-row">
                <button class="outline-btn">임시 저장</button>
                <button class="secondary-btn">부적합 등록</button>
              </div>
            </section>
            <aside class="detail-panel">
              <div class="detail-block">
                <h4>오늘 등록 건</h4>
                <div class="kv">
                  <div class="kv-row"><span>총 건수</span><strong>4건</strong></div>
                  <div class="kv-row"><span>포밍</span><strong>3건</strong></div>
                  <div class="kv-row"><span>TG</span><strong>1건</strong></div>
                </div>
              </div>
            </aside>
          </div>
        `
          : `
          <div class="metric-grid">
            ${metricCard("금일 부적합", "04", "포밍 3건 / TG 1건", "warning")}
            ${metricCard("부적합률", "0.82%", "기준 대비 -0.05%", "danger")}
            ${metricCard("품질팀 확인", "02", "조치 대기", "")}
            ${metricCard("성적서 대상", "06", "삼성/현대 납품 건", "success")}
          </div>
          <section class="table-card">
            <div class="panel-title">
              <h3>부적합 추세</h3>
              <span class="panel-note">일/주/월 기준 품질 분석과 성적서 대응 기반을 만드는 화면입니다</span>
            </div>
            <table>
              <thead><tr><th>일자</th><th>공정</th><th>유형</th><th>수량/중량</th><th>상태</th></tr></thead>
              <tbody>
                <tr><td>2026-04-14</td><td>포밍</td><td>형상 오차</td><td>12.4kg</td><td><span class="pill danger">확인 필요</span></td></tr>
                <tr><td>2026-04-14</td><td>TG</td><td>표면 손상</td><td>3건</td><td><span class="pill warning">품질 검토</span></td></tr>
                <tr><td>2026-04-13</td><td>포밍</td><td>규격 편차</td><td>2건</td><td><span class="pill success">조치 완료</span></td></tr>
              </tbody>
            </table>
          </section>
        `
      }
    </div>
  `;
}

function renderCertificate() {
  return `
    <div class="split-layout">
      <section class="hero-panel">
        <div class="panel-title">
          <h3>성적서 발행</h3>
          <span class="panel-note">고객사별 성적서를 수기로 작성하던 문제를 줄이기 위한 화면입니다</span>
        </div>
        <div class="section-grid-2">
          <div class="detail-block">
            <h4>발행 조건</h4>
            <div class="kv">
              <div class="kv-row"><span>현장명</span><strong>삼성 A현장</strong></div>
              <div class="kv-row"><span>제작번호</span><strong>LX-20948</strong></div>
              <div class="kv-row"><span>고객사</span><strong>삼성</strong></div>
              <div class="kv-row"><span>발행일</span><strong>2026-04-14</strong></div>
            </div>
          </div>
          <div class="detail-block">
            <h4>자동 삽입 데이터</h4>
            <div class="kv">
              <div class="kv-row"><span>생산 수량</span><strong>42.8t</strong></div>
              <div class="kv-row"><span>부적합률</span><strong>0.82%</strong></div>
              <div class="kv-row"><span>로트번호</span><strong>LOT-8812</strong></div>
              <div class="kv-row"><span>KS 규격</span><strong>KS-DK-004</strong></div>
            </div>
          </div>
        </div>
        <div class="btn-row">
          <button class="outline-btn">미리보기</button>
          <button class="secondary-btn">PDF 발행</button>
        </div>
      </section>
      <aside class="detail-panel">
        <div class="detail-block">
          <h4>발행 이력</h4>
          <div class="timeline">
            <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">삼성 A현장 / LX-20948</div><div class="timeline-sub">품질팀 발행 완료</div></div><div class="timeline-time">오늘</div></div>
            <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">현대 B현장 / LX-20891</div><div class="timeline-sub">재발행 1회</div></div><div class="timeline-time">어제</div></div>
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderInventory(mode) {
  const isYard = mode === "yard";
  return `
    <div class="stack">
      <div class="filter-row">
        ${filterField("현장명", "현대 B현장")}
        ${filterField("슬리퍼", "SL-15")}
        ${filterField("패킹번호", "PK-22024")}
        ${filterField("상태", "위치 미등록")}
      </div>
      <div class="split-layout">
        <section class="table-card">
          <div class="panel-title">
            <h3>${isYard ? "야적장 위치 목록" : "출하 현황 목록"}</h3>
            <span class="panel-note">${isYard ? "출하 시 제품 탐색 시간이 오래 걸리던 문제를 해결하기 위한 화면입니다" : "적재와 출하 상태를 한 번에 보기 어려운 문제를 해결하기 위한 화면입니다"}</span>
          </div>
          <table>
            <thead>
              <tr><th>현장명</th><th>슬리퍼</th><th>패킹번호</th><th>위치번호</th><th>상태</th></tr>
            </thead>
            <tbody>
              <tr><td>삼성 A현장</td><td>SL-08</td><td>PK-22014</td><td>Y-A03-02</td><td><span class="pill success">적재 완료</span></td></tr>
              <tr><td>현대 B현장</td><td>SL-13</td><td>PK-22022</td><td>Y-B01-01</td><td><span class="pill">출하 준비</span></td></tr>
              <tr><td>현대 B현장</td><td>SL-15</td><td>PK-22024</td><td>-</td><td><span class="pill warning">위치 미등록</span></td></tr>
            </tbody>
          </table>
        </section>
        <aside class="detail-panel">
          <div class="detail-block">
            <h4>선택 건 상세</h4>
            <div class="kv">
              <div class="kv-row"><span>현장명</span><strong>현대 B현장</strong></div>
              <div class="kv-row"><span>슬리퍼 번호</span><strong>SL-15</strong></div>
              <div class="kv-row"><span>패킹번호</span><strong>PK-22024</strong></div>
              <div class="kv-row"><span>위치번호</span><strong>미등록</strong></div>
              <div class="kv-row"><span>출하 상태</span><strong>출하 준비</strong></div>
            </div>
          </div>
          <div class="btn-row">
            <button class="outline-btn">위치 수정</button>
            <button class="secondary-btn">출하 완료</button>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function renderMaterial() {
  return `
    <section class="table-card">
      <div class="panel-title">
        <h3>원자재/로트 조회</h3>
        <span class="panel-note">선입선출과 로트 추적이 약한 문제를 해결하기 위한 화면입니다</span>
      </div>
      <table>
        <thead><tr><th>로트번호</th><th>원자재 종류</th><th>공급사</th><th>입고일</th><th>잔량</th><th>경고</th></tr></thead>
        <tbody>
          <tr><td class="mono">LOT-20260401-01</td><td>이형철선</td><td>영광선재</td><td>2026-04-01</td><td>420kg</td><td><span class="pill warning">FIFO 경고</span></td></tr>
          <tr><td class="mono">LOT-20260409-03</td><td>원형철선</td><td>대한철강</td><td>2026-04-09</td><td>1,240kg</td><td><span class="pill success">정상</span></td></tr>
        </tbody>
      </table>
    </section>
  `;
}

function renderTrace() {
  return `
    <div class="split-layout">
      <section class="hero-panel">
        <div class="panel-title">
          <h3>제작번호 추적 조회</h3>
          <span class="panel-note">불량 발생 시 원자재부터 출하까지 역추적이 어려운 문제를 해결하기 위한 화면입니다</span>
        </div>
        <div class="timeline">
          <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">원자재 입고</div><div class="timeline-sub">LOT-20260401-01 / 영광선재 / 420kg</div></div><div class="timeline-time">04-01</div></div>
          <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">신선 공정</div><div class="timeline-sub">DR-01 / 실적 74t</div></div><div class="timeline-time">08:32</div></div>
          <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">TG 공정</div><div class="timeline-sub">접점 수집 / 46t</div></div><div class="timeline-time">11:20</div></div>
          <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">포밍 공정</div><div class="timeline-sub">형상 오차 1건 등록</div></div><div class="timeline-time">13:05</div></div>
          <div class="timeline-item"><div class="timeline-dot open"></div><div><div class="timeline-title">조립/야적</div><div class="timeline-sub">PK-22024 / 위치 미등록</div></div><div class="timeline-time">진행중</div></div>
        </div>
      </section>
      <aside class="detail-panel">
        <div class="detail-block">
          <h4>조회 키</h4>
          <div class="kv">
            <div class="kv-row"><span>제작번호</span><strong>LX-21018</strong></div>
            <div class="kv-row"><span>현장명</span><strong>현대 B현장</strong></div>
            <div class="kv-row"><span>패킹번호</span><strong>PK-22024</strong></div>
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderFacility(mode) {
  const isStatus = mode === "status";
  return `
    <div class="stack">
      <div class="filter-row">
        ${filterField("공정", isStatus ? "TG 중심" : "전체 알림")}
        ${filterField("수집 방식", isStatus ? "접점 + OPC" : "안돈/이상")}
        ${filterField("조회 기준", isStatus ? "가동/정지 상태" : "미확인 우선")}
      </div>
      ${
        isStatus
          ? `
            <div class="dashboard-grid">
              <section class="panel">
                <div class="panel-title">
                  <h3>주요 설비 상태</h3>
                  <span class="panel-note">설비 상태를 사무실에서 즉시 알기 어려운 문제를 해결하기 위한 화면입니다</span>
                </div>
                <div class="status-grid">
                  ${statusCard("TG-01", "운영 중", "182.4℃", "42.8bar", "94.2%", "")}
                  ${statusCard("PRESS-FM-04", "정지", "215.1℃", "0.0bar", "0.0%", "danger")}
                  ${statusCard("TG-01B", "점검 중", "176.8℃", "39.2bar", "72.1%", "warning")}
                  ${statusCard("조립 5라인", "운영 중", "-", "-", "98.9%", "")}
                </div>
              </section>
              <aside class="panel">
                <div class="panel-title">
                  <h3>수집 방식</h3>
                  <span class="panel-note">TG는 접점, 나머지는 OPC 중심</span>
                </div>
                <div class="kv">
                  <div class="kv-row"><span>TG</span><strong>접점 신호</strong></div>
                  <div class="kv-row"><span>신선</span><strong>OPC</strong></div>
                  <div class="kv-row"><span>포밍</span><strong>OPC</strong></div>
                  <div class="kv-row"><span>조립</span><strong>OPC</strong></div>
                </div>
                <div class="detail-block inline">
                  <h4>최근 상태 이력</h4>
                  <div class="timeline compact">
                    <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">TG-01 정상 복귀</div><div class="timeline-sub">14:02</div></div></div>
                    <div class="timeline-item"><div class="timeline-dot open"></div><div><div class="timeline-title">포밍-04 점검 시작</div><div class="timeline-sub">13:48</div></div></div>
                  </div>
                </div>
              </aside>
            </div>
          `
          : `
            <div class="dashboard-grid">
              <section class="panel">
                <div class="panel-title">
                  <h3>안돈 및 알림 이력</h3>
                  <span class="panel-note">설비 이상이나 고장 발생 시 현장과 사무실에 즉시 알리는 경보 체계를 보여줍니다</span>
                </div>
                <div class="alert-list">
                  <div class="alert-item"><div class="alert-head"><div class="alert-title">TG-04 윤활압력 저하</div><div class="alert-time">14:22</div></div><div class="alert-text">핵심 설비 이상으로 현장 확인이 필요합니다.</div></div>
                  <div class="alert-item warning"><div class="alert-head"><div class="alert-title">포밍-04 과열 경고</div><div class="alert-time">13:48</div></div><div class="alert-text">온도 편차가 커져 품질 영향 가능성이 있습니다.</div></div>
                  <div class="alert-item info"><div class="alert-head"><div class="alert-title">조립 2라인 자재 교체</div><div class="alert-time">11:03</div></div><div class="alert-text">외주 라인 작업 지연과 연결될 수 있습니다.</div></div>
                </div>
              </section>
              <aside class="detail-panel">
                <div class="detail-block">
                  <h4>대응 메모</h4>
                  <div class="kv">
                    <div class="kv-row"><span>알림 대상</span><strong>생산관리자 / 공무팀</strong></div>
                    <div class="kv-row"><span>1차 범위</span><strong>안돈 및 이상 알림</strong></div>
                    <div class="kv-row"><span>2차 범위</span><strong>MTBF, 정지 이력 고도화</strong></div>
                  </div>
                </div>
                <div class="detail-block">
                  <h4>조치 기록</h4>
                  <div class="kv">
                    <div class="kv-row"><span>최근 조치자</span><strong>FAC-02</strong></div>
                    <div class="kv-row"><span>조치 상태</span><strong>현장 확인 중</strong></div>
                    <div class="kv-row"><span>최근 메모</span><strong>윤활 라인 재점검</strong></div>
                  </div>
                </div>
              </aside>
            </div>
          `
      }
    </div>
  `;
}

function renderOutsource() {
  return `
    <div class="stack">
      <div class="filter-row">
        <div class="filter-chip active">전체</div>
        <div class="filter-chip">지시 등록</div>
        <div class="filter-chip">작업 중</div>
        <div class="filter-chip">지연</div>
      </div>
      <div class="split-layout">
      <section class="table-card">
        <div class="panel-title">
          <h3>외주 조립 작업 목록</h3>
          <span class="panel-note">외주 조립 공정 지시와 진행 관리가 끊기는 문제를 해결하기 위한 화면입니다</span>
        </div>
        <table>
          <thead><tr><th>제작번호</th><th>현장명</th><th>지시 상태</th><th>완료 예정일</th><th>후속 흐름</th></tr></thead>
          <tbody>
            <tr><td class="mono">LX-22004</td><td>삼성 A현장</td><td><span class="pill">지시 등록</span></td><td>2026-04-16</td><td>패킹 대기</td></tr>
            <tr><td class="mono">LX-22010</td><td>현대 B현장</td><td><span class="pill warning">작업 중</span></td><td>2026-04-15</td><td>야적 위치 등록 예정</td></tr>
            <tr><td class="mono">LX-22018</td><td>현대 B현장</td><td><span class="pill danger">지연</span></td><td>2026-04-14</td><td>출하 일정 영향</td></tr>
          </tbody>
        </table>
      </section>
      <aside class="detail-panel">
        <div class="detail-block">
          <h4>선택 건 상세</h4>
          <div class="kv">
            <div class="kv-row"><span>제작번호</span><strong>LX-22018</strong></div>
            <div class="kv-row"><span>지시 내용</span><strong>슬리퍼 2세트 조립</strong></div>
            <div class="kv-row"><span>완료 예정일</span><strong>2026-04-14</strong></div>
            <div class="kv-row"><span>후속 연결</span><strong>야적장 위치 등록</strong></div>
          </div>
        </div>
        <div class="detail-block">
          <h4>이상 알림</h4>
          <div class="kv">
            <div class="kv-row"><span>현재 상태</span><strong>지연</strong></div>
            <div class="kv-row"><span>알림 대상</span><strong>생산관리자</strong></div>
            <div class="kv-row"><span>영향</span><strong>출하 일정 영향</strong></div>
          </div>
        </div>
        <div class="btn-row">
          <button class="outline-btn">상태 변경</button>
          <button class="secondary-btn">야적장 화면 이동</button>
        </div>
      </aside>
    </div>
    </div>
  `;
}

init();
