import './SideBar.css'

export const SideBar = (props: {drawerIsopen: boolean, drawerHandler:(handler:boolean) => void}) => {
    return (
        <nav className={props.drawerIsopen ? 'side-drawer open' : 'side-drawer'}>
            <h1 onClick={() => props.drawerHandler(false)}>Exit</h1>
        </nav>
    )
}
