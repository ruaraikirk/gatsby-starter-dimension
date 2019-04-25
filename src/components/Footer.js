import React from 'react'
import PropTypes from 'prop-types'

const Footer = (props) => (
    <footer id="footer" style={props.timeout ? {display: 'none'} : {}}>
        <p className="copyright">Backgound photo by <a href='https://www.instagram.com/lawless_ireland/?hl=en'>Neville Lawless</a>.</p>
        <p className="copyright">Icons made by <a href="https://www.freepik.com/?__hstc=57440181.4389e523bcdda53d45690f600f02830e.1556195202169.1556195202169.1556195202169.1&__hssc=57440181.1.1556195202170&__hsfp=3879356691" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></p>
        <p className="copyright">&copy; Gatsby Starter - Dimension. Design: <a href="https://html5up.net">HTML5 UP</a>. Built with: <a href="https://www.gatsbyjs.org/">Gatsby.js</a></p>
    </footer>
)

Footer.propTypes = {
    timeout: PropTypes.bool
}

export default Footer
