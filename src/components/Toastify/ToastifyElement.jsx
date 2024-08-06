import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
 

export const ToastifyElement = async (type,message,error) => {
  switch (type) {
    case 'success':
      toast.success(message, {
        position: 'top-right',
        autoClose: 3000,
        closeOnClick: true,
        theme: 'light',
        draggable: true,
      });
      break;
    case 'error':
      toast.error(message, {
        position: 'top-right',
        autoClose: 5000,
        theme: 'light',
        draggable: true,
        onClick: () => {
          window.open(`mailto:gabriel14contato@gmail.com?subject=${encodeURIComponent('Erro do Website - Sales IR')}&body=${encodeURIComponent(error ? `Detalhes do erro:\n${error}` : 'Sem detalhes disponíveis.')}`);
        }
      });
      break;
    default:
      toast.info(message, {
        position: 'top-right',
        autoClose: 5000,
        closeOnClick: true,
        theme: 'light',
        style: {
          borderRadius: '0.75rem',
          fontWeight: '500',
        }
      });
  }
};
