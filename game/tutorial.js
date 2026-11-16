// How-to-play cards with pictures. Used by the student lobby (one card at a time) and the projector lobby (all cards).
window.Tutorial = (function () {
  var NAVY = "#1E2761", AMBER = "#E8A33D", RED = "#C0392B", GREEN = "#1E8449", ICE = "#CADCFC";
  function fmt(n) { return Number(n).toLocaleString(); }
  function wrap(inner, h) { return '<svg viewBox="0 0 300 ' + (h || 150) + '" xmlns="http://www.w3.org/2000/svg" role="img">' + inner + "</svg>"; }
  function tile(x, y, w, h, fill, label) {
    return '<rect x="' + x + '" y="' + y + '" width="' + w + '" height="' + h + '" rx="8" fill="' + fill + '"/>' +
      '<text x="' + (x + w / 2) + '" y="' + (y + h / 2 + 6) + '" text-anchor="middle" font-size="16" font-weight="700" fill="#fff" font-family="Calibri,Arial">' + label + "</text>";
  }
  function clock(cx, cy, r, sec) {
    return '<circle cx="' + cx + '" cy="' + cy + '" r="' + r + '" fill="' + NAVY + '"/>' +
      '<text x="' + cx + '" y="' + (cy + 9) + '" text-anchor="middle" font-size="26" font-weight="700" fill="#fff" font-family="Calibri,Arial">' + sec + "</text>";
  }
  function brick(x, y, c) { return '<rect x="' + x + '" y="' + y + '" width="22" height="11" fill="' + (c || AMBER) + '" stroke="#B07A1E" stroke-width="1"/>'; }
  function pill(x, y, t, fill, color) {
    var w = 14 + t.length * 11;
    return '<rect x="' + (x - w / 2) + '" y="' + (y - 16) + '" width="' + w + '" height="30" rx="15" fill="' + (fill || NAVY) + '"/>' +
      '<text x="' + x + '" y="' + (y + 6) + '" text-anchor="middle" font-size="18" font-weight="700" fill="' + (color || AMBER) + '" font-family="Calibri,Arial">' + t + "</text>";
  }
  function arrow(x1, y1, x2, y2, c) {
    return '<line x1="' + x1 + '" y1="' + y1 + '" x2="' + x2 + '" y2="' + y2 + '" stroke="' + (c || NAVY) + '" stroke-width="4" stroke-linecap="round"/>' +
      '<polygon points="' + x2 + ',' + y2 + ' ' + (x2 - 12) + ',' + (y2 - 7) + ' ' + (x2 - 12) + ',' + (y2 + 7) + '" fill="' + (c || NAVY) + '"/>';
  }
  function castle(x, y, w, bricks, goal, me) {
    var s = window.Castle ? window.Castle.svg(bricks, goal, { me: me }) : "";
    return '<g transform="translate(' + x + "," + y + ") scale(" + (w / 120) + ')">' + s.replace(/^<svg[^>]*>/, "").replace(/<\/svg>$/, "") + "</g>";
  }
  function cards(o) {
    o = o || {};
    var goal = o.goal || 20000, atk = o.atk || 10, loss = o.loss == null ? 0.04 : o.loss, qsec = o.qSec || 60;
    var walls = loss ? Math.round(loss * 100) + "%" : null;
    var bricksRow = ""; for (var i = 0; i < 6; i++) bricksRow += brick(150 + (i % 3) * 24, 96 - Math.floor(i / 3) * 13);
    return [
      { title: "1. Answer the question",
        text: "Each question has a " + qsec + "-second timer. Read it, work it out, and tap your answer. You only get one try.",
        pic: wrap(tile(20, 20, 125, 50, "#C0392B", "▲  y = 2x − 5") + tile(155, 20, 125, 50, "#1F5FBF", "◆  y = −2x + 5") +
          tile(20, 80, 125, 50, "#C98A12", "●  y = 2x + 5") + tile(155, 80, 125, 50, "#1E8449", "■  y = 5x − 2")) },
      { title: "2. Faster answers build more",
        text: "Every second left on the clock when you answer RIGHT is 1 base brick. Your screen counts down what your answer is worth right now, so answer fast!",
        pic: wrap(clock(70, 75, 42, "42") + arrow(122, 75, 180, 75) +
          '<text x="245" y="70" text-anchor="middle" font-size="30" font-weight="700" fill="' + NAVY + '" font-family="Cambria,Georgia">42</text>' +
          '<text x="245" y="95" text-anchor="middle" font-size="15" fill="#555" font-family="Calibri,Arial">base bricks</text>') },
      { title: "3. Your multiplier grows",
        text: "Everyone starts at ×1. Every right answer adds 1 to your multiplier. A wrong answer does not lower it, so keep going! Bricks built = base bricks × multiplier.",
        pic: wrap(pill(45, 75, "×1") + arrow(72, 75, 100, 75, GREEN) + pill(130, 75, "×2") + arrow(157, 75, 185, 75, GREEN) + pill(215, 75, "×3") + arrow(242, 75, 270, 75, GREEN) +
          '<text x="150" y="130" text-anchor="middle" font-size="16" fill="#555" font-family="Calibri,Arial">42 base bricks × 3 = 126 bricks</text>') },
      { title: "4. Build your castle",
        text: "Your bricks build your math castle. The first castle to reach " + fmt(goal) + " bricks wins the game. If nobody gets there, the biggest castle wins.",
        pic: wrap(castle(10, 10, 85, goal * 0.08, goal, true) + castle(105, 0, 95, goal * 0.45, goal, true) + castle(205, -10, 105, goal, goal, true), 160) },
      { title: "5. Attack another castle",
        text: "After every question you see the leaderboard. Tap a player to target them. If you answer the NEXT question right, they lose seconds left × " + atk + " bricks. Your multiplier does not count on attacks.",
        pic: wrap(castle(15, 15, 95, goal * 0.3, goal, true) + arrow(118, 75, 190, 75, RED) +
          '<text x="154" y="62" text-anchor="middle" font-size="26" fill="' + RED + '">⚔</text>' + castle(190, 15, 95, goal * 0.6, goal, false)) },
      { title: "6. Gang up on the leader",
        text: "When a castle shows ⚠ Almost there!, it is close to winning. Team up and attack it to slow it down!" + (walls ? " Castle walls: a castle never loses more than " + walls + " of its bricks in one question." : " Every hit lands in full."),
        pic: wrap(castle(100, 10, 100, goal * 0.85, goal, false) +
          '<rect x="95" y="128" width="110" height="20" rx="6" fill="' + RED + '"/><text x="150" y="143" text-anchor="middle" font-size="13" font-weight="700" fill="#fff" font-family="Calibri,Arial">⚠ Almost there! 85%</text>' +
          arrow(20, 40, 92, 70, RED) + arrow(20, 110, 92, 90, RED) + arrow(285, 40, 212, 70, RED) + arrow(285, 110, 212, 90, RED), 155) },
      { title: "7. Targets, saved attacks, revenge",
        text: "Your target stays the same until you change it. No target? A right answer SAVES your attack, and saved attacks all hit at once when you pick someone. The Who Attacked You table shows who hit you and how hard. Tap Revenge to target them.",
        pic: wrap('<rect x="20" y="30" width="260" height="40" rx="10" fill="#FDECEA" stroke="' + RED + '" stroke-width="2"/>' +
          '<text x="40" y="56" font-size="17" font-weight="700" fill="' + NAVY + '" font-family="Calibri,Arial">Ben T</text><text x="260" y="57" text-anchor="end" font-size="18">🎯</text>' +
          '<rect x="20" y="85" width="260" height="40" rx="10" fill="#fff" stroke="' + ICE + '" stroke-width="2"/>' +
          '<text x="40" y="111" font-size="16" fill="' + NAVY + '" font-family="Calibri,Arial">💾 Saved attacks: 840 bricks</text>') },
      { title: "8. Learn as you go",
        text: "Before each round you get the key ideas and definitions for that topic. After each question you see the right answer and why. If you miss one, read the explanation: the same idea comes back later!",
        pic: wrap('<rect x="20" y="20" width="260" height="110" rx="12" fill="#FFF4E0" stroke="' + AMBER + '" stroke-width="2"/>' +
          '<text x="40" y="52" font-size="17" font-weight="700" fill="#7a5410" font-family="Calibri,Arial">Remember:</text>' +
          '<text x="40" y="80" font-size="15" fill="#7a5410" font-family="Calibri,Arial">x-intercept: let y = 0</text>' +
          '<text x="40" y="104" font-size="15" fill="#7a5410" font-family="Calibri,Arial">y-intercept: let x = 0</text>') }
    ];
  }
  return { cards: cards };
})();
