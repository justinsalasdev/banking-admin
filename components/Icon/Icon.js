import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineNumber } from "react-icons/ai";
import { IoLogoBitcoin } from "react-icons/io";
import { BsInfoSquareFill } from "react-icons/bs";
import { BsFillPersonPlusFill } from "react-icons/bs";
import { IoMdSend } from "react-icons/io";
import { ImCancelCircle } from "react-icons/im";
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
  none: ""
};

export default function Icon({ type, ps }) {
  const $ = genClass({ block: "icon", ps });
  return <div {...$()}>{icons[type]}</div>;
}
