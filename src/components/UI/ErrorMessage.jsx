import PropTypes from "prop-types";

const ErrorMessage = ({ onRetry }) => {
  return (
    <div className="text-red-600 bg-red-100 p-4 rounded-lg shadow-md">
      <p>Sorry, something went wrong while retrieving your response.</p>
      <button onClick={onRetry} className="mt-2 text-blue-600 underline">
        Retry
      </button>
    </div>
  );
};

ErrorMessage.propTypes = {
  onRetry: PropTypes.func.isRequired,
};

export default ErrorMessage;
