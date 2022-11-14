export const errorCheck = (value, type) => {
  switch (type) {
    case "text":
      if (!value.match(/[a-z]/)) {
        return "Invalid format";
      }

      break;

    case "email":
      if (
        !value.match(
          /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
      ) {
        return "Invalid email";
      }
      break;

    case "password":
      // validate it has one lower case letter
      if (!value.match(/[a-z]/)) {
        return "Password must have at least one lower case letter";
      }
      // validate it has one upper case letter
      if (!value.match(/[A-Z]/)) {
        return "Password must have at least one upper case letter";
      }
      // validate it has one number
      if (!value.match(/[0-9]/)) {
        return "Password must have at least one number";
      }
      break;

    default:
      console.log("SOMETHING GOES WRONG");
  }
};
