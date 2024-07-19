type ScoreRange = { min: number; max: number; clbLevel: number }

const ieltsListeningScoreRanges: ScoreRange[] = [
  { min: 1, max: 4.5, clbLevel: 4 },
  { min: 5, max: 5, clbLevel: 5 },
  { min: 5.5, max: 5.5, clbLevel: 6 },
  { min: 6, max: 7, clbLevel: 7 },
  { min: 7.5, max: 7.5, clbLevel: 8 },
  { min: 8, max: 8, clbLevel: 9 },
  { min: 8.5, max: 9, clbLevel: 10 },
]

const ieltsReadingScoreRanges: ScoreRange[] = [
  { min: 1, max: 3.5, clbLevel: 4 },
  { min: 4, max: 4.5, clbLevel: 5 },
  { min: 5, max: 5.5, clbLevel: 6 },
  { min: 6, max: 6, clbLevel: 7 },
  { min: 6.5, max: 6.5, clbLevel: 8 },
  { min: 7, max: 7.5, clbLevel: 9 },
  { min: 8, max: 9, clbLevel: 10 },
]

const ieltsSpeakingWritingScoreRanges: ScoreRange[] = [
  { min: 1, max: 4.5, clbLevel: 4 },
  { min: 5, max: 5, clbLevel: 5 },
  { min: 5.5, max: 5.5, clbLevel: 6 },
  { min: 6, max: 6, clbLevel: 7 },
  { min: 6.5, max: 6.5, clbLevel: 8 },
  { min: 7, max: 7, clbLevel: 9 },
  { min: 7.5, max: 9, clbLevel: 10 },
]

const calculateCLB = (score: number, scoreRanges: ScoreRange[]): number => {
  // Trouve la plage de score correspondante au score donné.
  const range = scoreRanges.find(({ min, max }) => score >= min && score <= max)
  // Retourne le niveau CLB si une plage est trouvée, sinon retourne 9 par défaut.
  return range ? range.clbLevel : 9
}

export const ieltsListeningCLB = (score: number): number =>
  calculateCLB(score, ieltsListeningScoreRanges)
export const ieltsReadingCLB = (score: number): number =>
  calculateCLB(score, ieltsReadingScoreRanges)
export const ieltsSpeakingWritingCLB = (score: number): number =>
  calculateCLB(score, ieltsSpeakingWritingScoreRanges)
