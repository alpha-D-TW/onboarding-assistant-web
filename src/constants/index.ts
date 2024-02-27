
export enum QUESTION_TYPE {
    SIGNLE = 'SIGNLE',
    MULTIPLE = 'MULTIPLE',
    MIXED = 'MIXED'
}

export const QUESTION_TYPE_LABELS = {
  [QUESTION_TYPE.SIGNLE]: 'Single Choice',
  [QUESTION_TYPE.MULTIPLE]: 'Multiple Choice',
  [QUESTION_TYPE.MIXED]: 'Mixed',
}
