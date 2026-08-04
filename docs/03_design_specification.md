# 쵸코네일 덕양삼송점 홈페이지 v1 디자인 명세

## 1. 문서 목적

- [확정] 이 문서는 쵸코네일 홈페이지 v1의 실제 화면 디자인과 공통 표현 방식을 현재 코드 기준으로 정리한 역기획 디자인 명세다.
- [확정] `index.html`의 PC 원본 이미지형 화면과 모바일 보완 화면을 구분해 기록한다.
- [확정] 서비스별 하위 페이지, 리뷰 안내 페이지, 매장 소개 페이지, 케어 페이지의 디자인 구조를 구분한다.
- [확정] 웹사이트 HTML, CSS, JavaScript, 이미지 파일은 수정하지 않고 이 문서만 작성한다.
- [확정] 공식 프로젝트 표기는 쵸코네일 덕양삼송점이다.
- [확정] 현재 v1 화면 코드에는 주로 쵸코네일 삼송점이 표시된다.
- [확인 필요] 실제 화면 상호명 통일 여부는 운영자 또는 매장주 확인이 필요하다.

## 2. 디자인 구조 개요

| 구조 | 역할 | 시각적 특징 | 확인 상태 |
|---|---|---|---|
| `index.html` PC 원본 이미지형 랜딩 | PC 첫 화면과 주요 이동 진입점 | `images/final-design.png`를 원본 비율로 배치하고 투명 hotspot을 덮음 | [확정] |
| `index.html` 모바일 전용 HTML 화면 | 모바일 홈 화면 | 별도 HTML 텍스트, `images/nail_01.jpg`, 예약/상담/블로그 버튼, 특징 badge, 서비스 메뉴 4개 | [확정] |
| 서비스별 하위 페이지 | 젤네일, 패디, 이달의 아트 이미지 목록 | 공통 헤더, 히어로, 3열 카드 그리드, 이미지 crop, category/badge/price 텍스트 | [확정] |
| 리뷰 안내 포스터 페이지 | 내부 리뷰 안내와 네이버 리뷰 이동 | `gallery.html` 파일이지만 화면 명칭은 리뷰, `review_intro_poster.png` 중심 | [확정] |
| 매장 소개 포스터 페이지 | 매장 소개 및 오시는 길 안내 | `shop_intro_poster.png` 중심, 별도 카드 목록 없음 | [확정] |
| 케어 텍스트 중심 페이지 | 손·발톱 케어 안내 | 케어 소개, 케어 메뉴, 추천 대상, 진행 순서, 안내사항 중심 | [확정] |

- [확정] `style.css`는 홈 전용 디자인을 담당한다.
- [확정] `category-style.css`는 하위 페이지 공통 디자인과 케어/모바일 보완 디자인을 담당한다.
- [확정] `gallery.html`, `shop.html`, `care.html`에는 페이지별 인라인 `<style>`이 포함되어 있다.
- [확정] `shop_.css` 파일은 저장소에 존재하지만 확인한 주요 HTML에서는 직접 로드되지 않는다.

## 3. 디자인 방향

- [확정] 전체 배경과 카드, 버튼 색상은 `#fff8f5`, `#fbf5f2`, `#fffaf7`, `#f8e9e5`, `#c98382` 등 핑크·아이보리 계열을 중심으로 구성된다.
- [확정] 홈 PC는 완성된 원본 디자인 이미지를 보존하고, 링크만 HTML hotspot으로 보강한다.
- [확정] 모바일 홈은 원본 이미지에 의존하지 않고 별도 HTML 구조로 브랜드, 설명, 이미지, 버튼, 메뉴를 노출한다.
- [확정] 젤네일·패디·이달의 아트는 이미지 카드 중심으로 서비스 사례를 전달한다.
- [확정] 리뷰와 매장 소개는 포스터 이미지를 크게 보여주는 구조다.
- [확정] 케어는 이미지 카드보다 텍스트 안내와 정보 박스 중심으로 구성된다.
- [추정] 네일샵 홈페이지로서 부드럽고 차분한 예약 유도형 인상을 만들기 위해 밝은 배경, 둥근 카드, 분홍 계열 CTA를 사용한 것으로 해석된다.
- [확인 필요] 실제 브랜드 색상, 문구 톤, 이미지 최종 사용 승인 여부는 운영자 확인이 필요하다.

## 4. 색상 체계

| 용도 | 색상값 | 사용 파일 또는 요소 | 확인 상태 |
|---|---|---|---|
| 홈 PC/body 배경 | `#fbf5f2` | `style.css` `body`, `.hero` | [확정] |
| 홈 모바일 body 텍스트 | `#4f3430` | `style.css` 760px 이하 `body` | [확정] |
| 홈 모바일 배경 | `linear-gradient(180deg, rgba(255, 247, 244, 0.95) 0%, #fbf5f2 42%, #f8ede9 100%)` | `style.css` `.mobile-home` | [확정] |
| 홈 모바일 브랜드 | `#5d3934` | `style.css` `.mobile-brand` | [확정] |
| 홈 모바일 영문 label | `#bd7e78` | `style.css` `.mobile-label` | [확정] |
| 홈 모바일 제목 | `#4d302c` | `style.css` `.mobile-intro h1` | [확정] |
| 홈 모바일 본문 | `#76504b` | `style.css` `.mobile-copy` | [확정] |
| 홈 모바일 예약 버튼 테두리 | `#e2b7b0` | `style.css` `.mobile-reserve` | [확정] |
| 홈 모바일 예약 버튼 배경 | `#fffaf7` | `style.css` `.mobile-reserve` | [확정] |
| 홈 모바일 예약 버튼 텍스트 | `#8f5953` | `style.css` `.mobile-reserve` | [확정] |
| 홈 모바일 주요 링크 기본 | `#fffaf5`, `#e7c6bf`, `#70443f` | `style.css` `.mobile-action` | [확정] |
| 홈 모바일 주요 링크 primary | `#d58b86`, `#d99f98`, `#fffdfb` | `style.css` `.mobile-action.primary` | [확정] |
| 홈 모바일 특징 badge | `rgba(255, 250, 246, 0.82)`, `rgba(223, 187, 180, 0.8)`, `#6a4742` | `style.css` `.mobile-features span` | [확정] |
| 홈 모바일 서비스 메뉴 | `#f1d7d1`, `#5d3834` | `style.css` `.mobile-service-menu a` | [확정] |
| hotspot focus outline | `rgba(201, 131, 130, 0.65)` | `style.css` `.hero-hotspot:focus-visible` | [확정] |
| hotspot 위치 확인용 배경 | `rgba(255, 0, 0, 0.22)` | `style.css`의 주석 처리된 디버그 코드 | [확정] 현재 미적용 |
| 하위 페이지 body 배경 | `#fff8f5` | `category-style.css` `body` | [확정] |
| 하위 페이지 기본 텍스트 | `#2f2624` | `category-style.css` `body` | [확정] |
| PC 헤더 배경 | `rgba(255, 250, 247, 0.96)` | `category-style.css` `.site-header` 후반 선언 | [확정] |
| PC 헤더 테두리 | `#eadbd5` | `category-style.css` `.site-header` 후반 선언 | [확정] |
| 브랜드명 | `#2f2624`, `#302522` | `category-style.css` `.brand`, `.brand-title` | [확정] |
| 브랜드 영문 부제 | `#b9807a` | `category-style.css` `.brand-subtitle` | [확정] |
| PC nav 기본 | `#3b312e` | `category-style.css` `.category-nav a` | [확정] |
| PC nav active/hover | `#a76563`, `#d28b8b` | `category-style.css` `.category-nav a.active`, `::after` | [확정] |
| 예약 CTA | `#c98382`, `#fff`, `#bd7776` | `category-style.css` `.reservation-link`, hover | [확정] |
| 페이지 eyebrow | `#c98382` | `category-style.css` `.page-hero .eyebrow`, 모바일 label | [확정] |
| 페이지 설명 | `#7f6761`, `#745e58` | `category-style.css` `.page-hero p:last-child`, 모바일 hero p | [확정] |
| 카드 배경/테두리 | `#fff`, `#f0ddd7` | `category-style.css` `.card` | [확정] |
| 카드 이미지 배경 | `#f7e8e4` | `category-style.css` `.thumb` | [확정] |
| 카드 category | `#f8e9e5`, `#a26360` | `category-style.css` `.category` | [확정] |
| 대표 badge | `#2f2624`, `#fff` | `category-style.css` `.badge` | [확정] |
| 카드 본문 | `#76625d` | `category-style.css` `.card p` | [확정] |
| 가격 | `#a85f5d` | `category-style.css` `.price` | [확정] |
| 케어 패널 | `rgba(255, 255, 255, 0.82)`, `#f0ddd7` | `category-style.css` `.care-intro-panel` | [확정] |
| 케어 번호/장식 | `#fff1ed`, `#c98382` | `category-style.css` `.care-number`, bullet | [확정] |
| 리뷰 포스터 페이지 배경 | `#fff8f5` | `gallery.html` 인라인 `.review-poster-page` | [확정] |
| 리뷰 포스터 이미지 배경/테두리 | `#fff`, `#f0ddd7` | `gallery.html` 인라인 `.review-poster-image` | [확정] |
| 리뷰 투명 링크 | `rgba(0,0,0,0)` | `gallery.html` 인라인 `.review-poster-link` | [확정] |
| 매장 소개 포스터 배경 | `#fff8f5` | `shop.html` 인라인 `main.shop-poster-page`, `.shop-poster-image` | [확정] |

## 5. 타이포그래피

| 용도 | 폰트 계열 | 크기·굵기 | 사용 위치 | 확인 상태 |
|---|---|---|---|---|
| 하위 페이지 기본 | `"Malgun Gothic", "Apple SD Gothic Neo", system-ui, sans-serif` | 기본 크기, `color: #2f2624` | `category-style.css` `body` | [확정] |
| 홈 모바일 기본 | `Arial, "Noto Sans KR", sans-serif` | 기본 크기 | `style.css` 760px 이하 `body` | [확정] |
| 홈 모바일 브랜드 | `"Nanum Myeongjo", "Noto Serif KR", "Batang", "Malgun Gothic", serif` | `21px`, `800`, `line-height: 1.15`, `letter-spacing: -0.045em` | `style.css` `.mobile-brand` | [확정] |
| 홈 모바일 영문 label | `Georgia, "Times New Roman", serif` | `12px`, `700`, `letter-spacing: 0.2em` | `style.css` `.mobile-label` | [확정] |
| 홈 모바일 제목 | 상위 font 상속 | `clamp(32px, 9vw, 42px)`, `line-height: 1.1` | `style.css` `.mobile-intro h1` | [확정] |
| 홈 모바일 본문 | 상위 font 상속 | `18px`, `500`, `line-height: 1.55` | `style.css` `.mobile-copy` | [확정] |
| PC 하위 페이지 브랜드 | `"Noto Serif KR", "Nanum Myeongjo", "Malgun Gothic", serif` 또는 `"Nanum Myeongjo", "Noto Serif KR", "Batang", "Malgun Gothic", serif` | `25px` 또는 `27px`, `500`~`800` | `category-style.css` `.brand-title`, 후반 override | [확정] |
| PC 하위 페이지 영문 부제 | `Georgia, "Times New Roman", serif` | `13px`, `500`~`600`, `letter-spacing: 0.22em`~`0.24em` | `category-style.css` `.brand-subtitle` | [확정] |
| PC nav | 상위 font 상속 | `16px`, `600` | `category-style.css` `.category-nav a` | [확정] |
| 예약 CTA | 상위 font 상속 | `15px`, `700` | `category-style.css` `.reservation-link` | [확정] |
| PC 페이지 제목 | 상위 font 상속 | `clamp(34px, 6vw, 62px)`, `line-height: 1.08`, `letter-spacing: -0.07em` | `category-style.css` `.page-hero h1` | [확정] |
| 카드 제목 | 상위 font 상속 | `21px`, `line-height: 1.35`, `letter-spacing: -0.05em` | `category-style.css` `.card h3` | [확정] |
| 카드 본문 | 상위 font 상속 | `15px`, `line-height: 1.7` | `category-style.css` `.card p` | [확정] |
| 가격 | 상위 font 상속 | `font-weight: 800`, `!important` | `category-style.css` `.price` | [확정] |
| 케어 인라인 제목 | `"Malgun Gothic", "맑은 고딕", "Apple SD Gothic Neo", Arial, sans-serif` | `clamp(26px, 2.8vw, 34px)`, `700`; 일부 h2는 `540` | `care.html` 인라인 style | [확정] |
| 모바일 하위 페이지 브랜드 | `"Nanum Myeongjo", "Noto Serif KR", "Batang", "Malgun Gothic", serif` | `21px`, `800` | `category-style.css` 모바일 header | [확정] |
| 모바일 하위 페이지 제목 | 상위 font 상속 | `38px`, `800`, `letter-spacing: -0.055em` | `category-style.css` 모바일 hero | [확정] |
| 웹폰트 로드 여부 | 해당 없음 | `<link>` 또는 `@import` 웹폰트 로드 확인되지 않음 | 확인한 HTML/CSS | [확정] |

## 6. index.html PC 디자인

- [확정] PC 홈은 `<main class="hero">` 안의 `.hero-frame`에 `images/final-design.png`를 배치한다.
- [확정] `.hero-frame`은 `aspect-ratio: 1491 / 1055`를 사용하고 이미지에는 `object-fit: contain`이 적용된다.
- [확정] `.hero-hotspots`는 이미지 위에 놓이는 링크 레이어이며, 각 `.hero-hotspot`은 `position: absolute`와 투명 배경을 사용한다.
- [확정] 상단 메뉴 hotspot은 홈, 젤네일, 패디, 이달의 아트, 케어, 리뷰, 매장 소개로 연결된다.
- [확정] 예약 hotspot은 네이버 장소 URL로, 카카오톡 hotspot은 카카오 오픈채팅 URL로, 블로그 hotspot은 네이버 블로그 URL로 새 창 연결된다.
- [확정] PC 하단 서비스 카드 hotspot은 젤네일, 이달의 아트, 패디, 케어 페이지로 연결된다.
- [확정] 이미지 자체에 포함된 문구는 HTML 텍스트가 아니라 `final-design.png` 내부 시각 요소다.
- [확정] hotspot의 실제 HTML 텍스트는 비어 있고 `aria-label`로 이동 목적을 제공한다.
- [확정] 별도 `<footer>` 요소는 `index.html`에서 확인되지 않는다.
- [확정] `.hero-hotspot:focus-visible`에 outline이 있어 키보드 포커스 시 시각 표시가 있다.
- [확정] `style.css`에는 hotspot 위치 확인용 빨간 배경 코드가 주석 처리되어 있으며, 주석에는 위치 확인 시에만 해제한다고 명시되어 있다.
- [확정] 주석 처리된 `.hero-hotspot { background: rgba(255, 0, 0, 0.22); opacity: 1; }` 코드는 현재 화면에 적용되지 않는다.

## 7. index.html 모바일 디자인

- [확정] 모바일 홈은 `<main class="mobile-home">`으로 PC 원본 이미지와 별도 구성된다.
- [확정] `style.css`의 760px 이하 media query에서 `.hero`는 숨겨지고 `.mobile-home`은 표시된다.
- [확정] 모바일 헤더는 `.mobile-header`, `.mobile-brand`, `.mobile-reserve`로 구성된다.
- [확정] 브랜드명은 HTML 텍스트로 표시되고, 예약 버튼은 네이버 장소 URL로 새 창 연결된다.
- [확정] 히어로는 `Premium Nail Care`, 브랜드명, 소개 문구, `images/nail_01.jpg`로 구성된다.
- [확정] 모바일 대표 이미지는 `aspect-ratio: 4 / 5`, `object-fit: cover`, `border-radius: 18px`를 사용한다.
- [확정] 주요 링크 버튼은 네이버 예약, 카카오톡 상담, 블로그 보기 3개다.
- [확정] 매장 특징 badge는 2열 grid로 배치된다.
- [확정] 모바일 서비스 메뉴는 네일, 이달의 아트, 패디, 케어 4개다.
- [확정] 모바일 홈 서비스 메뉴에는 리뷰와 매장 소개 링크가 확인되지 않는다.
- [추정] 모바일 홈은 PC 원본 디자인을 축소하는 대신 예약과 서비스 탐색을 우선하는 별도 UX로 보완된 구조다.

## 8. 하위 페이지 공통 헤더

- [확정] 하위 페이지는 공통적으로 `.site-header`를 사용한다.
- [확정] `.site-header`는 `position: sticky`, `top: 0`, `z-index`를 사용해 상단에 붙는 구조다.
- [확정] PC 헤더는 `.brand`, `.brand-title`, `.brand-subtitle`, `.category-nav`, `.reservation-link`로 구성된다.
- [확정] `.brand-title`에는 쵸코네일 삼송점이 표시되고, `.brand-subtitle`에는 `Premium Nail Care`가 표시된다.
- [확정] `.category-nav`에는 홈, 네일, 패디/페디, 이달의 아트, 케어, 리뷰, 매장 소개가 들어간다.
- [확정] active 메뉴는 `class="active"`로 표시된다.
- [확정] PC nav hover/active는 배경을 투명하게 유지하면서 텍스트 색을 `#a76563`으로 바꾸고 `::after` underline을 `#d28b8b`로 표시한다.
- [확정] `.reservation-link`는 pill 형태이며 `background: #c98382`, `border-radius: 999px`, 흰색 텍스트를 사용한다.
- [확정] 980px 이하에서 `.site-header` grid가 `1fr auto`로 바뀌고 `.category-nav`가 가로 스크롤 가능한 메뉴가 된다.
- [확정] 980px 이하에서 `.reservation-link`는 숨겨지지 않고 `min-width`, `min-height`, `padding`, `font-size`만 축소된다.
- [확정] 760px 이하에서는 하위 페이지 PC `.site-header` 전체가 숨겨지므로 PC 헤더 안의 `.reservation-link`도 함께 표시되지 않는다.

## 9. 하위 페이지 모바일 헤더

- [확정] 젤네일은 `.gel-mobile-header`, 패디는 `.pedi-mobile-header`, 나머지 하위 페이지는 `.remaining-mobile-header` 계열을 사용한다.
- [확정] 모바일 헤더는 브랜드 링크와 `<details>` 기반 메뉴로 구성된다.
- [확정] `<summary>`는 메뉴 열기·닫기 트리거 역할을 한다.
- [확정] `summary::-webkit-details-marker`는 `display: none`으로 기본 마커를 숨긴다.
- [확정] 모바일 nav는 absolute dropdown이며 `min-width: 188px`, `border-radius: 18px`, 흰색 배경, box-shadow를 사용한다.
- [확정] 모바일 nav의 현재 페이지 링크에는 `active`와 `aria-current="page"`가 적용된다.
- [확정] 모바일 active 항목은 `background: #f8e9e5`, `color: #a85f5d`로 표시된다.
- [확정] 760px 이하에서 PC `.site-header`와 `.page-hero`는 숨겨지고 모바일 헤더/히어로가 표시된다.
- [확정] 761px 이상에서 `remaining-mobile-header`와 `remaining-mobile-hero`는 `display: none !important`로 숨겨진다.

## 10. 카드 디자인

| 카드 유형 | 사용 페이지 | 이미지 비율 | 테두리·모서리 | 텍스트 구성 | 확인 상태 |
|---|---|---|---|---|---|
| 젤네일 카드 | `gel-nail.html` | PC `.thumb` `1 / 1`, 모바일 `4 / 3` | PC `border: 1px solid #f0ddd7`, `border-radius: 28px`; 모바일 `24px` | category, 대표 badge 일부, 제목, 설명, 가격 | [확정] |
| 패디 카드 | `pedi.html` | PC `.thumb` `1 / 1`, 모바일 `4 / 3` | 젤네일과 동일한 공통 카드 스타일 | category, 대표 badge 일부, 제목, 설명, 가격 | [확정] |
| 이달의 아트 카드 | `monthly-art.html` | PC `.thumb` `1 / 1`, 모바일 `4 / 3` | 공통 카드 스타일 | category, 대표 badge 일부, 제목, 설명, 가격 또는 라벨 | [확정] |
| 케어 서비스 영역 | `care.html` | 이미지 카드 아님 | `care-service-card` `border: 1px solid #f0ddd7`, `border-radius: 28px`, 흰 배경 | 번호, 케어 항목명, 설명 | [확정] |
| 카드 내부 이미지 | 젤네일, 패디, 이달의 아트 | `object-fit: cover` | `.thumb` 내부에서 crop | `alt`, `loading="lazy"` 사용 | [확정] |
| 카테고리 badge | 이미지 카드 페이지 | 해당 없음 | pill 형태 `border-radius: 999px` | category 텍스트, 대표 badge | [확정] |
| 가격 | 이미지 카드 페이지 | 해당 없음 | 별도 박스 아님 | `.price`, 강조색과 굵기 | [확정] |
| 안내 문구 | 카드/케어 영역 | 해당 없음 | 카드 body 또는 정보 박스 안에 배치 | 설명 문단, 리스트, 진행 순서 | [확정] |

## 11. 리뷰 페이지 디자인

- [확정] 파일명은 `gallery.html`이지만 문서 제목, nav active, 화면 제목은 `리뷰`다.
- [확정] 실제 역할은 내부 리뷰 안내 페이지이며, 외부 네이버 리뷰 페이지 자체가 아니다.
- [확정] PC 영역에는 `.page-hero`와 `.review-poster-wrap`이 있다.
- [확정] `.review-poster-page`는 `background: #fff8f5`, 하단 padding을 사용한다.
- [확정] `review_intro_poster.png`는 `.review-poster-image`로 표시되며 `width: 100%`, `height: auto`, `max-width: 1180px` 기준 wrapper 안에 놓인다.
- [확정] 포스터 이미지는 `border-radius: 28px`, `box-shadow`, `border: 1px solid #f0ddd7`을 사용한다.
- [확정] `.review-poster-link`는 포스터 위의 투명 absolute 링크이며 네이버 리뷰 URL로 새 창 이동한다.
- [확정] `.review-poster-link:focus-visible`에는 `outline: 2px solid #c98382`가 있다.
- [확정] 모바일 히어로에는 `Customer Review` label, 리뷰 안내 문구, 네이버 리뷰 보러가기 버튼이 있다.
- [확정] 768px, 560px 이하 media query에서 포스터 padding, 링크 위치/크기, 이미지 모서리가 조정된다.
- [확인 필요] 리뷰 페이지를 계속 `리뷰`로 부를지, 파일명에 맞춰 `갤러리`로 정리할지 확인이 필요하다.

## 12. 매장 소개 페이지 디자인

- [확정] `shop.html`은 `shop_intro_poster.png` 중심의 포스터 페이지다.
- [확정] PC 영역에는 `.page-hero`, `.shop-poster-wrap`, `.shop-poster-box`, `.shop-poster-image`가 있다.
- [확정] `main.shop-poster-page`는 `background: #fff8f5`, `padding: 0 0 80px`를 사용한다.
- [확정] `.shop-poster-wrap`과 `.shop-poster-box`는 `max-width: 1180px`, 중앙 정렬을 사용한다.
- [확정] `.shop-poster-image`는 `width: 100%`, `max-width: 1180px`, `height: auto`로 원본 비율을 유지한다.
- [확정] 포스터 이미지는 `border-radius: 28px`, `box-shadow`, `border: 1px solid #f0ddd7`을 사용한다.
- [확정] 768px 이하에서 페이지 padding과 hero padding이 줄어든다.
- [확정] 560px 이하에서 포스터 이미지 모서리는 `20px`, 좌우 여백은 `18px` 기준으로 조정된다.
- [확정] 매장 소개 페이지는 별도 카드 목록이 아니라 단일 포스터 중심 구조다.

## 13. 케어 페이지 디자인

- [확정] `care.html`은 `care-page` body class를 사용하고 `category-style.css`와 인라인 style을 함께 사용한다.
- [확정] PC 히어로는 `.page-hero care-hero`이고, 모바일 히어로는 `.remaining-mobile-hero`다.
- [확정] 케어 소개는 `.care-intro-panel` 안의 `.care-intro-text`와 `.care-intro-note`로 구성된다.
- [확정] 케어 메뉴는 `.care-service-section`, `.care-service-grid`, `.care-service-card`로 구성되며 7개 항목이 있다.
- [확정] 추천 대상과 진행 순서는 `.care-info-grid` 안의 `.care-info-box`로 구성된다.
- [확정] 안내사항은 `.care-notice-box`로 별도 표시된다.
- [확정] 케어 페이지는 젤네일/패디/이달의 아트처럼 이미지 카드 목록이 아니라 텍스트 중심 정보 박스 구조다.
- [확정] 인라인 style은 케어 intro 제목에 `Malgun Gothic`, `맑은 고딕`, `Apple SD Gothic Neo`, `Arial` 계열과 `letter-spacing: 0`, `line-height: 1.45`를 강제한다.
- [기존 문서 확인] 케어 페이지 유지 여부는 매장주와 추후 협의가 필요한 보류 사항이다.
- [기존 문서 확인] 의료적 오해를 줄이기 위한 문구 검수 여부도 확인이 필요하다.

## 14. 버튼과 링크 디자인

| 요소 | 형태 | 사용 위치 | 연결 대상 | 확인 상태 |
|---|---|---|---|---|
| 네이버 예약 | pill CTA, 분홍 배경 | 하위 페이지 PC 헤더 | 네이버 장소 URL | [확정], 예약 전용 화면 여부는 [확인 필요] |
| 예약하기 | pill CTA 또는 모바일 링크 버튼 | 홈 모바일 헤더, 하위 페이지 모바일 히어로 | 네이버 장소 URL | [확정], 예약 전용 화면 여부는 [확인 필요] |
| 카카오톡 상담 | 모바일 주요 링크 버튼, PC 투명 hotspot | 홈 PC/모바일 | 카카오 오픈채팅 URL | [확정] |
| 블로그 보기 | 모바일 주요 링크 버튼, PC 투명 hotspot | 홈 PC/모바일 | 네이버 블로그 URL | [확정] |
| 모바일 주요 링크 | 1열 grid의 버튼형 링크 | 홈 모바일 `.mobile-actions` | 네이버, 카카오, 블로그 | [확정] |
| 서비스 메뉴 | 2열 grid 버튼 | 홈 모바일 `.mobile-service-menu` | 네일, 이달의 아트, 패디, 케어 | [확정] |
| PC 투명 hotspot | absolute 투명 링크 | 홈 PC 원본 이미지 위 | 내부/외부 링크 | [확정] |
| 리뷰 포스터 투명 링크 | absolute 투명 링크 | `gallery.html` 포스터 위 | 네이버 리뷰 URL | [확정] |
| category-nav 메뉴 | 텍스트 링크와 active underline | 하위 페이지 PC 헤더 | 내부 페이지 | [확정] |
| 모바일 details 메뉴 | summary 버튼 + dropdown 링크 | 하위 페이지 모바일 헤더 | 내부 페이지 | [확정] |

## 15. 이미지 사용 기준

| 페이지 | 이미지 종류 | 표시 방식 | 비율 또는 크기 | 추가 확인 |
|---|---|---|---|---|
| `index.html` PC | `images/final-design.png` | `.hero-frame img`, `object-fit: contain` | `.hero-frame` `aspect-ratio: 1491 / 1055` | 이미지 안 문구는 HTML 텍스트가 아님 |
| `index.html` 모바일 | `images/nail_01.jpg` | `.mobile-main-image`, `object-fit: cover` | `aspect-ratio: 4 / 5` | `alt` 있음, fallback 없음 [확정] |
| `gel-nail.html` | `images/nail_01.jpg`~`nail_09.jpg` | 카드 `.thumb img`, `object-fit: cover` | PC `1 / 1`, 모바일 `4 / 3` | `alt`, `loading="lazy"` 있음, fallback 없음 [확정] |
| `pedi.html` | `images/pedi_01.jpg`~`pedi_09.jpg` | 카드 `.thumb img`, `object-fit: cover` | PC `1 / 1`, 모바일 `4 / 3` | `alt`, `loading="lazy"` 있음, fallback 없음 [확정] |
| `monthly-art.html` | `images/art_01.jpg`~`art_09.jpg` | 카드 `.thumb img`, `object-fit: cover` | PC `1 / 1`, 모바일 `4 / 3` | `alt`, `loading="lazy"` 있음, fallback 없음 [확정] |
| `gallery.html` | `images/review_intro_poster.png` | 포스터 이미지, `width: 100%`, `height: auto` | `max-width: 1180px`, 원본 비율 유지 | `alt` 있음, fallback 없음 [확정] |
| `shop.html` | `images/shop_intro_poster.png` | 포스터 이미지, `width: 100%`, `height: auto` | `max-width: 1180px`, 원본 비율 유지 | `alt` 있음, fallback 없음 [확정] |
| `care.html` | `images/care_*.jpg` 파일은 존재 | 확인한 `care.html` 본문에서는 직접 이미지 표시 확인되지 않음 | 해당 없음 | 파일 존재와 화면 사용을 구분해야 함 [확정] |

- [확정] 확인한 HTML/CSS에는 이미지 로딩 오류 시 대체 UI를 표시하는 별도 fallback 로직이 없다.
- [확정] 별도 JavaScript 이미지 처리 로직은 확인되지 않는다.

## 16. 반응형 디자인 기준

| 기준 | 적용 대상 | 동작 | 확인 상태 |
|---|---|---|---|
| `760px` 이하 | `style.css` 홈 | PC `.hero` 숨김, `.mobile-home` 표시 | [확정] |
| `760px` 이하 | `category-style.css` 하위 페이지 | PC `.site-header`, `.page-hero` 숨김, 모바일 header/hero 표시 | [확정] |
| `761px` 이상 | `category-style.css` remaining 모바일 요소 | remaining 모바일 header/hero 숨김 | [확정] |
| `980px` 이하 | 하위 페이지 PC 헤더 | `.site-header` grid 변경, `.category-nav` 가로 스크롤, `.reservation-link` 크기 축소 | [확정] |
| `760px` 이하 | 하위 페이지 PC 헤더 | PC `.site-header` 전체 숨김으로 PC 예약 링크도 함께 미표시 | [확정] |
| `900px` 이하 | 카드/케어 | `.gallery-grid` 3열에서 2열, 케어 grid 조정 | [확정] |
| `768px` 이하 | 리뷰/매장 포스터 인라인 style | 포스터 페이지 padding 및 링크 위치 일부 조정 | [확정] |
| `560px` 이하 | 카드/포스터/헤더 | 카드 1열, 포스터 여백·모서리 축소, 폰트/메뉴 크기 조정 | [확정] |
| `374px` 이하 | 하위 페이지 모바일 | 브랜드, summary, hero, grid 여백 추가 축소 | [확정] |
| `370px` 이하 | 홈 모바일 | 제목/본문/버튼 폰트 축소 | [확정] |

- [확정] 코드 검수 기준으로 반응형 전환 규칙을 확인했다.
- [확인 필요] 실제 브라우저와 실제 모바일 기기에서의 시각 QA는 별도 수행이 필요하다.

## 17. 접근성 관련 디자인

- [확정] 주요 내부/외부 링크에는 `aria-label`이 다수 제공된다.
- [확정] 하위 페이지 모바일 active 링크에는 `aria-current="page"`가 적용된다.
- [확정] 이미지에는 `alt` 속성이 있다.
- [확정] PC 홈 투명 hotspot에는 `:focus-visible` outline이 있다.
- [확정] 리뷰 포스터 투명 링크에도 `:focus-visible` outline이 있다.
- [확정] 하위 페이지 모바일 메뉴는 HTML `details/summary`를 사용한다.
- [확정] 버튼처럼 보이는 요소는 대부분 `<a>` 링크로 구현되어 있다.
- [확정] PC 홈 원본 이미지 안의 문구는 실제 HTML 텍스트가 아니므로 검색/스크린리더 텍스트와 시각 문구가 다를 수 있다.
- [확인 필요] 전체 색상 대비, 키보드 이동 순서, 스크린리더 실제 읽힘, 투명 hotspot 위치와 시각 문구의 정확한 대응은 별도 접근성 QA가 필요하다.

## 18. v1과 v2 디자인 차이

- [기존 문서 확인] v1은 정적 HTML/CSS 기반이며 PC 원본 이미지형 화면과 별도 모바일 화면을 함께 운영한다.
- [확정] 현재 v1 코드는 `index.html` PC에서 `final-design.png` 원본 이미지형 랜딩을 사용한다.
- [확정] 현재 v1 코드는 모바일 홈을 별도 HTML 구조로 제공한다.
- [확정] 현재 v1 코드는 젤네일, 패디, 이달의 아트, 케어, 리뷰, 매장 소개를 개별 페이지로 제공한다.
- [기존 문서 확인] v2는 `index.html` 중심 메인 통합형 구조로 구분된다.
- [기존 문서 확인] v2에서는 `gallery.html`과 `care.html`이 별도 페이지로 관리된다.
- [기존 문서 확인] v2는 내부 섹션 이동과 일부 별도 페이지 이동을 함께 사용하는 구조로 기록되어 있다.
- [확인 필요] v2의 Tailwind 기반 통합 반응형 구조는 이 v1 저장소 코드에서 직접 확인되지 않으므로 별도 v2 저장소의 코드와 디자인 문서 확인이 필요하다.

## 19. 디자인상 확인 필요 사항

- [확인 필요] 공식 상호명 `쵸코네일 덕양삼송점`과 현재 화면의 `쵸코네일 삼송점` 표기 통일이 필요하다.
- [확인 필요] `패디`와 `페디` 표기 중 최종 사용할 표기를 정해야 한다.
- [확인 필요] `리뷰`와 `갤러리` 중 메뉴명과 파일명 기준을 정해야 한다.
- [확인 필요] 케어 페이지와 케어 메뉴 유지 여부를 매장주와 협의해야 한다.
- [확인 필요] 네이버 장소 URL 대신 예약 전용 URL이 필요한지 확인해야 한다.
- [확인 필요] 영업시간, 휴무일, 전화번호, 주차 등 매장 운영 정보의 최종 노출 범위를 확인해야 한다.
- [확인 필요] 실제 브랜드 색상으로 현재 핑크·아이보리 계열을 승인할지 확인해야 한다.
- [확인 필요] `final-design.png`, 서비스별 이미지, 리뷰/매장 포스터 이미지의 최종 사용 승인이 필요하다.
- [확인 필요] 모바일 실제 기기에서 헤더, dropdown, 카드, 포스터 링크 위치를 검수해야 한다.
- [확인 필요] `shop_.css`는 파일은 존재하지만 주요 HTML에서 직접 로드되지 않으므로 유지 또는 삭제 여부 확인이 필요하다.
- [확인 필요] 현재 사용하지 않는 레거시 스타일 또는 이미지가 있는지 별도 범위에서 확인이 필요하다.


## 20. 문서 작성 기준

- [확정] 현재 코드, 파일 구조, Git remote, 문서 작성 직전 기준 커밋, 최근 Git 이력을 기준으로 작성했다.
- [확정] 확인한 HTML은 `index.html`, `gallery.html`, `gel-nail.html`, `monthly-art.html`, `pedi.html`, `care.html`, `shop.html`이다.
- [확정] 확인한 CSS는 실제 HTML에서 로드되는 `style.css`, `category-style.css`와 `gallery.html`, `shop.html`, `care.html`의 인라인 style이다.
- [확정] `shop_.css`는 저장소 존재 여부와 주요 HTML 미로드 여부만 확인했고 현재 화면 디자인 근거로 사용하지 않았다.
- [확정] 기존 문서는 `docs/00_project_overview.md`, `docs/01_user_requirements.md`, `docs/02_information_architecture.md`, `docs/07_open_issues.md`를 참고했다.
- [확정] 현재 코드와 기존 문서가 충돌할 수 있는 항목은 현재 코드를 우선했다.
- [확정] CSS 파일 존재와 실제 로드 여부를 구분했다.
- [확정] PC와 모바일 구조를 구분했다.
- [확정] 확인되지 않은 디자인 의도는 단정하지 않았다.
- [확정] 웹사이트 파일을 수정하지 않고 이 문서만 작성했다.

## 확인 근거

- [확정] 현재 경로: `C:\Users\jeongeun\Documents\Codex\choco-nail-v1-clean`
- [확정] Git remote: `origin https://github.com/mydunalove-sena/choco-nail.git`
- [확정] 문서 작성 직전 기준 커밋: `969f740 docs: add v1 information architecture`
- [이력 확인] 최근 이력에는 v1 모바일 홈, 젤네일, 패디, 나머지 페이지 모바일 레이아웃 추가와 모바일 브랜드 타이포그래피 보정, 모바일 매장 소개 중복 제목 제거 커밋이 포함된다.
- [확정] 생성 전 `git status --short` 출력은 비어 있었다.