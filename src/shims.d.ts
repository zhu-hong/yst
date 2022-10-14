/// <reference types="vite/client" />

declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}

/**
 * 环境
 */
declare const RUNTIME_ENV: 'test' | 'ptest' | 'staging' | 'production'

/**
 * serve ? build
 */
declare const RUNTIME_MODE: 'build' | 'serve'

declare const API_URL: string
declare const ACCOUNT_URL: string
declare const HOME_URL: string