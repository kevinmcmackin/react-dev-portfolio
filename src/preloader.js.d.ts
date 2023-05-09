declare module 'preloader.js' {
    export default class Preloader {
      constructor(options?: PreloaderOptions);
      on(event: string, callback: Function): void;
      start(): void;
      stop(): void;
    }
  
    interface PreloaderOptions {
      xhrImages?: string[];
      elements?: HTMLElement[];
      xhrTimeout?: number;
      mixLoad?: boolean;
    }
  }
  