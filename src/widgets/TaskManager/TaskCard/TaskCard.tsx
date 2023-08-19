import { useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { useState, useCallback } from "react"
import { TrashIcon } from "../icons/TrashIcon.tsx"
import { Id, IMockData, Task } from '../types.ts';
import styles from './TaskCard.module.css'
import { PenIcon } from '@/widgets/TaskManager/icons/PenIcon.tsx';
import { Modal } from '@/shared/ui/Modal/Modal.tsx';
import { CardModal } from '@/widgets/TaskManager/CardModal/CardModal.tsx';



const taskMockData: IMockData = {
  title: 'Создать элемент для создания форм',
  description: 'делать на примере bootstrap-элемента “form-group“ или mui-элемента FormControl',
  members: 'John',
  whichColumn: 'TODO'
}

interface Props {
  task: Task
  deleteTask: (id: Id) => void
}

export const TaskCard = ({ task, deleteTask }: Props) => {
  const [mouseIsOver, setMouseIsOver] = useState(false)
  const [isCardModal, setIsCardModal] = useState(false);

  const onCloseModal = useCallback(() => {
    setIsCardModal(false);
  }, []);

  const onShowModal = useCallback(() => {
    setIsCardModal(true);
  }, []);

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: task.id,
    data: {
      type: "Task",
      task,
    }
  })

  const style = {
    transition,
    transform: CSS.Transform.toString(transform),
  }

  if (isDragging) {
    return (
      <div
        ref={setNodeRef}
        style={style}
        className={styles.dragCard}
      />
    )
  }

  return (
    <div
      ref={setNodeRef} style={style} {...attributes} {...listeners}
      className={styles.cardStyles}
      onMouseEnter={() => {
        setMouseIsOver(true)
      }}
      onMouseLeave={() => {
        setMouseIsOver(false)
      }}
    >
      <p className={styles.cardTextP}>
        {task.content}
      </p>

      {mouseIsOver && (
        <button
          onClick={() => {
            deleteTask(task.id)
          }}
          className={styles.trashButtonStyles}
        >
          <TrashIcon />
        </button>
      )}

      {mouseIsOver && (
        <button
          onClick={() => {
            onShowModal()
          }}
          className={styles.penButtonStyles}
        >
          <PenIcon />
        </button>
      )}

      {isCardModal && (
        <Modal isOpen={isCardModal} onClose={onCloseModal} >
            <CardModal {...taskMockData}/>
        </Modal>
      )}
    </div>
  )
}
