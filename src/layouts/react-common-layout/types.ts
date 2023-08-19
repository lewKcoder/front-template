import { FunctionComponent, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  hookName: string;
};

export type Component = FunctionComponent<Props>;
