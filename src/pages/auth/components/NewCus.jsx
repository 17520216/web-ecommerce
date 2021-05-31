import useFormValidate from "../../../core/ReactHook/useFormValidate";

export default function NewCus() {
  const { error, inputChange, onSubmit, form } = useFormValidate(
    {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmPassword: "",
    },
    {
      rule: {
        firstName: {
          required: true,
          pattern: "name",
        },
        lastName: {
          pattern: "name",
          required: true,
        },
        email: {
          required: true,
          pattern: "email",
        },
        password: {
          required: true,
          min: 6,
        },
        confirmPassword: {
          required: true,
        },
      },
    }
  );

  function handleSubmit(e) {
    e.preventDefault();
    let err = onSubmit();
    console.log(err);
    if (Object.keys(err).length === 0) {
      console.log("form", form);
    }
  }
  return (
    <div className="col-12 col-md-6">
      {/* Card */}
      <div className="card card-lg">
        <div className="card-body">
          {/* Heading */}
          <h6 className="mb-7">New Customer</h6>
          {/* Form */}
          <form>
            <div className="row">
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerFirstName">
                    First Name *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="registerFirstName"
                    type="text"
                    placeholder="First Name *"
                    name="firstName"
                    value={form.firstName}
                    onChange={inputChange}
                  />
                  {error && (
                    <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                      {error?.firstName}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerLastName">
                    Last Name *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="registerLastName"
                    type="text"
                    placeholder="Last Name *"
                    name="lastName"
                    value={form.lastName}
                    onChange={inputChange}
                  />
                  {error && (
                    <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                      {error?.lastName}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-12">
                {/* Email */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerEmail">
                    Email Address *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="registerEmail"
                    type="email"
                    placeholder="Email Address *"
                    name="email"
                    value={form.email}
                    onChange={inputChange}
                  />
                  {error && (
                    <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                      {error?.email}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerPassword">
                    Password *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="registerPassword"
                    type="password"
                    placeholder="Password *"
                    name="password"
                    value={form.password}
                    onChange={inputChange}
                  />
                  {error && (
                    <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                      {error?.password}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-6">
                {/* Password */}
                <div className="form-group">
                  <label className="sr-only" htmlFor="registerPasswordConfirm">
                    Confirm Password *
                  </label>
                  <input
                    className="form-control form-control-sm"
                    id="registerPasswordConfirm"
                    type="password"
                    placeholder="Confrm Password *"
                    name="confirmPassword"
                    value={form.confirmPassword}
                    onChange={inputChange}
                  />
                  {error && (
                    <p style={{ marginBottom: 15, color: "#e55d5d" }}>
                      {error?.confirmPassword}
                    </p>
                  )}
                </div>
              </div>
              <div className="col-12 col-md-auto">
                {/* Link */}
                <div className="form-group font-size-sm text-muted">
                  By registering your details, you agree with our Terms &amp;
                  Conditions, and Privacy and Cookie Policy.
                </div>
              </div>
              <div className="col-12 col-md">
                {/* Newsletter */}
                <div className="form-group">
                  <div className="custom-control custom-checkbox">
                    <input
                      className="custom-control-input"
                      id="registerNewsletter"
                      type="checkbox"
                    />
                    <label
                      className="custom-control-label"
                      htmlFor="registerNewsletter"
                    >
                      Sign me up for the Newsletter!
                    </label>
                  </div>
                </div>
              </div>
              <div className="col-12">
                {/* Button */}
                <button
                  onClick={handleSubmit}
                  className="btn btn-sm btn-dark"
                  type="submit"
                >
                  Register
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
