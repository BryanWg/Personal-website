import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { RiMenu5Fill, RiCloseFill } from 'react-icons/ri'

const Layout = ({ pageTitle, children }) => {
    const [isOpen, setOpen] = React.useState(false)
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
            <nav className="flex flex-col space-y-1 bg-purple-200  px-6 py-3 space-x-4 md:flex-row md:items-center">
                <div className="flex space-x-3 items-center">
                    <button type="button" className="hover:bg-indigo-300 rounded-sm md:hidden" onClick={() => setOpen(oldState => !oldState)}>
                        {isOpen ? <RiCloseFill className="m-1 w-4 h-4" /> : <RiMenu5Fill className="m-1 w-4 h-4" />}
                    </button>
                    <div className="m-1">
                        <Link to="/" >
                            Bryan Wong
                        </Link>
                    </div>
                </div>


                <div className={"flex flex-col items-center md:opacity-100 md:h-auto md:flex-row md:space-x-3 " + (!isOpen ? "opacity-0 h-0 overflow-hidden" : "opacity-100 h-auto space-y-2 transition-opacity duration-500 ease-in")}>
                    <Link to="/about" >
                        <button className="rounded-sm m-1 hover:bg-blue-600 transition ease-in-out duration-500">
                            Blogs
                        </button>
                    </Link>

                    <Link to="/about">
                        <button className=" rounded-sm m-1 hover:bg-blue-600 transition ease-in-out duration-500">
                            Projects
                        </button>
                    </Link>
                </div>
            </nav>
            <main className="bg-space-indigo h-full">
                <div className=" px-6 py-3 ">
                    {children}
                </div>
            </main>
        </div>
    )
}

export default Layout