import { MdEmail, MdSecurity } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { BsInfoSquareFill, BsFillPersonPlusFill } from "react-icons/bs";
import { IoMdSend, IoLogoBitcoin } from "react-icons/io";
import { ImCancelCircle, ImCheckboxChecked } from "react-icons/im";
import { AiFillWarning, AiOutlineNumber } from "react-icons/ai";
import genClass from "../../helpers/genClass";

const icons = {
  email: <MdEmail />,
  password: <RiLockPasswordFill />,
  name: <HiUserCircle />,
  account: <AiOutlineNumber />,
  balance: <IoLogoBitcoin />,
  info: <BsInfoSquareFill />,
  add: <BsFillPersonPlusFill />,
  send: <IoMdSend />,
  cancel: <ImCancelCircle />,
  shield: <MdSecurity />,
  warning: <AiFillWarning />,
  success: <ImCheckboxChecked />,
  none: ""
};

export default function Icon({ type, ps }) {
  const $ = genClass({ block: "icon", ps });
  return <div {...$()}>{icons[type]}</div>;
}
