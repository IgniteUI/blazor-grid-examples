import type { Ref } from 'lit/directives/ref.js';
import type IgcCarouselComponent from '../carousel/carousel.js';
import type { ChatState } from '../chat/chat-state.js';
import type IgcTileManagerComponent from '../tile-manager/tile-manager.js';
export type TileManagerContext = {
    /** The igc-tile-manager instance. */
    instance: IgcTileManagerComponent;
    /** The internal CSS grid container of the igc-tile-manager. */
    grid: Ref<HTMLElement>;
};
declare const carouselContext: {
    __context__: IgcCarouselComponent;
};
declare const tileManagerContext: {
    __context__: TileManagerContext;
};
declare const chatContext: {
    __context__: ChatState;
};
declare const chatUserInputContext: {
    __context__: ChatState;
};
export { carouselContext, tileManagerContext, chatContext, chatUserInputContext, };
