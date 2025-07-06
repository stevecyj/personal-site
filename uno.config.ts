import { defineConfig } from 'unocss'

export default defineConfig({
  // 使用預設的 preset，包含常用的 utility classes
  presets: [],
  
  // 自定義規則
  rules: [],
  
  // 自定義快捷鍵
  shortcuts: {
    'btn': 'py-2 px-4 font-semibold rounded-lg shadow-md',
    'btn-blue': 'btn text-white bg-blue-500 hover:bg-blue-700',
    'btn-red': 'btn text-white bg-red-500 hover:bg-red-700',
    'card': 'p-6 max-w-sm mx-auto bg-white rounded-xl shadow-lg',
  },
  
  // 主題設定
  theme: {
    colors: {
      'brand-blue': '#1fb6ff',
      'brand-purple': '#7e5bef',
      'brand-pink': '#ff49db',
      'brand-orange': '#ff7849',
      'brand-green': '#13ce66',
      'brand-yellow': '#ffc82c',
      'brand-gray-dark': '#273444',
      'brand-gray': '#8492a6',
      'brand-gray-light': '#d3dce6',
    },
    fontFamily: {
      'sans': ['Inter', 'system-ui', 'sans-serif'],
      'serif': ['Georgia', 'serif'],
    },
  },
  
  // 內容掃描路徑
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
  ],
})