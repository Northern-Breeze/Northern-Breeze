import * as React from "react";
import { GoogleAnalytics } from "nextjs-google-analytics";
import Meta from "../Meta";

type Props = {
    children: React.ReactNode
}

export default function Layout(props: Props) {
    const { children } = props;
    return (
        <>
            <Meta />
            <>{children}</>
            <GoogleAnalytics trackPageViews />
        </>
    );
}