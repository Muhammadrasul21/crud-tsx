import { useDispatch, useSelector } from "react-redux";
import { updateUser } from "../redux/userSlice";
import { useState, ChangeEvent, FormEvent } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { RootState } from "../redux/store";

interface User {
  id: string;
  firstName: string;
  lastName: string;
  profession: string;
  birthDate: string;
  gender: string;
  bio: string;
}

const EditUser = () => {
  const { id } = useParams<{ id: string }>();
  const user = useSelector((state: RootState) =>
    state.users.users.find((u) => u.id === id),
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<User | null>(user || null);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (formData) {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (formData) {
      dispatch(updateUser(formData));
      navigate("/");
    }
  };

  if (!formData) {
    return <div className="text-center text-white">User not found</div>;
  }

  return (
    <div className="p-4 bg-inherit text-black flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold mb-4">Edit User</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col items-center gap-2 w-[800px]"
      >
        {[
          "firstName",
          "lastName",
          "profession",
          "birthDate",
          "gender",
          "bio",
        ].map((field) => (
          <input
            key={field}
            name={field}
            type="text"
            placeholder={field}
            value={(formData as any)[field]}
            className="inp bg-inherit border rounded-md w-full"
            onChange={handleChange}
            required
          />
        ))}
        <button
          type="submit"
          className="btn bg-blue-500 !text-white px-4 py-2 rounded active:bg-blue-700 transition duration-300 ease-in-out"
        >
          Update User
        </button>
      </form>
    </div>
  );
};

export default EditUser;
