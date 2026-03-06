// Markdown formatter — lightweight parser for chat output
// Supports: headings, tables, bold, italic, code, lists, links

export function formatMarkdown(text) {
  if (!text) return '';

  // Split into blocks by double newline (or before/after tables/headings)
  // Process block-level elements first, then inline

  let html = text;

  // Code blocks (must come first to protect contents)
  const codeBlocks = [];
  html = html.replace(/```(\w*)\n([\s\S]*?)```/g, (_, lang, code) => {
    const idx = codeBlocks.length;
    codeBlocks.push(`<pre><code>${escapeHtml(code.trimEnd())}</code></pre>`);
    return `\x00CODEBLOCK${idx}\x00`;
  });

  // Inline code — protect from further processing
  const inlineCodes = [];
  html = html.replace(/`([^`]+)`/g, (_, code) => {
    const idx = inlineCodes.length;
    inlineCodes.push(`<code>${escapeHtml(code)}</code>`);
    return `\x00INLINE${idx}\x00`;
  });

  // Process line by line for block elements
  const lines = html.split('\n');
  const output = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    // Table: detect header row followed by separator row
    if (i + 1 < lines.length && isTableSeparator(lines[i + 1]) && line.includes('|')) {
      const tableLines = [line, lines[i + 1]];
      i += 2;
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i]);
        i++;
      }
      output.push(renderTable(tableLines));
      continue;
    }

    // Headings
    const headingMatch = line.match(/^(#{1,4})\s+(.+)$/);
    if (headingMatch) {
      const level = headingMatch[1].length;
      output.push(`<h${level}>${formatInline(headingMatch[2])}</h${level}>`);
      i++;
      continue;
    }

    // Unordered list items
    if (/^[\s]*[-*]\s+/.test(line)) {
      const listItems = [];
      while (i < lines.length && /^[\s]*[-*]\s+/.test(lines[i])) {
        listItems.push(lines[i].replace(/^[\s]*[-*]\s+/, ''));
        i++;
      }
      output.push('<ul>' + listItems.map(li => `<li>${formatInline(li)}</li>`).join('') + '</ul>');
      continue;
    }

    // Ordered list items
    if (/^[\s]*\d+[.)]\s+/.test(line)) {
      const listItems = [];
      while (i < lines.length && /^[\s]*\d+[.)]\s+/.test(lines[i])) {
        listItems.push(lines[i].replace(/^[\s]*\d+[.)]\s+/, ''));
        i++;
      }
      output.push('<ol>' + listItems.map(li => `<li>${formatInline(li)}</li>`).join('') + '</ol>');
      continue;
    }

    // Empty line → paragraph break
    if (line.trim() === '') {
      output.push('<br>');
      i++;
      continue;
    }

    // Normal text line
    output.push(formatInline(line));
    i++;
  }

  html = output.join('\n');

  // Restore code blocks and inline code
  html = html.replace(/\x00CODEBLOCK(\d+)\x00/g, (_, idx) => codeBlocks[idx]);
  html = html.replace(/\x00INLINE(\d+)\x00/g, (_, idx) => inlineCodes[idx]);

  // Clean up excessive <br> tags
  html = html.replace(/(<br>\s*){3,}/g, '<br><br>');

  return html;
}

function formatInline(text) {
  return text
    // Bold
    .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
    // Italic
    .replace(/\*([^*]+)\*/g, '<em>$1</em>')
    // Links
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
}

function isTableSeparator(line) {
  if (!line) return false;
  return /^\|?[\s-:|]+\|[\s-:|]*$/.test(line.trim());
}

function renderTable(lines) {
  const headerCells = parseTableRow(lines[0]);
  const bodyRows = lines.slice(2); // skip separator

  let html = '<div class="super-chat-table-wrap"><table class="super-chat-table">';
  html += '<thead><tr>';
  for (const cell of headerCells) {
    html += `<th>${formatInline(cell)}</th>`;
  }
  html += '</tr></thead>';

  if (bodyRows.length > 0) {
    html += '<tbody>';
    for (const row of bodyRows) {
      const cells = parseTableRow(row);
      html += '<tr>';
      for (let j = 0; j < headerCells.length; j++) {
        html += `<td>${formatInline(cells[j] || '')}</td>`;
      }
      html += '</tr>';
    }
    html += '</tbody>';
  }

  html += '</table></div>';
  return html;
}

function parseTableRow(line) {
  // Remove leading/trailing pipes and split
  let trimmed = line.trim();
  if (trimmed.startsWith('|')) trimmed = trimmed.slice(1);
  if (trimmed.endsWith('|')) trimmed = trimmed.slice(0, -1);
  return trimmed.split('|').map(c => c.trim());
}

export function escapeHtml(text) {
  if (!text) return '';
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
