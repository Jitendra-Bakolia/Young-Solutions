import { useEffect } from 'react';

import Routes from './routes'
import ErrorBoundary from './ErrorBoundary'
import { Toaster } from 'react-hot-toast';

//& Not using Redux for now ...
// import { Provider } from 'react-redux';
// import store from './store';

function App() {
  
  useEffect(() => {
    // Load CSS files from public/vendor
    const cssFiles = [
      '/vendor/bootstrap/css/bootstrap.min.css',
      '/vendor/bootstrap-icons/bootstrap-icons.css',
      '/vendor/aos/aos.css',
      '/vendor/glightbox/css/glightbox.min.css',
      '/vendor/swiper/swiper-bundle.min.css',
      '/css/main.css'
    ];

    cssFiles.forEach(href => {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = href;
      document.head.appendChild(link);
    });

    // Load JS files from public/vendor
    const jsFiles = [
      '/vendor/bootstrap/js/bootstrap.bundle.min.js',
      '/vendor/aos/aos.js',
      '/vendor/glightbox/js/glightbox.min.js',
      '/vendor/purecounter/purecounter_vanilla.js',
      '/vendor/swiper/swiper-bundle.min.js',
      '/vendor/imagesloaded/imagesloaded.pkgd.min.js',
      '/vendor/isotope-layout/isotope.pkgd.min.js',
      '/js/main.js'
    ];

    const loadScript = (src) => {
      return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = reject;
        document.body.appendChild(script);
      });
    };

    // Load scripts sequentially
    jsFiles.reduce((promise, src) => {
      return promise.then(() => loadScript(src)).catch(err => {
        console.warn(`Failed to load script: ${src}`, err);
      });
    }, Promise.resolve());

    // Cleanup function
    return () => {
      // Remove added CSS links
      cssFiles.forEach(href => {
        const link = document.querySelector(`link[href="${href}"]`);
        if (link) {
          document.head.removeChild(link);
        }
      });
    };
  }, []);

  return (
    <ErrorBoundary>
      {/* <Provider store={store}> */}
        <Routes />
        <Toaster position="top-right" />
      {/* </Provider> */}
    </ErrorBoundary>
  )
}

export default App