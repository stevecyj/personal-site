import { defineConfig } from "unocss"
import { presetWebFonts } from '@unocss/preset-web-fonts'
import { shortcuts } from './src/styles/shortcuts'

export default defineConfig({
  // 使用預設的 preset，包含常用的 utility classes
  presets: [
    presetWebFonts({
      provider: 'google',
      fonts: {
        sans: 'Inter',
      }
    })
  ],

  // 自定義規則
  rules: [],

  // 自定義快捷鍵
  shortcuts,

  // 主題設定
  theme: {
    colors: {
      "brand-blue": "#1fb6ff",
      "brand-purple": "#7e5bef",
      "brand-pink": "#ff49db",
      "brand-orange": "#ff7849",
      "brand-green": "#13ce66",
      "brand-yellow": "#ffc82c",
      "brand-gray-dark": "#273444",
      "brand-gray": "#8492a6",
      "brand-gray-light": "#d3dce6",
    },
    fontFamily: {
      sans: "Inter, system-ui, sans-serif",
      serif: "Georgia, serif",
    },
  },

  // 內容掃描路徑
  content: {
    filesystem: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  },
})
