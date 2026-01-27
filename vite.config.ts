import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './', // GitHub Pages 리포지토리 이름(하위 경로)에 대응하기 위해 상대 경로 사용
});