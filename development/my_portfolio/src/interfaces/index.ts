export interface NavSideI {
  gridTemplate?: string;
  background?: string;
  children: React.ReactNode;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}