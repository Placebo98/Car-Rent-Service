import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <div>
      <h1>Раді вітати Вас у RentCars Україна</h1>
      <p>Найкращої подорожі з RentCars Україна!</p>
      <p>Натисни кнопку для переходу до каталогу </p>
      <Link to="/catalog">Go</Link>
    </div>
  );
};
