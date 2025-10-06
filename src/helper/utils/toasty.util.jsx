import { toast } from 'react-hot-toast';

const ToastContent = ({ t, message }) => (
  <span className='d-flex gap-8'>
    {message}
    <div>
      <div
        onClick={() => toast.dismiss(t.id)}
        className="toasty-wrap close-button"
        type="button"
      >
        <i className='ph ph-x'></i>
      </div>
    </div>
  </span>
);

const toasty = {
  success: (message, options = {}) => {
    toast.dismiss();
    toast.success(<ToastContent t={toast} message={message} />, {
      ...options,
      position: 'top-right',
      className: 'toasty-wrap success-toasty',
    });
  },
  error: (message, options = {}) => {
    toast.dismiss();
    toast.error(<ToastContent t={toast} message={message} />, {
      ...options,
   
      position: 'top-right',
      className: 'toasty-wrap error-toasty',
    });
  },
  info: (message, options = {}) => {
    toast.dismiss();
    toast(<ToastContent t={toast} message={message} />, {
      ...options,
      position: 'top-right',
      className: 'toasty-wrap info-toasty',
      icon: '',
    });
  },
  warning: (message, options = {}) => {
    toast.dismiss();
    toast(<ToastContent t={toast} message={message} />, {
      ...options,
      position: 'top-right',
      className: 'toasty-wrap warning-toasty',
      icon: '',
    });
  },
};

export default toasty;
