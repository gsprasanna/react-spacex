import React from "react";
import { RouterProvider } from "react-router-dom";

const RoutesCombiner = ({
    routes,
}) => {
    return (
        <RouterProvider router={routes} />
    );
};

export default RoutesCombiner;
