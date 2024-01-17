import React from 'react';
import Toast from 'react-native-toast-message';

class ErrorBoundary extends React.Component {
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

    componentDidUpdate(prevProps, prevState) {
        if (this.state.hasError !== prevState.hasError && this.state.hasError) {
          Toast.show({
            type: 'error',
            text1: 'Error',
            text2: 'Something went wrong!'
          })
        }
    }
  
    render() {
      return this.props.children; 
    }
  }

export default ErrorBoundary;