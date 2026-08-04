# 쵸코네일 덕양삼송점 홈페이지 v1 변경 이력

## 1. 문서 목적

- [확정] v1 저장소의 실제 Git 커밋을 기준으로 변경 이력을 정리한다.
- [확정] 원본 PC 디자인 보존, 모바일 보완, 역기획 문서화 흐름을 커밋 순서대로 추적한다.
- [확정] 커밋 메시지와 실제 변경 파일을 구분해 기록한다.
- [작성 원칙] 커밋 메시지와 변경 파일만으로 확인되지 않는 작업 의도는 단정하지 않는다.

## 2. 작성 범위

- [확정] 이 문서는 `22e0b9c docs: add v1 responsive QA`까지의 이력을 정리한다.
- [확정] 전체 변경 이력은 `git log --reverse --date=short --pretty=format:"%h | %ad | %s"` 결과를 오래된 순서로 정리한다.
- [확정] 본 문서를 최초 추가하는 커밋은 전체 변경 이력 표에서 제외한다.

### 상태 표시 기준

- [확정]: Git 커밋 또는 변경 파일에서 직접 확인
- [이력 확인]: 커밋 메시지에서 확인
- [추정]: 변경 결과를 기준으로 제한적으로 해석
- [확인 필요]: 이력만으로 판단할 수 없는 내용
- [관리 원칙]: 향후 변경 이력 관리 기준
- [작성 원칙]: 이 문서를 작성할 때 적용한 기준
## 3. 저장소 기준 정보

| 항목 | 내용 | 확인 상태 |
|---|---|---|
| 저장소 | `https://github.com/mydunalove-sena/choco-nail` | [확정] remote 확인 |
| 기본 브랜치 | `main` | [확정] `git branch --show-current` 확인 |
| 배포 주소 | `https://mydunalove-sena.github.io/choco-nail/` | [확정] 기존 docs에서 확인 |
| 문서 작성 직전 기준 커밋 | `22e0b9c docs: add v1 responsive QA` | [확정] `git log -1 --oneline` 확인 |
| 주요 HTML | `index.html`, `gallery.html`, `gel-nail.html`, `monthly-art.html`, `pedi.html`, `care.html`, `shop.html` | [확정] 현재 파일 목록 확인 |
| 주요 CSS | `style.css`, `category-style.css`, `shop_.css` | [확정] 현재 파일 목록 확인 |
| docs 문서 구성 | `docs/00_project_overview.md`부터 `docs/07_open_issues.md`까지 8개 문서로 구성된다. `docs/06_change_history.md`는 본 문서이다. | [확정] 현재 docs 목록 확인 |

## 4. 전체 변경 이력

| 순서 | 날짜 | 커밋 SHA | 커밋 메시지 | 변경 유형 | 주요 변경 파일 | 확인 상태 |
|---:|---|---|---|---|---|---|
| 1 | 2026-05-23 | `fab3987` | `Add files via upload` | 초기 산출물 | `index.html`, `style.css`, `category-style.css`, 서비스별 HTML, 이미지, `shop_.css`, `README.txt` 등 | [확정] 변경 파일 확인 |
| 2 | 2026-07-28 | `1ba212e` | `feat: add mobile layout for v1 homepage` | 모바일 홈 | `index.html`, `style.css` | [확정] 변경 파일 확인 |
| 3 | 2026-07-28 | `80cc4ea` | `feat: add mobile layout for v1 gel nail page` | 모바일 서비스 페이지 | `gel-nail.html`, `category-style.css` | [확정] 변경 파일 확인 |
| 4 | 2026-07-28 | `3aff535` | `feat: add mobile layout for v1 pedi page` | 모바일 서비스 페이지 | `pedi.html`, `category-style.css` | [확정] 변경 파일 확인 |
| 5 | 2026-07-28 | `da4d17e` | `feat: add mobile layouts for remaining v1 pages` | 모바일 하위 페이지 | `monthly-art.html`, `care.html`, `gallery.html`, `shop.html`, `category-style.css` | [확정] 변경 파일 확인 |
| 6 | 2026-07-28 | `f3a0747` | `fix: unify mobile brand typography` | 타이포그래피 | `style.css` | [확정] 변경 파일 확인 |
| 7 | 2026-07-28 | `f0223b1` | `fix: remove duplicate mobile shop heading` | 중복 요소 수정 | `shop.html` | [확정] 변경 파일 확인 |
| 8 | 2026-07-31 | `e03a482` | `docs: add v1 reverse planning documents` | 역기획 문서 | `docs/00_project_overview.md`, `docs/01_user_requirements.md`, `docs/07_open_issues.md` | [확정] 변경 파일 확인 |
| 9 | 2026-08-04 | `26314c0` | `docs: align v1 planning documents` | 문서 정합성 | `docs/00_project_overview.md`, `docs/01_user_requirements.md` | [확정] 변경 파일 확인 |
| 10 | 2026-08-04 | `969f740` | `docs: add v1 information architecture` | 역기획 문서 | `docs/02_information_architecture.md` | [확정] 변경 파일 확인 |
| 11 | 2026-08-04 | `7a5e89b` | `docs: add v1 design specification` | 역기획 문서 | `docs/03_design_specification.md` | [확정] 변경 파일 확인 |
| 12 | 2026-08-04 | `b3098a1` | `docs: add v1 functional specification` | 역기획 문서 | `docs/04_functional_specification.md` | [확정] 변경 파일 확인 |
| 13 | 2026-08-04 | `22e0b9c` | `docs: add v1 responsive QA` | 반응형 QA | `docs/05_responsive_qa.md` | [확정] 변경 파일 확인 |

## 5. PC 원본 디자인과 초기 구조

- [확정] `fab3987 Add files via upload` 커밋에서 `index.html`, `style.css`, `category-style.css`, `gallery.html`, `gel-nail.html`, `monthly-art.html`, `pedi.html`, `care.html`, `shop.html`이 추가되었다.
- [확정] 같은 커밋에서 `images/final-design.png`와 네일·패디·이달의 아트·케어·리뷰·매장 소개 관련 이미지가 함께 추가되었다.
- [확정] 현재 `index.html`과 `style.css` 기준으로 PC 홈은 `images/final-design.png`를 사용하는 원본 이미지형 랜딩 구조다.
- [확정] 현재 `index.html` 기준으로 원본 이미지 위에 투명 hotspot 링크가 배치되어 내부 페이지와 외부 링크로 이동한다.
- [확정] 현재 파일 목록 기준으로 v1은 `gel-nail.html`, `monthly-art.html`, `pedi.html`, `care.html`, `gallery.html`, `shop.html` 등 서비스별·목적별 개별 HTML 페이지를 가진다.
- [이력 확인] 원본 디자인 보존이라는 직접 표현이 들어간 커밋 메시지는 확인되지 않는다.
- [추정] 초기 산출물 커밋에 PC 원본 이미지와 서비스별 페이지, 이미지 자산이 함께 추가되어 v1의 기본 구조가 형성된 것으로 해석된다.

## 6. 모바일 홈 추가

- [이력 확인] 모바일 홈 관련 커밋은 `1ba212e feat: add mobile layout for v1 homepage`이다.
- [확정] 이 커밋의 변경 파일은 `index.html`, `style.css`이다.
- [확정] 현재 `index.html`과 `style.css` 기준으로 모바일 홈에는 `mobile-home`, 모바일 헤더, `mobile-reserve`, 주요 링크 버튼, 매장 특징, 서비스 메뉴가 있다.
- [확정] 현재 `style.css` 기준으로 760px 이하에서 PC `.hero`가 숨겨지고 `.mobile-home`이 표시된다.
- [확인 필요] 커밋 메시지만으로 모바일 홈 추가의 세부 기획 의도는 단정할 수 없다.

## 7. 모바일 젤네일·패디 페이지 보완

- [이력 확인] 젤네일 모바일 보완 커밋은 `80cc4ea feat: add mobile layout for v1 gel nail page`이다.
- [확정] `80cc4ea`의 변경 파일은 `gel-nail.html`, `category-style.css`이다.
- [확정] 현재 코드 기준으로 젤네일 페이지에는 모바일 헤더, `details/summary` 메뉴, 모바일 히어로, 모바일 카드 1열 구조와 이미지 비율 변경 규칙이 있다.
- [이력 확인] 패디 모바일 보완 커밋은 `3aff535 feat: add mobile layout for v1 pedi page`이다.
- [확정] `3aff535`의 변경 파일은 `pedi.html`, `category-style.css`이다.
- [확정] 현재 코드 기준으로 패디 페이지에도 모바일 헤더, `details/summary` 메뉴, 모바일 히어로, 모바일 카드 1열 구조와 이미지 비율 변경 규칙이 있다.
- [확정] 두 커밋 모두 `category-style.css`를 변경했으므로 서비스 카드와 모바일 전환 공통 스타일이 함께 보완된 것으로 확인된다.

## 8. 나머지 하위 페이지 모바일 보완

- [이력 확인] 나머지 하위 페이지 모바일 보완 커밋은 `da4d17e feat: add mobile layouts for remaining v1 pages`이다.
- [확정] 이 커밋의 변경 파일은 `monthly-art.html`, `care.html`, `gallery.html`, `shop.html`, `category-style.css`이다.
- [확정] 현재 코드 기준으로 `monthly-art.html`, `care.html`, `gallery.html`, `shop.html`에는 `remaining-mobile-header` 계열 모바일 헤더가 사용된다.
- [확정] 현재 코드 기준으로 나머지 하위 페이지에도 `details/summary` 기반 모바일 메뉴와 모바일 hero 구조가 있다.
- [확정] 현재 `gallery.html`에는 모바일 네이버 리뷰 버튼이 제공되고, `shop.html`에는 매장 소개 포스터 중심 모바일 화면이 제공된다.
- [확인 필요] 커밋 메시지만으로 각 페이지별 모바일 화면 배치의 세부 의도는 단정하지 않는다.

## 9. 브랜드 타이포그래피 정리

- [이력 확인] 브랜드 타이포그래피 관련 커밋은 `f3a0747 fix: unify mobile brand typography`이다.
- [확정] 이 커밋의 변경 파일은 `style.css`이다.
- [확정] 실제 diff 기준으로 변경 파일은 `style.css` 1개다.
- [확정] `.mobile-brand`에 명조 계열 폰트(`Nanum Myeongjo`, `Noto Serif KR`, `Batang`, `Malgun Gothic`, serif)가 추가되었다.
- [확정] `.mobile-brand`의 `font-size`는 18px에서 21px, `font-weight`는 700에서 800, `line-height`는 1.25에서 1.15로 변경되었다.
- [확정] `.mobile-brand`에 `letter-spacing`, `-webkit-text-stroke`, `text-shadow` 선언이 추가되었다.
- [확정] `.mobile-label`에 Georgia 계열 폰트가 추가되었고, `font-size`는 13px에서 12px으로 변경되었다.
- [확정] `.mobile-label`에 `line-height: 1`, `letter-spacing: 0.2em`이 적용되었다.
- [확정] `category-style.css`는 해당 커밋에 포함되지 않는다.
- [추정] 커밋 메시지 기준으로 모바일 홈의 브랜드 표시 일관성을 보정한 변경으로 해석된다.
## 10. 중복 요소 또는 화면 오류 수정

- [이력 확인] 중복 요소 수정 관련 커밋은 `f0223b1 fix: remove duplicate mobile shop heading`이다.
- [확정] 이 커밋의 변경 파일은 `shop.html`이다.
- [확정] 실제 diff 기준으로 `shop.html`의 페이지 히어로 스타일에서 `display: block !important;` 선언 한 줄이 제거되었다.
- [확정] HTML 제목 요소나 다른 DOM 요소가 삭제된 변경은 아니다.
- [추정] 강제 표시 선언 제거로 모바일의 `page-hero` 숨김 규칙이 정상 적용되도록 한 것으로 해석된다.
- [확인 필요] 이력상 지도 표시 수정, 포스터 표시 수정, 모바일 헤더 간격 수정이라는 직접 메시지는 별도 확인되지 않는다.
## 11. v1 핵심 역기획 문서 추가

- [이력 확인] 관련 커밋은 `e03a482 docs: add v1 reverse planning documents`이다.
- [확정] 이 커밋의 변경 파일은 `docs/00_project_overview.md`, `docs/01_user_requirements.md`, `docs/07_open_issues.md`이다.

| 문서 | 역할 | 확인 상태 |
|---|---|---|
| `docs/00_project_overview.md` | v1 프로젝트 개요, 페이지 구성, 배포 주소, 기술 구성, 신뢰도 표시 기준 정리 | [확정] 문서 존재 확인 |
| `docs/01_user_requirements.md` | v1 사용자 요구사항, 구현 상태, 확인 필요 항목 정리 | [확정] 문서 존재 확인 |
| `docs/07_open_issues.md` | 케어 페이지, 매장 정보, 링크, 명칭 등 보류 이슈 정리 | [확정] 문서 존재 확인 |

## 12. v1 문서 정합성 수정

- [이력 확인] 관련 커밋은 `26314c0 docs: align v1 planning documents`이다.
- [확정] 이 커밋의 변경 파일은 `docs/00_project_overview.md`, `docs/01_user_requirements.md`이다.
- [확정] 실제 변경 파일 기준으로 웹사이트 HTML, CSS, JavaScript, 이미지 파일은 이 커밋에 포함되지 않는다.
- [확정] 현재 문서 기준으로 프로젝트명, 예약 버튼과 네이버 장소 URL 관계, 요구사항 또는 프로젝트 개요 표현이 정리되어 있다.
- [확인 필요] 커밋 메시지만으로 개별 문장 수정 이유는 단정하지 않는다.

## 13. 정보 구조 문서 추가

- [이력 확인] 관련 커밋은 `969f740 docs: add v1 information architecture`이다.
- [확정] 이 커밋의 변경 파일은 `docs/02_information_architecture.md`이다.
- [확정] 현재 문서에는 전체 사이트맵, `index.html` PC·모바일 구조, 서비스별 페이지 구조, `gallery.html` 역할, PC·모바일 내비게이션, 내부 이동, 외부 연결, PC와 모바일 정보 구조 차이, v1과 v2 차이가 정리되어 있다.

## 14. 디자인 명세 추가

- [이력 확인] 관련 커밋은 `7a5e89b docs: add v1 design specification`이다.
- [확정] 이 커밋의 변경 파일은 `docs/03_design_specification.md`이다.
- [확정] 현재 문서에는 PC 원본 이미지형 디자인, 모바일 별도 화면, 색상, 타이포그래피, 카드와 포스터, 버튼과 링크, 이미지 사용 기준, 반응형 기준, 접근성, 디자인상 확인 필요 사항이 정리되어 있다.

## 15. 기능 명세 추가

- [이력 확인] 관련 커밋은 `b3098a1 docs: add v1 functional specification`이다.
- [확정] 이 커밋의 변경 파일은 `docs/04_functional_specification.md`이다.
- [확정] 현재 문서에는 PC hotspot, 모바일 링크, PC·모바일 내비게이션, `details` 메뉴, 내부·외부 링크, 이미지 표시, 오류 및 예외 처리, 미구현 기능, 서비스 카드 콘텐츠 정합성 확인 필요 항목이 정리되어 있다.

## 16. 반응형 QA 문서 추가

- [이력 확인] 관련 커밋은 `22e0b9c docs: add v1 responsive QA`이다.
- [확정] 이 커밋의 변경 파일은 `docs/05_responsive_qa.md`이다.
- [확정] 현재 문서에는 360px, 390px, 412px, 560px, 760px, 768px, 980px, 1280px 이상 기준 화면 폭이 정리되어 있다.
- [확정] 현재 문서에는 코드 검수와 렌더링 검수 구분, 브라우저·실기기 미검수 표시, hotspot과 포스터 링크 좌표 검수 필요, 회귀 검수 기준이 포함되어 있다.

## 17. 현재 문서 구성

| 문서 | 역할 | 생성 커밋 | 현재 상태 |
|---|---|---|---|
| `docs/00_project_overview.md` | v1 프로젝트 개요와 기준 정보 정리 | `e03a482 docs: add v1 reverse planning documents` | [확정] 존재 |
| `docs/01_user_requirements.md` | 사용자 요구사항과 구현 상태 정리 | `e03a482 docs: add v1 reverse planning documents` | [확정] 존재 |
| `docs/02_information_architecture.md` | 사이트맵, 페이지 구조, 내부·외부 이동 정리 | `969f740 docs: add v1 information architecture` | [확정] 존재 |
| `docs/03_design_specification.md` | 디자인 구조, 색상, 타이포그래피, 반응형 기준 정리 | `7a5e89b docs: add v1 design specification` | [확정] 존재 |
| `docs/04_functional_specification.md` | 구현 기능, 링크, 미구현 기능, 운영 보류 기능 정리 | `b3098a1 docs: add v1 functional specification` | [확정] 존재 |
| `docs/05_responsive_qa.md` | 반응형 코드 QA, 실제 검수 미수행 범위, 회귀 기준 정리 | `22e0b9c docs: add v1 responsive QA` | [확정] 존재 |
| `docs/06_change_history.md` | v1 Git 변경 이력 정리 | `docs: add v1 change history` | [확정] 본 문서 |
| `docs/07_open_issues.md` | 운영·명칭·링크·케어 페이지 보류 이슈 정리 | `e03a482 docs: add v1 reverse planning documents` | [확정] 존재 |

## 18. 주요 변경 범주 요약

| 변경 범주 | 주요 내용 | 관련 커밋 | 현재 상태 |
|---|---|---|---|
| PC 원본 구조 | PC 원본 이미지형 랜딩, 서비스별 HTML, 이미지 자산 초기 추가 | `fab3987` | [확정] 현재 파일 존재 |
| 모바일 홈 | 홈 모바일 전용 구조와 760px 이하 전환 추가 | `1ba212e` | [확정] 현재 코드 존재 |
| 모바일 서비스 페이지 | 젤네일·패디 모바일 레이아웃 추가 | `80cc4ea`, `3aff535` | [확정] 현재 코드 존재 |
| 모바일 하위 페이지 | 이달의 아트, 케어, 리뷰, 매장 소개 모바일 레이아웃 추가 | `da4d17e` | [확정] 현재 코드 존재 |
| 타이포그래피 | 모바일 브랜드 타이포그래피 정리 | `f3a0747` | [이력 확인] 커밋 메시지 확인 |
| 모바일 표시 수정 | 매장 소개 페이지 히어로의 강제 표시 선언 제거 | `f0223b1` | [확정] 실제 diff 확인 |
| 역기획 문서 | 프로젝트 개요, 요구사항, 오픈 이슈, 정보 구조, 디자인, 기능 문서 추가 | `e03a482`, `969f740`, `7a5e89b`, `b3098a1` | [확정] 문서 존재 |
| 문서 정합성 | 프로젝트 개요와 요구사항 문서 정합성 수정 | `26314c0` | [확정] 변경 파일 확인 |
| 반응형 QA | 반응형 코드 QA와 실제 검수 미수행 범위 정리 | `22e0b9c` | [확정] 문서 존재 |

## 19. 현재 보류 사항

- [확인 필요] 공식 프로젝트 표기와 현재 화면 상호명을 최종 통일해야 한다.
- [확인 필요] `패디`와 `페디` 중 최종 표기를 정해야 한다.
- [확인 필요] `리뷰`와 `갤러리` 중 메뉴명과 파일명 기준을 정해야 한다.
- [확인 필요] 케어 페이지와 케어 메뉴를 계속 유지할지 운영자 또는 매장주 확인이 필요하다.
- [확인 필요] 예약 버튼을 네이버 장소 기본 URL로 유지할지 예약 전용 URL로 교체할지 확인이 필요하다.
- [확인 필요] 전화 기능 추가 여부를 결정해야 한다.
- [확인 필요] 매장명, 영업시간, 휴무일, 전화번호, 주차 정보 등 매장 정보 최종 확인이 필요하다.
- [확인 필요] 네이버 장소, 네이버 리뷰, 카카오톡 상담, 네이버 블로그 링크의 실제 운영 상태 확인이 필요하다.
- [확인 필요] 이미지 최종 사용 승인 여부를 확인해야 한다.
- [확인 필요] 서비스 카드의 이미지, alt, 제목, 설명 정합성을 운영자 또는 원본 사진 목록과 대조해야 한다.
- [확인 필요] `shop_.css`가 레거시 파일인지 확인한 뒤 유지 또는 삭제 여부를 결정해야 한다.
- [확인 필요] 실제 브라우저와 실제 기기에서 반응형, 터치, 외부 앱 이동, 가로 스크롤, 한글 줄바꿈을 검수해야 한다.

## 20. 변경 이력 관리 원칙

- [관리 원칙] 한 커밋에는 관련 파일만 포함한다.
- [관리 원칙] 웹사이트 코드 변경과 문서 변경을 구분한다.
- [관리 원칙] 수정 전 `git status --short`로 작업 트리 상태를 확인한다.
- [관리 원칙] 커밋 전 `git diff`와 `git diff --check`를 수행한다.
- [관리 원칙] stage 후 `git diff --cached`와 `git diff --cached --check`로 포함 파일과 공백 오류를 검수한다.
- [관리 원칙] 커밋 후 포함 파일과 working tree 상태를 확인한다.
- [관리 원칙] 추후 코드 또는 문서 변경 시 이 문서를 함께 업데이트한다.

## 21. 문서 작성 기준

- [확정] 현재 코드와 실제 Git 이력을 기준으로 작성했다.
- [확정] 커밋 메시지와 변경 파일을 구분했다.
- [작성 원칙] 커밋 메시지와 변경 파일만으로 확인되지 않는 작업 의도는 단정하지 않았다.
- [확정] 웹사이트 코드를 수정하지 않고 `docs/06_change_history.md` 문서만 작성했다.

## 확인한 Git 명령

- [확정] `Get-Location`
- [확정] `git status --short`
- [확정] `git branch --show-current`
- [확정] `git remote -v`
- [확정] `git log -1 --oneline`
- [확정] `git log --reverse --date=short --pretty=format:"%h | %ad | %s"`
- [확정] `git show --name-only --format="commit %h | %ad | %s" --date=short <커밋SHA...>`
