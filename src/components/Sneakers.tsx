import { FC } from 'react';

type PropsType = {
  sneakers: SneakerType[];
  children?: React.ReactNode;
};

type SneakerType = {
  id: number;
  title: string;
  isDone: boolean;
};

export const Sneakers: FC<PropsType> = ({
  sneakers,
  children,
  ...restProps
}) => {
  return (
    <div>
      <ul>
        {sneakers.map(sneaker => (
          <li key={sneaker.id}>
            {sneaker.title} - {sneaker.isDone ? 'DONE' : 'NOT DONE'}
          </li>
        ))}
      </ul>
      {children}
    </div>
  );
};
