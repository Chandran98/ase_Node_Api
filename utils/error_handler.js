// class AppError extends Error {
//   constructor(message, statuscode) {
//     super(message);

//     this.statuscode = statuscode;
//     this.status = `${statuscode}`.startsWith("4") ? "fail" : "error";
//     this.operational = true;

//     Error.captureStackTrace(this, this.constructor);
//   }
// }


class AppError extends Error {
  constructor(message, statusCode) {
    super(message);

    this.statusCode = statusCode;
    this.status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.operational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}


module.exports = AppError;