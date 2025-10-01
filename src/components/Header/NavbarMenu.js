import { AiOutlineMenu } from "react-icons/ai";
import { GiTwoCoins } from "react-icons/gi";
import { GrBasket } from "react-icons/gr";
import { RiGift2Line } from "react-icons/ri";
import { TbCirclePercentage } from "react-icons/tb";
import { TfiWallet } from "react-icons/tfi";

export default function NavbarMenu({classes}) {
  return (
    <nav>
      <ul className={`flex  text-sm ${classes}`}>
        <NavItem href="#" icon={AiOutlineMenu} label="دسته بندی محصولات" />
        <NavItem href="#" icon={TbCirclePercentage} label="تونل زمان" />
        <NavItem href="#" icon={GrBasket} label="خرید سازمانی" />
        <NavItem href="#" icon={RiGift2Line} label="کارت هدیه" />
        <NavItem href="#" icon={TfiWallet} label="خرید اقساطی" />
        <NavItem
          href="#"
          icon={GiTwoCoins}
          label={
            <span className="flex gap-2">
              <span>خرید طلای دیجیتال</span>
              <span className="bg-[#ffd6e8] !text-[#9f1853] !text-[12px] !leading-[18px] rounded-[25px] px-2 py-0 ">
                جدید
              </span>
            </span>
          }
        />
        <li>
          <a
            href="#"
            target="_blank"
            rel="noreferrer"
            className="!text-[#223c78]"
          >
            فروشنده شو
          </a>
        </li>
      </ul>
    </nav>
  );
}

function NavItem({ href, icon: Icon, label }) {
  return (
    <li>
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        className="flex items-center gap-2"
      >
        {Icon ? <Icon className="w-5 h-5 text-[#666]" /> : null}
        <span>{label}</span>
      </a>
    </li>
  );
}
