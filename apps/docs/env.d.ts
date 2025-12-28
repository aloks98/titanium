/// <reference types="@rsbuild/core/types" />

interface ImportMetaEnv {
  readonly APP_VERSION: string;
  readonly COMMIT_HASH: string;
  readonly BUILD_TIME: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
