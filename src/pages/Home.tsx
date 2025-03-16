import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../redux/userSlice";
import { Link } from "react-router-dom";
import { RootState } from "../redux/store";
import { User } from "../redux/userSlice";

const Home = () => {
  const users = useSelector((state: RootState) => state.users.users);
  const dispatch = useDispatch();

  return (
    <div className="flex flex-col items-center gap-4 wrapper">
      <Link
        to="/create"
        className="btn mt bg-green-500 !text-white px-4 py-2 rounded mb-4 inline-block active:bg-green-600 duration-300 ease-in-out"
      >
        Add Book
      </Link>
      <table className="w-full border-collapse border bg-inherit text-white text-center">
        <thead>
          <tr className="border border-gray-600 p-2">
            {[
              "Title",
              "Description",
              "Price",
              "Discount",
              "Author",
              "Actions",
            ].map((head) => (
              <th key={head} className="border border-white p-2">
                {head}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {users.map((user: User) => (
            <tr key={user.id} className="odd:bg-inherit even:bg-inherit">
              <td className="border border-gray-500 p-2">{user.title}</td>
              <td className="border border-gray-500 p-2">{user.description}</td>
              <td className="border border-gray-500 p-2">${user.price}</td>
              <td className="border border-gray-500 p-2">{user.discount}$</td>
              <td className="border border-gray-500 p-2">{user.author}</td>
              <td className="flex items-center justify-center gap-2 border border-gray-500 p-2">
                <Link
                  to={`/edit/${user.id}`}
                  className="edit bg-yellow-500 !text-white rounded p-1 px-3"
                >
                  Edit
                </Link>
                <button
                  className="edit bg-red-500 !text-white rounded p-1 px-3"
                  onClick={() => dispatch(deleteUser(user.id))}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Home;
