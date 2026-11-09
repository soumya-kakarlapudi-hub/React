import {useRouteError} from 'react-router';

const Error = () => {
  const error = useRouteError();
  return (
    <div>
      <h4>Oops! Something went wrong</h4>
      <h4>{error.status}</h4>
    </div>
  )
};

export default Error;
