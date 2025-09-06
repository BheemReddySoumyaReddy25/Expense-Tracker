import React from "react";
import { checkUser } from "@/lib/checkUser";

function NavBar() {
  const user = checkUser();
  return <div>NavBar</div>;
}

export default NavBar;
