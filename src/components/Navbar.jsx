import { useSelector } from "react-redux";
import { CartIcon } from "../assets/icons";

const Navbar = () => {
  const { amount } = useSelector((state) => state.cart);
  return (
    <nav>
      <div className="nav-center">
        <h3>Store</h3>
        <div className="nav-container">
          <CartIcon />
          <div className="amount-container">
            <p className="amount">{amount}</p>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
