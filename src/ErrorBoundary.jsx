import React, { Component } from 'react'

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    render() {
        if (this.state.hasError) {
            return <div className="p-5w-100 h-100min flex-center flex-column text-wrap">
                <div className='d-flex flex-column text-center'>
                    <h1 className="p-3">⚠️</h1>
                    <h1 className="p-3">Oops! Something Went Wrong </h1>
                 </div>
                <p className="px-5 py-3 text-center">Uh-oh, something went wrong, and our team of over-engineers is already knee-deep in code, tracing the issue with their trusty magnifying glasses.</p>
                <p className="px-3 py-1 text-center">Here’s what you can do in the meantime:</p>
                <p className="px-3 py-1 text-center">1. Refresh the page—it’s the digital equivalent of turning it off and on again.</p>
                <p className="px-3 py-1 text-center">2. Clear your cache and cookies—because sometimes the smallest crumbs cause the biggest mess.</p>
                <p className="px-3 py-1 text-center">3. Check your connection—a weak signal might be playing tricks on us.</p>
                <div className='p-5' >
                    <a href='/' className='fu-btn fu-btn--primary fu-btn-md'>Home Page</a>
                </div>
                {import.meta.env.APP_ENV === 'development' && <div>
                    <pre className="text-wrap text-center">
                        {this.state?.error?.stack}
                    </pre>
                </div>}

            </div>
            ;
        }
        return this.props.children;
    }
}

export default ErrorBoundary