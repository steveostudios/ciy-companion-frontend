export interface IProgram {
  slug: string;
  title: {
    rendered: string;
  };
  acf: {
    start_date: string;
    end_date: string;
  };
}

export enum ProgramTypes {
  MIX = "mix",
  MOVE = "move",
  ENGAGE = "engage",
  SUPERSTART = "superstart",
  YMS = "yms",
}

export enum ProgramIds {
  MIX = 5,
  MOVE = 4,
  ENGAGE = 12,
}
