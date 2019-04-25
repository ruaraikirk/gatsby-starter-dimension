import React from 'react'
import PropTypes from 'prop-types'

const Header = (props) => (
    <header id="header" style={props.timeout ? {display: 'none'} : {}}>
        <div className="logo">
            <span className="icon fa-diamond"></span>
        </div>
        <div className="content">
            <div className="inner">
                <h1>Crosskeys Healing Center</h1>
                <p>Specialists in Crystal Bed Light Terapy, Reflexology, Reiki and Integrated Energy Therapy (I.E.T.), situated in Tulligmore, Ballinhassig Co. Cork</p>
            </div>
        </div>
        <nav>
            <ul>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('crystal')}}>Crystal Bed Light Threapy</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('reflexology')}}>Reflexology</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('reiki')}}>Kundalini Reiki</a></li>
                <li><a href="javascript:;" onClick={() => {props.onOpenArticle('contact')}}>Contact</a></li>
            </ul>
        </nav>
    </header>
)

Header.propTypes = {
    onOpenArticle: PropTypes.func,
    timeout: PropTypes.bool
}

export default Header
