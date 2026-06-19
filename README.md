# 임종경 포트폴리오

백엔드, ML/DL, AI 개발자 포트폴리오 홈페이지입니다.

## 실행

```bash
npm install
npm run dev
```

## GitHub Pages 배포

이 프로젝트는 `LimJongKyung/lim-jongkyung-portfolio` 저장소의 GitHub Pages 경로에 맞춰져 있습니다.

예상 배포 주소:

```text
https://limjongkyung.github.io/lim-jongkyung-portfolio/
```

GitHub 저장소에서 `Settings` → `Pages` → `Build and deployment` → `Source`를 `GitHub Actions`로 설정하면, `main` 브랜치에 push할 때 자동 배포됩니다.

## 포트폴리오 챗봇 API

챗봇은 OpenAI API 키를 브라우저에 노출하지 않기 위해 서버리스 API(`/api/portfolio-chat`)를 사용합니다. GitHub Pages는 서버리스 함수를 실행하지 않으므로, 실제 API 챗봇을 활성화하려면 Vercel 같은 서버리스 호스팅에 연결해 주세요.

Vercel 환경변수:

```text
OPENAI_API_KEY=발급받은 OpenAI API 키
OPENAI_MODEL=gpt-4.1-mini
```

`OPENAI_MODEL`은 선택 사항입니다. 비용을 낮게 유지하려면 mini급 모델과 짧은 답변 제한을 유지하는 것을 권장합니다.

## 수정하기 좋은 위치

- 프로젝트 카드: `src/main.jsx`의 `projects`
- 기술스택: `src/main.jsx`의 `skillGroups`
- 이메일/GitHub: `src/main.jsx`의 `contact-actions`
- 히어로 이미지: `public/hero-ai-systems.png`
