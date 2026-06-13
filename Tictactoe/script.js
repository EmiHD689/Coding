const wins = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const lineStyles = {
  "0,1,2": { top: "16.6%", left: "50%", rotate: "0deg" },
  "3,4,5": { top: "50%", left: "50%", rotate: "0deg" },
  "6,7,8": { top: "83.4%", left: "50%", rotate: "0deg" },
  "0,3,6": { top: "50%", left: "16.6%", rotate: "90deg" },
  "1,4,7": { top: "50%", left: "50%", rotate: "90deg" },
  "2,5,8": { top: "50%", left: "83.4%", rotate: "90deg" },
  "0,4,8": { top: "50%", left: "50%", rotate: "45deg" },
  "2,4,6": { top: "50%", left: "50%", rotate: "-45deg" },
};

const state = {
  board: Array(9).fill(""),
  turn: "X",
  mode: "single",
  locked: false,
  gameOver: false,
  muted: false,
  winningCombo: [],
  scores: JSON.parse(localStorage.getItem("emilioTttScores") || '{"X":0,"O":0,"D":0}'),
};

const cells = [...document.querySelectorAll(".cell")];
const modeButtons = [...document.querySelectorAll(".mode-button")];
const statusText = document.querySelector("#roundStatus");
const turnBadge = document.querySelector("#turnBadge");
const consoleText = document.querySelector("#consoleText");
const winLine = document.querySelector("#winLine");
const playerOLabel = document.querySelector("#playerOLabel");
const scoreX = document.querySelector("#scoreX");
const scoreO = document.querySelector("#scoreO");
const scoreDraw = document.querySelector("#scoreDraw");
const difficulty = document.querySelector("#difficulty");
const soundToggle = document.querySelector("#soundToggle");
const canvas = document.querySelector("#confettiCanvas");
const ctx = canvas.getContext("2d");

let confetti = [];

function resizeCanvas() {
  canvas.width = window.innerWidth * window.devicePixelRatio;
  canvas.height = window.innerHeight * window.devicePixelRatio;
  ctx.setTransform(window.devicePixelRatio, 0, 0, window.devicePixelRatio, 0, 0);
}

function saveScores() {
  localStorage.setItem("emilioTttScores", JSON.stringify(state.scores));
}

function renderScores() {
  scoreX.textContent = state.scores.X;
  scoreO.textContent = state.scores.O;
  scoreDraw.textContent = state.scores.D;
}

function tone(freq, duration = 0.08, type = "sine") {
  if (state.muted) return;
  const AudioContext = window.AudioContext || window.webkitAudioContext;
  if (!AudioContext) return;
  const audio = new AudioContext();
  const osc = audio.createOscillator();
  const gain = audio.createGain();
  osc.type = type;
  osc.frequency.value = freq;
  gain.gain.setValueAtTime(0.06, audio.currentTime);
  gain.gain.exponentialRampToValueAtTime(0.001, audio.currentTime + duration);
  osc.connect(gain);
  gain.connect(audio.destination);
  osc.start();
  osc.stop(audio.currentTime + duration);
}

function winnerOf(board) {
  for (const combo of wins) {
    const [a, b, c] = combo;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { player: board[a], combo };
    }
  }
  if (board.every(Boolean)) return { player: "D", combo: [] };
  return null;
}

function renderBoard() {
  cells.forEach((cell, index) => {
    const value = state.board[index];
    cell.textContent = value;
    cell.className = `cell ${value.toLowerCase()}`;
    if (state.winningCombo.includes(index)) cell.classList.add("win");
    cell.disabled = Boolean(value) || state.locked || state.gameOver;
    cell.setAttribute("aria-label", value ? `Feld ${index + 1}: ${value}` : `Feld ${index + 1}: leer`);
  });
}

function updateStatus(message) {
  if (message) statusText.textContent = message;
  turnBadge.textContent = state.turn === "X" ? "Player X" : state.mode === "single" ? "KI O" : "Player O";
  playerOLabel.textContent = state.mode === "single" ? "KI O" : "Player O";
  difficulty.disabled = state.mode !== "single";
}

function resetLine() {
  winLine.className = "win-line";
  winLine.style.width = "";
}

function showLine(combo) {
  const key = combo.join(",");
  const style = lineStyles[key];
  if (!style) return;
  winLine.style.top = style.top;
  winLine.style.left = style.left;
  winLine.style.transform = `translate(-50%, -50%) rotate(${style.rotate})`;
  requestAnimationFrame(() => winLine.classList.add("show"));
}

function finish(result) {
  state.gameOver = true;
  state.locked = false;
  if (result.player === "D") {
    state.scores.D += 1;
    updateStatus("Unentschieden. Das Board ist voll.");
    consoleText.textContent = "Draw. Direkt nochmal?";
    tone(220, 0.14, "triangle");
  } else {
    state.scores[result.player] += 1;
    state.winningCombo = result.combo;
    showLine(result.combo);
    updateStatus(`${result.player} gewinnt diese Runde`);
    consoleText.textContent = result.player === "X" ? "Starker Move. Player X holt den Punkt." : "O gewinnt. Revanche ist Pflicht.";
    burstConfetti();
    tone(660, 0.12, "square");
    setTimeout(() => tone(880, 0.14, "square"), 90);
  }
  saveScores();
  renderScores();
  renderBoard();
}

function makeMove(index, player) {
  if (state.board[index] || state.gameOver || state.locked) return false;
  state.board[index] = player;
  tone(player === "X" ? 430 : 330);
  const result = winnerOf(state.board);
  renderBoard();
  if (result) {
    finish(result);
    return true;
  }
  state.turn = player === "X" ? "O" : "X";
  updateStatus(`${state.turn} ist am Zug`);
  return true;
}

function availableMoves(board) {
  return board.map((value, index) => (value ? null : index)).filter((value) => value !== null);
}

function scoreBoard(board, depth) {
  const result = winnerOf(board);
  if (!result) return null;
  if (result.player === "O") return 10 - depth;
  if (result.player === "X") return depth - 10;
  return 0;
}

function minimax(board, player, depth = 0) {
  const score = scoreBoard(board, depth);
  if (score !== null) return { score };
  const moves = availableMoves(board);
  let best = player === "O" ? { score: -Infinity } : { score: Infinity };
  for (const move of moves) {
    board[move] = player;
    const result = minimax(board, player === "O" ? "X" : "O", depth + 1);
    board[move] = "";
    if (player === "O" ? result.score > best.score : result.score < best.score) {
      best = { score: result.score, move };
    }
  }
  return best;
}

function findTacticalMove(player) {
  for (const move of availableMoves(state.board)) {
    const copy = [...state.board];
    copy[move] = player;
    if (winnerOf(copy)?.player === player) return move;
  }
  return null;
}

function aiMove() {
  if (state.mode !== "single" || state.turn !== "O" || state.gameOver) return;
  state.locked = true;
  renderBoard();
  consoleText.textContent = "KI denkt...";
  setTimeout(() => {
    const moves = availableMoves(state.board);
    let move;
    if (difficulty.value === "easy") {
      move = moves[Math.floor(Math.random() * moves.length)];
    } else if (difficulty.value === "medium") {
      move = findTacticalMove("O") ?? findTacticalMove("X") ?? moves[Math.floor(Math.random() * moves.length)];
    } else {
      move = minimax([...state.board], "O").move;
    }
    state.locked = false;
    makeMove(move, "O");
    if (!state.gameOver) consoleText.textContent = "Dein Zug. Such dir ein sauberes Feld.";
  }, 420);
}

function handleCellClick(event) {
  const index = Number(event.currentTarget.dataset.index);
  if (!makeMove(index, state.turn)) return;
  if (state.mode === "single" && !state.gameOver) aiMove();
}

function newRound() {
  state.board = Array(9).fill("");
  state.turn = "X";
  state.locked = false;
  state.gameOver = false;
  state.winningCombo = [];
  resetLine();
  updateStatus("X ist am Zug");
  consoleText.textContent = state.mode === "single" ? "Bereit. Mach den ersten Move." : "Multiplayer aktiv. Player X startet.";
  renderBoard();
}

function setMode(mode) {
  state.mode = mode;
  modeButtons.forEach((button) => button.classList.toggle("active", button.dataset.mode === mode));
  newRound();
}

function resetScore() {
  state.scores = { X: 0, O: 0, D: 0 };
  saveScores();
  renderScores();
  consoleText.textContent = "Scoreboard ist wieder frisch.";
}

function burstConfetti() {
  confetti = Array.from({ length: 90 }, () => ({
    x: window.innerWidth / 2,
    y: window.innerHeight * 0.34,
    vx: (Math.random() - 0.5) * 10,
    vy: Math.random() * -9 - 3,
    size: Math.random() * 7 + 4,
    color: Math.random() > 0.5 ? "#54e6ff" : Math.random() > 0.5 ? "#ffcc55" : "#66ff9a",
    life: 90 + Math.random() * 30,
    rotate: Math.random() * Math.PI,
  }));
}

function animateConfetti() {
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  confetti = confetti.filter((piece) => piece.life > 0);
  for (const piece of confetti) {
    piece.x += piece.vx;
    piece.y += piece.vy;
    piece.vy += 0.22;
    piece.rotate += 0.18;
    piece.life -= 1;
    ctx.save();
    ctx.translate(piece.x, piece.y);
    ctx.rotate(piece.rotate);
    ctx.fillStyle = piece.color;
    ctx.fillRect(-piece.size / 2, -piece.size / 2, piece.size, piece.size * 0.58);
    ctx.restore();
  }
  requestAnimationFrame(animateConfetti);
}

cells.forEach((cell) => cell.addEventListener("click", handleCellClick));
modeButtons.forEach((button) => button.addEventListener("click", () => setMode(button.dataset.mode)));
document.querySelector("#newRound").addEventListener("click", newRound);
document.querySelector("#resetScore").addEventListener("click", resetScore);
soundToggle.addEventListener("click", () => {
  state.muted = !state.muted;
  soundToggle.classList.toggle("muted", state.muted);
});

window.addEventListener("resize", resizeCanvas);
resizeCanvas();
renderScores();
newRound();
animateConfetti();
