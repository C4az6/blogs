// 声明变量/函数/类
declare let username: string
declare let age: number
declare let isLogin: boolean
declare function getPwd(): void
declare class Person {
  name: string
  age: number
  constructor(name: string, age: number)
}

// 声明模块
declare module 'loadsh' {
  export function join(arr: any[]): void
}

// 声明文件
declare module '*.jpg'
declare module '*.jpeg'
declare module '*.png'
declare module '*.svg'
declare module '*.gif'

// 声明命名空间
declare namespace $ {
  function ajax(options: any): void
}