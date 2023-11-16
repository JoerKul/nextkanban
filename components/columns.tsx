import Column from './column';
import NewTodoDialog from './new-todo-dialog';

function Columns() {
  return (
    <>
      <NewTodoDialog />
      <section className='mt-10 sm:flex sm:gap-6 lg:gap-12 md'>
        <Column title='ToDo' status='TODO' />
        <Column title='In Progress' status='PROGRESS' />
        <Column title='Done' status='DONE' />
      </section>
    </>
  );
}

export default Columns;
