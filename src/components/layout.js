import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { RiMenu5Fill, RiCloseFill } from 'react-icons/ri'

const Layout = ({ pageTitle, children }) => {
    const [isOpen, setOpen] = React.useState(false)
    const menuItem = [
        { name: 'Blogs', link: '/blogs' },
        { name: 'Projects', link: '/projects' },
    ]
    const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

    return (
        <div>
            <title>{pageTitle} | {data.site.siteMetadata.title}</title>
            <nav className="flex flex-col space-y-1 bg-space-indigo  px-6 py-3 space-x-4 mb-5 md:flex-row md:items-center text-white">
                <div className="flex space-x-3 items-center">
                    <button type="button" className="hover:bg-indigo-300 rounded-sm md:hidden" onClick={() => setOpen(oldState => !oldState)}>
                        {isOpen ? <RiCloseFill className="m-1 w-4 h-4" /> : <RiMenu5Fill className="m-1 w-4 h-4" />}
                    </button>
                    <div className="m-1 font-mono text-xl text-gray-200">
                        <Link to="/" >
                            Bryan Wong
                        </Link>
                    </div>
                </div>


                <div className={"flex flex-col items-center md:opacity-100 md:h-auto md:flex-row md:space-x-3 " + (!isOpen ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto space-y-2 transition-opacity duration-500 ease-in")}>
                    {menuItem.map(item =>
                        <Link to={item.link} >
                            <button className="rounded-md hover:bg-indigo-900 transition ease-in-out duration-500 p-2">
                                {item.name}
                            </button>
                        </Link>
                    )}
                </div>
            </nav>
            <main className="bg-space-indigo h-full px-4 py-3 md:px-6 overflow-hidden">
                {children}
            </main>
        </div>
    )
}

export default Layout