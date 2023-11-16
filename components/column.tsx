'use client';
import { useEffect } from 'react';
import Task from './task';
import { Status, useTaskStore } from '@/lib/store';

type ColumnProps = {
  title: string;
  status: Status;
};

function Column({ title, status }: ColumnProps) {
  const tasks = useTaskStore((state) => state.tasks);
  const updateTask = useTaskStore((state) => state.updateTask);
  const dragTask = useTaskStore((state) => state.dragTask);
  const draggedTask = useTaskStore((state) => state.draggedTask);

  const filteredTasks = tasks.filter((task) => task.status === status);

  useEffect(() => {
    useTaskStore.persist.rehydrate();
  }, []);

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    if (draggedTask === null) return;
    updateTask(draggedTask, status);
    dragTask(null);
  };

  return (
    <section className='h-[600px] flex-1'>
      <h2 className='ml-1 font-serif text-2xl font-semibold'>{title}</h2>
      <div
        className='mt-3.5 h-full w-full flex-1 rounded-xl bg-gray-700/50 p-4'
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
      >
        <div className='flex flex-col gap-4'>
          {filteredTasks.map((task) => (
            <Task key={task.id} {...task} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Column;
