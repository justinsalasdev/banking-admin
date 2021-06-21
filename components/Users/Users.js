import genClass from "../../helpers/genClass";
import Link from "next/link";
import { useRouter } from "next/router";
import Icon from "../Icon/Icon";

export default function Users({ users, ps }) {
  const router = useRouter();
  const $ = genClass({ block: "users", ps });
  return (
    <div {...$()}>
      <div {...$("bar")}>
        <Link href="/users/new">
          <a>
            <Icon type="add" />
          </a>
        </Link>
      </div>
      <ul {...$("list")}>
        {users.map(user => (
          <li
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
          </li>
        ))}
      </ul>
    </div>
  );
}
