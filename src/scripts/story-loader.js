const LOCAL_CATALOG_KEY = 'cyoc_local_catalog_v1';

export function cacheKey(csvUrl) {
  return `cyoc_csv_${csvUrl}`;
}

export function loadCachedStoryRows(csvUrl) {
  try {
    const raw = sessionStorage.getItem(cacheKey(csvUrl));
    return raw ? JSON.parse(raw) : null;
  } catch (_) {
    return null;
  }
}

export function saveCachedStoryRows(csvUrl, rows) {
  try {
    sessionStorage.setItem(cacheKey(csvUrl), JSON.stringify(rows));
  } catch (_) {}
}

export function clearCachedStoryRows(csvUrl) {
  try {
    sessionStorage.removeItem(cacheKey(csvUrl));
  } catch (_) {}
}

export function normalizeCatalogEntry(entry) {
  return {
    title: String(entry.title || 'Untitled story').trim() || 'Untitled story',
    description: String(entry.description || '').trim(),
    csv: String(entry.csv || '').trim(),
  };
}

export function dedupeCatalog(items) {
  const seen = new Set();
  return items.filter((item) => {
    const csvUrl = String(item.csv || '').trim();
    if (!csvUrl || seen.has(csvUrl)) return false;
    seen.add(csvUrl);
    return true;
  });
}

export function loadLocalCatalog() {
  try {
    const raw = localStorage.getItem(LOCAL_CATALOG_KEY);
    const items = raw ? JSON.parse(raw) : [];
    return Array.isArray(items) ? items : [];
  } catch (_) {
    return [];
  }
}

function saveLocalCatalog(items) {
  try {
    localStorage.setItem(LOCAL_CATALOG_KEY, JSON.stringify(items));
  } catch (_) {}
}

export function summarizeCatalogText(text) {
  const compact = String(text || '').replace(/\s+/g, ' ').trim();
  if (!compact) return '';
  if (compact.length <= 170) return compact;
  return `${compact.slice(0, 167).trimEnd()}...`;
}

function validateStoryRows(rows) {
  if (!Array.isArray(rows) || rows.length === 0) {
    throw new Error('The CSV is empty or could not be parsed.');
  }

  const firstRow = rows[0] || {};
  if (!('id' in firstRow) || !('title' in firstRow) || !('text' in firstRow)) {
    throw new Error('The CSV is missing required columns.');
  }

  return rows;
}

export async function loadStoryRows(csvUrl, options = {}) {
  const { forceRefresh = false } = options;
  const normalizedCsvUrl = String(csvUrl || '').trim();

  if (!normalizedCsvUrl) {
    throw new Error('No story CSV specified.');
  }

  if (forceRefresh) {
    clearCachedStoryRows(normalizedCsvUrl);
  }

  if (!forceRefresh) {
    const cached = loadCachedStoryRows(normalizedCsvUrl);
    if (Array.isArray(cached) && cached.length > 0) {
      return validateStoryRows(cached);
    }
  }

  return new Promise((resolve, reject) => {
    if (!globalThis.Papa || typeof globalThis.Papa.parse !== 'function') {
      reject(new Error('CSV parser unavailable.'));
      return;
    }

    globalThis.Papa.parse(normalizedCsvUrl, {
      download: true,
      header: true,
      skipEmptyLines: true,
      complete(results) {
        try {
          const rows = validateStoryRows(results.data);
          saveCachedStoryRows(normalizedCsvUrl, rows);
          resolve(rows);
        } catch (error) {
          reject(error);
        }
      },
      error(error) {
        reject(error instanceof Error ? error : new Error(error?.message || 'Unable to load CSV.'));
      },
    });
  });
}

export function buildCatalogEntry(rows, csvUrl) {
  const firstRow = rows[0] || {};
  return normalizeCatalogEntry({
    title: firstRow.title,
    description: summarizeCatalogText(firstRow.text || firstRow.description),
    csv: csvUrl,
  });
}

export function rememberLocalStory(csvUrl, rows) {
  const entry = buildCatalogEntry(rows, csvUrl);
  const nextItems = dedupeCatalog(loadLocalCatalog()).filter((item) => item.csv !== entry.csv);
  nextItems.push(entry);
  saveLocalCatalog(nextItems);
  return entry;
}

export function deleteLocalCatalogEntry(csvUrl) {
  const normalizedCsvUrl = String(csvUrl || '').trim();
  const nextItems = dedupeCatalog(loadLocalCatalog()).filter((item) => item.csv !== normalizedCsvUrl);
  saveLocalCatalog(nextItems);
  clearCachedStoryRows(normalizedCsvUrl);
}