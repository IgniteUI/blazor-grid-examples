import { css } from 'lit';
import { styles as bootstrap } from './shared/item/list-item.bootstrap.css.js';
import { styles as fluent } from './shared/item/list-item.fluent.css.js';
import { styles as indigo } from './shared/item/list-item.indigo.css.js';
const light = {
    bootstrap: css `
    ${bootstrap}
  `,
    fluent: css `
    ${fluent}
  `,
    indigo: css `
    ${indigo}
  `,
};
const dark = {
    bootstrap: css `
    ${bootstrap}
  `,
    fluent: css `
    ${fluent}
  `,
    indigo: css `
    ${indigo}
  `,
};
export const all = { light, dark };
//# sourceMappingURL=item.js.map