// story-shared.js — rendering helpers shared by the interactive player
// (story.astro) and the print view (story/print.astro), so both stay in
// sync on how Markdown and choice values are interpreted.

// ------------------------------------------------------------
// Minimal Markdown renderer
// Supports: **bold**, *italic*, `code`, [link](url),
//           paragraphs (blank lines), line breaks (\n).
// ------------------------------------------------------------
export function renderMarkdown(text) {
  if (!text) return '';

  // Split into paragraphs on blank lines
  const paragraphs = text.split(/\n{2,}/);

  return paragraphs.map(para => {
    // Inline rules (order matters)
    let html = para
      // Escape HTML entities first to prevent XSS
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      // Bold: **text** or __text__
      .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
      .replace(/__(.+?)__/g, '<strong>$1</strong>')
      // Italic: *text* or _text_
      .replace(/\*(.+?)\*/g, '<em>$1</em>')
      .replace(/_(.+?)_/g, '<em>$1</em>')
      // Inline code: `code`
      .replace(/`([^`]+)`/g, '<code>$1</code>')
      // Links: [label](url) — only allow http/https/relative URLs
      .replace(/\[([^\]]+)\]\(([^)]+)\)/g, (_, label, url) => {
        // Block javascript: and data: URLs to prevent XSS
        const safe = /^(https?:\/\/|\/|\.\/)/.test(url.trim());
        return safe
          ? `<a href="${url.trim()}" target="_blank" rel="noopener">${label}</a>`
          : `<span>${label}</span>`;
      })
      // Line breaks within a paragraph
      .replace(/\n/g, '<br>');

    return `<p>${html}</p>`;
  }).join('\n');
}

// ------------------------------------------------------------
// Choice columns (choice_1, choice_2, …) and value parsing
// Each choice value follows the format: "Link text|target-id"
// ------------------------------------------------------------
export function getChoiceKeys(entry) {
  return Object.keys(entry)
    .filter(k => /^choice_\d+$/.test(k))
    .sort((a, b) => {
      const numA = parseInt(a.split('_')[1], 10);
      const numB = parseInt(b.split('_')[1], 10);
      return numA - numB;
    });
}

export function getChoices(entry) {
  return getChoiceKeys(entry)
    .map(k => (entry[k] || '').trim())
    .filter(v => v !== '');
}

/**
 * Parse a single choice value into a label and target entry id.
 * `fallbackLabel` is used when no label is present (no "|" or an empty
 * label before the "|") — the cover page's "Begin" choice uses this to
 * default to "Begin Story".
 */
export function parseChoice(raw, fallbackLabel = '') {
  const pipeIndex = raw.lastIndexOf('|');
  if (pipeIndex === -1) {
    return { label: fallbackLabel || raw, targetId: raw };
  }
  const label = raw.slice(0, pipeIndex).trim();
  const targetId = raw.slice(pipeIndex + 1).trim();
  return { label: label || fallbackLabel, targetId };
}

// ------------------------------------------------------------
// Resolve which CSV URL a page should load, given the site config
// and the current query-string parameters.
// Priority:
//   1. ?csv= param (only in development mode)
//   2. CSV URL from the configured story matching ?story= param
//   3. First configured story (fallback)
// ------------------------------------------------------------
export function resolveCsvUrl({ developmentMode, stories, storyParam, csvParam, base }) {
  if (developmentMode && csvParam) return csvParam;

  const list = stories || [];
  let csvPath = null;
  if (storyParam) {
    const match = list.find(s => s.id === storyParam);
    if (match) csvPath = match.csv;
  }

  if (!csvPath && list.length > 0) csvPath = list[0].csv;
  if (!csvPath) return null;

  // Prepend the base URL for site-relative paths (e.g. "/assets/story.csv")
  // so they resolve correctly when the site is hosted in a subdirectory.
  if (csvPath.startsWith('/') && base !== '/') {
    return base.replace(/\/$/, '') + csvPath;
  }
  return csvPath;
}
