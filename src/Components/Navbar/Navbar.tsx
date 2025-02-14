import { AppBar, MenuItem, styled, Toolbar,  } from "@mui/material"

const Navbar = () => {
    const Styledtoolbar = styled(Toolbar)(({ }) => ({
        display: "flex",
        justifyContent: "space-evenly",
    }))
    return (
        <>
            <AppBar position="absolute">
                <Styledtoolbar>
                    <MenuItem> About</MenuItem>
                    <MenuItem> Skills</MenuItem>
                    <MenuItem> Projects</MenuItem>
                </Styledtoolbar>
            </AppBar>

        </>
    )
}

export default Navbar
