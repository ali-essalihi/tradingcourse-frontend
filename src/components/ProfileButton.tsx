import * as Menu from "@radix-ui/react-dropdown-menu";
import { User2 } from "lucide-react";
import { useUser } from "../contexts/user";
import { baseKy } from "../api";
import toast from "react-hot-toast";
import { useState } from "react";
import clsx from "clsx";

function MenuItem(props: Menu.DropdownMenuItemProps) {
  return (
    <Menu.Item
      {...props}
      className={clsx(
        "py-1.5 px-3 select-none cursor-pointer hover:bg-gray-700 focus:bg-gray-700 mt-2 rounded outline-none disabled:pointer-events-none disabled:opacity-50",
        props.className
      )}
    />
  );
}

function Trigger() {
  const { user, loading } = useUser();
  let avatar;
  if (loading) avatar = null;
  else if (!user || !user.picture) avatar = <User2 />;
  else avatar = <img src={user.picture} alt="Profile image" className="w-full rounded-full" />;
  return (
    <Menu.Trigger
      aria-label="Profile Menu"
      disabled={loading}
      className="w-12 h-12 rounded-full border-2 border-gray-700 p-0.5 flex items-center justify-center focus:border-white hover:border-white overflow-hidden focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
    >
      {avatar}
    </Menu.Trigger>
  );
}

function GoogleLoginButton() {
  const [loading, setLoading] = useState(false);

  function login() {
    setLoading(true);
    baseKy
      .get<{ url: string }>("auth/google/url", {
        searchParams: { next_url: window.location.pathname }
      })
      .json()
      .then(data => {
        window.location.href = data.url;
      })
      .catch(() => toast.error("Failed to initiate Google login."))
      .finally(() => setLoading(false));
  }

  return (
    <MenuItem onSelect={login} disabled={loading}>
      Login with Google
    </MenuItem>
  );
}

function LogoutButton() {
  const { logout } = useUser();
  return (
    <MenuItem onSelect={logout} className="text-red-400">
      Logout
    </MenuItem>
  );
}

function MenuContent() {
  const userState = useUser();

  return (
    <Menu.Content
      sideOffset={4}
      align="end"
      className="bg-gray-800 rounded border border-gray-700 p-2 shadow-lg"
    >
      <Menu.Label className="text-white/80 px-3 mb-2">
        ({userState.user ? userState.user.email : "Not connected"})
      </Menu.Label>
      <Menu.Separator className="h-px bg-gray-700" />
      {userState.user ? <LogoutButton /> : <GoogleLoginButton />}
    </Menu.Content>
  );
}

export default function ProfileButton() {
  return (
    <Menu.Root>
      <Trigger />
      <Menu.Portal>
        <MenuContent />
      </Menu.Portal>
    </Menu.Root>
  );
}
