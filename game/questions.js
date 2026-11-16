// Chapter 4 Review: Live Game question bank (host only; students never load this file).
// Each question: r = round number, q = text, img = optional image, c = choices, a = index of correct choice,
// x = short explanation shown after time is up, t = seconds (default 30).
window.ROUNDS = [
  { n: 1, name: "Points and Quadrants", lesson: "4.1" },
  { n: 2, name: "Is It a Solution?", lesson: "4.2" },
  { n: 3, name: "Line, Ray, or Segment?", lesson: "4.2, 4.7" },
  { n: 4, name: "Intercepts", lesson: "4.3" },
  { n: 5, name: "Slope and Rate of Change", lesson: "4.4" },
  { n: 6, name: "Standard Form to y = mx + b", lesson: "4.5" },
  { n: 7, name: "Direct Variation", lesson: "4.6" },
  { n: 8, name: "Function Notation", lesson: "4.7" },
  { n: 9, name: "Final Round: Word Problems (Double Points)", lesson: "All", double: true }
];

window.QUESTIONS = [
  // Round 1
  { r: 1, q: "What are the coordinates of point Q?", img: "img/points.png", c: ["(2, −3)", "(−3, 2)", "(−2, 3)", "(2, 3)"], a: 0, x: "Count across first: right 2. Then down 3. Q is (2, −3)." },
  { r: 1, q: "What are the coordinates of point R?", img: "img/points.png", c: ["(3, 0)", "(0, 3)", "(3, 3)", "(0, −3)"], a: 1, x: "R is on the y-axis, so there is no left or right move: x = 0. Up 3 gives (0, 3)." },
  { r: 1, q: "Without plotting, which quadrant is (−6, 5) in?", c: ["Quadrant I", "Quadrant II", "Quadrant III", "Quadrant IV"], a: 1, x: "x is negative and y is positive (−, +). That is Quadrant II." },
  { r: 1, q: "Where is the point (0, −4)?", c: ["Quadrant III", "Quadrant IV", "On the x-axis", "On the y-axis"], a: 3, x: "x = 0 means no left or right move. The point sits on the y-axis, not in any quadrant." },
  // Round 2
  { r: 2, q: "Is (2, −1) a solution of y = −3x + 5?", c: ["Yes", "No"], a: 0, x: "−1 ≟ −3(2) + 5 = −6 + 5 = −1. True, so it is a solution." },
  { r: 2, q: "Is (−2, 3) a solution of 3x + 2y = 1?", c: ["Yes", "No"], a: 1, x: "3(−2) + 2(3) = −6 + 6 = 0, and 0 ≠ 1. Not a solution." },
  { r: 2, q: "Which ordered pair is a solution of 5y − 2x = −8?", c: ["(0, 4)", "(−4, 0)", "(4, 0)", "(2, −2)"], a: 2, x: "x = 4, y = 0: 5(0) − 2(4) = −8. True. Watch the order: (x, y)." },
  // Round 3
  { r: 3, q: "A function has domain x ≥ 2. What does its graph look like?", c: ["Line", "Ray", "Segment", "Points only"], a: 1, x: "Restricted on ONE side means a ray: closed dot at x = 2, arrow going right." },
  { r: 3, q: "A function has domain −1 ≤ x ≤ 3. What does its graph look like?", c: ["Line", "Ray", "Segment", "Points only"], a: 2, x: "Restricted on BOTH sides means a segment: closed dots at x = −1 and x = 3, no arrows." },
  { r: 3, q: "Graph y = 2x + 1. No domain is given. What does the graph look like?", c: ["Line", "Ray", "Segment", "Points only"], a: 0, x: "No restriction means all real numbers: a line with arrows on both ends." },
  { r: 3, q: "Which graph is a RAY?", img: "img/abc.png", c: ["Graph A", "Graph B", "Graph C", "None of them"], a: 1, t: 40, x: "B has one closed dot and one arrow. A has two arrows (line). C has two dots (segment)." },
  { r: 3, q: "What is the domain of graph C?", img: "img/abc.png", c: ["All real numbers", "x ≥ −2", "−2 ≤ x ≤ 3", "−2 ≤ y ≤ 3"], a: 2, t: 40, x: "Read the x-values at the two dots: x = −2 and x = 3. Domain: −2 ≤ x ≤ 3." },
  { r: 3, q: "A plumber charges $50 plus $40 per hour: C = 40h + 50. Which graph fits?", c: ["Line, all real numbers", "Ray, h ≥ 0", "Segment, 0 ≤ h ≤ 40", "Segment, 0 ≤ h ≤ 50"], a: 1, t: 45, x: "Hours can't be negative, so start at h = 0. No stopping time is given, so keep going: a ray." },
  { r: 3, q: "A runner runs 5 mi/h during a 2-hour race: d = 5t. Which graph fits?", c: ["Ray, t ≥ 0", "Segment, 0 ≤ t ≤ 2", "Segment, 0 ≤ t ≤ 10", "Line, all real numbers"], a: 1, t: 45, x: "The race has a start AND a stop: 0 ≤ t ≤ 2. Two closed dots, so a segment." },
  { r: 3, q: "Gas costs $3 per gallon: C = 3g. You plan to spend $24. What is the domain?", c: ["0 ≤ g ≤ 24", "g ≥ 0", "0 ≤ g ≤ 8", "0 ≤ g ≤ 72"], a: 2, t: 45, x: "$24 is the OUTPUT. Solve 3g = 24, so g = 8. Domain: 0 ≤ g ≤ 8 (a segment)." },
  { r: 3, q: "Graph y = −2x + 3 with domain x ≥ 1. What is the range?", c: ["y ≥ 1", "y ≤ 1", "y ≤ 3", "All real numbers"], a: 1, t: 45, x: "At x = 1, y = 1. The line falls as x grows, so the ray goes down: y ≤ 1." },
  // Round 4
  { r: 4, q: "What are the intercepts of 4x − 3y = 12?", c: ["x-int 3, y-int 4", "x-int 3, y-int −4", "x-int −4, y-int 3", "x-int 4, y-int −3"], a: 1, t: 40, x: "y = 0: 4x = 12, x = 3. x = 0: −3y = 12, y = −4." },
  { r: 4, q: "A line has x-intercept −3. Which point is on the line?", c: ["(0, −3)", "(−3, −3)", "(−3, 0)", "(3, 0)"], a: 2, x: "The x-intercept is on the x-axis, where y = 0: (−3, 0)." },
  { r: 4, q: "Pizzas cost $10 and salads $5: 10p + 5s = 200. The s-intercept is 40. What does it mean?", c: ["40 pizzas and no salads", "40 salads and no pizzas", "The goal is $40", "40 of each"], a: 1, t: 45, x: "At the s-intercept, p = 0: no pizzas. 5s = 200 means 40 salads." },
  // Round 5
  { r: 5, q: "Find the slope of the line through (−3, 4) and (1, −4).", c: ["2", "−2", "−1/2", "0"], a: 1, t: 40, x: "(−4 − 4) ÷ (1 − (−3)) = −8 ÷ 4 = −2." },
  { r: 5, q: "Find the slope of the line through (2, 7) and (2, −3).", c: ["0", "−10", "Undefined", "10"], a: 2, x: "(−3 − 7) ÷ (2 − 2) = −10 ÷ 0. Division by zero: undefined (vertical line)." },
  { r: 5, q: "Find the slope of the line through (−5, 1) and (3, 1).", c: ["0", "Undefined", "1", "8"], a: 0, x: "(1 − 1) ÷ (3 − (−5)) = 0 ÷ 8 = 0. Same y-values: horizontal line." },
  { r: 5, q: "Bike trip: what is the rate of change from hour 0 to hour 3?", img: "img/bike.png", c: ["36 mi/h", "12 mi/h, away from home", "−12 mi/h", "3 mi/h"], a: 1, t: 40, x: "(36 − 0) ÷ (3 − 0) = 12. Positive: moving away from home." },
  { r: 5, q: "Bike trip: what is the rate of change from hour 5 to hour 8?", img: "img/bike.png", c: ["12 mi/h, away from home", "0, stopped", "−12 mi/h, back toward home", "−36 mi/h"], a: 2, t: 40, x: "(0 − 36) ÷ (8 − 5) = −36 ÷ 3 = −12. Negative: heading home." },
  // Round 6
  { r: 6, q: "What is the slope of y = −x − 2?", c: ["0", "−2", "1", "−1"], a: 3, x: "−x means −1x, so m = −1." },
  { r: 6, q: "Rewrite 3x + y = 7 in slope-intercept form.", c: ["y = 3x + 7", "y = −3x + 7", "y = −3x − 7", "y = 7x + 3"], a: 1, t: 40, x: "Subtract 3x from each side: y = −3x + 7." },
  { r: 6, q: "Rewrite 4x − 2y = 10 in slope-intercept form.", c: ["y = 2x − 5", "y = −2x + 5", "y = 2x + 5", "y = −2x − 5"], a: 0, t: 45, x: "−2y = −4x + 10. Divide EVERY term by −2: y = 2x − 5." },
  { r: 6, q: "Rewrite −6x + 3y = 9 in slope-intercept form.", c: ["y = −2x + 3", "y = 2x + 9", "y = 2x + 3", "y = 3x + 2"], a: 2, t: 45, x: "Add 6x: 3y = 6x + 9. Divide every term by 3: y = 2x + 3." },
  { r: 6, q: "What is the slope of x + 4y = 8?", c: ["−4", "−1/4", "1/4", "4"], a: 1, t: 45, x: "4y = −x + 8, so y = −(1/4)x + 2. m = −1/4." },
  { r: 6, q: "Rewrite 5x − y = −3 in slope-intercept form.", c: ["y = 5x − 3", "y = −5x + 3", "y = 5x + 3", "y = −5x − 3"], a: 2, t: 45, x: "−y = −5x − 3. Divide every term by −1, so every sign flips: y = 5x + 3." },
  { r: 6, q: "What are the slope and y-intercept of 2x + 3y = 6?", c: ["m = 2/3, b = 2", "m = −2, b = 6", "m = −3/2, b = 2", "m = −2/3, b = 2"], a: 3, t: 45, x: "3y = −2x + 6, so y = −(2/3)x + 2. m = −2/3, b = 2." },
  // Round 7
  { r: 7, q: "Which graph shows direct variation?", img: "img/dv.png", c: ["Graph A", "Graph B", "Both", "Neither"], a: 0, t: 40, x: "Direct variation passes through (0, 0). Only A does (k = −2). B crosses the y-axis at 2." },
  { r: 7, q: "x and y vary directly. x: 3, 6, 9 and y: 12, 24, 36. Which equation fits?", c: ["y = x + 9", "y = 3x", "y = 4x", "y = 12x"], a: 2, t: 40, x: "12 ÷ 3 = 24 ÷ 6 = 36 ÷ 9 = 4, so k = 4 and y = 4x." },
  { r: 7, q: "Pay varies directly with hours. You earn $45 for 5 hours. How much for 12 hours?", c: ["$60", "$96", "$108", "$540"], a: 2, t: 45, x: "k = 45 ÷ 5 = 9, so p = 9h. p = 9(12) = $108." },
  // Round 8
  { r: 8, q: "f(x) = −5x + 8. Find f(−3).", c: ["−7", "23", "7", "−23"], a: 1, x: "f(−3) = −5(−3) + 8 = 15 + 8 = 23." },
  { r: 8, q: "g(x) = 1.5x. Find g(40).", c: ["41.5", "6", "60", "600"], a: 2, x: "g(40) = 1.5(40) = 60." },
  { r: 8, q: "h(x) = 6x − 4. Find x so that h(x) = 14.", c: ["80", "3", "5/3", "18"], a: 1, t: 40, x: "6x − 4 = 14, so 6x = 18 and x = 3. (80 is h(14), the wrong direction.)" },
  { r: 8, q: "p(x) = −3x + 2. Find x so that p(x) = 11.", c: ["3", "−31", "−3", "−13/3"], a: 2, t: 40, x: "−3x + 2 = 11, so −3x = 9 and x = −3." },
  // Final round (double points)
  { r: 9, q: "A streaming service charges a one-time $15 setup fee plus $10 per month. Which equation gives the total cost C after m months?", c: ["C = 15m + 10", "C = 10m + 15", "C = 10m − 15", "C = 25m"], a: 1, t: 60, x: "\"Per month\" is the slope: 10. The one-time fee is the y-intercept: 15." },
  { r: 9, q: "Same service: C = 10m + 15. After how many months is the total $95?", c: ["11 months", "9.5 months", "8 months", "950 months"], a: 2, t: 60, x: "10m + 15 = 95, so 10m = 80 and m = 8." },
  { r: 9, q: "A pool holds 600 gallons and drains 50 gallons per minute: g = −50t + 600. When is the pool empty?", c: ["50 minutes", "12 minutes", "600 minutes", "650 minutes"], a: 1, t: 60, x: "Empty means g = 0. 0 = −50t + 600, so 50t = 600 and t = 12." },
  { r: 9, q: "Same pool: g = −50t + 600. Which graph fits?", c: ["Ray, t ≥ 0", "Line, all real numbers", "Segment, 0 ≤ t ≤ 12", "Segment, 0 ≤ t ≤ 600"], a: 2, t: 60, x: "It starts full at t = 0 and stops when empty at t = 12: a segment." },
  { r: 9, q: "A car drives 55 mi/h for 3 hours: d = 55t. What is the range?", c: ["0 ≤ d ≤ 3", "d ≥ 0", "0 ≤ d ≤ 110", "0 ≤ d ≤ 165"], a: 3, t: 60, x: "Range is the OUTPUT. d = 55(3) = 165, so 0 ≤ d ≤ 165." },
  { r: 9, q: "Fair tickets cost $6 each: C = 6t. You spend $42. How many tickets did you buy?", c: ["36", "7", "48", "252"], a: 1, t: 60, x: "6t = 42, so t = 7. (This is direct variation: k = 6.)" }
];
