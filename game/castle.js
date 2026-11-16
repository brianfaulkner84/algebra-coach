// Draws a math castle as an SVG string. Height grows with bricks, relative to the tallest castle.
window.Castle = (function () {
  function svg(bricks, maxBricks, opts) {
    opts = opts || {};
    var W = 120, H = 150, ground = 140;
    var frac = maxBricks > 0 ? Math.max(0, Math.min(1, bricks / maxBricks)) : 0;
    var wallH = bricks > 0 ? 18 + Math.round(frac * 92) : 0;
    var stone = opts.me ? "#E8A33D" : "#5A6799", dark = opts.me ? "#B07A1E" : "#1E2761";
    var out = ['<svg viewBox="0 0 ' + W + ' ' + H + '" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Castle with ' + bricks + ' bricks">'];
    out.push('<rect x="0" y="' + ground + '" width="' + W + '" height="10" fill="#7FA36B"/>');
    if (!wallH) {
      out.push('<text x="60" y="128" text-anchor="middle" font-size="12" fill="#888" font-family="Calibri,Arial">no bricks yet</text>');
      out.push('</svg>');
      return out.join("");
    }
    // main wall with brick rows
    var top = ground - wallH, x0 = 22, w = 76, row = 9, bw = 15;
    out.push('<rect x="' + x0 + '" y="' + top + '" width="' + w + '" height="' + wallH + '" fill="' + stone + '" stroke="' + dark + '" stroke-width="1.5"/>');
    for (var y = ground - row, r = 0; y > top; y -= row, r++) {
      out.push('<line x1="' + x0 + '" y1="' + y + '" x2="' + (x0 + w) + '" y2="' + y + '" stroke="' + dark + '" stroke-opacity=".45" stroke-width="1"/>');
      for (var bx = x0 + (r % 2 ? bw / 2 : bw); bx < x0 + w; bx += bw) {
        out.push('<line x1="' + bx + '" y1="' + y + '" x2="' + bx + '" y2="' + Math.min(ground, y + row) + '" stroke="' + dark + '" stroke-opacity=".35" stroke-width="1"/>');
      }
    }
    // battlements
    for (var cx = x0; cx < x0 + w - 2; cx += 16) out.push('<rect x="' + cx + '" y="' + (top - 8) + '" width="9" height="8" fill="' + stone + '" stroke="' + dark + '" stroke-width="1.2"/>');
    // side towers once the castle has some height
    if (wallH > 40) {
      var th = wallH + 14;
      [6, 98].forEach(function (tx) {
        out.push('<rect x="' + tx + '" y="' + (ground - th) + '" width="16" height="' + th + '" fill="' + stone + '" stroke="' + dark + '" stroke-width="1.5"/>');
        out.push('<polygon points="' + (tx - 2) + ',' + (ground - th) + ' ' + (tx + 8) + ',' + (ground - th - 14) + ' ' + (tx + 18) + ',' + (ground - th) + '" fill="' + dark + '"/>');
      });
    }
    // gate
    out.push('<path d="M52 ' + ground + ' v-12 a8 8 0 0 1 16 0 v12 z" fill="' + dark + '"/>');
    // flag on the leader
    if (opts.crown) out.push('<line x1="60" y1="' + (top - 8) + '" x2="60" y2="' + (top - 30) + '" stroke="#333" stroke-width="2"/><polygon points="60,' + (top - 30) + ' 78,' + (top - 25) + ' 60,' + (top - 20) + '" fill="#C0392B"/>');
    out.push('</svg>');
    return out.join("");
  }
  return { svg: svg };
})();
