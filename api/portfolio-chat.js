const MODEL = process.env.OPENAI_MODEL || "gpt-4.1-mini";

const profileContext = `
You are a compact portfolio chatbot for Lim Jongkyung.
Answer only about Lim Jongkyung's portfolio, skills, projects, education, and contact.
Keep answers concise, warm, and factual. If asked outside this scope, briefly redirect to portfolio-related topics.
Do not answer questions about private personal information. If asked for personal details beyond the portfolio or resume, say in Korean: "개인정보는 이력서를 통해 참고 부탁드립니다. 개인정보에 대한 질문은 받지 않고 있습니다."

Profile facts:
- Korean name: 임종경. English name: Lim Jongkyung.
- Positioning: backend and AI developer who solves problems and improves efficiency.
- Strengths: backend APIs, clear data flows, React/Vite frontend implementation, React Native app work, ML/DL experimentation.
- Backend skills: Spring Boot, Java, JPA, XML, MyBatis, Oracle Cloud.
- AI/data skills: computer vision, image classification, PyTorch, Grad-CAM, data preprocessing, feature engineering, model training, model evaluation, NLP, LLM API integration.
- Frontend/mobile skills: React, React Native, Vite, Expo Go, HTML, CSS, JavaScript, AJAX.
- Data/infra: MySQL, OracleDB, Git, GitHub Codespace, Firebase.
- Projects:
  1. Pneumonia X-ray Classification: Dacon deep-learning image classification project using EfficientNet-B0, ResNet18, ResNet34, ensemble prediction, validation threshold tuning, and Grad-CAM; final Accuracy 0.9519. PDF and PPT materials are linked from the portfolio.
  2. Infertility Prediction Model: machine-learning project with preprocessing, feature engineering, model training, and evaluation; final score 0.7402. PDF and PPT materials are linked from the portfolio.
  3. Spring Boot Backend Service: domain-centered Spring Boot backend, Java, JPA, REST API. User and admin pages are linked from the portfolio.
  4. Biblical Archaeology Web: React responsive website deployed with Firebase.
  5. GodTalk Mobile App: React Native/Expo mobile app released on the App Store and distributed directly on Android as a signed EAS Build APK. It includes Gemini-powered Bible counseling across app and web, Firebase Functions API-key protection and model fallback, plus a Firebase Hosting version manifest that lets the app detect new Android versionCodes and prompt users to download updates. APK updates reuse the existing stored device ID and push token instead of requesting a new token on every update.
  6. Portfolio Chatbot: React chatbot UI with a Vercel serverless API, OpenAI API integration, prompt design, and private-key protection.
- Education/training:
  2026.04-2026.09 Healthcare data-based AI digital medical web service developer program.
  2025.06 AWS TechCamp.
  2024.04-2024.09 Public Data Convergence Java Developer Program A30.
  Theology master's program at Presbyterian University and Theological Seminary, graduated 2026.02.
- Contact visible on portfolio: 010-6554-2523, ljk8324@naver.com, ljk8324@gmail.com.
`;

export default async function handler(request, response) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ error: "Method not allowed" });
  }

  if (!process.env.OPENAI_API_KEY) {
    return response.status(500).json({
      error: "OPENAI_API_KEY is not configured on the server.",
    });
  }

  try {
    const { message } = request.body || {};
    const cleanMessage = String(message || "").trim().slice(0, 500);

    if (!cleanMessage) {
      return response.status(400).json({ error: "Message is required." });
    }

    const openaiResponse = await fetch("https://api.openai.com/v1/responses", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: MODEL,
        instructions: profileContext,
        input: cleanMessage,
        max_output_tokens: 220,
      }),
    });

    const data = await openaiResponse.json();

    if (!openaiResponse.ok) {
      console.error("OpenAI API error", data);
      return response.status(502).json({
        error: "The portfolio chatbot could not answer right now.",
      });
    }

    const answer =
      data.output_text ||
      data.output
        ?.flatMap((item) => item.content || [])
        .map((content) => content.text)
        .filter(Boolean)
        .join("\n") ||
      "답변을 만들지 못했습니다. 잠시 후 다시 질문해 주세요.";

    return response.status(200).json({ answer });
  } catch (error) {
    console.error("Portfolio chatbot error", error);
    return response.status(500).json({
      error: "The portfolio chatbot is temporarily unavailable.",
    });
  }
}
