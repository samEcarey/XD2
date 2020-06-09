// Resoource: https://alligator.io/react/react-router-map-to-routes/

const routes = [
	{
		path: "/",
		component: HomePage
	},
	{
		path: "/Teachers",
		component: TeacherListPage
	},
	{
		path: "/Teachers/:teacherId",
		component: TeacherPage
	},
	{
		path: "/Teachers/:teacherId/Classes",
		component: TaughtClassesPage
	} /* And so on. */
];


class App extends Component {
  render() {
    const routeComponents = routes.map(({path, component}, key) => <Route exact path={path} component={component} key={key} />);
    return (
      <BrowserRouter>
        {routeComponents}
      </BrowserRouter>
    );
  }
}