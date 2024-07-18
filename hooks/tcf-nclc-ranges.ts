type ScoreRange = { min: number; max: number; nclcLevel: number }

const tcfListeningScoreRanges: ScoreRange[] = [
  { min: 331, max: 368, nclcLevel: 4 },
  { min: 369, max: 397, nclcLevel: 5 },
  { min: 398, max: 457, nclcLevel: 6 },
  { min: 458, max: 502, nclcLevel: 7 },
  { min: 503, max: 522, nclcLevel: 8 },
  { min: 523, max: 548, nclcLevel: 9 },
  { min: 549, max: 699, nclcLevel: 10 },
]

const tcfReadingScoreRanges: ScoreRange[] = [
  { min: 342, max: 374, nclcLevel: 4 },
  { min: 375, max: 405, nclcLevel: 5 },
  { min: 406, max: 452, nclcLevel: 6 },
  { min: 453, max: 498, nclcLevel: 7 },
  { min: 499, max: 523, nclcLevel: 8 },
  { min: 524, max: 548, nclcLevel: 9 },
  { min: 549, max: 699, nclcLevel: 10 },
]

const tcfSpeakingWritingScoreRanges: ScoreRange[] = [
  { min: 4, max: 5, nclcLevel: 4 },
  { min: 6, max: 6, nclcLevel: 5 },
  { min: 7, max: 9, nclcLevel: 6 },
  { min: 10, max: 11, nclcLevel: 7 },
  { min: 12, max: 13, nclcLevel: 8 },
  { min: 14, max: 15, nclcLevel: 9 },
  { min: 16, max: 20, nclcLevel: 10 },
]

const calculateNCLC = (score: number, scoreRanges: ScoreRange[]): number => {
  // Trouve la plage de score correspondante au score donné.
  const range = scoreRanges.find(({ min, max }) => score >= min && score <= max)
  // Retourne le niveau NCLC si une plage est trouvée, sinon retourne 10 par défaut.
  return range ? range.nclcLevel : 10
}

export const tcfListeningNCLC = (score: number): number =>
  calculateNCLC(score, tcfListeningScoreRanges)
export const tcfReadingNCLC = (score: number): number =>
  calculateNCLC(score, tcfReadingScoreRanges)
export const tcfSpeakingWritingNCLC = (score: number): number =>
  calculateNCLC(score, tcfSpeakingWritingScoreRanges)
