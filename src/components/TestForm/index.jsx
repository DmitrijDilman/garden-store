import { useForm } from "react-hook-form";
// formik

export const TestForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const submitHandler = (data) => {
    console.log(data);
    console.log("SUBMIT!");
  };

  const test = register("userName", {
    required: "это поле обязательное",
    maxLength: {
      value: 10,
      message: "max 10 characters allower",
    },
    minLength: {
      value: 3,
      message: "user name should be more than 3 characters",
    },
  });

  console.log(test);

  const test2 = register("email", {
    required: "это поле обязательное",
    pattern: {
      value: "",
      message: "incorect email",
    },
  });

  // form >>>>> submit
  return (
  <form onSubmit={handleSubmit(submitHandler)}>
    <div>
      <input
        type="text"
        id="userName"
        {...register("userName", {
          required: "это поле обязательное",
          maxLength: {
            value: 10,
            message: "max 10 characters allowed"
          },
          minLength: {
            value: 3,
            message: "user name should be more than 3"
          }
        })}
      />
    </div>

    <div>
      <input type="email" id="email" />
    </div>

    <div>
      <input type="tel" id="tel" />
    </div>

      <button type="submit">ok</button>
    </form>
  );
};
