import type { DefineComponent, GlobalComponents } from 'vue'
 
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

declare const BUILD_TIME: string

declare module 'vue' {
  export interface GlobalComponents {
    Icon: DefineComponent<{
      name: string
    }>
  }
}