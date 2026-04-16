const NAV_GROUPS = [
  {
    title: "대시보드",
    items: [
      { path: "/dashboard", icon: "dashboard", label: "생산 대시보드" },
      { path: "/dashboard/board", icon: "tv", label: "생산 현황판" },
    ],
  },
  {
    title: "공정별 실적",
    items: [
      { path: "/production/results", icon: "bar_chart", label: "실적 종합 현황" },
      { path: "/production/trend", icon: "show_chart", label: "시간대별 생산 추이" },
      { path: "/production/wire", icon: "cable", label: "신선 실적" },
      { path: "/production/tg", icon: "bolt", label: "TG 실적" },
      { path: "/production/forming", icon: "compress", label: "포밍 실적" },
      { path: "/production/assembly", icon: "handyman", label: "조립 실적" },
    ],
  },
  {
    title: "생산관리",
    items: [
      { path: "/production/progress", icon: "conversion_path", label: "공정 진행 조회" },
      { path: "/production/label", icon: "print", label: "라벨 출력" },
      { path: "/production/target", icon: "tune", label: "실적 목표 설정" },
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
      { path: "/facility/issues", icon: "notifications_active", label: "안돈 / 이슈관리" },
      { path: "/facility/equipment", icon: "precision_manufacturing", label: "설비 목록" },
      { path: "/facility/history", icon: "history", label: "설비 이력" },
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
    title: "실적 종합 현황",
    breadcrumb: "공정별 실적 / 신선·TG·포밍·조립 4개 공정 실적을 한 화면에서 비교합니다",
    render: renderResults,
  },
  "/production/trend": {
    title: "시간대별 생산 추이",
    breadcrumb: "공정별 실적 / 대시보드 추이 차트의 시간대별 원본 데이터를 공정별로 조회합니다",
    render: renderTrend,
  },
  "/production/wire": {
    title: "신선 실적",
    breadcrumb: "공정별 실적 / 신선 설비 DR-01~04 가동 현황과 생산 실적을 확인합니다",
    render: renderWire,
  },
  "/production/tg": {
    title: "TG 실적",
    breadcrumb: "공정별 실적 / TG 7대 설비 접점 수집 기반 생산 실적을 확인합니다",
    render: renderTG,
  },
  "/production/forming": {
    title: "포밍 실적",
    breadcrumb: "공정별 실적 / 포밍 설비 FM-01~03 생산 실적과 부적합 연계를 확인합니다",
    render: renderForming,
  },
  "/production/assembly": {
    title: "조립 실적",
    breadcrumb: "공정별 실적 / 조립 5개 라인 생산 실적과 패킹 완료 현황을 확인합니다",
    render: renderAssembly,
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
  "/production/target": {
    title: "실적 목표 설정",
    breadcrumb: "생산관리 / 공정별 일간 목표(㎡)를 등록하고 대시보드와 실적 화면에 반영합니다",
    render: renderTargetSettings,
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
  "/facility/issues": {
    title: "안돈 / 이슈관리",
    breadcrumb: "설비관리 / 설비 고장과 현장 이슈를 등록하고 조치 상태를 관리합니다",
    render: () => renderFacility("issues"),
  },
  "/facility/equipment": {
    title: "설비 목록",
    breadcrumb: "설비관리 / 설비 기준 정보와 공정별 배치 현황을 관리합니다",
    render: () => renderFacility("equipment"),
  },
  "/facility/history": {
    title: "설비 이력",
    breadcrumb: "설비관리 / 고장, 비가동, 안돈 발생 이력을 조회합니다",
    render: () => renderFacility("history"),
  },
  "/facility/status": {
    title: "설비 목록",
    breadcrumb: "설비관리 / 설비 기준 정보와 공정별 배치 현황을 관리합니다",
    render: () => renderFacility("equipment"),
  },
  "/facility/alert": {
    title: "안돈 / 이슈관리",
    breadcrumb: "설비관리 / 설비 고장과 현장 이슈를 등록하고 조치 상태를 관리합니다",
    render: () => renderFacility("issues"),
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
const TARGET_STORAGE_KEY = "mes.production.targets.v1";
const DEFAULT_TARGETS = { wire: 342, tg: 1200, forming: 600, assembly: 328 };

function loadTargets() {
  try {
    const raw = localStorage.getItem(TARGET_STORAGE_KEY);
    if (!raw) return { ...DEFAULT_TARGETS };
    const parsed = JSON.parse(raw);
    return {
      wire: Number(parsed.wire) || DEFAULT_TARGETS.wire,
      tg: Number(parsed.tg) || DEFAULT_TARGETS.tg,
      forming: Number(parsed.forming) || DEFAULT_TARGETS.forming,
      assembly: Number(parsed.assembly) || DEFAULT_TARGETS.assembly,
    };
  } catch {
    return { ...DEFAULT_TARGETS };
  }
}

function saveTargets(targets) {
  localStorage.setItem(TARGET_STORAGE_KEY, JSON.stringify(targets));
}

function applyTargets(targets) {
  GOAL_DATA.wire.target = targets.wire;
  GOAL_DATA.tg.target = targets.tg;
  GOAL_DATA.forming.target = targets.forming;
  GOAL_DATA.assembly.target = targets.assembly;

  PROCESS_SUMMARY.wire.target = `${targets.wire.toLocaleString()}㎡`;
  PROCESS_SUMMARY.tg.target = `${targets.tg.toLocaleString()}㎡`;
  PROCESS_SUMMARY.forming.target = `${targets.forming.toLocaleString()}㎡`;
  PROCESS_SUMMARY.assembly.target = `${targets.assembly.toLocaleString()}㎡`;
}

function getTargets() {
  return loadTargets();
}

function handleTargetSave() {
  const targets = {
    wire: Number(document.getElementById("target-wire").value) || DEFAULT_TARGETS.wire,
    tg: Number(document.getElementById("target-tg").value) || DEFAULT_TARGETS.tg,
    forming: Number(document.getElementById("target-forming").value) || DEFAULT_TARGETS.forming,
    assembly: Number(document.getElementById("target-assembly").value) || DEFAULT_TARGETS.assembly,
  };
  saveTargets(targets);
  applyTargets(targets);
  showSaveSuccessModal("목표 저장 완료", "공정별 실적 목표가 저장되어 화면에 반영되었습니다.");
  renderRoute();
}

function handleTargetReset() {
  saveTargets(DEFAULT_TARGETS);
  applyTargets(DEFAULT_TARGETS);
  showSaveSuccessModal("기본값 복원 완료", "실적 목표를 기본 설정값으로 복원했습니다.");
  renderRoute();
}

// ── Modal ─────────────────────────────────────────────────────
function showModal(title, bodyHtml, footerHtml = "") {
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-body").innerHTML = bodyHtml;
  document.getElementById("modal-footer").innerHTML = footerHtml;
  document.getElementById("modal-overlay").classList.add("open");
}

function closeModal() {
  document.getElementById("modal-overlay").classList.remove("open");
}

function navTo(path) {
  closeModal();
  location.hash = "#" + path;
}

function showSaveSuccessModal(title, message) {
  showModal(
    title,
    `<div class="modal-success-icon">✓</div>
     <div class="modal-success-title">${title}</div>
     <div class="modal-success-sub">${message}</div>`,
    `<button class="secondary-btn" onclick="closeModal()">확인</button>`
  );
}

// ── Popup handlers ────────────────────────────────────────────
function showLocationEditModal() {
  showModal(
    "위치 수정",
    `<div class="kv">
      <div class="kv-row"><span>패킹번호</span><strong>PK-22024</strong></div>
      <div class="kv-row"><span>현재 위치</span><strong>미등록</strong></div>
    </div>
    <label class="modal-input-label">새 위치번호 입력</label>
    <input type="text" placeholder="예: Y-A03-02" />`,
    `<button class="outline-btn" onclick="closeModal()">취소</button>
     <button class="secondary-btn" onclick="showSaveSuccessModal('위치 수정 완료', 'PK-22024 위치 정보가 저장되었습니다.')">저장</button>`
  );
}

function showShippingCompleteModal() {
  showModal(
    "출하 완료 처리",
    `<div class="kv">
      <div class="kv-row"><span>패킹번호</span><strong>PK-22024</strong></div>
      <div class="kv-row"><span>현장명</span><strong>현대 B현장</strong></div>
      <div class="kv-row"><span>슬리퍼</span><strong>SL-15</strong></div>
    </div>
    <p style="margin-top:16px; font-size:13px; color:var(--muted);">위 건을 출하 완료 처리하면 재고에서 자동 차감됩니다. 계속하시겠습니까?</p>`,
    `<button class="outline-btn" onclick="closeModal()">취소</button>
     <button class="secondary-btn" onclick="showSaveSuccessModal('출하 완료', 'PK-22024 출하 완료 처리되었습니다.')">확인</button>`
  );
}

function showStatusChangeModal() {
  showModal(
    "상태 변경",
    `<div class="kv">
      <div class="kv-row"><span>제작번호</span><strong>LX-22018</strong></div>
      <div class="kv-row"><span>현재 상태</span><strong>지연</strong></div>
    </div>
    <label class="modal-input-label">변경할 상태 선택</label>
    <select>
      <option>지시 등록</option>
      <option>작업 중</option>
      <option selected>지연</option>
      <option>완료</option>
    </select>`,
    `<button class="outline-btn" onclick="closeModal()">취소</button>
     <button class="secondary-btn" onclick="showSaveSuccessModal('상태 변경 완료', 'LX-22018 상태가 변경되었습니다.')">저장</button>`
  );
}

function showDefectRegisterModal() {
  showModal(
    "등록 완료",
    `<div class="modal-success-icon">✓</div>
     <div class="modal-success-title">부적합 등록 완료</div>
     <div class="modal-success-sub">포밍 / LX-21018 부적합이 등록되었습니다.<br>품질팀에 알림이 자동 발송되었습니다.</div>`,
    `<button class="outline-btn" onclick="closeModal()">닫기</button>
     <button class="secondary-btn" onclick="navTo('/quality/analysis')">부적합 분석으로 이동</button>`
  );
}

function showLabelPreviewModal() {
  showModal(
    "라벨 미리보기",
    `<div style="border:1px solid var(--surface-border); padding:20px; background:#fafafa;">
      <div style="font-size:16px; font-weight:800; margin-bottom:14px; letter-spacing:0.04em;">KS 라벨</div>
      <div class="kv">
        <div class="kv-row"><span>현장명</span><strong>현대 B현장</strong></div>
        <div class="kv-row"><span>제작번호</span><strong>LX-21044</strong></div>
        <div class="kv-row"><span>공정 / 설비</span><strong>신선 / DR-01</strong></div>
        <div class="kv-row"><span>KS 규격</span><strong>KS-DK-004</strong></div>
        <div class="kv-row"><span>로트번호</span><strong>LOT-20260414-03</strong></div>
        <div class="kv-row"><span>생산일자</span><strong>2026-04-14</strong></div>
      </div>
    </div>`,
    `<button class="outline-btn" onclick="closeModal()">닫기</button>
     <button class="secondary-btn" onclick="showSaveSuccessModal('라벨 출력 완료', '신선-PRN-01 프린터로 2매 출력 완료되었습니다.')">바로 출력</button>`
  );
}

function showBarcodePreviewModal() {
  showModal(
    "바코드 발행 화면",
    `<div class="barcode-preview-card">
      <div class="barcode-preview-head">
        <div class="barcode-preview-title">출하 라벨 바코드</div>
        <div class="barcode-preview-meta">템플릿 SHIP-LABEL-V1 · 프린터 신선-PRN-01</div>
      </div>
      <div class="barcode-type-switch">
        <button id="barcode-type-code128" class="filter-chip active" onclick="setBarcodePreviewType('code128')">CODE128</button>
        <button id="barcode-type-qr" class="filter-chip" onclick="setBarcodePreviewType('qr')">QR</button>
      </div>
      <div class="barcode-chip-row">
        <span class="pill success">바코드 방식</span>
        <span id="barcode-type-pill" class="pill info">1D CODE128</span>
        <span class="pill">즉시 출력 가능</span>
      </div>
      <div class="barcode-block">
        <div id="barcode-code-value" class="barcode-text">PK22024-LX21044-LOT2026041403</div>
        <div id="barcode-bars-view" class="barcode-bars" aria-label="CODE128 바코드 미리보기"></div>
        <div id="barcode-qr-view" class="barcode-qr" aria-label="QR 바코드 미리보기"></div>
        <div id="barcode-caption" class="barcode-caption">PK22024-LX21044-LOT2026041403</div>
      </div>
      <div class="kv" style="margin-top:14px;">
        <div class="kv-row"><span>대상</span><strong>PK-22024 / 현대 B현장</strong></div>
        <div class="kv-row"><span>연계 키</span><strong>제작번호 LX-21044 · LOT-20260414-03</strong></div>
        <div class="kv-row"><span>출력 수량</span><strong>2매</strong></div>
      </div>
    </div>`,
    `<button class="outline-btn" onclick="closeModal()">닫기</button>
     <button class="outline-btn" onclick="showLabelPreviewModal()">라벨 상세 미리보기</button>
     <button class="secondary-btn" onclick="showSaveSuccessModal('바코드 출력 완료', '신선-PRN-01 프린터로 바코드 라벨 2매를 즉시 출력했습니다.')">바로 출력</button>`
  );
  setBarcodePreviewType("code128");
}

function setBarcodePreviewType(type) {
  const codeBtn = document.getElementById("barcode-type-code128");
  const qrBtn = document.getElementById("barcode-type-qr");
  const typePill = document.getElementById("barcode-type-pill");
  const codeValue = document.getElementById("barcode-code-value");
  const barsView = document.getElementById("barcode-bars-view");
  const qrView = document.getElementById("barcode-qr-view");
  const caption = document.getElementById("barcode-caption");
  if (!codeBtn || !qrBtn || !typePill || !codeValue || !barsView || !qrView || !caption) return;

  const payload = "PK22024-LX21044-LOT2026041403";
  if (type === "qr") {
    codeBtn.classList.remove("active");
    qrBtn.classList.add("active");
    typePill.textContent = "2D QR";
    codeValue.textContent = payload;
    barsView.style.display = "none";
    qrView.style.display = "grid";
    caption.textContent = payload;
  } else {
    qrBtn.classList.remove("active");
    codeBtn.classList.add("active");
    typePill.textContent = "1D CODE128";
    codeValue.textContent = payload;
    qrView.style.display = "none";
    barsView.style.display = "block";
    caption.textContent = payload;
  }
}

function showCertPreviewModal() {
  showModal(
    "성적서 미리보기",
    `<div style="border:1px solid var(--surface-border); padding:20px; background:#fafafa;">
      <div style="font-size:15px; font-weight:800; margin-bottom:14px; text-align:center; letter-spacing:0.04em;">품질 성적서</div>
      <div class="kv">
        <div class="kv-row"><span>현장명</span><strong>삼성 A현장</strong></div>
        <div class="kv-row"><span>제작번호</span><strong>LX-20948</strong></div>
        <div class="kv-row"><span>고객사</span><strong>삼성</strong></div>
        <div class="kv-row"><span>발행일</span><strong>2026-04-14</strong></div>
        <div class="kv-row"><span>생산 수량</span><strong>42.8㎡</strong></div>
        <div class="kv-row"><span>부적합률</span><strong>0.82%</strong></div>
        <div class="kv-row"><span>로트번호</span><strong>LOT-8812</strong></div>
        <div class="kv-row"><span>KS 규격</span><strong>KS-DK-004</strong></div>
      </div>
    </div>`,
    `<button class="outline-btn" onclick="closeModal()">닫기</button>
     <button class="secondary-btn" onclick="showSaveSuccessModal('PDF 발행 완료', '삼성 A현장 LX-20948 성적서가 PDF로 발행되었습니다.')">PDF 발행</button>`
  );
}

// ── 공정별 비교 팝업 (오늘 vs 어제 맥락) ──────────────────────
const COMPARE_DATA = {
  wire: {
    name: "신선", today: 318, yesterday: 295, unit: "㎡",
    weekAvg: 309, diff: "+23㎡", diffPct: "+7.8%", trend: "up",
    context: "DR-02 점검 정지에도 불구 DR-01/03/04 풀가동으로 전일 대비 초과 달성",
    note: "이번 주 평균 대비 +2.9% 우수",
    fill: "wire",
  },
  tg: {
    name: "TG", today: 1124, yesterday: 1089, unit: "㎡",
    weekAvg: 1080, diff: "+35㎡", diffPct: "+3.2%", trend: "up",
    context: "TG-03 정지 42분(76㎡ 손실) 불구 나머지 6대 정상 가동으로 전일 초과",
    note: "TG-03 복구 시 목표 1,200㎡ 달성 가능",
    fill: "tg",
  },
  forming: {
    name: "포밍", today: 520, yesterday: 548, unit: "㎡",
    weekAvg: 541, diff: "-28㎡", diffPct: "-5.1%", trend: "down",
    context: "PRESS-FM-04 과열 점검 정지(13:48~)로 전일 대비 감소",
    note: "정지 지속 시 금일 목표(600㎡) 달성 어려울 수 있음",
    fill: "forming",
  },
  assembly: {
    name: "조립 (외주)", today: 363, yesterday: 328, unit: "㎡",
    weekAvg: 344, diff: "+35㎡", diffPct: "+10.7%", trend: "up",
    context: "외주 5라인 중 4라인 풀가동 + 외주 증산 요청 반영으로 목표 초과",
    note: "패킹 완료 18건 / 야적 위치 등록 3건 대기 중",
    fill: "assembly",
  },
};

function showProcessComparePopup(procKey) {
  const d = COMPARE_DATA[procKey];
  const todayPct = Math.round(d.today / Math.max(d.today, d.yesterday) * 100);
  const yestPct  = Math.round(d.yesterday / Math.max(d.today, d.yesterday) * 100);
  const trendColor = d.trend === "up" ? "#3a8c32" : "var(--danger)";
  const trendIcon  = d.trend === "up" ? "↑" : "↓";
  showModal(
    `${d.name} 생산량 비교`,
    `<div style="display:grid;gap:14px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
        <div style="padding:14px;background:var(--surface-soft);border:1px solid var(--surface-border);">
          <div style="font-size:11px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">오늘</div>
          <div style="font-size:28px;font-weight:800;letter-spacing:-.03em;">${d.today.toLocaleString()}${d.unit}</div>
        </div>
        <div style="padding:14px;background:#f8f8f8;border:1px solid var(--surface-border);">
          <div style="font-size:11px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;margin-bottom:8px;">어제</div>
          <div style="font-size:28px;font-weight:800;letter-spacing:-.03em;color:var(--muted);">${d.yesterday.toLocaleString()}${d.unit}</div>
        </div>
      </div>
      <div style="padding:14px;border:1px solid var(--surface-border);background:var(--surface);">
        <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
          <span style="font-size:12px;font-weight:700;color:var(--muted);">전일 대비</span>
          <span style="font-size:18px;font-weight:800;color:${trendColor};">${trendIcon} ${d.diff} (${d.diffPct})</span>
        </div>
        <div class="progress-list" style="gap:8px;">
          <div class="progress-item" style="gap:4px;">
            <div class="progress-head"><span class="progress-name">오늘</span><span class="progress-value">${todayPct}%</span></div>
            <div class="progress-track"><div class="progress-fill ${d.fill}" style="width:${todayPct}%"></div></div>
          </div>
          <div class="progress-item" style="gap:4px;">
            <div class="progress-head"><span class="progress-name" style="color:var(--muted)">어제</span><span class="progress-value" style="color:var(--muted)">${yestPct}%</span></div>
            <div class="progress-track"><div class="progress-fill" style="width:${yestPct}%;background:#c0c7d0;"></div></div>
          </div>
        </div>
      </div>
      <div style="padding:12px 14px;border-left:3px solid var(--accent);background:#f8fdf8;">
        <div style="font-size:12px;font-weight:800;color:var(--text);margin-bottom:4px;">분석</div>
        <div style="font-size:12px;color:var(--muted);line-height:1.5;">${d.context}</div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;font-size:12px;color:var(--muted);padding:0 2px;">
        <span>주간 평균 ${d.weekAvg.toLocaleString()}${d.unit}/일</span>
        <span style="font-weight:700;">${d.note}</span>
      </div>
    </div>`,
    `<button class="outline-btn" onclick="closeModal()">닫기</button>
     <button class="secondary-btn" onclick="closeModal();navTo('/production/${procKey}')">상세 실적 보기</button>`
  );
}

// ── 목표달성률 원인 분석 팝업 ──────────────────────────────────
const GOAL_DATA = {
  wire: {
    name: "신선", actual: 318, target: 342, pct: 93, fill: "wire",
    status: "주의", statusColor: "var(--warning)",
    cause: "DR-02 점검 정지 (금일 08:00~)",
    loss: "약 24㎡ 손실 추정",
    action: "DR-01/03/04 증산으로 일부 만회 중",
    outlook: "DR-02 복구 완료 시 목표 달성 가능 (예상 15:00)",
    link: "/production/wire",
  },
  tg: {
    name: "TG", actual: 1124, target: 1200, pct: 94, fill: "tg",
    status: "주의", statusColor: "var(--warning)",
    cause: "TG-03 접점 신호 지연 → 정지 42분 (11:48~)",
    loss: "약 76㎡ 손실 추정",
    action: "공무팀 현장 확인 중 (FAC-02 대응)",
    outlook: "TG-03 복구 지연 시 목표 미달 가능성 있음",
    link: "/production/tg",
  },
  forming: {
    name: "포밍", actual: 520, target: 600, pct: 87, fill: "forming",
    status: "위험", statusColor: "var(--danger)",
    cause: "PRESS-FM-04 과열 경고 → 점검 정지 (13:48~)",
    loss: "약 80㎡ 손실 추정 (정지 지속 중)",
    action: "FAC-02 현장 확인 / 온도 안정화 대기",
    outlook: "금일 목표 달성 어려움 — 조치 우선 필요",
    link: "/production/forming",
  },
  assembly: {
    name: "조립 (외주)", actual: 363, target: 328, pct: 111, fill: "assembly",
    status: "초과달성", statusColor: "var(--accent)",
    cause: "외주 라인 증산 요청 반영 (전주 대비 +2라인)",
    loss: "없음 (+35㎡ 초과)",
    action: "패킹 완료 18건, 야적 위치 등록 3건 대기 중",
    outlook: "외주 지연 건(LX-22018) 모니터링 필요",
    link: "/production/assembly",
  },
};

function showGoalDetailPopup(procKey) {
  const d = GOAL_DATA[procKey];
  return showModal(
    `${d.name} 목표 달성률 분석`,
    `<div style="display:grid;gap:14px;">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:14px;background:var(--surface-soft);border:1px solid var(--surface-border);">
        <div>
          <div style="font-size:11px;font-weight:800;color:var(--muted);letter-spacing:.06em;text-transform:uppercase;">달성률</div>
          <div style="font-size:36px;font-weight:800;letter-spacing:-.04em;">${d.pct}%</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:11px;font-weight:800;color:var(--muted);">실적 / 목표</div>
          <div style="font-size:18px;font-weight:800;">${d.actual.toLocaleString()}㎡ / ${d.target.toLocaleString()}㎡</div>
          <div style="margin-top:6px;font-size:12px;font-weight:800;color:${d.statusColor};">${d.status}</div>
        </div>
      </div>
      <div class="progress-track" style="height:12px;">
        <div class="progress-fill ${d.fill}" style="width:${Math.min(d.pct,100)}%"></div>
      </div>
      <div style="display:grid;gap:8px;">
        <div style="padding:10px 14px;border:1px solid var(--surface-border);background:var(--surface);display:grid;grid-template-columns:80px 1fr;gap:6px 12px;font-size:12px;">
          <span style="font-weight:800;color:var(--muted);">원인</span><span>${d.cause}</span>
          <span style="font-weight:800;color:var(--muted);">손실 추정</span><span style="color:${d.statusColor};font-weight:700;">${d.loss}</span>
          <span style="font-weight:800;color:var(--muted);">현재 조치</span><span>${d.action}</span>
          <span style="font-weight:800;color:var(--muted);">전망</span><span>${d.outlook}</span>
        </div>
      </div>
    </div>`,
    `<button class="outline-btn" onclick="closeModal()">닫기</button>
     <button class="secondary-btn" onclick="closeModal();navTo('${d.link}')">공정 실적 보기</button>`
  );
}

// ── 알림 상세 팝업 ─────────────────────────────────────────────
const ALERT_DETAIL = {
  material_inbound: {
    title: "원자재 입고 — LOT-20260416-02",
    type: "원자재 입고",
    typeColor: "var(--success)",
    time: "14:23",
    equipment: "입고창고 / LOT-20260416-02",
    detail: "영광선재 520kg 입고 처리 완료 — 검사 대기",
    impact: "신선 공정 투입 가능 물량 증가 / FIFO 기준 최신 로트 반영 필요",
    notified: "자재 담당 / 생산관리자",
    status: "입고 완료 (검사 대기)",
    links: ["/inventory/material", "/trace"],
    linkLabels: ["원자재/로트 조회", "추적 조회"],
  },
  wire_start: {
    title: "공정 이벤트 — 신선 공정 투입",
    type: "공정 돌입",
    typeColor: "#2f7dff",
    time: "13:55",
    equipment: "신선 공정 / DR-01",
    detail: "LOT-20260416-02 투입 시작 — 목표 140㎡ / 작업자 WIR-03",
    impact: "공정별 실적 집계 시작 / 후속 TG 공정 투입 일정에 영향",
    notified: "생산관리자",
    status: "진행중",
    links: ["/production/wire", "/production/progress"],
    linkLabels: ["신선 실적 보기", "공정 진행 조회"],
  },
  shipping_done: {
    title: "출하 완료 — PK-22024",
    type: "출하",
    typeColor: "var(--success)",
    time: "12:40",
    equipment: "출하 / 현대 B현장",
    detail: "PK-22024 출하 완료 처리 — 운송사 인계 완료",
    impact: "재고 자동 차감 / 납기 준수율 반영",
    notified: "출하 담당 / 영업",
    status: "완료",
    links: ["/inventory/shipping", "/inventory/yard"],
    linkLabels: ["출하 현황 조회", "야적장 위치 조회"],
  },
  defect: {
    title: "부적합 등록 — 포밍 / 치수 불량",
    type: "품질 이상",
    typeColor: "var(--warning)",
    time: "13:47",
    equipment: "FM-02 / 포밍 공정",
    detail: "형상 오차 12.4kg 부적합 등록 — LX-21018",
    impact: "부적합률 0.82% → 기준 초과 여부 검토 필요 / 재작업 여부 미결",
    notified: "품질팀 자동 알림 발송",
    status: "품질팀 검토 대기",
    links: ["/quality/analysis", "/quality/register"],
    linkLabels: ["부적합 분석", "부적합 등록"],
  },
  fifo: {
    title: "원자재 LOT-0142 FIFO 경고",
    type: "자재 경고",
    typeColor: "#2f7dff",
    time: "12:10",
    equipment: "신선 공정 / DR-01",
    detail: "LOT-20260401-01 이전 로트 잔량(420kg) 사용 전 이후 로트 투입 감지",
    impact: "선입선출 원칙 위반 / 로트 추적 체계 혼선 가능성",
    notified: "생산관리자",
    status: "담당자 확인 요청",
    links: ["/inventory/material", "/trace"],
    linkLabels: ["원자재/로트 조회", "추적 조회"],
  },
  outsource: {
    title: "외주 조립 W-2024-0681 지연",
    type: "외주 지연",
    typeColor: "#2f7dff",
    time: "11:00",
    equipment: "조립 외주 / LX-22018",
    detail: "완료 예정일(2026-04-14) 초과 — 현재 상태: 작업 중",
    impact: "연계 출하 일정 영향 가능 / 야적장 위치 등록 지연",
    notified: "생산관리자",
    status: "외주업체 진행 상황 재확인 필요",
    links: ["/outsource", "/inventory/shipping"],
    linkLabels: ["외주 현황 보기", "출하 현황 조회"],
  },
};

function showAlertDetailPopup(alertKey) {
  const d = ALERT_DETAIL[alertKey];
  showModal(
    d.title,
    `<div style="display:grid;gap:12px;">
      <div style="display:flex;align-items:center;justify-content:space-between;">
        <span style="font-size:12px;font-weight:800;padding:4px 10px;background:${d.typeColor}22;color:${d.typeColor};border-radius:4px;">${d.type}</span>
        <span style="font-size:12px;color:var(--muted);font-weight:700;">발생 ${d.time}</span>
      </div>
      <div style="display:grid;gap:6px;padding:14px;border:1px solid var(--surface-border);background:var(--surface-soft);font-size:12px;">
        <div style="display:grid;grid-template-columns:80px 1fr;gap:6px 12px;">
          <span style="font-weight:800;color:var(--muted);">대상</span><span>${d.equipment}</span>
          <span style="font-weight:800;color:var(--muted);">내용</span><span>${d.detail}</span>
        </div>
      </div>
      <div style="padding:12px 14px;border-left:3px solid ${d.typeColor};background:#fafafa;font-size:12px;">
        <div style="font-weight:800;margin-bottom:4px;color:var(--text);">영향 범위</div>
        <div style="color:var(--muted);line-height:1.5;">${d.impact}</div>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;font-size:12px;">
        <div style="padding:10px;border:1px solid var(--surface-border);">
          <div style="font-weight:800;color:var(--muted);margin-bottom:4px;">알림 대상</div>
          <div>${d.notified}</div>
        </div>
        <div style="padding:10px;border:1px solid var(--surface-border);">
          <div style="font-weight:800;color:var(--muted);margin-bottom:4px;">처리 상태</div>
          <div style="font-weight:700;">${d.status}</div>
        </div>
      </div>
    </div>`,
    `<button class="outline-btn" onclick="closeModal()">닫기</button>
     <button class="outline-btn" onclick="closeModal();navTo('${d.links[1]}')">${d.linkLabels[1]}</button>
     <button class="secondary-btn" onclick="closeModal();navTo('${d.links[0]}')">${d.linkLabels[0]}</button>`
  );
}

// ── 추이 차트 공정 요약 팝업 ───────────────────────────────────
const PROCESS_SUMMARY = {
  tg: {
    name: "TG", icon: "bolt",
    today: "1,124㎡", target: "1,200㎡", pct: 94, fill: "tg",
    running: "TG-01, 02, 04, 05, 07 (5대 가동중)",
    issue: "TG-03 정지 42분 / TG-06 대기",
    lastHour: "14:00 — 178㎡ (최고치)",
    link: "/production/tg",
  },
  assembly: {
    name: "조립", icon: "handyman",
    today: "363㎡", target: "328㎡", pct: 111, fill: "assembly",
    running: "1/3/4/5라인 가동 (4라인)",
    issue: "2라인 자재 교체 중",
    lastHour: "14:00 — 57㎡",
    link: "/production/assembly",
  },
  wire: {
    name: "신선", icon: "cable",
    today: "318㎡", target: "342㎡", pct: 93, fill: "wire",
    running: "DR-01, 03, 04 가동 (3대)",
    issue: "DR-02 점검 정지 중",
    lastHour: "14:00 — 52㎡",
    link: "/production/wire",
  },
  forming: {
    name: "포밍", icon: "compress",
    today: "520㎡", target: "600㎡", pct: 87, fill: "forming",
    running: "FM-01, FM-02 가동 (2대)",
    issue: "PRESS-FM-04 점검 정지 (13:48~)",
    lastHour: "14:00 — 72㎡",
    link: "/production/forming",
  },
};

function showProcessSummaryPopup(procKey) {
  const d = PROCESS_SUMMARY[procKey];
  return showModal(
    `${d.name} 공정 실시간 요약`,
    `<div style="display:grid;gap:12px;">
      <div style="display:flex;align-items:flex-end;justify-content:space-between;padding:14px;background:var(--surface-soft);border:1px solid var(--surface-border);">
        <div>
          <div style="font-size:11px;font-weight:800;color:var(--muted);text-transform:uppercase;letter-spacing:.06em;">금일 생산량</div>
          <div style="font-size:32px;font-weight:800;letter-spacing:-.03em;margin-top:4px;">${d.today}</div>
        </div>
        <div style="text-align:right;">
          <div style="font-size:12px;color:var(--muted);">목표 ${d.target}</div>
          <div style="font-size:20px;font-weight:800;color:${d.pct >= 100 ? "var(--accent)" : d.pct >= 90 ? "var(--warning)" : "var(--danger)"};">${d.pct}%</div>
        </div>
      </div>
      <div class="progress-track"><div class="progress-fill ${d.fill}" style="width:${Math.min(d.pct,100)}%"></div></div>
      <div style="display:grid;gap:8px;font-size:12px;">
        <div style="display:grid;grid-template-columns:80px 1fr;gap:6px 12px;padding:12px 14px;border:1px solid var(--surface-border);">
          <span style="font-weight:800;color:var(--muted);">가동 설비</span><span>${d.running}</span>
          <span style="font-weight:800;color:var(--muted);">이상/정지</span><span style="color:var(--warning);font-weight:700;">${d.issue}</span>
          <span style="font-weight:800;color:var(--muted);">최근 1시간</span><span>${d.lastHour}</span>
        </div>
      </div>
    </div>`,
    `<button class="outline-btn" onclick="closeModal()">닫기</button>
     <button class="secondary-btn" onclick="closeModal();navTo('${d.link}')">상세 실적 보기</button>`
  );
}

function showGoalBreakdownModal() {
  const targets = getTargets();
  const targetSum = targets.wire + targets.tg + targets.forming + targets.assembly;
  showModal(
    "목표 달성률 공정별 현황",
    `<div style="margin-bottom:16px; font-size:13px; color:var(--muted);">
      금일 기준 / 목표 대비 실적 (클릭 시 공정 상세 이동)
    </div>
    <div class="progress-list">
      <div class="progress-item" onclick="closeModal(); navTo('/production/wire')" style="cursor:pointer">
        <div class="progress-head">
          <span class="progress-name">신선</span>
          <span class="progress-value" style="color:#d4ad36;font-weight:800;">318㎡ / ${targets.wire.toLocaleString()}㎡ · 93%</span>
        </div>
        <div class="progress-track"><div class="progress-fill wire" style="width:93%"></div></div>
      </div>
      <div class="progress-item" onclick="closeModal(); navTo('/production/tg')" style="cursor:pointer">
        <div class="progress-head">
          <span class="progress-name">TG</span>
          <span class="progress-value" style="color:#2fbf5b;font-weight:800;">1,124㎡ / ${targets.tg.toLocaleString()}㎡ · 94%</span>
        </div>
        <div class="progress-track"><div class="progress-fill tg" style="width:94%"></div></div>
      </div>
      <div class="progress-item" onclick="closeModal(); navTo('/production/forming')" style="cursor:pointer">
        <div class="progress-head">
          <span class="progress-name">포밍</span>
          <span class="progress-value" style="color:#d4ad36;font-weight:800;">520㎡ / ${targets.forming.toLocaleString()}㎡ · 87%</span>
        </div>
        <div class="progress-track"><div class="progress-fill forming" style="width:87%"></div></div>
      </div>
      <div class="progress-item" onclick="closeModal(); navTo('/production/assembly')" style="cursor:pointer">
        <div class="progress-head">
          <span class="progress-name">조립 (외주)</span>
          <span class="progress-value" style="color:#60AC56;font-weight:800;">363㎡ / ${targets.assembly.toLocaleString()}㎡ · 111%</span>
        </div>
        <div class="progress-track"><div class="progress-fill assembly" style="width:100%"></div></div>
      </div>
    </div>
    <div style="margin-top:18px; padding-top:14px; border-top:1px solid var(--surface-border); display:flex; justify-content:space-between; align-items:center;">
      <span style="font-size:13px; color:var(--muted);">4공정 합산</span>
      <span style="font-size:20px; font-weight:800;">2,325㎡ / ${targetSum.toLocaleString()}㎡ <span style="color:var(--accent);">94%</span></span>
    </div>`,
    `<button class="outline-btn" onclick="closeModal()">닫기</button>
     <button class="secondary-btn" onclick="closeModal(); navTo('/production/results')">실적 종합 현황</button>`
  );
}

function showOutsourceRegisterModal() {
  showModal(
    "지시 등록",
    `<div class="kv">
      <div class="kv-row"><span>등록 유형</span><strong>외주 조립 지시</strong></div>
    </div>
    <label class="modal-input-label">제작번호</label>
    <input type="text" placeholder="예: LX-22025" />
    <label class="modal-input-label">지시 내용</label>
    <input type="text" placeholder="조립 사양, 수량, 납기 입력" />
    <label class="modal-input-label">완료 예정일</label>
    <input type="text" placeholder="예: 2026-04-20" />`,
    `<button class="outline-btn" onclick="closeModal()">취소</button>
     <button class="secondary-btn" onclick="showSaveSuccessModal('지시 등록 완료', '외주 조립 지시가 등록되었습니다.')">등록</button>`
  );
}

function parseHashState() {
  const raw = location.hash.replace(/^#/, "") || "/dashboard";
  const [pathPart, queryString = ""] = raw.split("?");
  return {
    path: pathPart || "/dashboard",
    params: new URLSearchParams(queryString),
  };
}

function init() {
  applyTargets(loadTargets());
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
  topbarActionsEl.dataset.scope = (path === "/dashboard" || path === "/dashboard/board") ? "dashboard" : "default";
  topbarActionsEl.innerHTML = renderTopbarActions(path);
  renderNav();
  appEl.innerHTML = route.render(params);
}

function renderTopbarActions(path) {
  if (path === "/production/target") {
    return `
      <div class="topbar-badge">단위 ㎡</div>
      <button class="ghost-btn" onclick="handleTargetReset()">기본값 복원</button>
      <button class="primary-btn" onclick="handleTargetSave()">목표 저장</button>
    `;
  }

  if (path === "/dashboard" || path === "/dashboard/board") {
    return `
      <div class="topbar-badge">기준일 2026-04-15</div>
      <button class="ghost-btn" onclick="showSaveSuccessModal('현황 새로고침', '최신 데이터로 업데이트되었습니다.')">현황 새로고침</button>
      <button class="primary-btn" onclick="showSaveSuccessModal('보고서 다운로드', '금일 생산 현황 보고서 다운로드가 시작되었습니다.')">보고서 다운로드</button>
    `;
  }

  if (path.startsWith("/production") || path === "/trace" || path.startsWith("/inventory")) {
    return `
      <label class="search-box">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder="제작번호, 현장명, 패킹번호 검색" />
      </label>
      <button class="ghost-btn" onclick="showSaveSuccessModal('필터 초기화', '검색 조건이 초기화되었습니다.')">필터 초기화</button>
      <button class="primary-btn" onclick="showSaveSuccessModal('조회 완료', '검색 결과를 불러왔습니다.')">조회 실행</button>
    `;
  }

  if (path.startsWith("/quality")) {
    return `
      <label class="search-box">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder="제작번호, 부적합 유형 검색" />
      </label>
      <button class="ghost-btn" onclick="showSaveSuccessModal('초기화 완료', '검색 조건이 초기화되었습니다.')">초기화</button>
      <button class="primary-btn" onclick="showSaveSuccessModal('저장 완료', '변경사항이 저장되었습니다.')">저장/발행</button>
    `;
  }

  if (path.startsWith("/facility")) {
    return `
      <label class="search-box">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder="설비명, 이슈유형, 조치상태 검색" />
      </label>
      <button class="ghost-btn" onclick="showSaveSuccessModal('이슈 등록 완료', '설비 이슈 등록이 접수되었습니다.')">이슈 등록</button>
      <button class="primary-btn" onclick="navTo('/facility/history')">설비 이력 보기</button>
    `;
  }

  if (path === "/outsource") {
    return `
      <label class="search-box">
        <span class="material-symbols-outlined">search</span>
        <input type="text" placeholder="제작번호, 외주 상태 검색" />
      </label>
      <button class="ghost-btn" onclick="showOutsourceRegisterModal()">지시 등록</button>
      <button class="primary-btn" onclick="showSaveSuccessModal('상태 저장 완료', '변경사항이 저장되었습니다.')">상태 저장</button>
    `;
  }

  return `
    <label class="search-box">
      <span class="material-symbols-outlined">search</span>
      <input type="text" placeholder="검색" />
    </label>
  `;
}

function metricCard(label, value, sub, tone = "", link = "") {
  const clickAttr = link ? `onclick="navTo('${link}')" style="cursor:pointer"` : "";
  return `
    <div class="metric-card ${tone}" ${clickAttr}>
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

function equipmentCard(name, state, signal, score, tone = "", link = "") {
  const clickAttr = link ? `onclick="navTo('${link}')" style="cursor:pointer"` : "";
  return `
    <div class="equipment-card ${tone}" ${clickAttr}>
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
        <div class="legend-item" onclick="showProcessSummaryPopup('tg')" style="cursor:pointer" title="TG 실시간 요약"><span class="legend-swatch tg"></span><span>TG</span></div>
        <div class="legend-item" onclick="showProcessSummaryPopup('assembly')" style="cursor:pointer" title="조립 실시간 요약"><span class="legend-swatch assembly"></span><span>조립</span></div>
        <div class="legend-item" onclick="showProcessSummaryPopup('wire')" style="cursor:pointer" title="신선 실시간 요약"><span class="legend-swatch wire"></span><span>신선</span></div>
        <div class="legend-item" onclick="showProcessSummaryPopup('forming')" style="cursor:pointer" title="포밍 실시간 요약"><span class="legend-swatch forming"></span><span>포밍</span></div>
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
          <div class="legend-item"><span class="legend-swatch wire"></span><span>신선</span></div>
          <div class="legend-item"><span class="legend-swatch tg"></span><span>TG</span></div>
          <div class="legend-item"><span class="legend-swatch forming"></span><span>포밍</span></div>
          <div class="legend-item"><span class="legend-swatch assembly"></span><span>조립</span></div>
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

        <rect x="72" y="70" width="54" height="108" rx="6" class="compare-bar wire" onclick="showProcessComparePopup('wire')" style="cursor:pointer"></rect>
        <rect x="134" y="82" width="54" height="96" rx="6" class="compare-bar yesterday" onclick="showProcessComparePopup('wire')" style="cursor:pointer"></rect>

        <rect x="236" y="38" width="54" height="140" rx="6" class="compare-bar tg" onclick="showProcessComparePopup('tg')" style="cursor:pointer"></rect>
        <rect x="298" y="56" width="54" height="122" rx="6" class="compare-bar yesterday" onclick="showProcessComparePopup('tg')" style="cursor:pointer"></rect>

        <rect x="400" y="112" width="54" height="66" rx="6" class="compare-bar forming" onclick="showProcessComparePopup('forming')" style="cursor:pointer"></rect>
        <rect x="462" y="98" width="54" height="80" rx="6" class="compare-bar yesterday" onclick="showProcessComparePopup('forming')" style="cursor:pointer"></rect>

        <rect x="564" y="132" width="54" height="46" rx="6" class="compare-bar assembly" onclick="showProcessComparePopup('assembly')" style="cursor:pointer"></rect>
        <rect x="626" y="144" width="54" height="34" rx="6" class="compare-bar yesterday" onclick="showProcessComparePopup('assembly')" style="cursor:pointer"></rect>

        <text x="130" y="206" text-anchor="middle" class="trend-x-label" onclick="showProcessComparePopup('wire')" style="cursor:pointer">신선</text>
        <text x="294" y="206" text-anchor="middle" class="trend-x-label" onclick="showProcessComparePopup('tg')" style="cursor:pointer">TG</text>
        <text x="458" y="206" text-anchor="middle" class="trend-x-label" onclick="showProcessComparePopup('forming')" style="cursor:pointer">포밍</text>
        <text x="622" y="206" text-anchor="middle" class="trend-x-label" onclick="showProcessComparePopup('assembly')" style="cursor:pointer">조립(외주)</text>
      </svg>
    </div>
  `;
}

function renderDashboard() {
  const targets = getTargets();
  return `
    <div class="stack">
      <div class="metric-grid">
        ${metricCard("금일 총 생산량", "2,847㎡", "전일 대비 +12.4%", "success", "/production/results")}
        <div class="metric-card success" onclick="showGoalBreakdownModal()" style="cursor:pointer">
          <div class="metric-label">목표 달성률</div>
          <div class="metric-value">94%</div>
          <div class="metric-sub">공정별 달성 현황 보기 →</div>
        </div>
        ${metricCard("부적합 건수", "3건", "전일 대비 1건 증가", "warning", "/quality/analysis")}
        ${metricCard("출하 완료", "3건", "금일 인계 완료 · PK-22024 포함", "success", "/inventory/shipping")}
      </div>

      <div class="dashboard-top-layout">
        <div class="dashboard-main-column">
          <section class="panel">
            <div class="panel-title">
              <h3>시간대별 생산량 추이</h3>
              <div style="display:flex;align-items:center;gap:12px;">
                <span class="panel-note">금일 기준 4개 공정 누계 · 범례 클릭 시 공정별 이동</span>
                <button class="outline-btn" onclick="navTo('/production/trend')" style="padding:5px 12px;font-size:11px;white-space:nowrap;">원본 데이터 보기</button>
              </div>
            </div>
            ${trendChart()}
          </section>
        </div>

        <div class="dashboard-side-column">
          <section class="panel equipment-panel">
            <div class="panel-title">
              <h3>주요 설비 이슈 현황</h3>
              <button class="outline-btn" onclick="navTo('/facility/equipment')" style="padding:5px 12px;font-size:11px;white-space:nowrap;">설비 목록 보기</button>
            </div>
            <div class="equipment-grid">
              ${equipmentCard("TG-01", "정상", "기준정보 확인", "A", "normal", "/facility/equipment")}
              ${equipmentCard("TG-02", "정상", "기준정보 확인", "A", "normal", "/facility/equipment")}
              ${equipmentCard("TG-03", "고장", "정지 42분 · 미조치", "긴급", "danger", "/facility/issues")}
              ${equipmentCard("TG-04", "정상", "기준정보 확인", "A", "normal", "/facility/equipment")}
              ${equipmentCard("TG-05", "정상", "기준정보 확인", "A", "normal", "/facility/equipment")}
              ${equipmentCard("TG-06", "자재 이슈", "대기 · 조치중", "확인", "warning", "/facility/issues")}
              ${equipmentCard("TG-07", "정상", "기준정보 확인", "A", "normal", "/facility/equipment")}
            </div>
          </section>
        </div>
      </div>

      <div class="dashboard-bottom-layout">
        <section class="panel">
          <div class="panel-title">
            <h3>공정별 생산량 비교</h3>
            <div style="display:flex;align-items:center;gap:12px;">
              <span class="panel-note">오늘/어제 · 막대 클릭 시 공정 이동</span>
              <button class="outline-btn" onclick="navTo('/production/results')" style="padding:5px 12px;font-size:11px;white-space:nowrap;">실적 현황 보기</button>
            </div>
          </div>
          ${productionCompareChart()}
        </section>

        <section class="panel">
          <div class="panel-title">
            <h3>공정별 목표 달성률</h3>
            <span class="panel-note" style="cursor:default">클릭 → 공정별 상세</span>
          </div>
          <div class="progress-list">
            <div class="progress-item" onclick="showGoalDetailPopup('wire')" style="cursor:pointer">
              <div class="progress-head">
                <span class="progress-name">신선</span>
                <span class="progress-value">318㎡ / ${targets.wire.toLocaleString()}㎡ · 93%</span>
              </div>
              <div class="progress-track"><div class="progress-fill wire" style="width:93%"></div></div>
            </div>
            <div class="progress-item" onclick="showGoalDetailPopup('tg')" style="cursor:pointer">
              <div class="progress-head">
                <span class="progress-name">TG</span>
                <span class="progress-value">1,124㎡ / ${targets.tg.toLocaleString()}㎡ · 94%</span>
              </div>
              <div class="progress-track"><div class="progress-fill tg" style="width:94%"></div></div>
            </div>
            <div class="progress-item" onclick="showGoalDetailPopup('forming')" style="cursor:pointer">
              <div class="progress-head">
                <span class="progress-name">포밍</span>
                <span class="progress-value">520㎡ / ${targets.forming.toLocaleString()}㎡ · 87%</span>
              </div>
              <div class="progress-track"><div class="progress-fill forming" style="width:87%"></div></div>
            </div>
            <div class="progress-item" onclick="showGoalDetailPopup('assembly')" style="cursor:pointer">
              <div class="progress-head">
                <span class="progress-name">조립 (외주)</span>
                <span class="progress-value">363㎡ / ${targets.assembly.toLocaleString()}㎡ · 111%</span>
              </div>
              <div class="progress-track"><div class="progress-fill assembly" style="width:100%"></div></div>
            </div>
          </div>
        </section>

        <section class="panel recent-alerts-panel">
          <div class="panel-title">
            <h3>최근 이벤트</h3>
            <button class="outline-btn" onclick="navTo('/trace')" style="padding:5px 12px;font-size:11px;white-space:nowrap;">흐름 추적으로 보기</button>
          </div>
          <div class="alert-list">
            <div class="alert-item success" onclick="showAlertDetailPopup('material_inbound')" style="cursor:pointer">
              <div class="alert-head">
                <div class="alert-title">원자재 입고 — LOT-20260416-02</div>
                <div class="alert-time">14:23</div>
              </div>
              <div class="alert-text">입고 완료 · 검사 대기 상태입니다.</div>
            </div>
            <div class="alert-item info" onclick="showAlertDetailPopup('wire_start')" style="cursor:pointer">
              <div class="alert-head">
                <div class="alert-title">공정 이벤트 — 신선 공정 투입</div>
                <div class="alert-time">13:55</div>
              </div>
              <div class="alert-text">DR-01 투입 시작 · 실적 집계가 시작됩니다.</div>
            </div>
            <div class="alert-item warning" onclick="showAlertDetailPopup('defect')" style="cursor:pointer">
              <div class="alert-head">
                <div class="alert-title">부적합 등록 — 포밍 / 치수 불량</div>
                <div class="alert-time">13:47</div>
              </div>
              <div class="alert-text">재작업 여부 확인이 필요합니다.</div>
            </div>
            <div class="alert-item success" onclick="showAlertDetailPopup('shipping_done')" style="cursor:pointer">
              <div class="alert-head">
                <div class="alert-title">출하 완료 — PK-22024</div>
                <div class="alert-time">12:40</div>
              </div>
              <div class="alert-text">운송사 인계 완료 · 재고 차감 반영.</div>
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
        ${metricCard("신선", "318㎡", "금일 생산량 · 93%", "", "/production/wire")}
        ${metricCard("TG", "1,124㎡", "실시간 집계 · 94%", "", "/production/tg")}
        ${metricCard("포밍", "520㎡", "완료 수량 · 87%", "", "/production/forming")}
        ${metricCard("조립", "363㎡", "패킹 완료 18건", "", "/production/assembly")}
      </div>
      <section class="panel">
        <div class="panel-title">
          <h3>현장 사이니지 화면</h3>
          <span class="panel-note">TV / 대형 모니터 전용</span>
        </div>
        <div class="status-grid">
          <div onclick="navTo('/facility/issues')" style="cursor:pointer">${statusCard("설비 이슈", "미조치 1건 / 조치중 2건", "-", "-", "-", "warning")}</div>
          <div onclick="navTo('/production/assembly')" style="cursor:pointer">${statusCard("조립 5라인", "4라인 정상 / 1라인 지연", "-", "-", "-", "")}</div>
          <div onclick="navTo('/quality/analysis')" style="cursor:pointer">${statusCard("품질 이상", "금일 4건", "-", "-", "-", "danger")}</div>
          <div onclick="navTo('/inventory/shipping')" style="cursor:pointer">${statusCard("출하 예정", "18건", "-", "-", "-", "success")}</div>
        </div>
      </section>
    </div>
  `;
}

function renderResults(params = new URLSearchParams()) {
  const period = params.get("period") || "day";
  const periodLabel = period === "week" ? "주간" : period === "month" ? "월간" : "금일";
  const totals = {
    day:   { wire: "318㎡", tg: "1,124㎡", forming: "520㎡", assembly: "363㎡", sum: "2,325㎡", correction: "12건" },
    week:  { wire: "2,140㎡", tg: "7,230㎡", forming: "3,360㎡", assembly: "2,112㎡", sum: "14,842㎡", correction: "38건" },
    month: { wire: "8,210㎡", tg: "28,460㎡", forming: "13,080㎡", assembly: "8,400㎡", sum: "58,150㎡", correction: "142건" },
  };
  const d = totals[period] || totals.day;
  return `
    <div class="stack">
      <div class="filter-row">
        ${filterChipLink("금일", "/production/results", { period: "day" }, period === "day")}
        ${filterChipLink("주간", "/production/results", { period: "week" }, period === "week")}
        ${filterChipLink("월간", "/production/results", { period: "month" }, period === "month")}
      </div>

      <div class="metric-grid">
        ${metricCard("4공정 합계 생산량", d.sum, `${periodLabel} 기준`, "success")}
        ${metricCard("목표 달성률", "94%", "목표 대비 전체 집계", "success")}
        ${metricCard("수동 보정", d.correction, "자동 수집 예외 건", "warning")}
        ${metricCard("설비 이슈", "1건", "TG-03 고장 접수 필요", "danger", "/facility/issues")}
      </div>

      <div class="metric-grid" style="grid-template-columns: repeat(4,minmax(0,1fr));">
        <div class="panel" style="cursor:pointer" onclick="navTo('/production/wire')">
          <div class="panel-title"><h3>신선</h3><span class="panel-note">DR-01~04 · OPC</span></div>
          <div style="font-size:32px; font-weight:800; letter-spacing:-0.03em; margin:8px 0 4px;">${d.wire}</div>
          <div style="font-size:12px; color:var(--muted); font-weight:700;">목표 달성률 93% · 설비 3/4 가동</div>
          <div class="btn-row" style="margin-top:14px">
            <button class="secondary-btn" onclick="event.stopPropagation(); navTo('/production/wire')">상세 보기</button>
          </div>
        </div>
        <div class="panel" style="cursor:pointer" onclick="navTo('/production/tg')">
          <div class="panel-title"><h3>TG</h3><span class="panel-note">TG-01~07 · 접점</span></div>
          <div style="font-size:32px; font-weight:800; letter-spacing:-0.03em; margin:8px 0 4px;">${d.tg}</div>
          <div style="font-size:12px; color:var(--muted); font-weight:700;">목표 달성률 94% · 설비 6/7 가동</div>
          <div class="btn-row" style="margin-top:14px">
            <button class="secondary-btn" onclick="event.stopPropagation(); navTo('/production/tg')">상세 보기</button>
          </div>
        </div>
        <div class="panel" style="cursor:pointer" onclick="navTo('/production/forming')">
          <div class="panel-title"><h3>포밍</h3><span class="panel-note">FM-01~03 · OPC</span></div>
          <div style="font-size:32px; font-weight:800; letter-spacing:-0.03em; margin:8px 0 4px;">${d.forming}</div>
          <div style="font-size:12px; color:var(--muted); font-weight:700;">목표 달성률 87% · 설비 2/3 가동</div>
          <div class="btn-row" style="margin-top:14px">
            <button class="secondary-btn" onclick="event.stopPropagation(); navTo('/production/forming')">상세 보기</button>
          </div>
        </div>
        <div class="panel" style="cursor:pointer" onclick="navTo('/production/assembly')">
          <div class="panel-title"><h3>조립 (외주)</h3><span class="panel-note">1~5라인 · OPC</span></div>
          <div style="font-size:32px; font-weight:800; letter-spacing:-0.03em; margin:8px 0 4px;">${d.assembly}</div>
          <div style="font-size:12px; color:var(--muted); font-weight:700;">목표 달성률 111% · 라인 4/5 가동</div>
          <div class="btn-row" style="margin-top:14px">
            <button class="secondary-btn" onclick="event.stopPropagation(); navTo('/production/assembly')">상세 보기</button>
          </div>
        </div>
      </div>

      <section class="table-card">
        <div class="panel-title">
          <h3>최근 실적 로그</h3>
          <span class="panel-note">공정별 실적이 흩어져 보이던 문제를 해결하기 위한 화면입니다</span>
        </div>
        <table>
          <thead>
            <tr><th>일시</th><th>공정</th><th>설비</th><th>생산량(㎡)</th><th>수집 방식</th><th>보정</th></tr>
          </thead>
          <tbody>
            <tr style="cursor:pointer" onclick="navTo('/production/tg')"><td>2026-04-14 14:32</td><td>TG</td><td>TG-01</td><td>46㎡</td><td>접점 신호</td><td><span class="pill success">자동</span></td></tr>
            <tr style="cursor:pointer" onclick="navTo('/production/forming')"><td>2026-04-14 13:48</td><td>포밍</td><td>FM-02</td><td>61㎡</td><td>OPC</td><td><span class="pill success">자동</span></td></tr>
            <tr style="cursor:pointer" onclick="navTo('/production/assembly')"><td>2026-04-14 12:10</td><td>조립</td><td>조립 3라인</td><td>44㎡</td><td>수동 입력</td><td><span class="pill warning">보정</span></td></tr>
            <tr style="cursor:pointer" onclick="navTo('/production/wire')"><td>2026-04-14 11:22</td><td>신선</td><td>DR-01</td><td>72㎡</td><td>OPC</td><td><span class="pill success">자동</span></td></tr>
          </tbody>
        </table>
      </section>
    </div>
  `;
}

function renderTrend(params = new URLSearchParams()) {
  const proc = params.get("proc") || "all";
  const hours = [
    { t: "08:00", wire: 40,  tg: 148, form: 68,  asm: 46  },
    { t: "09:00", wire: 44,  tg: 158, form: 72,  asm: 50  },
    { t: "10:00", wire: 48,  tg: 164, form: 76,  asm: 52  },
    { t: "11:00", wire: 46,  tg: 170, form: 80,  asm: 56  },
    { t: "12:00", wire: 38,  tg: 156, form: 70,  asm: 48  },
    { t: "13:00", wire: 50,  tg: 172, form: 82,  asm: 54  },
    { t: "14:00", wire: 52,  tg: 178, form: 72,  asm: 57  },
    { t: "15:00*",wire: "—", tg: "진행중", form: "진행중", asm: "진행중" },
  ];
  const totals = { wire: 318, tg: 1146, form: 520, asm: 363, sum: 2347 };
  const peakRow = hours[6]; // 14:00 최고
  const peakSum = peakRow.wire + peakRow.tg + peakRow.form + peakRow.asm;
  const maxBarWidth = (v, max) => typeof v === "number" ? Math.round((v / max) * 100) : 0;

  function procRow(row) {
    if (proc === "all") {
      const sum = typeof row.wire === "number" ? row.wire + row.tg + row.form + row.asm : "—";
      return `<tr>
        <td><strong>${row.t}</strong></td>
        <td>${row.wire}${typeof row.wire === "number" ? "㎡" : ""}</td>
        <td>${row.tg}${typeof row.tg === "number" ? "㎡" : ""}</td>
        <td>${row.form}${typeof row.form === "number" ? "㎡" : ""}</td>
        <td>${row.asm}${typeof row.asm === "number" ? "㎡" : ""}</td>
        <td><strong>${typeof sum === "number" ? sum + "㎡" : "—"}</strong></td>
      </tr>`;
    }
    const val = row[proc === "wire" ? "wire" : proc === "tg" ? "tg" : proc === "forming" ? "form" : "asm"];
    const maxVal = proc === "tg" ? 178 : proc === "forming" ? 82 : proc === "assembly" ? 57 : 52;
    return `<tr>
      <td><strong>${row.t}</strong></td>
      <td>${val}${typeof val === "number" ? "㎡" : ""}</td>
      <td style="width:60%">
        <div class="progress-track" style="margin:0">
          <div class="progress-fill ${proc === "tg" ? "tg" : proc === "forming" ? "forming" : proc === "assembly" ? "assembly" : "wire"}"
            style="width:${maxBarWidth(val, maxVal)}%"></div>
        </div>
      </td>
    </tr>`;
  }

  return `
    <div class="stack">
      <div class="filter-row">
        ${filterChipLink("전체 공정", "/production/trend", { proc: "all" }, proc === "all")}
        ${filterChipLink("신선", "/production/trend", { proc: "wire" }, proc === "wire")}
        ${filterChipLink("TG", "/production/trend", { proc: "tg" }, proc === "tg")}
        ${filterChipLink("포밍", "/production/trend", { proc: "forming" }, proc === "forming")}
        ${filterChipLink("조립", "/production/trend", { proc: "assembly" }, proc === "assembly")}
      </div>

      <div class="metric-grid">
        ${metricCard("금일 누계 (08~14시)", `${totals.sum.toLocaleString()}㎡`, "4개 공정 합산 집계", "success")}
        ${metricCard("시간당 최고 생산", `${peakSum}㎡`, "14:00 기준 최고치", "")}
        ${metricCard("시간당 최저 생산", "302㎡", "08:00 기준 최저치", "")}
        ${metricCard("설비 이슈 발생", "1건", "TG-03 11:48 고장 접수", "warning", "/facility/issues")}
      </div>

      <div class="split-layout">
        <section class="table-card">
          <div class="panel-title">
            <h3>시간대별 실적 원본 데이터</h3>
            <span class="panel-note">대시보드 추이 차트의 기반 데이터입니다 — 각 수치는 해당 시간대 1시간 생산량입니다</span>
          </div>
          ${proc === "all" ? `
          <table>
            <thead>
              <tr>
                <th>시간대</th>
                <th style="color:#d4ad36">신선</th>
                <th style="color:#2fbf5b">TG</th>
                <th style="color:#d4ad36">포밍</th>
                <th style="color:#7b57d1">조립</th>
                <th>시간 합계</th>
              </tr>
            </thead>
            <tbody>
              ${hours.map(r => procRow(r)).join("")}
              <tr style="background:var(--surface-soft); font-weight:800;">
                <td>합계</td>
                <td>${totals.wire}㎡</td>
                <td>${totals.tg.toLocaleString()}㎡</td>
                <td>${totals.form}㎡</td>
                <td>${totals.asm}㎡</td>
                <td>${totals.sum.toLocaleString()}㎡</td>
              </tr>
            </tbody>
          </table>
          ` : `
          <table>
            <thead>
              <tr>
                <th>시간대</th>
                <th>생산량</th>
                <th>비율 (최고치 대비)</th>
              </tr>
            </thead>
            <tbody>${hours.map(r => procRow(r)).join("")}</tbody>
          </table>
          `}
        </section>

        <aside class="detail-panel">
          <div class="detail-block">
            <h4>공정별 누계</h4>
            <div class="progress-list">
              <div class="progress-item" onclick="navTo('/production/wire')" style="cursor:pointer">
                <div class="progress-head"><span class="progress-name">신선</span><span class="progress-value">${totals.wire}㎡</span></div>
                <div class="progress-track"><div class="progress-fill wire" style="width:${Math.round(totals.wire/totals.sum*100)}%"></div></div>
              </div>
              <div class="progress-item" onclick="navTo('/production/tg')" style="cursor:pointer">
                <div class="progress-head"><span class="progress-name">TG</span><span class="progress-value">${totals.tg.toLocaleString()}㎡</span></div>
                <div class="progress-track"><div class="progress-fill tg" style="width:${Math.round(totals.tg/totals.sum*100)}%"></div></div>
              </div>
              <div class="progress-item" onclick="navTo('/production/forming')" style="cursor:pointer">
                <div class="progress-head"><span class="progress-name">포밍</span><span class="progress-value">${totals.form}㎡</span></div>
                <div class="progress-track"><div class="progress-fill forming" style="width:${Math.round(totals.form/totals.sum*100)}%"></div></div>
              </div>
              <div class="progress-item" onclick="navTo('/production/assembly')" style="cursor:pointer">
                <div class="progress-head"><span class="progress-name">조립</span><span class="progress-value">${totals.asm}㎡</span></div>
                <div class="progress-track"><div class="progress-fill assembly" style="width:${Math.round(totals.asm/totals.sum*100)}%"></div></div>
              </div>
            </div>
          </div>
          <div class="detail-block">
            <h4>이상 구간</h4>
            <div class="timeline compact">
              <div class="timeline-item">
                <div class="timeline-dot open"></div>
                <div>
                  <div class="timeline-title">TG-03 접점 지연</div>
                  <div class="timeline-sub">11:48 ~ 현재 수집 중단</div>
                </div>
                <div class="timeline-time">11:48</div>
              </div>
              <div class="timeline-item">
                <div class="timeline-dot"></div>
                <div>
                  <div class="timeline-title">조립 3라인 수동 보정</div>
                  <div class="timeline-sub">12:10 수기 입력 처리</div>
                </div>
                <div class="timeline-time">12:10</div>
              </div>
            </div>
          </div>
          <div class="btn-row">
            <button class="outline-btn" onclick="navTo('/dashboard')">대시보드로 돌아가기</button>
            <button class="secondary-btn" onclick="navTo('/production/results')">실적 종합 현황</button>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function renderWire() {
  const targets = getTargets();
  return `
    <div class="stack">
      <div class="metric-grid">
        ${metricCard("금일 신선 생산량", "318㎡", `목표 ${targets.wire.toLocaleString()}㎡ / 달성률 93%`, "success")}
        ${metricCard("설비 가동", "3/4대", "DR-02 점검 정지 중", "warning")}
        ${metricCard("수동 보정", "2건", "OPC 수집 예외", "warning")}
        ${metricCard("누적 로트", "3건", "LOT-20260414-01~03", "")}
      </div>
      <div class="split-layout">
        <section class="table-card">
          <div class="panel-title">
            <h3>설비별 신선 실적</h3>
            <span class="panel-note">신선 설비 4대의 OPC 기반 생산 실적을 설비 단위로 조회합니다</span>
          </div>
          <table>
            <thead><tr><th>설비</th><th>금일 생산량</th><th>가동 시간</th><th>마지막 실적</th><th>수집</th><th>상태</th></tr></thead>
            <tbody>
              <tr><td class="mono">DR-01</td><td>118㎡</td><td>6h 40m</td><td>14:18</td><td>OPC</td><td><span class="pill success">가동중</span></td></tr>
              <tr><td class="mono">DR-02</td><td>—</td><td>0h</td><td>09:12</td><td>—</td><td><span class="pill danger">점검 정지</span></td></tr>
              <tr><td class="mono">DR-03</td><td>96㎡</td><td>5h 20m</td><td>14:05</td><td>OPC</td><td><span class="pill success">가동중</span></td></tr>
              <tr><td class="mono">DR-04</td><td>104㎡</td><td>6h 10m</td><td>14:22</td><td>OPC</td><td><span class="pill success">가동중</span></td></tr>
            </tbody>
          </table>
          <div style="margin-top:18px; border-top:1px solid var(--surface-border); padding-top:16px;">
            <div class="panel-title compact"><h3>시간대별 생산 추이</h3></div>
            <div class="progress-list">
              <div class="progress-item">
                <div class="progress-head"><span class="progress-name">DR-01</span><span class="progress-value">118㎡ / 140㎡</span></div>
                <div class="progress-track"><div class="progress-fill wire" style="width:84%"></div></div>
              </div>
              <div class="progress-item">
                <div class="progress-head"><span class="progress-name">DR-03</span><span class="progress-value">96㎡ / 100㎡</span></div>
                <div class="progress-track"><div class="progress-fill wire" style="width:96%"></div></div>
              </div>
              <div class="progress-item">
                <div class="progress-head"><span class="progress-name">DR-04</span><span class="progress-value">104㎡ / 102㎡</span></div>
                <div class="progress-track"><div class="progress-fill wire" style="width:100%"></div></div>
              </div>
            </div>
          </div>
        </section>
        <aside class="detail-panel">
          <div class="detail-block">
            <h4>DR-01 상세</h4>
            <div class="kv">
              <div class="kv-row"><span>설비 상태</span><strong>가동중</strong></div>
              <div class="kv-row"><span>수집 방식</span><strong>OPC 자동</strong></div>
              <div class="kv-row"><span>금일 생산량</span><strong>118㎡</strong></div>
              <div class="kv-row"><span>로트번호</span><strong>LOT-20260414-01</strong></div>
              <div class="kv-row"><span>마지막 실적</span><strong>2026-04-14 14:18</strong></div>
            </div>
          </div>
          <div class="detail-block">
            <h4>최근 실적 타임라인</h4>
            <div class="timeline compact">
              <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">DR-01 42㎡ 수집</div><div class="timeline-sub">OPC 자동 반영</div></div><div class="timeline-time">14:18</div></div>
              <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">DR-04 38㎡ 수집</div><div class="timeline-sub">OPC 자동 반영</div></div><div class="timeline-time">13:55</div></div>
              <div class="timeline-item"><div class="timeline-dot open"></div><div><div class="timeline-title">DR-03 보정</div><div class="timeline-sub">OPC 수집 지연, 수동 입력</div></div><div class="timeline-time">12:30</div></div>
            </div>
          </div>
          <div class="btn-row">
            <button class="outline-btn" onclick="navTo('/production/label')">라벨 출력</button>
            <button class="secondary-btn" onclick="navTo('/trace')">추적 조회</button>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function renderTG() {
  const targets = getTargets();
  return `
    <div class="stack">
      <div class="metric-grid">
        ${metricCard("금일 TG 생산량", "1,124㎡", `목표 ${targets.tg.toLocaleString()}㎡ / 달성률 94%`, "success")}
        ${metricCard("설비 가동", "6/7대", "TG-03 정지 42분", "warning")}
        ${metricCard("접점 수집", "정상 6건", "TG-03 수집 지연", "warning")}
        ${metricCard("수동 보정", "5건", "자동 수집 예외", "warning")}
      </div>
      <div class="split-layout">
        <section class="table-card">
          <div class="panel-title">
            <h3>TG 설비별 실적</h3>
            <span class="panel-note">TG 7대 설비의 접점 신호 기반 생산 실적을 설비 단위로 조회합니다</span>
          </div>
          <div style="margin-bottom:16px;">
            <div class="equipment-grid">
              ${equipmentCard("TG-01", "정상", "기준정보 확인", "A", "normal", "/facility/equipment")}
              ${equipmentCard("TG-02", "정상", "기준정보 확인", "A", "normal", "/facility/equipment")}
              ${equipmentCard("TG-03", "고장", "미조치 이슈", "긴급", "danger", "/facility/issues")}
              ${equipmentCard("TG-04", "정상", "기준정보 확인", "A", "normal", "/facility/equipment")}
              ${equipmentCard("TG-05", "정상", "기준정보 확인", "A", "normal", "/facility/equipment")}
              ${equipmentCard("TG-06", "자재 이슈", "조치중", "확인", "warning", "/facility/issues")}
              ${equipmentCard("TG-07", "정상", "기준정보 확인", "A", "normal", "/facility/equipment")}
            </div>
          </div>
          <table>
            <thead><tr><th>설비</th><th>금일 생산량</th><th>가동 시간</th><th>마지막 실적</th><th>수집</th><th>상태</th></tr></thead>
            <tbody>
              <tr><td class="mono">TG-01</td><td>208㎡</td><td>7h 12m</td><td>14:32</td><td>접점</td><td><span class="pill success">자동</span></td></tr>
              <tr><td class="mono">TG-02</td><td>184㎡</td><td>6h 50m</td><td>14:20</td><td>접점</td><td><span class="pill success">자동</span></td></tr>
              <tr><td class="mono">TG-03</td><td>62㎡</td><td>2h 30m</td><td>11:48</td><td>—</td><td><span class="pill danger">정지</span></td></tr>
              <tr><td class="mono">TG-04</td><td>166㎡</td><td>6h 40m</td><td>14:15</td><td>접점</td><td><span class="pill success">자동</span></td></tr>
              <tr><td class="mono">TG-05</td><td>192㎡</td><td>7h 00m</td><td>14:28</td><td>접점</td><td><span class="pill success">자동</span></td></tr>
              <tr><td class="mono">TG-06</td><td>—</td><td>0h</td><td>—</td><td>—</td><td><span class="pill warning">대기</span></td></tr>
              <tr><td class="mono">TG-07</td><td>312㎡</td><td>7h 20m</td><td>14:30</td><td>접점</td><td><span class="pill success">자동</span></td></tr>
            </tbody>
          </table>
        </section>
        <aside class="detail-panel">
          <div class="detail-block">
            <h4>TG-03 이상 상세</h4>
            <div class="kv">
              <div class="kv-row"><span>현재 상태</span><strong style="color:var(--danger)">정지 42분</strong></div>
              <div class="kv-row"><span>수집 방식</span><strong>접점 신호</strong></div>
              <div class="kv-row"><span>정지 시각</span><strong>2026-04-14 11:48</strong></div>
              <div class="kv-row"><span>금일 실적</span><strong>62㎡ (미완)</strong></div>
            </div>
          </div>
          <div class="detail-block">
            <h4>접점 수집 현황</h4>
            <div class="kv">
              <div class="kv-row"><span>TG-01</span><strong>정상</strong></div>
              <div class="kv-row"><span>TG-02</span><strong>정상</strong></div>
              <div class="kv-row"><span>TG-03</span><strong style="color:var(--danger)">수집 지연</strong></div>
              <div class="kv-row"><span>TG-04~07</span><strong>정상</strong></div>
            </div>
          </div>
          <div class="btn-row">
            <button class="outline-btn" onclick="navTo('/facility/issues')">안돈 / 이슈 확인</button>
            <button class="secondary-btn" onclick="navTo('/production/label')">라벨 출력</button>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function renderForming() {
  const targets = getTargets();
  return `
    <div class="stack">
      <div class="metric-grid">
        ${metricCard("금일 포밍 생산량", "520㎡", `목표 ${targets.forming.toLocaleString()}㎡ / 달성률 87%`, "")}
        ${metricCard("설비 가동", "2/3대", "PRESS-FM-04 정지", "warning")}
        ${metricCard("부적합 연계", "2건", "형상 오차 · 규격 편차", "danger")}
        ${metricCard("수동 보정", "3건", "OPC 수집 예외", "warning")}
      </div>
      <div class="split-layout">
        <section class="table-card">
          <div class="panel-title">
            <h3>포밍 설비별 실적</h3>
            <span class="panel-note">포밍 설비 FM-01~03의 OPC 기반 생산 실적과 부적합 연계 현황을 조회합니다</span>
          </div>
          <table>
            <thead><tr><th>설비</th><th>금일 생산량</th><th>가동 시간</th><th>마지막 실적</th><th>부적합</th><th>상태</th></tr></thead>
            <tbody>
              <tr><td class="mono">FM-01</td><td>218㎡</td><td>6h 55m</td><td>14:10</td><td>—</td><td><span class="pill success">가동중</span></td></tr>
              <tr><td class="mono">FM-02</td><td>302㎡</td><td>7h 00m</td><td>14:22</td><td><span class="pill danger">1건</span></td><td><span class="pill success">가동중</span></td></tr>
              <tr><td class="mono">PRESS-FM-04</td><td>—</td><td>0h</td><td>13:48</td><td>—</td><td><span class="pill danger">점검 정지</span></td></tr>
            </tbody>
          </table>
          <div style="margin-top:18px; border-top:1px solid var(--surface-border); padding-top:16px;">
            <div class="panel-title compact"><h3>목표 달성률</h3></div>
            <div class="progress-list">
              <div class="progress-item">
                <div class="progress-head"><span class="progress-name">FM-01</span><span class="progress-value">218㎡ / 240㎡</span></div>
                <div class="progress-track"><div class="progress-fill forming" style="width:91%"></div></div>
              </div>
              <div class="progress-item">
                <div class="progress-head"><span class="progress-name">FM-02</span><span class="progress-value">302㎡ / 360㎡</span></div>
                <div class="progress-track"><div class="progress-fill forming" style="width:84%"></div></div>
              </div>
            </div>
          </div>
        </section>
        <aside class="detail-panel">
          <div class="detail-block">
            <h4>FM-02 부적합 연계</h4>
            <div class="kv">
              <div class="kv-row"><span>부적합 유형</span><strong>형상 오차</strong></div>
              <div class="kv-row"><span>제작번호</span><strong>LX-21018</strong></div>
              <div class="kv-row"><span>중량</span><strong>12.4kg</strong></div>
              <div class="kv-row"><span>등록 시각</span><strong>13:47</strong></div>
            </div>
          </div>
          <div class="detail-block">
            <h4>PRESS-FM-04 정지 현황</h4>
            <div class="kv">
              <div class="kv-row"><span>정지 유형</span><strong>과열 경고</strong></div>
              <div class="kv-row"><span>정지 시각</span><strong>13:48</strong></div>
              <div class="kv-row"><span>조치자</span><strong>FAC-02</strong></div>
              <div class="kv-row"><span>조치 상태</span><strong>현장 확인 중</strong></div>
            </div>
          </div>
          <div class="btn-row">
            <button class="outline-btn" onclick="navTo('/quality/register')">부적합 등록</button>
            <button class="secondary-btn" onclick="navTo('/facility/issues')">안돈 / 이슈 확인</button>
          </div>
        </aside>
      </div>
    </div>
  `;
}

function renderAssembly() {
  const targets = getTargets();
  return `
    <div class="stack">
      <div class="metric-grid">
        ${metricCard("금일 조립 생산량", "363㎡", `목표 ${targets.assembly.toLocaleString()}㎡ / 달성률 111%`, "success")}
        ${metricCard("라인 가동", "4/5라인", "2라인 자재 교체 중", "warning")}
        ${metricCard("패킹 완료", "18건", "야적 등록 대기 3건", "")}
        ${metricCard("외주 조립", "3건", "진행 중 / 1건 지연", "warning")}
      </div>
      <div class="split-layout">
        <section class="table-card">
          <div class="panel-title">
            <h3>조립 라인별 실적</h3>
            <span class="panel-note">조립 5개 라인의 생산 실적과 패킹 완료 현황을 라인 단위로 조회합니다</span>
          </div>
          <table>
            <thead><tr><th>라인</th><th>금일 생산량</th><th>패킹 완료</th><th>마지막 실적</th><th>외주</th><th>상태</th></tr></thead>
            <tbody>
              <tr><td class="mono">조립 1라인</td><td>84㎡</td><td>5건</td><td>14:28</td><td>—</td><td><span class="pill success">가동중</span></td></tr>
              <tr><td class="mono">조립 2라인</td><td>—</td><td>3건</td><td>11:03</td><td>O</td><td><span class="pill warning">자재 교체</span></td></tr>
              <tr><td class="mono">조립 3라인</td><td>92㎡</td><td>4건</td><td>14:15</td><td>—</td><td><span class="pill success">가동중</span></td></tr>
              <tr><td class="mono">조립 4라인</td><td>98㎡</td><td>4건</td><td>14:30</td><td>—</td><td><span class="pill success">가동중</span></td></tr>
              <tr><td class="mono">조립 5라인</td><td>89㎡</td><td>2건</td><td>14:25</td><td>O</td><td><span class="pill success">가동중</span></td></tr>
            </tbody>
          </table>
          <div style="margin-top:18px; border-top:1px solid var(--surface-border); padding-top:16px;">
            <div class="panel-title compact"><h3>패킹 대기 목록</h3></div>
            <div class="kv">
              <div class="kv-row"><span>PK-22024</span><strong><span class="pill warning">위치 미등록</span></strong></div>
              <div class="kv-row"><span>PK-22025</span><strong><span class="pill warning">위치 미등록</span></strong></div>
              <div class="kv-row"><span>PK-22026</span><strong><span class="pill warning">위치 미등록</span></strong></div>
            </div>
          </div>
        </section>
        <aside class="detail-panel">
          <div class="detail-block">
            <h4>외주 조립 현황</h4>
            <div class="kv">
              <div class="kv-row"><span>LX-22004</span><strong><span class="pill">지시 등록</span></strong></div>
              <div class="kv-row"><span>LX-22010</span><strong><span class="pill warning">작업 중</span></strong></div>
              <div class="kv-row"><span>LX-22018</span><strong><span class="pill danger">지연</span></strong></div>
            </div>
          </div>
          <div class="detail-block">
            <h4>패킹 → 야적 흐름</h4>
            <div class="timeline compact">
              <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">PK-22020 야적 완료</div><div class="timeline-sub">Y-A03-01 등록</div></div><div class="timeline-time">13:20</div></div>
              <div class="timeline-item"><div class="timeline-dot open"></div><div><div class="timeline-title">PK-22024 위치 미등록</div><div class="timeline-sub">등록 필요</div></div><div class="timeline-time">진행중</div></div>
            </div>
          </div>
          <div class="btn-row">
            <button class="outline-btn" onclick="navTo('/outsource')">외주 현황 보기</button>
            <button class="secondary-btn" onclick="navTo('/inventory/yard')">야적장 등록</button>
          </div>
        </aside>
      </div>
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
              <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">신선 완료</div><div class="timeline-sub">실적 74㎡ 반영</div></div><div class="timeline-time">08:32</div></div>
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
            <button class="outline-btn" onclick="navTo('/quality/register')">부적합 등록</button>
            <button class="secondary-btn" onclick="navTo('/trace')">추적 조회 이동</button>
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
          <span class="panel-note">라벨 템플릿 선택, 필수 데이터 검증, 출력 승인 이력을 한 번에 관리합니다</span>
        </div>
        <div class="metric-grid" style="grid-template-columns:repeat(4,minmax(0,1fr));">
          ${metricCard("금일 출력 건수", "38건", "정상 36 / 재출력 2", "success")}
          ${metricCard("승인 대기", "3건", "품질 승인 대기", "warning")}
          ${metricCard("프린터 이상", "0건", "신선-PRN-01 정상", "success")}
          ${metricCard("라벨 오류율", "0.4%", "전주 대비 -0.2%p", "success")}
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
              <div class="kv-row"><span>출력 사유</span><strong>출하용 신규 발행</strong></div>
            </div>
          </div>
          <div class="detail-block">
            <h4>자동 삽입 항목</h4>
            <div class="kv">
              <div class="kv-row"><span>현장명</span><strong>현대 B현장</strong></div>
              <div class="kv-row"><span>KS 규격</span><strong>KS-DK-004</strong></div>
              <div class="kv-row"><span>로트번호</span><strong>LOT-20260414-03</strong></div>
              <div class="kv-row"><span>생산일자</span><strong>2026-04-14</strong></div>
              <div class="kv-row"><span>QR/바코드</span><strong>LX-21044|LOT-20260414-03</strong></div>
            </div>
          </div>
        </div>
        <section class="table-card">
          <div class="panel-title">
            <h3>라벨 템플릿 관리</h3>
            <span class="panel-note">라벨 종류별 필수값과 승인 조건을 기준 템플릿으로 관리합니다</span>
          </div>
          <table>
            <thead><tr><th>템플릿</th><th>적용 공정</th><th>필수 필드</th><th>승인 조건</th><th>상태</th></tr></thead>
            <tbody>
              <tr><td>KS-LABEL-V2</td><td>신선 / 포밍</td><td>제작번호, LOT, KS규격</td><td>품질팀 승인</td><td><span class="pill success">운영중</span></td></tr>
              <tr><td>PROC-LABEL-V1</td><td>TG / 조립</td><td>제작번호, 공정, 실적시간</td><td>생산관리 승인</td><td><span class="pill">운영중</span></td></tr>
              <tr><td>SHIP-LABEL-V1</td><td>출하</td><td>패킹번호, 현장명, 출하일자</td><td>출하담당 승인</td><td><span class="pill warning">점검중</span></td></tr>
            </tbody>
          </table>
        </section>
        <section class="table-card">
          <div class="panel-title">
            <h3>공정별 라벨관리 개념도</h3>
            <span class="panel-note">공정마다 라벨 발급 시점과 검증 포인트를 동일 기준으로 운영합니다</span>
          </div>
          <div class="label-concept-grid">
            <div class="label-concept-card">
              <div class="label-concept-title">신선</div>
              <div class="label-concept-flow">생산 완료 → 공정라벨 발급 → LOT 검증 → 부착 확인</div>
            </div>
            <div class="label-concept-card">
              <div class="label-concept-title">TG</div>
              <div class="label-concept-flow">실적 확정 → 공정라벨 발급 → 접점 로그 연계 → 이력 저장</div>
            </div>
            <div class="label-concept-card">
              <div class="label-concept-title">포밍</div>
              <div class="label-concept-flow">품질 확인 → KS라벨 발급 → 승인자 확인 → 부적합 연계</div>
            </div>
            <div class="label-concept-card">
              <div class="label-concept-title">조립/출하</div>
              <div class="label-concept-flow">패킹 완료 → 출하라벨 발급 → 바코드 스캔 → 출하 완료</div>
            </div>
          </div>
        </section>
        <div class="section-grid-2">
          <div class="detail-block">
            <h4>바코드 관리 방식</h4>
            <div class="kv">
              <div class="kv-row"><span>식별 방식</span><strong>바코드(CODE128) 우선</strong></div>
              <div class="kv-row"><span>코드 구성</span><strong>패킹번호 + 제작번호 + LOT</strong></div>
              <div class="kv-row"><span>추적 키</span><strong>출하 / 재고 / 추적 화면 공통</strong></div>
              <div class="kv-row"><span>재출력 통제</span><strong>사유 입력 + 승인자 기록</strong></div>
            </div>
          </div>
          <div class="detail-block">
            <h4>출력 전 바코드 확인</h4>
            <div class="kv">
              <div class="kv-row"><span>대상 코드</span><strong>PK22024-LX21044-LOT2026041403</strong></div>
              <div class="kv-row"><span>인쇄 품질</span><strong>정상(스캔 테스트 통과)</strong></div>
              <div class="kv-row"><span>바로 출력</span><strong>가능</strong></div>
            </div>
            <div class="btn-row" style="margin-top:12px;">
              <button class="outline-btn" onclick="showBarcodePreviewModal()">바코드 화면 열기</button>
              <button class="secondary-btn" onclick="showSaveSuccessModal('바코드 즉시 출력 완료', '출력 전 확인 없이 바코드 라벨 2매를 바로 출력했습니다.')">즉시 출력</button>
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
              <div class="kv-row"><span>최근 점검일</span><strong>2026-04-15 09:10</strong></div>
            </div>
          </div>
          <div class="detail-block">
            <h4>필수 항목 점검</h4>
            <div class="kv">
              <div class="kv-row"><span>현장명</span><strong>입력 완료</strong></div>
              <div class="kv-row"><span>로트번호</span><strong>입력 완료</strong></div>
              <div class="kv-row"><span>KS 규격</span><strong>입력 완료</strong></div>
              <div class="kv-row"><span>승인자</span><strong>QMS-02 확인</strong></div>
            </div>
          </div>
        </div>
        <div class="btn-row">
          <button class="outline-btn" onclick="showSaveSuccessModal('검증 완료', '필수 필드 및 승인 조건 검증이 완료되었습니다.')">사전 검증</button>
          <button class="outline-btn" onclick="showLabelPreviewModal()">미리보기</button>
          <button class="secondary-btn" onclick="showSaveSuccessModal('라벨 출력 완료', '신선-PRN-01 프린터로 2매 출력 완료되었습니다.')">라벨 출력</button>
        </div>
      </section>
      <aside class="detail-panel">
        <div class="detail-block">
          <h4>최근 출력 이력</h4>
          <div class="timeline">
            <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">LX-21044 / KS 라벨</div><div class="timeline-sub">출력자 OP-03</div></div><div class="timeline-time">12:10</div></div>
            <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">LX-21041 / 공정 라벨</div><div class="timeline-sub">출력자 OP-01</div></div><div class="timeline-time">11:42</div></div>
            <div class="timeline-item"><div class="timeline-dot open"></div><div><div class="timeline-title">PK-22024 / 출하 라벨 재출력</div><div class="timeline-sub">사유: 바코드 인쇄 흐림</div></div><div class="timeline-time">10:58</div></div>
          </div>
        </div>
        <div class="detail-block">
          <h4>승인/재출력 관리</h4>
          <div class="kv">
            <div class="kv-row"><span>재출력 기준</span><strong>오인쇄/파손만 허용</strong></div>
            <div class="kv-row"><span>재출력 승인자</span><strong>생산관리자 또는 품질팀</strong></div>
            <div class="kv-row"><span>감사 로그</span><strong>출력자/사유/시간 자동 기록</strong></div>
          </div>
        </div>
      </aside>
    </div>
  `;
}

function renderTargetSettings() {
  const targets = getTargets();
  const total = targets.wire + targets.tg + targets.forming + targets.assembly;
  return `
    <div class="stack">
      <div class="metric-grid">
        ${metricCard("신선 목표", `${targets.wire.toLocaleString()}㎡`, "일간 기준", "")}
        ${metricCard("TG 목표", `${targets.tg.toLocaleString()}㎡`, "일간 기준", "")}
        ${metricCard("포밍 목표", `${targets.forming.toLocaleString()}㎡`, "일간 기준", "")}
        ${metricCard("조립 목표", `${targets.assembly.toLocaleString()}㎡`, "일간 기준", "")}
      </div>
      <div class="split-layout">
        <section class="panel">
          <div class="panel-title">
            <h3>공정별 일간 실적 목표 등록</h3>
            <span class="panel-note">저장 시 대시보드와 공정별 실적 화면의 목표값이 즉시 반영됩니다</span>
          </div>
          <div class="kv" style="margin-top:10px;">
            <div class="kv-row">
              <span>신선 목표(㎡)</span>
              <input id="target-wire" type="number" min="1" step="1" value="${targets.wire}" style="max-width:180px;" />
            </div>
            <div class="kv-row">
              <span>TG 목표(㎡)</span>
              <input id="target-tg" type="number" min="1" step="1" value="${targets.tg}" style="max-width:180px;" />
            </div>
            <div class="kv-row">
              <span>포밍 목표(㎡)</span>
              <input id="target-forming" type="number" min="1" step="1" value="${targets.forming}" style="max-width:180px;" />
            </div>
            <div class="kv-row">
              <span>조립 목표(㎡)</span>
              <input id="target-assembly" type="number" min="1" step="1" value="${targets.assembly}" style="max-width:180px;" />
            </div>
          </div>
          <div class="btn-row" style="margin-top:16px;">
            <button class="outline-btn" onclick="handleTargetReset()">기본값 복원</button>
            <button class="secondary-btn" onclick="handleTargetSave()">목표 저장</button>
          </div>
        </section>
        <aside class="detail-panel">
          <div class="detail-block">
            <h4>현재 합계 목표</h4>
            <div class="kv">
              <div class="kv-row"><span>4공정 합계</span><strong>${total.toLocaleString()}㎡</strong></div>
              <div class="kv-row"><span>적용 범위</span><strong>대시보드 / 공정별 실적</strong></div>
              <div class="kv-row"><span>저장 방식</span><strong>브라우저 로컬 저장</strong></div>
            </div>
          </div>
          <div class="detail-block">
            <h4>운영 안내</h4>
            <div class="kv">
              <div class="kv-row"><span>권장 업데이트 주기</span><strong>일일 1회</strong></div>
              <div class="kv-row"><span>입력 단위</span><strong>㎡ (제곱미터)</strong></div>
              <div class="kv-row"><span>주의 사항</span><strong>저장 후 즉시 반영</strong></div>
            </div>
          </div>
        </aside>
      </div>
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
                <button class="outline-btn" onclick="showSaveSuccessModal('임시 저장 완료', '부적합 등록 내용이 임시 저장되었습니다.')">임시 저장</button>
                <button class="secondary-btn" onclick="showDefectRegisterModal()">부적합 등록</button>
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
                <tr style="cursor:pointer" onclick="navTo('/trace')"><td>2026-04-14</td><td>포밍</td><td>형상 오차</td><td>12.4kg</td><td><span class="pill danger">확인 필요</span></td></tr>
                <tr style="cursor:pointer" onclick="navTo('/trace')"><td>2026-04-14</td><td>TG</td><td>표면 손상</td><td>3건</td><td><span class="pill warning">품질 검토</span></td></tr>
                <tr style="cursor:pointer" onclick="navTo('/trace')"><td>2026-04-13</td><td>포밍</td><td>규격 편차</td><td>2건</td><td><span class="pill success">조치 완료</span></td></tr>
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
              <div class="kv-row"><span>생산 수량</span><strong>42.8㎡</strong></div>
              <div class="kv-row"><span>부적합률</span><strong>0.82%</strong></div>
              <div class="kv-row"><span>로트번호</span><strong>LOT-8812</strong></div>
              <div class="kv-row"><span>KS 규격</span><strong>KS-DK-004</strong></div>
            </div>
          </div>
        </div>
        <div class="btn-row">
          <button class="outline-btn" onclick="showCertPreviewModal()">미리보기</button>
          <button class="secondary-btn" onclick="showSaveSuccessModal('PDF 발행 완료', '삼성 A현장 LX-20948 성적서가 PDF로 발행되었습니다.')">PDF 발행</button>
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
            <button class="outline-btn" onclick="showLocationEditModal()">위치 수정</button>
            <button class="secondary-btn" onclick="showShippingCompleteModal()">출하 완료</button>
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
          <tr style="cursor:pointer" onclick="navTo('/trace')"><td class="mono">LOT-20260401-01</td><td>이형철선</td><td>영광선재</td><td>2026-04-01</td><td>420kg</td><td><span class="pill warning">FIFO 경고</span></td></tr>
          <tr style="cursor:pointer" onclick="navTo('/trace')"><td class="mono">LOT-20260409-03</td><td>원형철선</td><td>대한철강</td><td>2026-04-09</td><td>1,240kg</td><td><span class="pill success">정상</span></td></tr>
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
          <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">신선 공정</div><div class="timeline-sub">DR-01 / 실적 74㎡</div></div><div class="timeline-time">08:32</div></div>
          <div class="timeline-item"><div class="timeline-dot"></div><div><div class="timeline-title">TG 공정</div><div class="timeline-sub">접점 수집 / 46㎡</div></div><div class="timeline-time">11:20</div></div>
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
  const isIssues = mode === "issues";
  const isEquipment = mode === "equipment";
  return `
    <div class="stack">
      <div class="filter-row">
        ${filterField("공정", isIssues ? "전체" : isEquipment ? "TG 공정" : "TG 중심")}
        ${filterField("조회 기준", isIssues ? "미조치 우선" : isEquipment ? "설비 기준정보" : "최근 7일")}
        ${filterField("범위", isIssues ? "고장 / 자재 / 품질 / 기타" : isEquipment ? "기본 정보 / 위치" : "고장 / 비가동 / 안돈")}
      </div>
      ${
        isIssues
          ? `
            <div class="dashboard-grid">
              <section class="panel">
                <div class="panel-title">
                  <h3>안돈 / 이슈관리</h3>
                  <span class="panel-note">1차 범위에서는 설비 모니터링이 아니라 고장 및 이슈 등록과 조치 상태 관리에 집중합니다</span>
                </div>
                <table>
                  <thead><tr><th>발생시각</th><th>설비</th><th>이슈 유형</th><th>내용</th><th>조치 상태</th></tr></thead>
                  <tbody>
                    <tr><td>2026-04-16 14:23</td><td class="mono">TG-03</td><td><span class="pill danger">고장</span></td><td>메인 구동부 정지 42분</td><td><span class="pill danger">미조치</span></td></tr>
                    <tr><td>2026-04-16 13:48</td><td class="mono">PRESS-FM-04</td><td><span class="pill warning">품질</span></td><td>과열로 품질 영향 가능성 확인</td><td><span class="pill warning">조치중</span></td></tr>
                    <tr><td>2026-04-16 11:03</td><td class="mono">조립 2라인</td><td><span class="pill">자재</span></td><td>자재 교체로 작업 지연</td><td><span class="pill warning">조치중</span></td></tr>
                    <tr><td>2026-04-16 09:12</td><td class="mono">DR-02</td><td><span class="pill">기타</span></td><td>정기 점검 완료 후 복귀 대기</td><td><span class="pill success">완료</span></td></tr>
                  </tbody>
                </table>
                <div class="btn-row" style="margin-top:16px">
                  <button class="outline-btn" onclick="showSaveSuccessModal('이슈 등록 완료', '신규 설비 이슈가 등록되었습니다.')">이슈 등록</button>
                  <button class="secondary-btn" onclick="navTo('/facility/history')">이력에서 후속 확인</button>
                </div>
              </section>
              <aside class="detail-panel">
                <div class="detail-block">
                  <h4>이슈 유형 기준</h4>
                  <div class="kv">
                    <div class="kv-row"><span>고장</span><strong>설비 정지 / 이상</strong></div>
                    <div class="kv-row"><span>자재</span><strong>자재 부족 / 교체</strong></div>
                    <div class="kv-row"><span>품질</span><strong>불량 / 품질 영향</strong></div>
                    <div class="kv-row"><span>기타</span><strong>점검 / 작업 지원</strong></div>
                  </div>
                </div>
                <div class="detail-block">
                  <h4>TG-03 선택 건</h4>
                  <div class="kv">
                    <div class="kv-row"><span>설비명</span><strong>TG-03</strong></div>
                    <div class="kv-row"><span>이슈 유형</span><strong>고장</strong></div>
                    <div class="kv-row"><span>조치 상태</span><strong style="color:var(--danger)">미조치</strong></div>
                    <div class="kv-row"><span>연계 화면</span><strong>대시보드 / 설비 이력</strong></div>
                  </div>
                </div>
                <div class="detail-block">
                  <h4>2차 제외 범위</h4>
                  <div class="kv">
                    <div class="kv-row"><span>실시간 모니터링</span><strong>미포함</strong></div>
                    <div class="kv-row"><span>RUN / STOP 수집</span><strong>미포함</strong></div>
                    <div class="kv-row"><span>자동 알림</span><strong>미포함</strong></div>
                    <div class="kv-row"><span>OPC / 센서 연동</span><strong>2차 고도화</strong></div>
                  </div>
                </div>
              </aside>
            </div>
          `
          : isEquipment
          ? `
            <div class="split-layout">
              <section class="table-card">
                <div class="panel-title">
                  <h3>설비 목록</h3>
                  <span class="panel-note">설비코드, 설비명, 공정, 위치를 관리하는 기준정보 화면입니다</span>
                </div>
                <table>
                  <thead><tr><th>설비코드</th><th>설비명</th><th>공정</th><th>위치</th><th>관리 목적</th></tr></thead>
                  <tbody>
                    <tr><td class="mono">DR-01</td><td>신선 1호기</td><td>신선</td><td>A동 1열</td><td>생산 설비 기준정보</td></tr>
                    <tr><td class="mono">TG-03</td><td>TG 3호기</td><td>TG</td><td>B동 2열</td><td>이슈 대상 설비</td></tr>
                    <tr><td class="mono">PRESS-FM-04</td><td>포밍 프레스 4호기</td><td>포밍</td><td>C동 1열</td><td>품질 영향 설비</td></tr>
                    <tr><td class="mono">ASM-02</td><td>조립 2라인</td><td>조립</td><td>D동 2열</td><td>자재 교체 이력 연계</td></tr>
                  </tbody>
                </table>
              </section>
              <aside class="detail-panel">
                <div class="detail-block">
                  <h4>선택 설비 상세</h4>
                  <div class="kv">
                    <div class="kv-row"><span>설비코드</span><strong>TG-03</strong></div>
                    <div class="kv-row"><span>설비명</span><strong>TG 3호기</strong></div>
                    <div class="kv-row"><span>공정</span><strong>TG</strong></div>
                    <div class="kv-row"><span>위치</span><strong>B동 2열</strong></div>
                  </div>
                </div>
                <div class="detail-block">
                  <h4>기준정보 관리 포인트</h4>
                  <div class="kv">
                    <div class="kv-row"><span>이슈 등록 기준</span><strong>설비코드 참조</strong></div>
                    <div class="kv-row"><span>이력 연결</span><strong>고장 / 비가동 / 안돈</strong></div>
                    <div class="kv-row"><span>모니터링 연동</span><strong>2차 범위</strong></div>
                  </div>
                </div>
                <div class="btn-row">
                  <button class="outline-btn" onclick="showSaveSuccessModal('설비 저장 완료', '설비 기준정보가 저장되었습니다.')">기준정보 저장</button>
                  <button class="secondary-btn" onclick="navTo('/facility/history')">관련 이력 보기</button>
                </div>
              </aside>
            </div>
          `
          : `
            <div class="split-layout">
              <section class="table-card">
                <div class="panel-title">
                  <h3>설비 이력</h3>
                  <span class="panel-note">설비 고장, 비가동, 안돈 발생 이력을 통합 조회하는 화면입니다</span>
                </div>
                <table>
                  <thead><tr><th>일시</th><th>설비</th><th>이력 구분</th><th>내용</th><th>조치 결과</th></tr></thead>
                  <tbody>
                    <tr><td>2026-04-16 14:23</td><td class="mono">TG-03</td><td>고장</td><td>메인 구동부 정지 42분</td><td>미조치</td></tr>
                    <tr><td>2026-04-16 13:48</td><td class="mono">PRESS-FM-04</td><td>비가동</td><td>과열 경고로 점검 정지</td><td>조치중</td></tr>
                    <tr><td>2026-04-16 11:03</td><td class="mono">ASM-02</td><td>안돈</td><td>자재 교체 요청 발생</td><td>조치중</td></tr>
                    <tr><td>2026-04-16 09:12</td><td class="mono">DR-02</td><td>비가동</td><td>정기 점검 완료</td><td>완료</td></tr>
                  </tbody>
                </table>
              </section>
              <aside class="detail-panel">
                <div class="detail-block">
                  <h4>이력 활용 범위</h4>
                  <div class="kv">
                    <div class="kv-row"><span>고장 이력</span><strong>설비 고장 추적</strong></div>
                    <div class="kv-row"><span>비가동 이력</span><strong>정지 / 점검 관리</strong></div>
                    <div class="kv-row"><span>안돈 이력</span><strong>현장 이슈 조회</strong></div>
                  </div>
                </div>
                <div class="detail-block">
                  <h4>선택 건 메모</h4>
                  <div class="kv">
                    <div class="kv-row"><span>대상 설비</span><strong>TG-03</strong></div>
                    <div class="kv-row"><span>최근 조치자</span><strong>FAC-02</strong></div>
                    <div class="kv-row"><span>최근 메모</span><strong>구동부 부품 확인 예정</strong></div>
                  </div>
                </div>
                <div class="btn-row" style="margin-top:4px">
                  <button class="outline-btn" onclick="navTo('/facility/issues')">안돈 / 이슈관리 이동</button>
                  <button class="secondary-btn" onclick="navTo('/facility/equipment')">설비 목록 이동</button>
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
          <button class="outline-btn" onclick="showStatusChangeModal()">상태 변경</button>
          <button class="secondary-btn" onclick="navTo('/inventory/yard')">야적장 화면 이동</button>
        </div>
      </aside>
    </div>
    </div>
  `;
}

init();
