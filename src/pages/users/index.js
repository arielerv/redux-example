import {useDispatch, useSelector} from 'react-redux';
import {selectLoading, selectUsers} from 'state/users/selector';
import {useEffect} from 'react';
import {requestUsers} from 'state/users/actions';

const Users = () => {
  const dispatch = useDispatch();
  const users = useSelector(selectUsers);
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(requestUsers());
  }, []);

  return (
    <div className="container">
      {isLoading && <p>Cargando</p>}
      {!isLoading && users && (
        <table className="styled-table">
          <caption>Listado de usuarios</caption>
          <thead>
            <tr>
              <td>Id</td>
              <td>Nombre</td>
              <td>Email</td>
            </tr>
          </thead>
          <tbody>
            {users.map(user => (
              <tr key={user.userId}>
                <td>{user.userId}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Users;
