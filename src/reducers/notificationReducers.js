import moment from 'moment';
import img1 from '../img/user1.jpg';
import img2 from '../img/user2.jpg';

export default function () {
  return [
    {
      id: 1,
      name: 'Cliente 1',
      avatar: '',
      detail: 'Pagamento de mensalidade realizado com sucesso!',
      time: moment().startOf('day').fromNow().toLocaleString(),
      read: false
    },
    {
      id: 2,
      name: 'Cliente 2',
      avatar: img1,
      detail: 'Boleto em atraso!',
      time: moment().startOf('day').fromNow().toLocaleString(),
      read: true
    },
    {
      id: 3,
      icon: 'fa fa-star',
      detail: 'Our average rating goes up!',
      time: moment().startOf('day').fromNow().toLocaleString(),
      read: true,
      success: true
    },
    {
      id: 4,
      icon: 'fa fa-exclamation-triangle',
      detail: 'Server load is 95%, trying to reduce it!',
      time: moment().startOf('day').fromNow().toLocaleString(),
      read: true,
      warning: true
    },
  ]
}
