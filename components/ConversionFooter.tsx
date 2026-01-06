
import React, { useState } from 'react';

const VITE_PROMPT = `이 코드를 기반으로 Vercel에 배포 가능한 React 프로젝트를 만들어줘.

[🚨 Vercel 배포 필승 가이드 (준수 필수)]
1. **index.html 설정 (빈 화면 방지)**: 
   - 위치: 반드시 **프로젝트 최상위 루트(Root)**.
   - 내용: \`<body>\` 태그 닫기 직전에 **\`<script type="module" src="/src/main.tsx"></script>\`**를 반드시 포함하세요. (이게 없으면 화면이 안 나옵니다)

2. **SPA 라우팅 설정 (vercel.json)**:
   - 프로젝트 루트에 \`vercel.json\` 생성:
   \`{ "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }] }\`

3. **프로젝트 구조**:
   - \`src/\`: App.tsx, main.tsx 등 소스 코드.
   - \`package.json\`: "build": "tsc && vite build" 스크립트.

위 규칙을 완벽히 지켜서 프로젝트를 구성해줘.`;

const ConversionFooter: React.FC = () => {
  const [copied, setCopied] = useState(false);

  const handleCopyPrompt = () => {
    navigator.clipboard.writeText(VITE_PROMPT);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <footer className="fixed bottom-0 left-0 right-0 bg-slate-900/90 backdrop-blur-lg border-t border-slate-700 z-[100] shadow-[0_-4px_20px_rgba(0,0,0,0.5)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex flex-col sm:flex-row items-center justify-between gap-3">
        <div className="flex items-center gap-3 text-slate-300 text-sm">
          <div className="w-8 h-8 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 border border-indigo-500/30 shrink-0">
            <i className="fas fa-rocket"></i>
          </div>
          <div>
            <p className="font-semibold text-white">다음 단계: React 프로젝트 변환</p>
            <p className="text-xs text-slate-400 hidden sm:block">다운로드한 HTML 파일을 AI STUDIO BUILD 에 업로드하고, 우측 프롬프트를 복사해서 붙여넣으세요.</p>
          </div>
        </div>

        <button
          onClick={handleCopyPrompt}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg font-bold text-sm transition-all active:scale-95 whitespace-nowrap ${
            copied
              ? 'bg-green-600 text-white ring-2 ring-green-400'
              : 'bg-indigo-600 hover:bg-indigo-500 text-white hover:shadow-lg hover:shadow-indigo-500/20'
          }`}
        >
          {copied ? (
            <>
              <i className="fas fa-check"></i> 복사 완료!
            </>
          ) : (
            <>
              <i className="fas fa-copy"></i> 배포용 변환 프롬프트 복사
            </>
          )}
        </button>
      </div>
    </footer>
  );
};

export default ConversionFooter;
