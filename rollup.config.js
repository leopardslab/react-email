import { defineConfig } from 'rollup';

const rollupConfig = defineConfig({
  input: 'src/trial.ts',
  output: [
    {
      file: 'dist/bundle.cjs.js',
      format: 'cjs',
    },
  ],
});

export default rollupConfig;