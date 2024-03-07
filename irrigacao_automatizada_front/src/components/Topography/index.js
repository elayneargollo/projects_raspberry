import * as React from "react";
import Typography from "@material-ui/core/Typography";

export default function Topography({ titulo }) {


    return (
        <Typography component="h1" variant="h5" style={{ color: '#006750' }}>
            {titulo}
        </Typography>
    );
}
