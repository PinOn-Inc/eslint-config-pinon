const l = require('luxon');
const Repl = require('repl');

const colors = {
  RED: '31',
  GREEN: '32',
  YELLOW: '33',
  BLUE: '34',
  MAGENTA: '35',
};
const colorize = (color, s) => `\x1b[${color}m${s}\x1b[0m`;
const a = (a) => a;

const nodeVersion = colorize(colors.GREEN, `${process.title} ${process.version}`);
const prompt = `${nodeVersion} → `;

const repl = Repl.start({ prompt });

repl.context.l = l;
