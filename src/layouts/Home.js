import { Outlet, Link } from "react-router-dom";
import ColorSchemesExample from "./Nav";
import 'bootstrap/dist/css/bootstrap.min.css';

const HomeLayout = () => {
  return (
    <>
    <ColorSchemesExample />

    <div id="content">
      <Outlet />
    </div>
    </>
  )
};

export default HomeLayout;
