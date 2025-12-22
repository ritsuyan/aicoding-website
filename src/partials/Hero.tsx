import {
  GradientText,
  HeroAvatar,
  HeroSocial,
  Section,
} from 'astro-boilerplate-components';

const Hero = () => (
  <Section>
    <HeroAvatar
      title={
        <>
          Hi, 我是<GradientText>AI老颜</GradientText> 👋
        </>
      }
      subtitle={
        <div className="text-2xl font-semibold text-gray-200 mt-2">
          AI 工程师 & 创业者
        </div>
      }
      description={
        <>
          专注于 AI 智能体、Web3 与自动化应用开发，帮助个人与企业用AI提升效率
        </>
      }
      avatar={
        <img
          className="h-80 w-64"
          src="/assets/images/avatar.svg"
          alt="AI老颜"
          loading="lazy"
        />
      }
      socialButtons={
        <>
          <a href="#" className="hover:opacity-80">
            <HeroSocial
              src="/assets/images/twitter-icon.png"
              alt="Twitter"
            />
          </a>
          <a href="#" className="hover:opacity-80">
            <HeroSocial
              src="/assets/images/github-icon.png"
              alt="GitHub"
            />
          </a>
          <a href="#" className="hover:opacity-80">
            <HeroSocial
              src="/assets/images/linkedin-icon.png"
              alt="LinkedIn"
            />
          </a>
        </>
      }
    />

    <div className="mt-16 grid gap-6 md:grid-cols-3">
      <div className="rounded-lg bg-gradient-to-br from-cyan-600 to-blue-500 p-6 text-white shadow-lg transition-all hover:scale-105">
        <h3 className="text-xl font-bold mb-2">AI客服系统</h3>
        <p className="text-cyan-100">智能客服解决方案，7x24小时在线，支持多轮对话，提升客户服务效率</p>
      </div>
      <div className="rounded-lg bg-gradient-to-br from-purple-600 to-pink-500 p-6 text-white shadow-lg transition-all hover:scale-105">
        <h3 className="text-xl font-bold mb-2">DeFi智能体</h3>
        <p className="text-purple-100">自动化 DeFi 交易与资产管理工具，实时监控市场，智能执行交易策略</p>
      </div>
      <div className="rounded-lg bg-gradient-to-br from-green-600 to-emerald-500 p-6 text-white shadow-lg transition-all hover:scale-105">
        <h3 className="text-xl font-bold mb-2">AI写作助手</h3>
        <p className="text-green-100">基于 GPT 的智能写作辅助工具，支持多种写作场景，提升创作效率</p>
      </div>
    </div>
  </Section>
);

export { Hero };
