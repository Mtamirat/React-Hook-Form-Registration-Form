import { useEffect } from "react";
import { useForm } from "react-hook-form";

function UserRegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors, isSubmitting, isValid },
  } = useForm({
    mode: "onChange",
    defaultValues: {
      fullName: "",
      email: "",
      password: "",
      confirmPassword: "",
      role: "",
      terms: false,
    },
  });

  const password = watch("password");
  const formValues = watch();

  // Load cached draft
  useEffect(() => {
    const savedData = localStorage.getItem("registrationDraft");

    if (savedData) {
      const parsedData = JSON.parse(savedData);

      Object.keys(parsedData).forEach((key) => {
        setValue(key, parsedData[key]);
      });
    }
  }, [setValue]);

  // Save draft automatically
  useEffect(() => {
    localStorage.setItem(
      "registrationDraft",
      JSON.stringify(formValues)
    );
  }, [formValues]);

  const onSubmit = async (data) => {
    console.log("Submitted:", data);

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    localStorage.removeItem("registrationDraft");

    reset();

    alert("Registration Successful!");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>User Registration Form</h2>

      {/* Full Name */}
      <div>
        <label>Full Name</label>
        <input
          autoFocus
          {...register("fullName", {
            required: "Full Name is required",
            minLength: {
              value: 3,
              message:
                "Full Name must be at least 3 characters",
            },
          })}
        />

        {errors.fullName && (
          <p>{errors.fullName.message}</p>
        )}
      </div>

      {/* Email */}
      <div>
        <label>Email Address</label>
        <input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value:
                /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
              message: "Enter a valid email address",
            },
          })}
        />

        {errors.email && (
          <p>{errors.email.message}</p>
        )}
      </div>

      {/* Password */}
      <div>
        <label>Password</label>
        <input
          type="password"
          {...register("password", {
            required: "Password is required",
            pattern: {
              value:
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/,
              message:
                "Password must contain uppercase, lowercase, number and be 8+ characters",
            },
          })}
        />

        {errors.password && (
          <p>{errors.password.message}</p>
        )}
      </div>

      {/* Confirm Password */}
      <div>
        <label>Confirm Password</label>
        <input
          type="password"
          {...register("confirmPassword", {
            required: "Confirm Password is required",
            validate: (value) =>
              value === password ||
              "Passwords do not match",
          })}
        />

        {errors.confirmPassword && (
          <p>{errors.confirmPassword.message}</p>
        )}
      </div>

      {/* Role */}
      <div>
        <label>Role / Account Type</label>

        <select
          {...register("role", {
            required: "Please select a role",
          })}
        >
          <option value="">
            Select a role...
          </option>
          <option value="Developer">
            Developer
          </option>
          <option value="Designer">
            Designer
          </option>
          <option value="Product Manager">
            Product Manager
          </option>
        </select>

        {errors.role && (
          <p>{errors.role.message}</p>
        )}
      </div>

      {/* Terms */}
      <div>
        <label>
          <input
            type="checkbox"
            {...register("terms", {
              required:
                "You must accept the Terms & Conditions",
            })}
          />
          Accept Terms & Conditions
        </label>

        {errors.terms && (
          <p>{errors.terms.message}</p>
        )}
      </div>

      <button
        type="submit"
        disabled={!isValid || isSubmitting}
      >
        {isSubmitting
          ? "Registering..."
          : "Register"}
      </button>
    </form>
  );
}

export default UserRegistrationForm;