import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";
import { HiUserCircle } from "react-icons/hi";
import { AiOutlineNumber } from "react-icons/ai";
import { IoLogoBitcoin } from "react-icons/io";
import genClass from "../../helpers/genClass";

const icons = {
  email: <MdEmail />,
  password: <RiLockPasswordFill />,
  name: <HiUserCircle />,
  account: <AiOutlineNumber />,
  balance: <IoLogoBitcoin />
};

export default function Icon({ type, ps }) {
  const $ = genClass({ block: "icon", ps });
  return <div {...$()}>{icons[type]}</div>;
}
