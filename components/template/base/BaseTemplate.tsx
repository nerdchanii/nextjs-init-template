import { FC } from 'react';

export interface IBaseTemplateProps {
  title: string;
}

const BaseTemplate: FC<IBaseTemplateProps> = ({
  title,
}: IBaseTemplateProps) => {
  return (
    <div>
      <h1>{title}</h1>
    </div>
  );
};

export default BaseTemplate;
