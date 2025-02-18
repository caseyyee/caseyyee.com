/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_BLOG_PATH: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
