type ScoreRange = { min: number; max: number; nclcLevel: number }

const tefListeningScoreRanges: ScoreRange[] = [
  { min: 145, max: 180, nclcLevel: 4 },
  { min: 181, max: 216, nclcLevel: 5 },
  { min: 217, max: 248, nclcLevel: 6 },
  { min: 249, max: 279, nclcLevel: 7 },
  { min: 280, max: 297, nclcLevel: 8 },
  { min: 298, max: 315, nclcLevel: 9 },
  { min: 316, max: 360, nclcLevel: 10 },
]

const tefReadingScoreRanges: ScoreRange[] = [
  { min: 121, max: 150, nclcLevel: 4 },
  { min: 151, max: 180, nclcLevel: 5 },
  { min: 181, max: 206, nclcLevel: 6 },
  { min: 207, max: 232, nclcLevel: 7 },
  { min: 233, max: 247, nclcLevel: 8 },
  { min: 248, max: 262, nclcLevel: 9 },
  { min: 263, max: 300, nclcLevel: 10 },
]

const tefSpeakingWritingScoreRanges: ScoreRange[] = [
  { min: 181, max: 225, nclcLevel: 4 },
  { min: 226, max: 270, nclcLevel: 5 },
  { min: 271, max: 309, nclcLevel: 6 },
  { min: 310, max: 348, nclcLevel: 7 },
  { min: 349, max: 370, nclcLevel: 8 },
  { min: 371, max: 392, nclcLevel: 9 },
  { min: 393, max: 450, nclcLevel: 10 },
]

const calculateNCLC = (score: number, scoreRanges: ScoreRange[]): number => {
  // Trouve la plage de score correspondante au score donné.
  const range = scoreRanges.find(({ min, max }) => score >= min && score <= max)
  // Retourne le niveau NCLC si une plage est trouvée, sinon retourne 9 par défaut.
  return range ? range.nclcLevel : 9
}

export const tefListeningNCLC = (score: number): number =>
  calculateNCLC(score, tefListeningScoreRanges)
export const tefReadingNCLC = (score: number): number =>
  calculateNCLC(score, tefReadingScoreRanges)
export const tefSpeakingWritingNCLC = (score: number): number =>
  calculateNCLC(score, tefSpeakingWritingScoreRanges)
