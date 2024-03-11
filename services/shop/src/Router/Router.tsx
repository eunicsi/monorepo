import App from "@/components/App";
import { LazyShop } from "@/pages/Shop/Shop.lazy";
import { Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

const routes = [
	{
		path: "/shop",
		element: <App />,
		children: [
			{
				path: "/shop/main",
				element: (
					<Suspense fallback="...loading">
						<LazyShop />
					</Suspense>
				),
			},
			{
				path: "/shop/second",
				element: <div>second</div>,
			},
		],
	},
];

export const router = createBrowserRouter(routes);

export default routes;
