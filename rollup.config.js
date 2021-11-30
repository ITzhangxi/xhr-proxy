import { terser } from "rollup-plugin-terser";
export default {
  input: "src/main.js",
  output: {
    file: "dist/index.js",
    format: "umd",
    name: "zhAH",
  },
  plugins: [terser({ compress: { drop_console: true } })],
};
