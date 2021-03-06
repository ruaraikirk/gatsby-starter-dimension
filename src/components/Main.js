import React from 'react'
import PropTypes from 'prop-types'
import Contact from './contact'

import pic01 from '../images/pic01.jpeg'
import pic02 from '../images/pic02.jpeg'
import pic03 from '../images/pic03.jpeg'

class Main extends React.Component {

  render() {

    let close = <div className="close" onClick={() => {this.props.onCloseArticle()}}></div>

    return (
      <div ref={this.props.setWrapperRef} id="main" style={this.props.timeout ? {display: 'flex'} : {display: 'none'}}>

        <article id="crystal" className={`${this.props.article === 'crystal' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Crystal Bed Therapy</h2>
          <span className="image main"><img src={pic01} alt="" /></span>
          <p>A crystal bed is the name given to t healing device. It stands over a bed or couch and has seven lights shining down from it. These lights each have a crystal inside which is cut to a certain frequency emitting energy, allowing the body to absorb it into the seven Chakra's, thereby cleanisng, balancing and aligning your energy. The individual recieving the treatment rests fully clothed, face up and eye's closed bathing in the energy. Soft music is provided to help one relax during the treatment.</p>
          <p>Crystal Bed Light Terapy is safe and non invasive. The person recieving the treatment simply removes his/her shoes and glasses, then lie fully clothed on the bed and relax. Once comfortable, a white cloth is placed over the eyes, the lights in the room dimmed, soft-music played and finally the pulsating lights shining throught the crystals are turned on. All the individual needs to do is relax, let go or even fall asleep. The light, crystals and healing Spirits will do the rest.</p>
          <p>During the treatment, people feel all manner of sensations - pressure, weight, lightness, heaviness, hot/cold, etc. It's all different for everyone, only you can experience it for yourself...</p>
          <p>As with many subtle energy healing therapies, no claims can be made that any disease states can be cured. However, there are many many reports of healing occuring. Healing can occur on many different levels; spiritual, mental, emotional and physical. The crystal bed can also help open connections with the Healing Spirit Guides.</p>
          <p>Many people who have had Crystal Light Bed Therapy sessions have reported some of the following:</p>
          <ul>
            <li>Feeling more energised</li>
            <li>Feeling more at peace</li>
            <li>Feeling less stressed</li>
            <li>Feeling deep relaxation</li>
            <li>Gaining insights into the cause of disease states</li>
            <li>Recieving guidance on how to deal with a disease or problem</li>
        </ul>

          {close}
        </article>

        <article id="reflexology" className={`${this.props.article === 'reflexology' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Reflexology</h2>
          <span className="image main"><img src={pic02} alt="" /></span>
          <p>Reflexology is a natural, healing and complimentary therapy based on the principle of reflexes in the hands and feet. It involves applying pressure to the feet using specific thumb, finger and hand techniques without the use of oil or lotion.</p>
          <p>The process restores a natural state of homeostasis, relieves tension, improves circulation and promotes natural function. Reflexology is suitable for all ages and may bring relief from a wide range of acute and chronic conditions. After having completed a course of reflexology treatment for a specific condition, many people find it beneficial to continue with regular treatments in order to maintain health and well-being.</p>
          {close}
        </article>

        <article id="reiki" className={`${this.props.article === 'reiki' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <h2 className="major">Kundalini Reiki</h2>
          <span className="image main"><img src={pic03} alt="" /></span>
          <p>Kundalini Reiki was brought to this earthly plane by Ole Gabrielsen, who is a master of meditation and has inspired many people throughout the world. He also founded many energy healing genres in addition to Kundalini Reiki, including Ethereal Crystal Healing and Full Spectrum Healing.</p>
          <p>Unlike most other Reiki traditions, Kundalini Reiki uses a synergy of Reiki (intelligent universal energy) and Kundalini (raw evolutionary force). The Kundalini greatly strengthens the Reiki, while the Reiki "tempers" the Kundalini, rendering it perfectly safe to use. Kundalini Reiki uses no symbols and no complicated system of set hand positions. Starting the energy flow is achieved by intent. The safe Kundalini awakening which the practitioner undergoes can be a great force for transformation and personal evolution.</p>
          <p>For more information, please contact us.</p>
          {close}
        </article>

        <article id="contact" className={`${this.props.article === 'contact' ? 'active' : ''} ${this.props.articleTimeout ? 'timeout' : ''}`} style={{display:'none'}}>
          <Contact />
          {close}
        </article>

      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main