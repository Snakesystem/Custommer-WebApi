import React, { Component, ReactNode } from 'react';
import { Modal, Button } from 'react-bootstrap';

interface ErrorBoundaryProps {
    children: ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
    errorMessage: string | null;
    errorStack: string | null | undefined;
}

export default class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {
            hasError: false,
            errorMessage: null,
            errorStack: null,
        };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        // Update state to trigger the modal display
        return { hasError: true, errorMessage: error.message, errorStack: null };
    }

    componentDidCatch(error: Error, info: React.ErrorInfo): void {
        // Set both error message and stack trace to display in the modal
        this.setState({
            errorMessage: error.message,
            errorStack: info.componentStack,
        });
        console.error("Error caught by ErrorBoundary:", error, info);
    }

    reloadPage = () => {
        window.location.reload();
      };

    render() {
        if (this.state.hasError) {
            // Render modal with error details if there's an error
            return (
                <Modal
        show={this.state.hasError}
        size="xl"
        onHide={() => {}}
        backdrop="static"
        keyboard={false}
        className="error-boundary-modal"
      >
        <Modal.Header>
          <Modal.Title>S21 + Monitoring H2H Error Code</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className="error-message"><strong>Error Message:</strong> <span>{this.state.errorMessage}</span></p>
          <pre style={{ whiteSpace: 'pre-wrap' }}>
            <strong>Stack Trace:</strong> {this.state.errorStack}
          </pre>
        </Modal.Body>
        <Modal.Footer className='d-flex justify-content-center'>
          <Button className="w-100" variant="primary" onClick={this.reloadPage}>
            Reload Page
          </Button>
        </Modal.Footer>
      </Modal>
            );
        }

        // Render children components if no error
        return this.props.children;
    }
}
