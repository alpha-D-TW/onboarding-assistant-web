
export enum QUESTION_TYPE {
    SINGLE = 'SINGLE',
    MULTIPLE = 'MULTIPLE',
    MIXED = 'MIXED'
}

export const QUESTION_TYPE_LABELS = {
  [QUESTION_TYPE.SINGLE]: 'Single Choice',
  [QUESTION_TYPE.MULTIPLE]: 'Multiple Choice',
  [QUESTION_TYPE.MIXED]: 'Mixed',
}
