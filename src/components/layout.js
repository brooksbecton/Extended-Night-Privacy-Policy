import "@fontsource/satisfy"
import { Link } from "gatsby"
import { OutboundLink } from "gatsby-plugin-google-analytics"
import * as React from "react"
import { AiFillAndroid, AiFillApple } from "react-icons/ai"
import BuyMeACoffeeImage from "./../images/BuyMeACoffee.png"
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
      <header className="global-header">
        <span
          style={{
            flex: 2,
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          {header}
        </span>

        <span
          style={{
            flex: 1,
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
          className="global-header-links"
        >
          <OutboundLink
            style={{ marginRight: 7 }}
            aria-label="KoFi Donation"
            href="https://ko-fi.com/brooksbecton"
          >
            <img
              height={39}
              width={200}
              style={{ width: 200, height: 39 }}
              src={BuyMeACoffeeImage}
              alt="Buy Me a Coffee"
            />
          </OutboundLink>
        </span>
      </header>
      <main>{children}</main>
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <div>
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
        </div>
        <div>
          <Link style={{ marginRight: "20px" }} to="/">
            Home
          </Link>
          <Link style={{ marginRight: "20px" }} to="/privacy">
            Privacy Policy
          </Link>
          <Link style={{ marginRight: "20px" }} to="/termsandconditions">
            Terms and Conditions
          </Link>
        </div>
      </footer>
    </div>
  )
}

export default Layout
