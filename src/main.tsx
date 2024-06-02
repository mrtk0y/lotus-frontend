import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./styles/index.scss";
import "./styles/helper.scss";
import ReactQueryContext from "./layout/QueryProvider.tsx";

// biome-ignore lint/style/noNonNullAssertion: <explanation>
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ReactQueryContext>
			<App />
		</ReactQueryContext>
	</React.StrictMode>,
);
