import "@fontsource/satisfy"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import * as React from "react"
import { AiFillAndroid, AiFillApple } from "react-icons/ai"

const Layout = ({ location, title, children }) => {
  const rootPath = `${__PATH_PREFIX__}/`
  const isRootPath = location.pathname === rootPath
  let header

  if (isRootPath) {
    header = (
      <h1 className="main-heading">
        <Link to="/">{title}</Link>
      </h1>
    )
  } else {
    header = (
      <Link className="header-link-home" to="/">
        {title}
      </Link>
    )
  }

  return (
    <div className="global-wrapper" data-is-root-path={isRootPath}>
      <header
        style={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        className="global-header"
      >
        <span style={{ flex: 1 }}>{header}</span>

        <span>
          <OutboundLink
            aria-label="Android App"
            href="https://play.google.com/store/apps/details?id=com.broabect.greatnorthguide"
          >
            <AiFillAndroid size={48} />
          </OutboundLink>
          <OutboundLink
            aria-label="iOS App"
            href="https://apps.apple.com/us/app/extended-night-companion-app/id1554875268"
          >
            <AiFillApple size={48} />
          </OutboundLink>
        </span>
      </header>
      <main>{children}</main>
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "flex-end",
        }}
      >
        <Link style={{ marginRight: "20px" }} to="/">
          Home
        </Link>
        <Link style={{ marginRight: "20px" }} to="/privacy">
          Privacy Policy
        </Link>
        <Link to="/termsandconditions">Terms and Conditions</Link>
      </footer>
    </div>
  )
}

export default Layout
