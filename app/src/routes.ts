import { createBrowserRouter } from "react-router";
import App from "./App";
import Home from "./pages/Home";
import StudentList from "./components/StudentList";
import StudentDetail from "./components/StudentDetail";

export const routes = createBrowserRouter([
    {
        path: '/',
        Component: App,
        children: [
            {
                Component: Home,
                index: true
            },
            {
                path: '/students',
                Component: StudentList
            },
            {
                path: '/students/:id',
                Component: StudentDetail
            }
        ]
    }
]);