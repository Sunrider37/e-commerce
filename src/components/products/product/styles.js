import { makeStyles } from "@material-ui/core";

export default makeStyles(() => ({
    root: {
        maxWidth: '100%',
    },
    media: {
        height: 300,
        objectFit: 'contain'
    },
    cardActions:{
        display: 'flex',
        justifyContent: 'flex-end'
    },
    cardContent: {
        display: 'flex',
        justifyContent: 'space-around'
    }
}))

