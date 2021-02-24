exports.sendResponseData = (datas, res) => {
    console.log('printing response');
    console.log(datas);
    res.status(200).json({
        status: 200,
        error: false,
        message: 'success',
        data: datas
    });
}

exports.validationError = (message, next) => {
    console.error('validation error response called');
    const error = new Error(message);
    error.statusCode = 400;
    error.message = message;
    next(error);
}

exports.errorResponse = (error, next) => {
    console.error('error response called');
    // const error = new Error(err);
    error.statusCode = error.statusCode ? error.statusCode : 500,
        next(error);
}

exports.throwError = (statusCode, message) => {
    console.error('throw error called');
    console.error(message);
    const error = new Error(message);
    error.statusCode = statusCode;
    throw error;
}

exports.get404 = (req, res, next) => {
    res.status(404).json({status: 404,
        error: true,
        message: 'Path not found'});
  };