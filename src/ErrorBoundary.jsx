import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
    return { hasError: true };
  }

  /*
    componentDidCatch(error, errorInfo) {
      // Vous pouvez aussi enregistrer l'erreur au sein d'un service de rapport.
      // logErrorToMyService(error, errorInfo);
    }
    */

  render() {
    const { children } = this.props;
    const { hasError } = this.state;
    if (hasError) {
      // Vous pouvez afficher n'importe quelle UI de repli.
      return (
        <div>
          <h1>Oups! Something went wrong...</h1>
        </div>
      );
    }

    return children;
  }
}

ErrorBoundary.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ErrorBoundary;
