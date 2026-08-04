# 쵸코네일 덕양삼송점 홈페이지 v1 반응형 QA

## 1. 문서 목적

- [확정] 쵸코네일 홈페이지 v1의 PC 원본 이미지형 화면과 모바일 별도 화면의 반응형 동작 기준을 정리한다.
- [확정] 서비스별 하위 페이지의 PC·모바일 전환 기준과 카드·포스터·모바일 메뉴 구조를 현재 코드 기준으로 검수한다.
- [확정] 본 문서는 정적 코드 검수 결과를 중심으로 작성하며, 브라우저 에뮬레이션과 실제 기기 검수는 별도로 구분한다.
- [확정] 현재 코드 기준의 역기획 QA 문서이며, HTML, CSS, JavaScript, 이미지 파일은 수정하지 않는다.

## 2. 검수 대상

| 구분 | 대상 | 확인 범위 | 상태 |
|---|---|---|---|
| HTML | index.html | PC hero, mobile-home, hotspot, 모바일 링크 구조 | [확정] 코드 확인 |
| HTML | gel-nail.html | PC 헤더, 모바일 헤더, 서비스 카드, 내비게이션 | [확정] 코드 확인 |
| HTML | pedi.html | PC 헤더, 모바일 헤더, 서비스 카드, 내비게이션 | [확정] 코드 확인 |
| HTML | monthly-art.html | PC 헤더, remaining 모바일 헤더, 서비스 카드, 내비게이션 | [확정] 코드 확인 |
| HTML | care.html | 케어 텍스트 영역, 모바일 헤더, 인라인 style | [확정] 코드 확인 |
| HTML | gallery.html | 내부 리뷰 안내 페이지, 리뷰 포스터, 투명 링크, 인라인 style | [확정] 코드 확인 |
| HTML | shop.html | 매장 소개 포스터, 모바일 헤더, 인라인 style | [확정] 코드 확인 |
| CSS | style.css | 홈 PC·모바일 전환, hero, mobile-home, hotspot, 370px 규칙 | [확정] 코드 확인 |
| CSS | category-style.css | 하위 페이지 공통 레이아웃, 헤더, 카드, 모바일 전환, 브레이크포인트 | [확정] 코드 확인 |
| 화면 구조 | PC 홈 원본 이미지 | final-design.png, hero-frame, 1491/1055 비율, hotspot | [확정] 코드 확인 / [수행하지 않음] 렌더링 검수 |
| 화면 구조 | 모바일 홈 | mobile-home, 모바일 헤더, 버튼, 2열 그리드 | [확정] 코드 확인 / [수행하지 않음] 렌더링 검수 |
| 화면 구조 | 하위 페이지 PC 헤더 | site-header, category-nav, reservation-link | [확정] 코드 확인 |
| 화면 구조 | 하위 페이지 모바일 details 메뉴 | gel/pedi/remaining 모바일 header, details/summary | [확정] 코드 확인 |
| 화면 구조 | 이미지 카드 | 젤네일, 패디, 이달의 아트 카드 grid와 이미지 비율 | [확정] 코드 확인 |
| 화면 구조 | 리뷰 포스터 | review_intro_poster.png, 투명 링크, 모바일 버튼 | [확정] 코드 확인 |
| 화면 구조 | 매장 소개 포스터 | shop_intro_poster.png, poster wrap, 원본 비율 유지 | [확정] 코드 확인 |

## 3. 검수 방식 구분

| 검수 방식 | 수행 여부 | 근거 | 한계 |
|---|---|---|---|
| 정적 코드 검수 | [확정] 수행 | HTML, style.css, category-style.css, 각 HTML 인라인 style 확인 | 실제 viewport 렌더링, 터치, 스크롤, 이미지 로딩 체감은 확인하지 않음 |
| 브라우저 에뮬레이션 | [수행하지 않음] | Playwright, DevTools, headless 브라우저 실행 없음 | 실제 요소 겹침, 줄바꿈, 좌표 일치 여부는 [확인 필요] |
| 실제 스마트폰 | [수행하지 않음] | 실기기 접속 및 터치 검수 없음 | 주소창 높이, safe area, 외부 앱 이동, 터치 영역은 [확인 필요] |
| 실제 태블릿 | [수행하지 않음] | 태블릿 viewport 또는 기기 검수 없음 | 768px 전후 레이아웃 체감은 [확인 필요] |
| 실제 PC 브라우저 | [수행하지 않음] | 데스크톱 브라우저 렌더링 확인 없음 | final-design.png와 hotspot 좌표의 실제 대응은 [확인 필요] |

## 4. 기준 화면 크기

| 화면 폭 | 적용되는 CSS 조건 | 예상 또는 확인 결과 | 상태 |
|---|---|---|---|
| 360px | style.css 760px 이하, 370px 이하 / category-style.css 760px 이하, 560px 이하, 374px 이하 | 모바일 홈 표시, PC hero 숨김, 하위 페이지 모바일 헤더 표시, 카드 1열 예상 | [확정] 코드 조건 확인, 렌더링 미수행 |
| 390px | style.css 760px 이하 / category-style.css 760px 이하, 560px 이하 | 모바일 홈과 하위 페이지 모바일 구조 표시, 카드 1열 예상 | [확정] 코드 조건 확인, 렌더링 미수행 |
| 412px | style.css 760px 이하 / category-style.css 760px 이하, 560px 이하 | 390px과 동일 구간, 모바일 포스터·카드 여백 적용 예상 | [확정] 코드 조건 확인, 렌더링 미수행 |
| 560px | category-style.css 560px 이하 규칙 경계 | 서비스 카드 1열, 모바일 여백·글자 크기 축소 규칙 적용 | [확정] 코드 조건 확인, 렌더링 미수행 |
| 760px | style.css와 category-style.css의 PC·모바일 전환 경계 | PC hero/header/page-hero 숨김, mobile-home 및 모바일 하위 헤더 표시 | [확정] 코드 조건 확인, 렌더링 미수행 |
| 768px | gallery.html 인라인 768px 이하 포스터 규칙 / shop.html 인라인 768px 이하 여백 규칙 / category-style.css 760px 초과 | gallery.html은 페이지 여백과 review-poster-link 좌표·크기 조정, shop.html은 페이지와 PC hero 상하 여백 조정 및 max-width: 1180px 유지 | [확정] 코드 조건 확인, 렌더링 미수행 |
| 980px | category-style.css 980px 이하 헤더 규칙 | site-header 재배치, category-nav 가로 스크롤, reservation-link 크기 축소 | [확정] 코드 조건 확인, 렌더링 미수행 |
| 1280px 이상 | 기본 PC 규칙 | PC hero, PC header, 3열 카드, 포스터 최대 너비 기준 표시 예상 | [확정] 코드 조건 확인, 렌더링 미수행 |

## 5. 주요 브레이크포인트

| 브레이크포인트 | 사용 파일 | 적용 대상 | 주요 변화 | 확인 상태 |
|---|---|---|---|---|
| 370px 이하 | style.css | index.html 모바일 홈 | 모바일 홈 padding, 브랜드명, 문구, 버튼 크기 추가 축소 | [확정] 코드 확인 |
| 374px 이하 | category-style.css | 하위 페이지 모바일 헤더·hero·카드 | 모바일 header, summary, nav, hero, gallery gap 추가 축소 | [확정] 코드 확인 |
| 560px 이하 | category-style.css, gallery.html, shop.html | 카드, 모바일 포스터, care grid | 카드 1열, 포스터 여백·모서리 조정, 케어 grid 1열 | [확정] 코드 확인 |
| 760px 이하 | style.css, category-style.css | 홈, 하위 페이지 공통 전환 | PC hero/header/page-hero 숨김, mobile-home·모바일 header/hero 표시 | [확정] 코드 확인 |
| 761px 이상 | category-style.css | 하위 페이지 모바일 요소 | remaining-mobile-header/hero를 숨김 처리 | [확정] 코드 확인 |
| 768px 이하 | gallery.html | 리뷰 포스터 | 페이지 여백 조정, review-poster-link 좌표와 크기 조정 | [확정] 코드 확인 |
| 768px 이하 | shop.html | 매장 소개 포스터 | 페이지와 PC hero 상하 여백 조정, max-width: 1180px 유지 | [확정] 코드 확인 |
| 900px 이하 | category-style.css | 서비스 카드, 케어 grid | gallery-grid 및 care-service-grid 2열 전환 | [확정] 코드 확인 |
| 980px 이하 | category-style.css | 하위 페이지 PC header | header grid 재배치, nav 가로 스크롤, reservation-link 크기 축소 | [확정] 코드 확인 |

## 6. 공통 반응형 검수 기준

- [확정] responsive-web-qa 스킬 기준에 따라 360px, 390px, 412px, 768px, 1280px 이상 폭을 주요 확인 후보로 둔다.
- [확정] 코드 검수 기준 항목은 가로 스크롤, 글자 잘림, 한글 단어 중간 분리, 요소 겹침, 버튼 또는 링크 터치 영역, 이미지 왜곡, 이미지 crop, 메뉴 가림, sticky header, 포스터 위 투명 링크 위치, 화면 전환 경계, PC 화면 회귀 여부, 콘솔 오류, 키보드 포커스이다.
- [수행하지 않음] 실제 브라우저 렌더링을 하지 않았으므로 가로 스크롤 발생 여부, 한글 줄바꿈 품질, 요소 겹침, 콘솔 오류는 통과로 판정하지 않는다.
- [확인 필요] 투명 hotspot과 포스터 투명 링크는 코드 좌표는 확인되지만 실제 이미지 문구와 클릭 영역의 시각적 일치 여부는 브라우저 검수가 필요하다.

## 7. index.html PC 화면 QA

| 검수 항목 | 코드 기준 확인 | 실제 화면 판정 | 상태 |
|---|---|---|---|
| final-design.png | images/final-design.png를 hero-frame 내부 이미지로 사용 | 렌더링 미수행 | [확정] 코드 확인 |
| hero-frame | aspect-ratio: 1491 / 1055 적용 | 실제 화면 비율 체감 미확인 | [확정] 코드 확인 |
| 이미지 표시 방식 | 1491 / 1055는 hero-frame의 aspect-ratio이며, 내부 이미지는 width: 100%, height: 100%, object-fit: contain 적용 | 이미지 원본 고정 width/height로 단정하지 않음 | [확정] 코드 확인 |
| 화면 높이 기준 크기 | .hero는 min-height: 100svh, .hero-frame은 width: min(100vw, calc(100svh * 1.4132701422))와 aspect-ratio: 1491 / 1055 기준 | 760px 이하 max-height: 100svh 규칙은 있으나 같은 모바일 구간에서 PC .hero가 최종 숨겨짐 | [확정] 코드 확인 |
| 상단 hotspot | 비어 있는 a 요소, aria-label, absolute 좌표 사용 | 이미지 문구와 좌표 일치 미확인 | [확정] 코드 확인 / [확인 필요] 렌더링 |
| 예약·상담·블로그 hotspot | 외부 링크 hotspot 확인 | 외부 앱/새 창 동작 미검수 | [확정] 코드 확인 |
| 하단 서비스 hotspot | 서비스 페이지 이동 hotspot 확인 | 클릭 위치 실제 대응 미확인 | [확정] 코드 확인 / [확인 필요] 렌더링 |
| focus-visible | .hero-hotspot:focus-visible 스타일 확인 | 키보드 순서와 표시 품질 미검수 | [확정] 코드 확인 / [수행하지 않음] 키보드 검수 |
| 별도 footer | PC hero 하단 서비스 hotspot은 있으나 별도 footer 요소는 확인되지 않음 | 해당 없음 | [확정] 코드 확인 |
| 가로·세로 잘림 | object-fit: contain으로 이미지 왜곡 방지 예상 | 실제 viewport별 여백·잘림 미확인 | [추정] 코드 구조 기반 |

## 8. index.html 모바일 화면 QA

| 검수 항목 | 360 | 390 | 412 | 560 | 760 | 판정 | 근거 |
|---|---|---|---|---|---|---|---|
| 모바일 헤더 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | [확정] 760px 이하 표시 | style.css media query |
| 브랜드명 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | [확인 필요] 줄바꿈 품질 | 370px 이하 축소 규칙 있음 |
| 예약하기 버튼 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | [확정] 링크 제공 | mobile-reserve |
| 히어로 제목과 문구 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | [확인 필요] 한글 줄바꿈 | 실제 렌더링 미수행 |
| nail_01.jpg | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | [확정] 4:5 crop | object-fit: cover |
| 주요 링크 버튼 3개 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | [확정] 네이버·카카오·블로그 링크 | mobile-actions |
| 매장 특징 2열 grid | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | [확정] 2열 grid | mobile-features |
| 서비스 메뉴 2열 grid | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | [확정] 네일·이달의 아트·패디·케어 | mobile-service-menu |
| 리뷰·매장 소개 링크 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | [확정] 모바일 홈 직접 링크 미제공 | 기존 정보 구조·기능 명세와 코드 일치 |
| 370px 이하 추가 축소 | 코드 조건 확인, 렌더링 미수행 | 해당 없음 | 해당 없음 | 해당 없음 | 해당 없음 | [확정] 360px에 적용 | style.css max-width:370px |
| 가로 스크롤 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | [확인 필요] 실제 확인 필요 | 렌더링 미수행 |
| 버튼 터치 영역 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | 코드 조건 확인, 렌더링 미수행 | [확인 필요] 실기기 검수 필요 | 터치 검수 미수행 |

## 9. PC·모바일 전환 경계 QA

- [확정] index.html은 760px 이하에서 `.hero`를 숨기고 `.mobile-home`을 표시한다.
- [확정] index.html은 기본 상태에서 `.mobile-home`을 숨기고 PC hero를 표시하는 구조이다.
- [확정] 하위 페이지는 760px 이하에서 `.site-header`와 `.page-hero`를 숨기고 각 모바일 header/hero를 표시한다.
- [확정] category-style.css에는 761px 이상에서 remaining-mobile-header와 remaining-mobile-hero를 숨기는 규칙이 있다.
- [확정] 코드 조건상 760px 이하와 761px 이상 사이에 중복 또는 누락되는 정수 픽셀 구간은 확인되지 않는다.
- [확인 필요] 실제 화면에서 배치가 자연스럽게 전환되는지는 브라우저 렌더링 검수가 필요하다.
- [확인 필요] 브라우저 확대율, 기기 픽셀 비율, 주소창 높이, 세로·가로 회전에 따른 경계 동작은 실제 검수가 필요하다.

## 10. 하위 페이지 PC 헤더 QA

| 검수 항목 | 코드 기준 확인 | 실제 화면 판정 | 상태 |
|---|---|---|---|
| sticky header | `.site-header { position: sticky; top: 0; }` 확인 | 스크롤 중 겹침 미확인 | [확정] 코드 확인 |
| 3열 grid | PC 헤더가 브랜드, category-nav, 예약 CTA 영역으로 구성됨 | 실제 폭별 균형 미확인 | [확정] 코드 확인 |
| 브랜드 | brand, brand-title, brand-subtitle 확인 | 줄바꿈·가독성 미확인 | [확정] 코드 확인 |
| category-nav | 홈, 네일, 패디/페디, 이달의 아트, 케어, 리뷰, 매장 소개 메뉴 확인 | 메뉴 전체 노출 미확인 | [확정] 코드 확인 |
| 예약 CTA | reservation-link 확인 | 실제 터치/클릭 영역 미검수 | [확정] 코드 확인 |
| active 메뉴 | active 클래스 확인 | 시각적 대비 미검수 | [확정] 코드 확인 |
| hover underline | active/hover underline 규칙 확인 | 실제 hover 미검수 | [확정] 코드 확인 |
| 980px 이하 재배치 | grid-template-columns: 1fr auto 등 재배치 확인 | 실제 겹침 미확인 | [확정] 코드 확인 |
| 980px 이하 nav 가로 스크롤 | category-nav overflow-x:auto 확인 | 실제 스크롤 품질 미확인 | [확정] 코드 확인 / [확인 필요] 렌더링 |
| 980px 이하 예약 CTA 크기 축소 | min-width, min-height, padding, font-size 축소 확인 | 실제 가독성 미확인 | [확정] 코드 확인 |
| 760px 이하 PC header 숨김 | 하위 페이지 PC site-header 숨김 확인 | 경계값 미검수 | [확정] 코드 확인 |
| 메뉴 항목 잘림 또는 겹침 | nowrap과 가로 스크롤 구조 확인 | 실제 잘림·겹침은 미확인 | [확인 필요] 렌더링 필요 |

## 11. 하위 페이지 모바일 메뉴 QA

- [확정] gel-nail.html과 pedi.html은 각각 gel-mobile-header, pedi-mobile-header 계열 모바일 헤더를 사용한다.
- [확정] monthly-art.html, care.html, gallery.html, shop.html은 remaining-mobile-header 계열 모바일 헤더를 사용한다.
- [확정] 모바일 메뉴는 `details`와 `summary`를 사용하며, 별도 JavaScript 없이 브라우저 기본 열기·닫기 동작에 의존한다.
- [확정] 현재 페이지 링크에는 active 클래스와 aria-current="page"가 사용된다.
- [확정] 760px 이하에서 모바일 header/hero가 표시되고 PC header/page-hero는 숨김 처리된다.
- [확정] 374px 이하에서 모바일 header, summary, nav, hero, 카드 간격이 추가 축소된다.
- [확인 필요] dropdown 위치, 메뉴 폭, 터치 영역, 긴 메뉴명 줄바꿈은 실제 화면 검수가 필요하다.
- [확정] 외부 영역 클릭 시 자동 닫힘, Escape 닫기, 스크롤 잠금 처리는 별도 JavaScript로 구현되어 있지 않다.
- [수행하지 않음] 실제 터치, 키보드, 스크린리더 검수는 수행하지 않았다.

## 12. 서비스 카드 반응형 QA

| 페이지 | 1280+ | 900 이하 | 560 이하 | 이미지 비율 | 추가 확인 |
|---|---|---|---|---|---|
| gel-nail.html | [확정] 3열 grid 예상 | [확정] 2열 grid 조건 | [확정] 1열 grid 조건 | [확정] PC 1:1, 모바일 4:3, object-fit: cover | [확인 필요] 제목·설명·가격 줄바꿈, 카드 높이 차이 |
| pedi.html | [확정] 3열 grid 예상 | [확정] 2열 grid 조건 | [확정] 1열 grid 조건 | [확정] PC 1:1, 모바일 4:3, object-fit: cover | [확인 필요] 패디/페디 표기 혼재, alt·제목 대응 |
| monthly-art.html | [확정] 3열 grid 예상 | [확정] 2열 grid 조건 | [확정] 1열 grid 조건 | [확정] PC 1:1, 모바일 4:3, object-fit: cover | [확인 필요] art_09.jpg alt·제목 불일치 |

- [확정] 서비스 카드 이미지는 기본적으로 `object-fit: cover`를 사용하므로 왜곡 방지 대신 crop이 발생할 수 있다.
- [확인 필요] 카드 제목, 설명, 가격 문구의 줄바꿈과 카드 높이 차이는 실제 렌더링 검수가 필요하다.
- [기존 문서 확인] 서비스 카드 콘텐츠 정합성 항목은 기능 명세에서 운영자 또는 원본 사진 목록 대조 필요 사항으로 기록되어 있다.

## 13. 케어 페이지 반응형 QA

- [확정] care.html은 이미지 카드 중심 페이지가 아니라 텍스트 중심 케어 소개, 케어 메뉴, 추천 대상, 진행 순서, 안내사항 구조이다.
- [확정] `.care-intro-panel`, `.care-service-grid`, `.care-info-grid`, `.care-notice-box`가 category-style.css에서 정의되어 있다.
- [확정] `.care-service-grid`는 기본 3열, 900px 이하 2열, 560px 이하 1열로 전환된다.
- [확정] 760px 이하에서 하위 페이지 PC header/page-hero는 숨겨지고 모바일 header/hero가 표시된다.
- [확정] care.html 인라인 style에는 care-intro-title의 한글 줄바꿈을 제어하는 `word-break: keep-all`, `overflow-wrap: normal`, `white-space: normal` 선언이 있다.
- [확인 필요] 긴 케어 문구가 360px 화면에서 자연스럽게 줄바꿈되는지 실제 화면 확인이 필요하다.
- [확인 필요] 케어 페이지 유지 여부와 의료적 치료·진단으로 오해되지 않는 문구 검수는 운영자 또는 매장주 확인이 필요하다.

## 14. 리뷰 페이지 반응형 QA

- [확정] gallery.html은 파일명과 달리 화면상 리뷰 안내 페이지 역할을 한다.
- [확정] PC 구조에는 page-hero, review_intro_poster.png, review-poster-wrap, review-poster-box, review-poster-image, review-poster-link가 있다.
- [확정] review-poster-link는 포스터 위 투명 링크로 구현되어 있으며 focus-visible 스타일이 있다.
- [확정] gallery.html 인라인 style에는 768px 이하에서 페이지 여백과 review-poster-link 좌표·크기를 조정하고, 560px 이하에서 여백·모서리·좌표를 추가 조정하는 규칙이 있다.
- [확정] category-style.css의 760px 이하 규칙에서는 `.review-poster-link`가 `display: none`으로 숨김 처리된다.
- [확정] 모바일 구조에는 네이버 리뷰 보러가기 버튼이 별도로 제공된다.
- [확인 필요] PC 포스터 이미지와 투명 링크 좌표 일치, 모바일 버튼 터치 영역, 포스터 텍스트 가독성은 실제 화면 검수가 필요하다.

## 15. 매장 소개 페이지 반응형 QA

- [확정] shop.html은 page-hero와 shop_intro_poster.png 중심의 포스터 구조이다.
- [확정] shop-poster-wrap, shop-poster-box, shop-poster-image가 인라인 style로 정의되어 있다.
- [확정] poster 이미지는 width 100%, height auto로 원본 비율을 유지한다.
- [확정] shop.html 인라인 style은 768px 이하에서 페이지와 PC hero 상하 여백을 조정하며, 768px 구간에서 poster wrapper의 max-width: 1180px 값은 유지된다.
- [확정] 560px 이하에서 wrapper 좌우 여백과 이미지 모서리가 조정된다.
- [확정] 760px 이하에서는 remaining-mobile-header/hero가 표시되고 PC header/page-hero는 숨김 처리된다.
- [확인 필요] 이미지 안 글자의 모바일 가독성, 확대 필요 여부, 실제 터치 스크롤 품질은 화면 검수가 필요하다.

## 16. 이미지 QA

| 페이지 | 이미지 | 표시 방식 | 반응형 처리 | fallback | 추가 확인 |
|---|---|---|---|---|---|
| index.html | final-design.png | PC hero 원본 이미지, object-fit: contain | 1491/1055 비율, 760px 이하 hero 숨김 | [확정] 미구현 | [확인 필요] hotspot 좌표 대응, PC 잘림 여부 |
| index.html | nail_01.jpg | 모바일 홈 대표 이미지, object-fit: cover | aspect-ratio: 4/5 | [확정] 미구현 | [확인 필요] 모바일 crop 품질 |
| gel-nail.html | nail_01~09 | 서비스 카드 이미지, object-fit: cover | PC 1:1, 모바일 4:3 | [확정] 미구현 | [확인 필요] 카드별 crop과 텍스트 대응 |
| pedi.html | pedi_01~09 | 서비스 카드 이미지, object-fit: cover | PC 1:1, 모바일 4:3 | [확정] 미구현 | [확인 필요] 패디/페디 표기와 alt·제목 대응 |
| monthly-art.html | art_01~09 | 서비스 카드 이미지, object-fit: cover | PC 1:1, 모바일 4:3 | [확정] 미구현 | [확인 필요] art_09.jpg alt·제목 대응 |
| gallery.html | review_intro_poster.png | 리뷰 안내 포스터, width 100%, height auto | 768px/560px 이하 여백·좌표 조정 | [확정] 미구현 | [확인 필요] 투명 링크 위치와 모바일 가독성 |
| shop.html | shop_intro_poster.png | 매장 소개 포스터, width 100%, height auto | 768px/560px 이하 여백·모서리 조정 | [확정] 미구현 | [확인 필요] 이미지 안 글자 가독성 |
| care.html | care 관련 이미지 파일 | 현재 케어 본문은 텍스트 중심 구조 | 실제 사용 이미지 여부는 코드 기준 제한 | [확정] 미구현 | [확인 필요] 사용하지 않는 이미지 자산 여부 |

- [확정] 현재 코드에서 이미지 로드 실패 fallback, onerror 이벤트, 대체 이미지 표시 로직은 확인되지 않는다.

## 17. 콘텐츠 줄바꿈 QA

- [확인 필요] 모바일 브랜드명, 히어로 제목, 소개 문구는 360px 실제 화면에서 한글 단어 중간 분리 여부를 확인해야 한다.
- [확인 필요] 카드 제목, 카드 설명, 가격 문구는 900px 이하 2열과 560px 이하 1열에서 줄바꿈과 카드 높이 차이를 확인해야 한다.
- [확인 필요] 케어 메뉴, 진행 순서, 안내사항의 긴 문구는 360px·390px에서 가독성 검수가 필요하다.
- [확인 필요] 주소 또는 운영 정보가 이미지 안 문구로 포함된 경우 실제 모바일 가독성은 브라우저 확대 없이 확인해야 한다.
- [확인 필요] 패디/페디 표기 혼재와 이미지 alt·화면 제목 불일치는 운영자 또는 원본 사진 목록과 대조해야 한다.
- [기존 문서 확인] art_09.jpg, pedi_03.jpg, pedi_07.jpg, pedi_09.jpg의 콘텐츠 정합성 확인 필요 항목이 기능 명세에 기록되어 있다.

## 18. 접근성과 모바일 사용성

- [확정] PC hero 투명 hotspot에는 aria-label이 사용된다.
- [확정] 하위 페이지 현재 메뉴에는 active 클래스와 aria-current="page"가 사용된다.
- [확정] 이미지에는 alt 속성이 제공된다.
- [확정] 모바일 메뉴는 details/summary 기본 동작을 사용한다.
- [확정] hero-hotspot과 review-poster-link에는 focus-visible 스타일이 확인된다.
- [확인 필요] 최소 터치 높이 44px 충족 여부는 실제 렌더링과 터치 검수가 필요하다.
- [확인 필요] 투명 hotspot과 포스터 투명 링크의 키보드 이동 순서, 포커스 표시 위치, 이미지 안 문구와 HTML 텍스트 차이는 실제 접근성 검수가 필요하다.
- [수행하지 않음] 실제 스크린리더 검수, 키보드 전용 검수, 색상 대비 측정은 수행하지 않았다.

## 19. 발견 사항 분류

| 분류 | 발견 사항 | 근거 | 상태 |
|---|---|---|---|
| 결함 / Defect | 현재 코드 기준으로 즉시 단정할 수 있는 반응형 결함은 문서 작성 범위에서 확정하지 않음 | 실제 렌더링 미수행 | [확인 필요] |
| 개선 / Improvement | 이미지 fallback 미구현 | onerror/fallback 로직 미확인 | [확정] 코드 확인 |
| 개선 / Improvement | 모바일 details 외부 클릭 닫기, Escape 닫기, 스크롤 잠금 미구현 | 별도 JavaScript 없음 | [확정] 코드 확인 |
| 허용 가능한 반응형 차이 / Acceptable responsive difference | 모바일 홈에서 리뷰·매장 소개 직접 링크 미제공 | 모바일 홈 서비스 메뉴는 4개 서비스 중심 | [확정] 코드 확인 |
| 확인 필요 | 패디/페디 표기 혼재 | pedi.html 카드 텍스트와 data-category 일부 불일치 | [확인 필요] 콘텐츠 정합성 |
| 확인 필요 | 서비스 카드 alt·제목 불일치 | art_09.jpg, pedi_09.jpg 등 기존 기능 명세 기록 | [확인 필요] 원본 사진 목록 대조 |
| 확인 필요 | PC hotspot 좌표 실제 검수 필요 | absolute 좌표는 코드 확인, 실제 이미지 대응 미확인 | [확인 필요] 렌더링 |
| 확인 필요 | 리뷰 포스터 투명 링크 실제 좌표 검수 필요 | 포스터 링크 좌표는 코드 확인, 실제 클릭 위치 미확인 | [확인 필요] 렌더링 |
| 수행하지 않음 | 실제 기기 검수 미수행 | 스마트폰·태블릿 접속 없음 | [수행하지 않음] |

## 20. 실제 기기 검수 항목

| 검수 항목 | 상태 | 비고 |
|---|---|---|
| 화면 회전 | [수행하지 않음] | 실제 스마트폰·태블릿 필요 |
| 주소창 높이 변화 | [수행하지 않음] | 모바일 브라우저 필요 |
| 브라우저 확대 | [수행하지 않음] | 실제 브라우저 필요 |
| details 메뉴 터치 | [수행하지 않음] | 실제 터치 필요 |
| 외부 앱 이동 | [수행하지 않음] | 네이버/카카오톡 앱 설치 환경 필요 |
| 네이버 앱 또는 브라우저 | [수행하지 않음] | 외부 링크 동작 확인 필요 |
| 카카오톡 실행 | [수행하지 않음] | 카카오톡 앱 연동 확인 필요 |
| 이미지 로딩 | [수행하지 않음] | 네트워크·캐시 상태별 확인 필요 |
| 카드 스크롤 | [수행하지 않음] | 실제 viewport 필요 |
| 포스터 확대 | [수행하지 않음] | 모바일 가독성 확인 필요 |
| hotspot 클릭 위치 | [수행하지 않음] | PC 브라우저와 실제 이미지 대응 필요 |
| 키보드 포커스 | [수행하지 않음] | 키보드 전용 이동 확인 필요 |
| safe area | [수행하지 않음] | iOS/Android 기기 필요 |
| 실제 스마트폰 화면 | [수행하지 않음] | 실기기 QA 필요 |

## 21. 회귀 검수 기준

- [확인 필요] PC 원본 이미지와 hotspot 좌표가 이미지 문구와 일치하는지 확인한다.
- [확인 필요] 모바일 홈에서 브랜드명, 히어로, 버튼, 서비스 메뉴가 360px·390px·412px에서 겹치지 않는지 확인한다.
- [확인 필요] 760px와 761px 전환 경계에서 코드상 정수 픽셀 구간 누락은 없지만 실제 배치가 자연스럽게 전환되는지 확인한다.
- [확인 필요] 하위 페이지 PC header가 980px 이하에서 가로 스크롤과 예약 CTA 축소를 유지하는지 확인한다.
- [확인 필요] 모바일 details 메뉴가 374px 이하에서도 터치 가능하고 메뉴 항목이 잘리지 않는지 확인한다.
- [확인 필요] 서비스 카드가 3열·2열·1열 전환 시 이미지 crop, 카드 높이, 제목·가격 줄바꿈을 유지하는지 확인한다.
- [확인 필요] 케어 페이지의 긴 문구가 작은 화면에서 과도하게 잘리지 않는지 확인한다.
- [확인 필요] 리뷰 포스터와 매장 소개 포스터의 모바일 가독성과 링크 영역을 확인한다.
- [확인 필요] 내부 링크, 외부 링크, active 상태, 이미지 표시, 가로 스크롤, 한글 줄바꿈, 콘텐츠 정합성을 변경 후 회귀 검수한다.

## 22. 최종 판정

- [확정] 코드 기준으로 v1은 PC 홈 원본 이미지형 구조와 모바일 홈 별도 HTML 구조를 760px 기준으로 전환한다.
- [확정] 하위 페이지는 PC site-header/page-hero와 모바일 header/hero를 760px 기준으로 구분한다.
- [확정] 서비스 카드 grid는 기본 3열, 900px 이하 2열, 560px 이하 1열 구조로 작성되어 있다.
- [확정] 980px 이하에서 하위 페이지 PC header는 재배치되고 category-nav는 가로 스크롤 구조가 되며 reservation-link는 숨겨지지 않고 크기만 축소된다.
- [수행하지 않음] 브라우저 에뮬레이션, 실제 스마트폰, 실제 태블릿, 실제 PC 브라우저 검수는 수행하지 않았다.
- [확인 필요] 배포 완료와 사용성 검수 완료는 별개이며, 실제 화면 검수를 하지 않은 항목은 통과로 단정하지 않는다.

## 23. 문서 작성 기준

- [확정] 현재 코드와 Git 이력을 기준으로 작성했다.
- [확정] 기존 역기획 문서를 참고하되 현재 코드와 충돌하는 경우 현재 코드를 우선했다.
- [확정] 코드 검수와 실제 렌더링 검수를 구분했다.
- [확정] PC 원본 이미지형 구조와 모바일 별도 구조를 구분했다.
- [확정] 수행하지 않은 테스트를 통과로 기록하지 않았다.
- [확정] 웹사이트 코드를 수정하지 않고 `docs/05_responsive_qa.md` 문서만 작성했다.

## 확인 근거

- [확정] 작업 경로: `C:\Users\jeongeun\Documents\Codex\choco-nail-v1-clean`
- [확정] 원격 저장소: `origin https://github.com/mydunalove-sena/choco-nail.git`
- [이력 확인] 문서 작성 직전 기준 커밋: `b3098a1 docs: add v1 functional specification`
- [확정] 적용 QA 기준: `C:\Users\jeongeun\.codex\skills\responsive-web-qa\SKILL.md`
