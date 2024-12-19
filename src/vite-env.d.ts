/// <reference types="vite/client" />
module "*.vue" {
  import type { Component } from 'vue'
  const component: Component
  export default component
}
