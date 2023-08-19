import styles from './CardModal.module.css';
import { Avatar, Input } from '@/shared/ui';

interface CardModalProps {
  title: string;
  description: string;
  whichColumn: string;
}


export const CardModal = (props: CardModalProps) => {
  const {
    title,
    description,
    whichColumn,
  } = props;



  return (
      <div className={styles.wrapper}>

        <div className={styles.header}>
          <h3>{title}</h3>
          <p>в колонке: {whichColumn}</p>
        </div>

        <div className={styles.main}>
          Описание

          <div className={styles.description}>
            <p>{description}</p>
          </div>
        </div>

        <div className={styles.commentSection}>
          Комментарии
          <div className={styles.avatarAndInputWrapper}>
            <Avatar src={'https://cdn4.iconfinder.com/data/icons/people-of-business/512/People_Business_woman_tie_shirt-1024.png'} size={'medium'}/>
            <Input/>
            <button>SEND</button>
          </div>
        </div>
        
      </div>
  )
}