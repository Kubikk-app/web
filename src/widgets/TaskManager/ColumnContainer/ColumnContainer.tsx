import { SortableContext, useSortable } from "@dnd-kit/sortable"
import { CSS } from "@dnd-kit/utilities"
import { useMemo, useState } from "react"
import { PlusIcon } from "../icons/PlusIcon.tsx"
import { TrashIcon } from "../icons/TrashIcon.tsx"
import { Column, Id, Task } from "../types"
import { TaskCard } from "../TaskCard/TaskCard.tsx"
import styles from './ColumnContainer.module.css'

interface Props {
  column: Column
  deleteColumn: (id: Id) => void
  updateColumn: (id: Id, title: string) => void

  createTask: (columnId: Id) => void
  updateTask: (id: Id, content: string) => void
  deleteTask: (id: Id) => void
  tasks: Task[]
}

export const ColumnContainer =({
                           column,
                           deleteColumn,
                           updateColumn,
                           createTask,
                           tasks,
                           deleteTask,
                         }: Props) => {
  const [editMode, setEditMode] = useState(false)

  const tasksIds = useMemo(() => {
    return tasks.map((task) => task.id)
  }, [tasks])

  const {
    setNodeRef,
    attributes,
    listeners,
    transform,
    transition,
    isDragging,
  } = useSortable({
    id: column.id,
    data: {
      type: "Column",
      column,
    },
    disabled: editMode,
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
        className={styles.draggableDiv}
      ></div>
    )
  }

  return (
    <div
      ref={setNodeRef}
      style={style}
      className={styles.columnWrapper}
    >
      {/* Column title */}
      <div
        {...attributes}
        {...listeners}
        onClick={() => {
          setEditMode(true)
        }}
        className={styles.columnTitle}
      >
        <div className={styles.inputWrapper}>
          {!editMode && column.title}
          {editMode && (
            <input
              className={styles.inputStyles}
              value={column.title}
              onChange={(e) => updateColumn(column.id, e.target.value)}
              autoFocus
              onBlur={() => {
                setEditMode(false)
              }}
              onKeyDown={(e) => {
                if (e.key !== "Enter") return
                setEditMode(false)
              }}
            />
          )}
        </div>
        <button
          onClick={() => {
            deleteColumn(column.id)
          }}
          className={styles.trashIcon}
        >
          <TrashIcon />
        </button>
      </div>

      {/* Column task container */}
      <div className={styles.taskCardWrapper}>
        <SortableContext items={tasksIds}>
          {tasks.map((task) => (
            <TaskCard
              key={task.id}
              task={task}
              deleteTask={deleteTask}
            />
          ))}
        </SortableContext>
      </div>
      {/* Column footer */}
      <button
        className={styles.createTaskBtn}
        onClick={() => {
          createTask(column.id)
        }}
      >
        <PlusIcon />
        Добавить карточку
      </button>
    </div>
  )
}
