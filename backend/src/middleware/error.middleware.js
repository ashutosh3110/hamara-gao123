/**
 * Global Express Error Handler Middleware
 */
export const errorHandler = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  err.status = err.status || 'error';

  // Verbose response in development environment
  if (process.env.NODE_ENV === 'development') {
    console.error('SERVER_ERROR 💥:', err);
    return res.status(err.statusCode).json({
      status: err.status,
      error: err,
      message: err.message,
      stack: err.stack,
    });
  }

  // Production error responses
  if (err.isOperational) {
    // Trusted operational error: send message to client
    return res.status(err.statusCode).json({
      status: err.status,
      message: err.message,
    });
  }

  // Non-operational or unknown programming errors: mask details from client
  console.error('CRITICAL_SERVER_ERROR 💥:', err);
  return res.status(500).json({
    status: 'error',
    message: 'Something went wrong on the server. Please try again later.',
  });
};

export default errorHandler;
