import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppDispatch } from "../redux/store";

interface FormData {
  firstName: string;
  lastName: string;
  profession: string;
  birthDate: string;
  gender: string;
  bio: string;
}

const CreateUser: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();

  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    profession: "",
    birthDate: "",
    gender: "",
    bio: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addUser(formData));
    navigate("/");
  };

  return (
    <div className="p-4 bg-inherit text-black flex flex-col justify-center items-center gap-4">
      <h1 className="text-2xl font-bold mb-4">Create User</h1>
      <form
        onSubmit={handleSubmit}
        className="space-y-4 flex flex-col items-center gap-2 w-[800px]"
      >
        {["firstName", "lastName", "profession", "birthDate", "gender", "bio"].map((field) => (
          <input
            key={field}
            name={field}
            type="text"
            placeholder={field}
            className="inp bg-inherit border rounded-md w-full"
            onChange={handleChange}
            required
          />
        ))}
        <div>
          <button
            type="submit"
            className="btn bg-green-500 !text-white p-2 rounded mb-4 mt-10 active:bg-green-600 transition duration-300 ease-in-out"
          >
            Add User
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
