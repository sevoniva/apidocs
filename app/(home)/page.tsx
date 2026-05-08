import Link from 'next/link';

export default function HomePage() {
  return (
    <div className="flex flex-col flex-1">
      {/* Hero */}
      <section className="relative overflow-hidden bg-gradient-to-b from-fd-primary/5 to-transparent px-4 pt-20 pb-16">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-fd-foreground sm:text-5xl md:text-6xl">
            金润永信文档中心
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-fd-muted-foreground">
            兼容 OpenAI 和 Anthropic 两种格式，支持 30+ 主流模型。
            <br />
            一行代码替换 Base URL，即可接入 Claude、Gemini、DeepSeek 等模型。
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center justify-center rounded-lg bg-fd-primary px-8 py-3 text-sm font-medium text-white shadow-lg shadow-fd-primary/25 hover:bg-fd-primary/90 transition-colors"
            >
              查看文档
            </Link>
            <a
              href="https://token.jinruntech.com/login"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-lg border border-fd-border bg-fd-background px-8 py-3 text-sm font-medium text-fd-foreground hover:bg-fd-accent/10 transition-colors"
            >
              登录控制台
            </a>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-5xl">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="rounded-xl border bg-fd-card p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/></svg>
              </div>
              <h3 className="text-base font-semibold">30+ 主流模型</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">覆盖 Claude、GPT、Gemini、DeepSeek、通义、豆包等</p>
            </div>
            <div className="rounded-xl border bg-fd-card p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" x2="12" y1="22.08" y2="12"/></svg>
              </div>
              <h3 className="text-base font-semibold">OpenAI 兼容</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">一行替换 Base URL，无需改动现有代码</p>
            </div>
            <div className="rounded-xl border bg-fd-card p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              </div>
              <h3 className="text-base font-semibold">按量计费</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">用多少扣多少，余额永久有效</p>
            </div>
            <div className="rounded-xl border bg-fd-card p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              </div>
              <h3 className="text-base font-semibold">稳定转发</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">高可用架构，请求成功率有保障</p>
            </div>
            <div className="rounded-xl border bg-fd-card p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
              </div>
              <h3 className="text-base font-semibold">丰富客户端</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">支持 Cherry Studio、Cursor、Cline 等 20+ 工具</p>
            </div>
            <div className="rounded-xl border bg-fd-card p-6 transition-shadow hover:shadow-md">
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-fd-primary/10 text-fd-primary">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"/><polyline points="14 2 14 8 20 8"/></svg>
              </div>
              <h3 className="text-base font-semibold">清晰账单</h3>
              <p className="mt-2 text-sm text-fd-muted-foreground">实时用量统计，消费明细一目了然</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
