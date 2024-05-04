import { Navigate, Route, Routes } from "react-router-dom";
import { Container } from "./style";
import sidebar from "../utils/sidebar";
import Sidebar from "../components/Sidebar";

const Root = () => {
  return (
    <Container>
      <Routes>
        <Route element={<Sidebar />}>
          {sidebar.map((value) => {
            if (value.children?.length) {
              return value.children.map((child) => {
                const ChildElement = child.element;
                return (
                  <Route
                    key={child.id}
                    path={child.path}
                    element={<ChildElement />}
                  />
                );
              });
            } else {
              const Element = value.element;
              return (
                !value.hidden && (
                  <Route
                    key={value.id}
                    path={value.path}
                    element={<Element />}
                  />
                )
              );
            }
          })}
        </Route>

        {sidebar.map((value) => {
          const Element = value.element;
          return (
            value.hidden && (
              <Route key={value.id} path={value.path} element={<Element />} />
            )
          );
        })}

        <Route path="/login" element={<h1>login</h1>} />
        <Route path="/" element={<Navigate to={"/analitika"} />} />
        <Route path="*" element={<h1>404</h1>} />
      </Routes>
    </Container>
  );
};

export default Root;
