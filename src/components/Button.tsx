import { FC } from 'react';
import s from './Button.module.css';

type PropsType = {
  onClick: () => void;
  children: React.ReactNode;
  color?: string;
  disabled?: boolean;
};

export const Button: FC<PropsType> = ({
  onClick,
  children,
  color,
  disabled,
  ...restProps
}) => {
  const onClickHandler = () => {
    onClick();
  };

  const finalClassName = `${s.button} ${color ? s[color] : s.default} ${
    disabled ? s.disabled : ''
  }`;

  return (
    <button className={finalClassName} onClick={onClickHandler}>
      {children}
    </button>
  );
};

// ---------------------------------------
// import { FC } from 'react';

// type PropsType = {
//   name: string;
//   onClick: () => void;
// };

// export const Button: FC<PropsType> = ({ name, onClick }) => {
//   const onClickHandler = () => {
//     onClick();
//   };
//   return <button onClick={onClickHandler}>{name}</button>;
// };
