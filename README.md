# 임종경 포트폴리오

백엔드, ML/DL, AI 개발자 포트폴리오 홈페이지입니다.

## 실행

```bash
npm install
npm run dev
```

## Vercel 배포

이 프로젝트는 `LimJongKyung/lim-jongkyung-portfolio` 저장소와 연결된 Vercel에서 배포합니다. `main` 브랜치에 push하면 프로덕션 배포가 갱신됩니다.

Vite의 빌드 명령은 `npm run build`, 출력 디렉터리는 `dist`입니다.

## 포트폴리오 챗봇 API

챗봇은 OpenAI API 키를 브라우저에 노출하지 않기 위해 Vercel 서버리스 API(`/api/portfolio-chat`)를 사용합니다.

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
