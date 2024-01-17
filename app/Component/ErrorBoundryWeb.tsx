import React from 'react';
import Snackbar from '@mui/material/Snackbar';

class ErrorBoundaryWeb extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }
  
    componentDidCatch(error, errorInfo) {
      // You can also log the error to an error reporting service
    }
  
    render() {
      return <>
      <Snackbar
        open={this.state.hasError}
        message="Something went wrong!"
      />
      {this.props.children}
      </>
    }
  }

export default ErrorBoundaryWeb;