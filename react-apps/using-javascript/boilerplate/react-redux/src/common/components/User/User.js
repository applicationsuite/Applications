import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { loadUsers } from "./User.actions";
import "./User.css";

export const User = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userData);

  React.useEffect(() => {
    dispatch(loadUsers());
  }, [dispatch]);

  return (
    <div className="table-responsive user-table">
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">User Type</th>
            <th scope="col">Is Admin</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {users &&
            users.map((user, index) => {
              return (
                <tr key={index}>
                  <td>{user.login}</td>
                  <td>{user.type}</td>
                  <td>{user.site_admin}</td>
                  <td>
                    <div className="d-grid gap-2 d-md-block">
                      <button className="btn btn-primary" type="button">
                        Edit
                      </button>
                      <button className="btn btn-primary" type="button">
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
};
