export type FlexDirection = 'row' | 'column';

export type FlexJustify =
  | 'start'
  | 'center'
  | 'end'
  | 'between'
  | 'around'
  | 'evenly';

export type FlexAlign = 'start' | 'center' | 'end' | 'stretch';

export interface FlexOptions {
  direction?: FlexDirection;
  justify?: FlexJustify;
  align?: FlexAlign;
  customStyles?: { [key: string]: string };
}
