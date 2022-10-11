import Image from 'next/image';
import { FC } from 'react';
import styles from './CatCard.module.css';

export interface ICatCardProps {
  title: string;
  author: string;
  description: string;
  tag: string;
}

const CardCat: FC<ICatCardProps> = ({ title, author, description, tag }) => {
  return (
    <div className={styles.container}>
      <div className={styles.headers}>
        <h4>{title}</h4>
        <span>{author}</span>
      </div>
      <div className={styles.body}>
        <Image
          src={'https://via.placeholder.com/150'}
          alt={'caat'}
          width={150}
          height={150}
          layout={'responsive'}
        />
      </div>
      <p className={styles.desc}>{description}</p>
      <span className={styles.tags}>{tag}</span>
    </div>
  );
};

export default CardCat;
