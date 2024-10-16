// import { Link } from 'react-router-dom';
import { ToDo } from '../../models/todo-item';
import classes from './ListItem.module.scss';

export const ListItem = ({ todo }: { todo: ToDo }) => {
    return (
        <a
            className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
            target="_blank"
            rel="noreferrer"
            href={`/list/${todo.id}`}
        >
            {todo.text}
        </a>
    );
};
// export const ListItem = ({ todo }: { todo: ToDo }) => {
//     return (
//         <Link
//             className={`${classes.link} ${todo.isDone ? classes.done : classes.notDone}`}
//             to={`/list/${todo.id}`}
//         >
//             {todo.text}
//         </Link>
//     );
// };
