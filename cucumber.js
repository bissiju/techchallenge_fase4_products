let common = [
  'tests/bdd/features/**/*.feature',
  '--require-module ts-node/register', //typescript cucumber
  '--require ./tests/bdd/features/step_definitions/**/*.ts',
  '--format progress-bar',
  `--format-options '{"snippetInterface": "synchronous"}'`
].join(' ');

module.exports = {
  default: common
}
