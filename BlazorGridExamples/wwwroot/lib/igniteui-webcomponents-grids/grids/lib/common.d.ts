
    export declare type Constructor<T = {}> = new (...args: any[]) => T;

    export declare type AbstractConstructor<T = {}> = abstract new (...args: any[]) => T;
    
    export declare class LitElement extends HTMLElement {
    
    }

    /* blazorSuppress */
    interface EventEmitterInterface<E> {
        addEventListener<K extends keyof M, M extends E & HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: M[K]) => any, options?: boolean | AddEventListenerOptions): void;
        addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
        removeEventListener<K extends keyof M, M extends E & HTMLElementEventMap>(type: K, listener: (this: HTMLElement, ev: M[K]) => any, options?: boolean | EventListenerOptions): void;
        removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    }

    export declare function EventEmitterMixin<E, T extends AbstractConstructor<LitElement>>(
        superClass: T
    ): Constructor<EventEmitterInterface<E>> & T;
    export declare function EventEmitterMixin<E, T extends Constructor<LitElement>>(
        superClass: T
    ): Constructor<EventEmitterInterface<E>> & T;
    
    export declare class TemplateContent {
        
    }

    /* blazorSuppress */
    export declare type IgcRenderFunction<T> = (context: T) => TemplateContent;
    
    export declare class Point {
        constructor(x: number, y: number);
        public x: number;
        public y: number;
    }
    