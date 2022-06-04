import { css } from 'lit';

/**
 * Re-usable styles to inject button styles into components.
 */

export default css`
  :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset']),
  :where(input[type='file'])::-webkit-file-upload-button,
  :where(input[type='file'])::file-selector-button {
    --_accent: initial;
    --_text: initial;
    --_size: initial;
    --_bg-light: #fff;
    --_bg-dark: var(--surface-3);
    --_bg: var(--_bg-light);
    --_border: var(--surface-3);
    --_highlight-size: 0;
    --_highlight-light: hsl(210 10% 71%/25%);
    --_highlight-dark: hsl(210 10% 5%/25%);
    --_highlight: var(--_highlight-light);
    --_ink-shadow-light: 0 1px 0 var(--gray-3);
    --_ink-shadow-dark: 0 1px 0 var(--surface-1);
    --_ink-shadow: var(--_ink-shadow-light);
    --_icon-size: 2ch;
    --_icon-color: var(--_accent, var(--link));
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    align-items: center;
    background: var(--_bg);
    border: var(--border-size-2) solid var(--_border);
    border-radius: var(--radius-2);
    box-shadow: var(--shadow-2), 0 1px var(--surface-3),
      0 0 0 var(--_highlight-size) var(--_highlight);
    color: var(--_text);
    display: inline-flex;
    font-size: var(--_size);
    font-weight: var(--font-weight-7);
    gap: var(--size-2);
    justify-content: center;
    padding-block: 0.75ch;
    padding-inline: 1.75ch;
    text-align: center;
    text-shadow: var(--_ink-shadow);
    transition: border-color 0.5s var(--ease-3) 3s;
    user-select: none;
  }
  @media (prefers-color-scheme: dark) {
    :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset']),
    :where(input[type='file'])::-webkit-file-upload-button,
    :where(input[type='file'])::file-selector-button {
      --_highlight: var(--_highlight-dark);
      --_bg: var(--_bg-dark);
      --_ink-shadow: var(--_ink-shadow-dark);
    }
  }
  @media (prefers-reduced-motion: no-preference) {
    :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset']),
    :where(input[type='file'])::-webkit-file-upload-button,
    :where(input[type='file'])::file-selector-button {
      transition: border-color 0.5s var(--ease-3) 3s,
        box-shadow 145ms var(--ease-4);
    }
  }
  :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset'])[disabled] {
    --_bg: none;
    --_text: var(--gray-6);
    box-shadow: var(--shadow-1);
    cursor: not-allowed;
  }
  @media (prefers-color-scheme: dark) {
    :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset'])[disabled] {
      --_text: var(--gray-5);
    }
  }
  :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset']):where(:not(:active):hover) {
    --_highlight-size: var(--size-2);
    transition-delay: 0s;
    transition-duration: 0.25s;
  }
  :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset'])
    > :where(svg) {
    block-size: var(--_icon-size);
    filter: drop-shadow(var(--_ink-shadow));
    flex-shrink: 0;
    inline-size: var(--_icon-size);
  }
  :where(button, button[type], input[type='button'], input[type='submit'], input[type='reset'])
    > :where(svg > *) {
    stroke: var(--_icon-color);
    stroke-width: var(--border-size-2);
  }
  :where([type='submit'], form button:not([type], [disabled])) {
    --_text: var(--_accent, var(--link));
  }
  :where([type='reset']) {
    --_text: var(--red-6);
    --_border: var(--red-3);
  }
  :where([type='reset']):focus-visible {
    outline-color: var(--red-6);
  }
  @media (prefers-color-scheme: dark) {
    :where([type='reset']) {
      --_text: var(--red-2);
      --_border: var(--surface-3);
    }
  }
  :where([type='submit'], [type='reset'], form
      button:not([type])):is(:hover, :focus-visible):not([disabled]) {
    --_border: currentColor;
  }
  :where(input[type='file']) {
    align-self: flex-start;
    border: var(--border-size-1) solid var(--surface-2);
    border-radius: var(--radius-2);
    box-shadow: var(--inner-shadow-4);
    color: var(--text-2);
    cursor: auto;
    max-inline-size: 100%;
    padding: 0;
  }
  :where(input[type='file'])::-webkit-file-upload-button,
  :where(input[type='file'])::file-selector-button {
    cursor: pointer;
    margin-inline-end: 1.75ch;
  }
  @media (prefers-color-scheme: dark) {
    :where([disabled]),
    :where([type='reset']),
    :where([type='submit']),
    :where(form button:not([type='button'])) {
      --_bg: var(--surface-1);
    }
  }
`;
