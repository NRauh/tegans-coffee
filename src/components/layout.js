import React from 'react';
import { Link } from 'gatsby';
import { rhythm } from '../utils/typography';
import { Bio } from './bio';
import { themeColors } from '../utils/theme';

// class Layout extends React.Component {
//   render() {
//     const { location, title, children } = this.props;
//     const rootPath = `${__PATH_PREFIX__}/`;
//     let header;

//     if (location.pathname === rootPath) {
//       header = (
//         <h1
//           style={{
//             ...scale(1.5),
//             marginBottom: rhythm(1.5),
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/`}
//           >
//             {title}
//           </Link>
//         </h1>
//       );
//     } else {
//       header = (
//         <h3
//           style={{
//             fontFamily: `Montserrat, sans-serif`,
//             marginTop: 0,
//           }}
//         >
//           <Link
//             style={{
//               boxShadow: `none`,
//               textDecoration: `none`,
//               color: `inherit`,
//             }}
//             to={`/`}
//           >
//             {title}
//           </Link>
//         </h3>
//       );
//     }
//     return (
//       <div
//         style={{
//           marginLeft: `auto`,
//           marginRight: `auto`,
//           maxWidth: rhythm(24),
//           padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
//         }}
//       >
//         <header>{header}</header>
//         <main>{children}</main>
//         <footer>
//           © {new Date().getFullYear()}, Built with
//           {` `}
//           <a href="https://www.gatsbyjs.org">Gatsby</a>
//         </footer>
//       </div>
//     );
//   }
// }

const Header = props => {
  const styles = {
    headerFrame: {
      backgroundColor: themeColors.light,
      padding: `${rhythm(0.35)} ${rhythm(0.5)}`,
    },
    name: {
      marginBottom: rhythm(0),
      fontSize: rhythm(0.75),
    },
    nameLink: {
      color: themeColors.muted,
      textDecoration: 'none',
    },
  };

  return (
    <header style={styles.headerFrame}>
      <h2 style={styles.name}>
        <Link to="/" style={styles.nameLink}>
          Tegan Rauh
        </Link>
      </h2>
    </header>
  );
};

const Layout = props => {
  const { children } = props;

  const layoutStyle = {
    marginLeft: 'auto',
    marginRight: 'auto',
    maxWidth: rhythm(24),
    padding: `${rhythm(1.25)} ${rhythm(0.3)}`,
  };

  return (
    <div>
      <Header />

      <div style={layoutStyle}>
        <main>{children}</main>

        <Bio />
      </div>
    </div>
  );
};

export default Layout;
