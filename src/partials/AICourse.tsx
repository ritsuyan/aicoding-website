import React from 'react';

export const AICourse = () => {
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h2 className="text-3xl font-extrabold text-gray-900 dark:text-white sm:text-4xl">
          AI编程实战课
        </h2>
        <p className="mt-4 text-xl text-gray-600 dark:text-gray-300">
          从零基础到AI编程实战，掌握最新AI开发技能
        </p>
      </div>
      
      <div className="mt-12 rounded-lg bg-white shadow-xl dark:bg-gray-800">
        <div className="relative">
          <img
            src="/assets/images/ai-course-screenshot.png"
            alt="AI编程实战课界面"
            className="w-full rounded-t-lg"
          />
        </div>
        
        <div className="p-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            欢迎订阅《AI编程实战课》！
          </h3>
          
          <div className="prose dark:prose-invert max-w-none">
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              本课程专为零基础编程新手打造，聚焦于使用 Cursor + Claude Code 进行AI项目实战开发。
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              课程内容涵盖数十个实用案例，包括：网站、微信小程序、浏览器插件、App应用、Dify/Coze智能体等，
              带你从0到1掌握AI编程技能。
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              课程以"实战+讲解"模式，每期围绕一个项目展开，每周持续更新（复杂项目可能两周一期），
              紧跟AI技术前沿，确保你学到的都是最新实用技能。
            </p>
            
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              每个项目章节都配有高清视频讲解、详细提示词和完整源码，让学习更高效。
            </p>
            
            <div className="bg-blue-50 dark:bg-blue-900/30 rounded-lg p-4 mb-6">
              <p className="text-blue-800 dark:text-blue-200 font-medium">
                💡 建议使用 Chrome 浏览器观看课程，获得最佳学习体验。
              </p>
            </div>
          </div>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4">
            <button className="inline-flex justify-center rounded-md border border-transparent bg-blue-600 py-3 px-6 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors">
              立即订阅课程
            </button>
            <button className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-3 px-6 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:bg-gray-700 dark:text-gray-200 dark:border-gray-600 dark:hover:bg-gray-600 transition-colors">
              查看课程大纲
            </button>
          </div>
        </div>
      </div>
      
      <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-3">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">丰富实战案例</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            涵盖网站、小程序、插件等多种应用场景
          </p>
        </div>
        
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">最新AI技术</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            紧跟AI前沿技术，学习最新实用技能
          </p>
        </div>
        
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-md bg-blue-500 text-white">
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="mt-4 text-lg font-medium text-gray-900 dark:text-white">完整学习资源</h3>
          <p className="mt-2 text-gray-600 dark:text-gray-300">
            高清视频、详细提示词和完整源码
          </p>
        </div>
      </div>
    </section>
  );
};