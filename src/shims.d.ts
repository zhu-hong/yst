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

declare module '@vue/runtime-core' {
  import type Icon from '@/components/Icon.vue'
  
  export interface GlobalComponents {
    Icon: typeof Icon;
  }
}