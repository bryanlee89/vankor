export default (values) => {
  const errors = {};
  if (!values.title) {
    errors.title = "Required";
  } else if (values.title.length > 30) {
    errors.title = "Must be 30 characters or less";
  }
  if (!values.description) {
    errors.description = "Required";
  }
  if (values.postType === "Option" || !values.postType) {
    errors.postType = "Choose a option";
  }
  if (!values.location) {
    errors.location = "Required";
  } else if (values.location.length > 15) {
    errors.location = "Must be 15 characters or less";
  }
  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }
  return errors;
};
