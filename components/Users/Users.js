import genClass from "../../helpers/genClass";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "../Icon/Icon";
import { motion } from "framer-motion";
import { itemVars, listVars, tableVars } from "./variants";

export default function Users({ users, ps }) {
  const router = useRouter();
  const $ = genClass({ block: "users", ps });

  return (
    <motion.div variants={tableVars} initial="hidden" animate="shown" {...$()}>
      <div {...$("bar")}>
        <Link href="/users/new">
          <a>
            <Icon type="add" />
          </a>
        </Link>
      </div>
      <motion.ul variants={listVars} {...$("list")}>
        {users?.map(user => (
          <motion.li
            variants={itemVars}
            whileTap="tap"
            {...$("user")}
            key={user.uid}
            onClick={() => {
              router.push(`/users/${user.uid}`);
            }}
          >
            <div className="name">{user.name}</div>
            <div className="email">{user.email}</div>
            <div className="link">
              <Icon type="info" />
            </div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
