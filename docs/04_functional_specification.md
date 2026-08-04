# 쵸코네일 덕양삼송점 홈페이지 v1 기능 명세

## 1. 문서 목적

- [확정] 이 문서는 쵸코네일 홈페이지 v1에 현재 구현된 기능과 사용자 동작을 현재 코드 기준으로 정리한 역기획 기능 명세다.
- [확정] PC 원본 이미지 위 투명 hotspot 기능과 모바일 HTML 기반 기능을 구분한다.
- [확정] 서비스별 개별 페이지 이동 구조와 외부 링크 동작을 정리한다.
- [확정] 구현 상태, 미구현 기능, 운영 확인 사항을 구분한다.
- [미제공]: 해당 화면에는 기능 또는 링크가 제공되지 않음
- [미사용]: 현재 구조에서 해당 기술이나 방식이 사용되지 않음
- [확정] 공식 프로젝트 표기는 쵸코네일 덕양삼송점이다.
- [확정] 현재 v1 화면 코드에는 주로 쵸코네일 삼송점이 표시된다.

## 2. 전체 기능 목록

| 기능 ID | 기능명 | 사용 페이지 | 구현 상태 | 주요 근거 |
|---|---|---|---|---|
| FN-001 | PC 투명 hotspot 내비게이션 | `index.html` | 구현 | [확정] `.hero-hotspot` 빈 `<a>` 요소, `aria-label`, absolute 좌표, 내부 페이지 href |
| FN-002 | PC 외부 링크 hotspot | `index.html` | 구현 | [확정] 네이버 장소, 카카오 오픈채팅, 네이버 블로그 href와 `target="_blank"` |
| FN-003 | 모바일 홈 주요 링크 | `index.html` | 구현 | [확정] `.mobile-actions`의 네이버 예약, 카카오톡 상담, 블로그 보기 링크 |
| FN-004 | 모바일 홈 서비스 메뉴 | `index.html` | 구현 | [확정] `.mobile-service-menu`의 네일, 이달의 아트, 패디, 케어 링크 |
| FN-005 | 하위 페이지 PC 내비게이션 | 6개 하위 페이지 | 구현 | [확정] `.category-nav`에 홈, 네일, 패디/페디, 이달의 아트, 케어, 리뷰, 매장 소개 링크 |
| FN-006 | 하위 페이지 모바일 details 메뉴 | 6개 하위 페이지 | 구현 | [확정] `<details>`, `<summary>`, 모바일 nav 링크 |
| FN-007 | 현재 페이지 active 표시 | 6개 하위 페이지 | 구현 | [확정] PC `class="active"`, 모바일 `class="active" aria-current="page"` |
| FN-008 | 네이버 장소 이동 | 전체 페이지 | 구현 | [확정] `https://map.naver.com/p/entry/place/1964980021` 링크 |
| FN-009 | 네이버 리뷰 이동 | `gallery.html` | 구현 | [확정] `placePath=/review` 포함 네이버 장소 URL |
| FN-010 | 카카오톡 상담 이동 | `index.html` | 구현 | [확정] `https://open.kakao.com/o/sCU8pFob` 링크 |
| FN-011 | 네이버 블로그 이동 | `index.html` | 구현 | [확정] `https://blog.naver.com/boong27` 링크 |
| FN-012 | 이미지 카드 표시 | `gel-nail.html`, `pedi.html`, `monthly-art.html` | 구현 | [확정] 서비스별 이미지 카드 총 27개, 각 페이지 9개 |
| FN-013 | 리뷰 포스터 투명 링크 | `gallery.html` | 구현 | [확정] `.review-poster-link` absolute 투명 링크 |
| FN-014 | 반응형 PC·모바일 화면 전환 | 전체 페이지 | 구현 | [확정] `style.css`, `category-style.css` media query |
| FN-015 | 전화 걸기 | 전체 페이지 | [미구현] | [확정] 확인한 7개 HTML에서 `tel:` 링크 없음 |
| FN-016 | 이미지 오류 대응 | 전체 페이지 | [미구현] | [확정] `onerror`, error event, fallback UI 확인되지 않음 |
| FN-017 | 별도 JavaScript 사용 | 전체 페이지 | [미사용] | [확정] `script.js` 없음, 인라인 `<script>` 없음 |
| FN-018 | 모바일 메뉴 외부 클릭 닫기 | 하위 페이지 모바일 | [미구현] | [확정] 별도 JavaScript 없음, browser 기본 `details` 동작만 사용 |
| FN-019 | 링크 클릭 후 로딩/완료 피드백 | 전체 페이지 | [미제공] | [확정] 별도 로딩 상태 UI 또는 스크립트 확인되지 않음 |

## 3. index.html PC 기능

| 기능 | 사용자 동작 | 이동 대상 | 구현 방식 | 확인 상태 |
|---|---|---|---|---|
| 홈 메뉴 hotspot | PC 원본 이미지의 홈 영역 클릭 | `index.html` | 빈 `<a class="hero-hotspot menu-home">`, `aria-label`, absolute 좌표 | [확정] |
| 젤네일 이동 | PC 원본 이미지의 젤네일 영역 클릭 | `gel-nail.html` | 빈 `<a class="hero-hotspot menu-nail">` | [확정] |
| 패디 이동 | PC 원본 이미지의 패디 영역 클릭 | `pedi.html` | 빈 `<a class="hero-hotspot menu-pedi">` | [확정] |
| 이달의 아트 이동 | PC 원본 이미지의 이달의 아트 영역 클릭 | `monthly-art.html` | 빈 `<a class="hero-hotspot menu-monthly">` | [확정] |
| 케어 이동 | PC 원본 이미지의 케어 영역 클릭 | `care.html` | 빈 `<a class="hero-hotspot menu-care">` | [확정] |
| 리뷰 이동 | PC 원본 이미지의 리뷰 영역 클릭 | `gallery.html` | 빈 `<a class="hero-hotspot menu-review">` | [확정] |
| 매장 소개 이동 | PC 원본 이미지의 매장 소개 영역 클릭 | `shop.html` | 빈 `<a class="hero-hotspot menu-shop">` | [확정] |
| 우측 상단 네이버 예약 | 우측 상단 예약 hotspot 클릭 | 네이버 장소 URL | 빈 `<a class="hero-hotspot naver-top">`, 새 창 | [확정], 예약 전용 화면 여부는 [확인 필요] |
| 메인 네이버 예약 | 메인 예약 hotspot 클릭 | 네이버 장소 URL | 빈 `<a class="hero-hotspot naver-main">`, 새 창 | [확정], 예약 전용 화면 여부는 [확인 필요] |
| 카카오톡 상담 | 카카오 hotspot 클릭 | 카카오 오픈채팅 URL | 빈 `<a class="hero-hotspot kakao">`, 새 창 | [확정] |
| 네이버 블로그 | 블로그 hotspot 클릭 | 네이버 블로그 URL | 빈 `<a class="hero-hotspot blog">`, 새 창 | [확정] |
| 하단 서비스 카드 이동 | 원본 이미지 하단 서비스 카드 클릭 | 젤네일, 이달의 아트, 패디, 케어 | 빈 `<a class="hero-hotspot card-*">` | [확정] |

- [확정] PC hotspot은 화면에 보이는 텍스트 버튼이 아니라 `images/final-design.png` 위에 얹힌 투명 링크 영역이다.
- [확정] hotspot 위치 확인용 빨간 배경 코드는 `style.css`에 주석 처리되어 있으며 현재 화면에 적용되지 않는다.
- [확정] `.hero-hotspot:focus-visible`에는 키보드 포커스 outline이 있다.

## 4. index.html 모바일 기능

| 기능 | 사용자 동작 | 이동 대상 | 구현 방식 | 확인 상태 |
|---|---|---|---|---|
| 모바일 브랜드 홈 링크 | 브랜드명 클릭 | `index.html` | `.mobile-brand` 링크 | [확정] |
| 예약하기 | 헤더 예약하기 클릭 | 네이버 장소 URL | `.mobile-reserve`, 새 창 | [확정], 예약 전용 화면 여부는 [확인 필요] |
| 네이버 예약 | 주요 링크 클릭 | 네이버 장소 URL | `.mobile-action.primary`, 새 창 | [확정], 예약 전용 화면 여부는 [확인 필요] |
| 카카오톡 상담 | 주요 링크 클릭 | 카카오 오픈채팅 URL | `.mobile-action`, 새 창 | [확정] |
| 블로그 보기 | 주요 링크 클릭 | 네이버 블로그 URL | `.mobile-action`, 새 창 | [확정] |
| 네일 | 서비스 메뉴 클릭 | `gel-nail.html` | `.mobile-service-menu a` | [확정] |
| 이달의 아트 | 서비스 메뉴 클릭 | `monthly-art.html` | `.mobile-service-menu a` | [확정] |
| 패디 | 서비스 메뉴 클릭 | `pedi.html` | `.mobile-service-menu a` | [확정] |
| 케어 | 서비스 메뉴 클릭 | `care.html` | `.mobile-service-menu a` | [확정] |
| 리뷰 | 모바일 홈에서 메뉴 이동 | 해당 없음 | 모바일 홈 서비스 메뉴에는 직접 링크가 없음 | [미제공] |
| 매장 소개 | 모바일 홈에서 메뉴 이동 | 해당 없음 | 모바일 홈 서비스 메뉴에는 직접 링크가 없음 | [미제공] |

## 5. 하위 페이지 PC 내비게이션

| 메뉴 | 사용 페이지 | 이동 대상 | 현재 페이지 표시 | 확인 상태 |
|---|---|---|---|---|
| 홈 | 전체 하위 페이지 | `index.html` | 현재 표시 없음 | [확정] |
| 네일 | 전체 하위 페이지 | `gel-nail.html` | `gel-nail.html`에서 `active` | [확정] |
| 패디 또는 페디 | 전체 하위 페이지 | `pedi.html` | `pedi.html`에서 `active` | [확정], 표기 통일은 [확인 필요] |
| 이달의 아트 | 전체 하위 페이지 | `monthly-art.html` | `monthly-art.html`에서 `active` | [확정] |
| 케어 | 전체 하위 페이지 | `care.html` | `care.html`에서 `active` | [확정] |
| 리뷰 | 전체 하위 페이지 | `gallery.html` | `gallery.html`에서 `active` | [확정] |
| 매장 소개 | 전체 하위 페이지 | `shop.html` | `shop.html`에서 `active` | [확정] |
| 네이버 예약 | 전체 하위 페이지 PC 헤더 | 네이버 장소 URL | 현재 페이지 표시와 무관 | [확정], 예약 전용 화면 여부는 [확인 필요] |

- [확정] PC 내비게이션은 `.category-nav` 링크와 `.reservation-link`로 구현된다.
- [확정] 980px 이하에서 `.category-nav`는 가로 스크롤 구조가 되고 `.reservation-link`는 숨겨지지 않고 크기만 축소된다.
- [확정] 760px 이하에서는 PC `.site-header` 전체가 숨겨져 PC 예약 링크도 함께 표시되지 않는다.

## 6. 하위 페이지 모바일 메뉴

- [확정] 하위 페이지 모바일 메뉴는 `<details>`와 `<summary>`로 구현된다.
- [확정] 사용자는 `summary`의 메뉴를 눌러 메뉴를 열고 닫을 수 있다.
- [확정] 메뉴 항목을 선택하면 해당 HTML 페이지로 이동한다.
- [확정] 현재 페이지 메뉴에는 `active` 클래스와 `aria-current="page"`가 적용된다.
- [확정] 별도 JavaScript 없이 브라우저 기본 `details` 동작을 사용한다.
- [미구현] 외부 영역 클릭 시 자동 닫힘 처리는 별도 코드가 확인되지 않는다.
- [미구현] Escape 키 닫기 처리는 별도 코드가 확인되지 않는다.
- [미구현] 메뉴 열림 상태에서 배경 스크롤 잠금 처리는 별도 코드가 확인되지 않는다.
- [확인 필요] 실제 모바일 브라우저에서 기본 `details` 동작과 터치 사용성 검수가 필요하다.

## 7. 페이지 간 이동

| 출발 페이지 | 링크 또는 메뉴 | 도착 페이지 | 확인 상태 |
|---|---|---|---|
| 홈 | PC hotspot, 모바일 서비스 메뉴 `네일` | `gel-nail.html` | [확정] |
| 홈 | PC hotspot, 모바일 서비스 메뉴 `패디` | `pedi.html` | [확정] |
| 홈 | PC hotspot, 모바일 서비스 메뉴 `이달의 아트` | `monthly-art.html` | [확정] |
| 홈 | PC hotspot, 모바일 서비스 메뉴 `케어` | `care.html` | [확정] |
| 홈 | PC hotspot `리뷰` | `gallery.html` | [확정] |
| 홈 | PC hotspot `매장 소개` | `shop.html` | [확정] |
| 각 하위 페이지 | 브랜드 링크 또는 홈 메뉴 | `index.html` | [확정] |
| 각 하위 페이지 | PC `.category-nav` | 홈, 네일, 패디/페디, 이달의 아트, 케어, 리뷰, 매장 소개 | [확정] |
| 각 하위 페이지 | 모바일 `details` 메뉴 | 홈, 네일, 패디/페디, 이달의 아트, 케어, 리뷰, 매장 소개 | [확정] |

## 8. 서비스별 페이지 기능

### gel-nail.html

- [확정] 젤네일 이미지 카드 9개를 표시한다.
- [확정] 첫 카드에 대표 표시와 `손젤(케어+젤) 회원가 40,000원` 가격 문구가 있다.
- [확정] 각 카드 이미지는 `images/nail_*.jpg`, `alt`, `loading="lazy"`를 사용한다.
- [확정] PC·모바일 내비게이션과 네이버 예약 링크가 있다.

### pedi.html

- [확정] 패디/페디 이미지 카드 9개를 표시한다.
- [확정] 첫 카드에 대표 표시와 `페디(회원가) 50,000원` 가격 문구가 있다.
- [확정] 각 카드 이미지는 `images/pedi_*.jpg`, `alt`, `loading="lazy"`를 사용한다.
- [확정] PC·모바일 내비게이션과 네이버 예약 링크가 있다.
- [확인 필요] `pedi_03.jpg` 카드는 `alt="오로라하트 페디"`이지만 `h3` 제목은 `오로라하트 패디`로 표기가 혼재한다.
- [확인 필요] `pedi_07.jpg` 카드는 `data-category="패디"`이지만 화면 category 텍스트는 `페디`다.
- [확인 필요] `pedi_09.jpg` 카드는 `alt="크리스마스아트"`이지만 `h3` 제목은 `인어공주 스타일`로 서로 일치하지 않는다.
- [확인 필요] `패디`와 `페디` 표기 통일이 필요하다.

### monthly-art.html

- [확정] 이달의 아트 이미지 카드 9개를 표시한다.
- [확정] 첫 카드에는 대표 표시와 `이달의 아트` 라벨/가격 위치 문구가 있다.
- [확정] 각 카드 이미지는 `images/art_*.jpg`, `alt`, `loading="lazy"`를 사용한다.
- [확인 필요] `art_09.jpg` 카드는 `alt="진주니트네일"`이지만 `h3` 제목은 `크리스마스`로 서로 일치하지 않는다.
- [확정] PC·모바일 내비게이션과 네이버 예약 링크가 있다.

### care.html

- [확정] 케어 소개 영역이 있다.
- [확정] 케어 메뉴 7개를 표시한다.
- [확정] 추천 대상, 진행 순서, 안내사항을 표시한다.
- [확정] PC·모바일 내비게이션과 네이버 예약 링크가 있다.
- [기존 문서 확인] 케어 페이지 유지 여부는 매장주 협의 대기 사항이다.
- [기존 문서 확인] 의료적 오해를 줄이기 위한 케어 문구 검수도 확인 필요 사항이다.

### shop.html

- [확정] `images/shop_intro_poster.png` 매장 소개 포스터 이미지를 표시한다.
- [확정] PC·모바일 내비게이션과 네이버 예약 링크가 있다.
- [확정] 별도 카드 목록이나 지도 스크립트는 확인되지 않는다.

## 9. 리뷰 페이지 기능

- [확정] `gallery.html`은 내부 리뷰 안내 페이지다.
- [확정] 화면 명칭과 내비게이션 명칭은 `리뷰`다.
- [확정] `images/review_intro_poster.png` 리뷰 포스터 이미지를 표시한다.
- [확정] PC 포스터 위에 `.review-poster-link` 투명 링크가 있다.
- [확정] 모바일 히어로에 네이버 리뷰 보러가기 버튼이 있다.
- [확정] PC 포스터 투명 링크와 모바일 버튼은 `placePath=/review`가 포함된 네이버 장소 URL로 이동한다.
- [확정] 내부 `gallery.html` 이동과 외부 네이버 리뷰 이동은 구분된다.
- [확인 필요] 파일명 `gallery`와 화면 명칭 `리뷰`의 최종 명칭 정리가 필요하다.

## 10. 외부 링크 기능

| 연결 대상 | 사용 위치 | URL 방식 | 새 창 여부 | 확인 상태 |
|---|---|---|---|---|
| 네이버 장소 | 홈 PC/모바일 예약, 하위 페이지 PC/모바일 예약 | `https://map.naver.com/p/entry/place/1964980021` | 새 창 | [확정] |
| 네이버 예약 또는 예약하기 | 홈과 하위 페이지 예약 CTA | 네이버 장소 기본 URL | 새 창 | [확정], 예약 전용 화면 여부는 [확인 필요] |
| 네이버 리뷰 | `gallery.html` 모바일 버튼, 포스터 투명 링크 | 네이버 장소 URL + `placePath=/review` | 새 창 | [확정] |
| 카카오톡 상담 | 홈 PC hotspot, 홈 모바일 주요 링크 | `https://open.kakao.com/o/sCU8pFob` | 새 창 | [확정] |
| 네이버 블로그 | 홈 PC hotspot, 홈 모바일 주요 링크 | `https://blog.naver.com/boong27` | 새 창 | [확정] |
| 전화 | 확인한 7개 HTML | `tel:` 링크 없음 | 해당 없음 | [미구현] |

- [확정] 외부 웹 링크에는 `target="_blank"`와 `rel="noopener"`가 적용되어 있다.
- [확인 필요] 네이버 장소 기본 URL이 실제 예약 전용 화면으로 연결되는지는 운영 확인이 필요하다.

## 11. 이미지 표시 기능

| 페이지 | 이미지 종류 | 표시 방식 | lazy loading | 오류 대응 | 확인 상태 |
|---|---|---|---|---|---|
| `index.html` | `final-design.png` | PC hero 원본 이미지, `object-fit: contain` | 없음 | fallback 없음 | [확정] |
| `index.html` | `nail_01.jpg` | 모바일 홈 대표 이미지, `object-fit: cover` | 없음 | fallback 없음 | [확정] |
| `gel-nail.html` | 젤네일 이미지 9개 | 카드 이미지, `object-fit: cover` | 있음 | fallback 없음 | [확정] |
| `pedi.html` | 패디 이미지 9개 | 카드 이미지, `object-fit: cover` | 있음 | fallback 없음 | [확정] |
| `monthly-art.html` | 이달의 아트 이미지 9개 | 카드 이미지, `object-fit: cover` | 있음 | fallback 없음 | [확정] |
| `gallery.html` | `review_intro_poster.png` | 포스터 이미지, `width: 100%`, `height: auto` | 없음 | fallback 없음 | [확정] |
| `shop.html` | `shop_intro_poster.png` | 포스터 이미지, `width: 100%`, `height: auto` | 없음 | fallback 없음 | [확정] |
| `care.html` | `care_*.jpg` 파일 | 저장소에는 존재하지만 본문 직접 사용 확인되지 않음 | 해당 없음 | 해당 없음 | [확정] |

- [미구현] 이미지 로드 실패 시 대체 이미지, 오류 메시지, `onerror` 처리, JavaScript error event 처리는 확인되지 않는다.

## 12. 반응형 화면 전환 기능

| 기준 | 적용 대상 | 코드상 동작 | 실제 렌더링 검수 | 확인 상태 |
|---|---|---|---|---|
| `760px` 이하 | `index.html` | PC `.hero` 숨김, `.mobile-home` 표시 | 미수행 | [확정] 코드 기준 |
| `760px` 이하 | 하위 페이지 | PC `.site-header`, `.page-hero` 숨김, 모바일 header/hero 표시 | 미수행 | [확정] 코드 기준 |
| `761px` 이상 | remaining 모바일 요소 | 모바일 header/hero 숨김 | 미수행 | [확정] 코드 기준 |
| `980px` 이하 | 하위 페이지 PC 헤더 | `.site-header` 재배치, `.category-nav` 가로 스크롤, 예약 CTA 크기 축소 | 미수행 | [확정] 코드 기준 |
| `900px` 이하 | 카드 grid | 3열에서 2열로 변경 | 미수행 | [확정] 코드 기준 |
| `560px` 이하 | 카드 grid | 1열로 변경 | 미수행 | [확정] 코드 기준 |

- [확인 필요] 실제 브라우저, 실제 스마트폰, 콘솔 오류 검수는 별도로 수행해야 한다.

## 13. 활성 상태와 사용자 피드백

- [확정] PC 하위 페이지 현재 메뉴는 `.category-nav a.active`로 표시된다.
- [확정] 모바일 하위 페이지 현재 메뉴는 `active`와 `aria-current="page"`로 표시된다.
- [확정] PC nav hover/active underline은 CSS `::after`로 구현된다.
- [확정] PC 홈 투명 hotspot은 `:focus-visible` outline으로 키보드 포커스 표시가 있다.
- [확정] 리뷰 포스터 투명 링크도 `:focus-visible` outline이 있다.
- [미구현] 링크 클릭 후 로딩 표시, 완료 알림, 실패 메시지는 확인되지 않는다.
- [미구현] 외부 링크 새 창 이동 실패나 팝업 차단에 대한 안내는 확인되지 않는다.

## 14. 오류 및 예외 처리

| 대상 | 현재 코드에서 확인되는 처리 | 확인 상태 |
|---|---|---|
| 이미지 로드 실패 | 별도 `onerror`, fallback UI 확인되지 않음 | [미구현] |
| 외부 링크 실패 | 실패 감지 또는 안내 없음 | [미구현] |
| 네트워크 오류 | 감지 또는 재시도 없음 | [미구현] |
| 존재하지 않는 내부 페이지 | 링크 대상 파일은 현재 존재하지만 404 대응 코드 없음 | [미구현] |
| JavaScript 비활성화 | 별도 JavaScript가 없으므로 기본 링크와 details는 동작 가능 | [확정] 코드 기준 |
| 모바일 details 동작 | 브라우저 기본 details 동작 사용 | [확정] |
| hotspot 좌표 불일치 | 위치 확인용 debug CSS는 주석 처리되어 있으며 자동 검증 없음 | [미구현] |
| 새 창 차단 | 차단 감지 또는 대체 안내 없음 | [미구현] |

## 15. 접근성과 사용성

- [확정] PC hotspot과 주요 링크에는 `aria-label`이 다수 제공된다.
- [확정] 하위 페이지 모바일 현재 메뉴에는 `aria-current="page"`가 적용된다.
- [확정] 확인한 이미지에는 `alt` 속성이 있다.
- [확정] 모바일 메뉴는 `details/summary`를 사용한다.
- [확정] PC hotspot과 리뷰 포스터 투명 링크에는 `focus-visible` 스타일이 있다.
- [확정] 투명 hotspot은 `<a>` 요소이므로 키보드 포커스 대상이 될 수 있다.
- [확정] PC 원본 이미지 안의 문구는 실제 HTML 텍스트가 아니므로 스크린리더와 검색 가능한 텍스트가 시각 문구와 다를 수 있다.
- [확정] 버튼처럼 보이는 요소는 대부분 링크(`<a>`)로 구현되어 있다.
- [확인 필요] 실제 키보드 이동 순서, 스크린리더 읽힘, 모바일 터치 영역, 색상 대비, active 상태가 색상만으로 구분되는지 여부는 별도 QA가 필요하다.

## 16. 페이지별 기능 요약

| 페이지 | 핵심 기능 | 외부 연결 | 모바일 지원 | 운영 확인 |
|---|---|---|---|---|
| `index.html` | PC hotspot, 모바일 주요 링크, 모바일 서비스 메뉴 | 네이버 장소, 카카오톡, 블로그 | 별도 모바일 홈 | 예약 URL, 외부 링크 운영 상태 |
| `gel-nail.html` | 젤네일 카드 9개, PC/모바일 nav | 네이버 장소 | 모바일 header/hero/details/nav | 가격/문구 최종 확인 |
| `pedi.html` | 패디 카드 9개, PC/모바일 nav | 네이버 장소 | 모바일 header/hero/details/nav | 패디/페디 표기 확인 |
| `monthly-art.html` | 이달의 아트 카드 9개, PC/모바일 nav | 네이버 장소 | 모바일 header/hero/details/nav | 가격 또는 라벨 정책 확인 |
| `care.html` | 케어 소개, 메뉴 7개, 추천 대상, 진행 순서, 안내사항 | 네이버 장소 | 모바일 header/hero/details/nav | 유지 여부와 문구 검수 |
| `gallery.html` | 내부 리뷰 안내, 포스터, 네이버 리뷰 이동 | 네이버 장소 review URL | 모바일 리뷰 버튼 | 리뷰/갤러리 명칭 확인 |
| `shop.html` | 매장 소개 포스터 표시 | 네이버 장소 | 모바일 header/hero/details/nav | 매장 정보 최종 확인 |

## 17. v1과 v2 기능 차이

- [기존 문서 확인] v1은 서비스별 개별 페이지 이동 중심이다.
- [확정] 현재 v1 PC 홈은 이미지 hotspot 중심이다.
- [확정] 현재 v1 모바일 홈은 별도 HTML 구조다.
- [기존 문서 확인] v2는 `index.html` 중심 통합형 구조다.
- [기존 문서 확인] v2에서 `gallery.html`과 `care.html`은 별도 페이지로 관리된다.
- [기존 문서 확인] v2에는 가격 드롭다운, 갤러리 필터, 모바일 드로어, 모바일 하단 고정 메뉴가 구현되어 있음.
- [확정] 현재 v1 코드에는 가격 드롭다운, 갤러리 필터, 모바일 드로어, 모바일 하단 고정 메뉴 기능이 확인되지 않는다.
- [확정] 현재 v1 코드에 없는 v2 기능을 v1 기능으로 작성하지 않는다.

## 18. 운영 보류 사항

- [확인 필요] 케어 페이지 유지 여부
- [확인 필요] 리뷰와 갤러리 명칭
- [확인 필요] 패디와 페디 표기
- [확인 필요] 예약 전용 URL 필요 여부
- [확인 필요] 전화 기능 추가 여부
- [확인 필요] 네이버 장소, 네이버 리뷰, 카카오톡 상담, 네이버 블로그 실제 운영 상태
- [확인 필요] 매장 정보 최종 확인
- [확인 필요] 이미지 사용 승인
- [확인 필요] 케어 문구 검수
- [확인 필요] 서비스 카드 콘텐츠 정합성: 이미지, `alt`, 제목, 설명의 최종 대응 관계를 운영자 또는 원본 사진 목록과 대조해야 한다.

## 19. 기능 검수 기준

- [확인 필요] PC hotspot 위치와 이동
- [확인 필요] 모바일 링크와 메뉴
- [확인 필요] 하위 페이지 내비게이션
- [확인 필요] 현재 페이지 active 상태
- [확인 필요] 내부 링크
- [확인 필요] 외부 링크
- [확인 필요] 이미지 표시
- [확인 필요] 모바일 details 메뉴
- [확인 필요] 반응형 전환
- [확인 필요] 키보드 포커스
- [확인 필요] 가로 스크롤
- [확인 필요] 브라우저 콘솔 오류
- [확인 필요] 실제 스마트폰 동작
- [확인 필요] 변경 후 회귀 검수

## 20. 문서 작성 기준

- [확정] 현재 코드, 파일 구조, Git remote, 문서 작성 직전 기준 커밋, 최근 Git 이력을 기준으로 작성했다.
- [확정] 파일 존재와 실제 로드 여부를 구분했다.
- [확정] 코드 검수와 실제 실행 검수를 구분했다.
- [확정] 미구현 기능을 구현 완료로 단정하지 않았다.
- [확정] 웹사이트 코드를 수정하지 않고 이 문서만 작성했다.
- [확정] 확인한 HTML은 `index.html`, `gallery.html`, `gel-nail.html`, `monthly-art.html`, `pedi.html`, `care.html`, `shop.html`이다.
- [확정] 확인한 CSS는 `style.css`, `category-style.css`와 `gallery.html`, `shop.html`, `care.html`의 인라인 style이다.
- [확정] `script.js`는 저장소에 존재하지 않고, 확인한 HTML에서 인라인 `<script>`도 확인되지 않는다.
- [확정] 기존 문서는 `docs/00_project_overview.md`, `docs/01_user_requirements.md`, `docs/02_information_architecture.md`, `docs/03_design_specification.md`, `docs/07_open_issues.md`를 참고했다.

## 확인 근거

- [확정] 현재 경로: `C:\Users\jeongeun\Documents\Codex\choco-nail-v1-clean`
- [확정] Git remote: `origin https://github.com/mydunalove-sena/choco-nail.git`
- [확정] 문서 작성 직전 기준 커밋: `7a5e89b docs: add v1 design specification`
- [이력 확인] 최근 이력에는 v1 모바일 홈, 젤네일, 패디, 나머지 페이지 모바일 레이아웃 추가와 모바일 브랜드 타이포그래피 보정, 모바일 매장 소개 중복 제목 제거, v1 정보 구조/디자인 명세 문서 추가 커밋이 포함된다.
- [확정] 생성 전 `git status --short` 출력은 비어 있었다.