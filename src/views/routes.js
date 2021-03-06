import Display from "./Display";
import TodoList from "./TodoList";
import Color from "./Color";
import Table from "./Table";
// import Menu from "./views/Menu";
import UserManager from "./UserManager";
import Home from "./Home";
import NotFound from "./NotFound";

const routes = [
    {
        path: "/",
        exact: true,
        main: () => <Home />
    },
    {
        path: "/display",
        exact: false,
        main: ({ match }) => <Display match={match} />
    },
    {
        path: "/list",
        exact: false,
        main: () => <TodoList />
    },
    {
        path: "/manage",
        exact: false,
        main: () => <UserManager />
    },
    {
        path: "/table",
        exact: false,
        main: () => <Table />
    },
    {
        path: "/transcript",
        exact: false,
        main: () => <Home />
    },
    {
        path: "/color",
        exact: false,
        main: () => <Color />
    },
    {
        path: "/covid19",
        exact: false,
        main: () => <span></span>
    },
    {
        path: "/worldcup",
        exact: false,
        main: () => <span></span>
    },
    {
        path: "/blockchain",
        exact: false,
        main: () => <span></span>
    },
    {
        path: "/",
        exact: false,
        main: () => <NotFound/>
    },
];

export default routes;