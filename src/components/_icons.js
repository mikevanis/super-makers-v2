import React from "react"
import { motion } from "framer-motion"

import helloIcon from "../assets/images/hello.svg"
import crossIcon from "../assets/images/cross-icon.svg"
import vrIcon from "../assets/images/vr-icon.svg"
import lightningIcon from "../assets/images/lightning.svg"
import aboutIcon from "../assets/images/about.svg"

import handLoop from "../assets/images/hand-loop.svg"

import accordionIcon from "../assets/images/accordion.svg"

import vision1Icon from "../assets/images/vision-1.svg"
import vision2Icon from "../assets/images/vision-2.svg"
import vision3Icon from "../assets/images/vision-3.svg"

import mission1Icon from "../assets/images/mission-1.svg"
import mission2Icon from "../assets/images/mission-2.svg"
import mission3Icon from "../assets/images/mission-3.svg"

import appleIcon from "../assets/images/apple.svg"
import googleIcon from "../assets/images/google.svg"
import chromeIcon from "../assets/images/chrome.svg"
import firefoxIcon from "../assets/images/firefox.svg"
import safariIcon from "../assets/images/safari.svg"
import explorerIcon from "../assets/images/explorer.svg"
import windowsIcon from "../assets/images/windows.svg"

// Features
// import makeFeature from "../assets/images/feature-make.svg"
// import playFeature from "../assets/images/feature-play.svg"
// import createFeature from "../assets/images/feature-create.svg"
// import shareFeature from "../assets/images/feature-share.svg"
// import testFeature from "../assets/images/feature-test.svg"
// import learnFeature from "../assets/images/feature-learn.svg"

// import windIcon from "../assets/images/wind-line.svg"
import windIcon from "../assets/images/windIcon.svg"

import lineIconsIcon from "../assets/images/icon-line.svg"
import shareBtn from "../assets/images/share-btn.svg"
import shareBtnYes from "../assets/images/share-btn-yes.svg"

import phoneMillIcon from "../assets/images/phone-mill.svg"
import iPhoneCoverIcon from "../assets/images/iphone-cover.svg"
import windmealDiagram from "../assets/images/windmeals-diagram.svg"

import getInTouchInvestorsIcon from "../assets/images/get-in-touch-investors.svg"

import homeIcon from "../assets/images/home.svg"
import pushNoseIcon from "../assets/images/push-nose.svg"
import comingSoonCarIcon from "../assets/images/cs-car.svg"
import comingSoonHomeIcon from "../assets/images/cs-home.svg"
import comingSoonSchoolIcon from "../assets/images/cs-school.svg"

import missionIcon from "../assets/images/mission-animation.svg"
import eyesIcon from "../assets/images/eyes-animation.svg"
import fundingDiagram from "../assets/images/diagram.svg"
import supportBtn from "../assets/images/support-btn.svg"

import windmealIcon from "../assets/images/windmeals-icon.svg"

import winterIcon from "../assets/images/winter.svg"
import springIcon from "../assets/images/spring.svg"
import summerIcon from "../assets/images/sun.svg"

import experienceBbc from "../assets/images/experience-bbc.svg"
import experienceFixed from "../assets/images/experience-fixed.svg"
import experienceOlimpus from "../assets/images/experience-olimpus.svg"
import experienceRbc from "../assets/images/experience-rbc.svg"
import experienceTechwillsaveus from "../assets/images/experience-techwillsaveus.svg"
import experienceQueen from "../assets/images/experience-queen.svg"
import experienceGoldsmith from "../assets/images/experience-goldsmith.svg"
import experienceOcad from "../assets/images/experience-ocad.svg"

import buildWorldsRightImg from "../assets/images/build-worlds.png"
import buildWorldsLefttImg from "../assets/images/cross-worlds.png"

import instaIcon from "../assets/images/instagram.svg"
import instaWhiteIcon from "../assets/images/instagram-white.svg"

import contactIcon from "../assets/images/contact.svg"

import facebookIcon from "../assets/images/facebook.svg"
import linkedinIcon from "../assets/images/linkedin.svg"
import twitterIcon from "../assets/images/twitter.svg"
import shareIcon from "../assets/images/share-icon.svg"

import googlePlay from "../assets/images/google-play.svg"

// GIfs
import swipeGif from "../assets/images/screen-gif.gif"
import earthGif from "../assets/images/earth.gif"
import nosePressGif from "../assets/images/nose-press.gif"
// import volunteersGif from "../assets/images/volunteers-rl.gif"
import volunteersLedGif from "../assets/images/volanteers-led.gif"

import volunteerGif from "../assets/images/volanteer.gif"
import volunteerBtnGif from "../assets/images/volanteer-btn.svg"

import howVideoFillerGif from "../assets/images/how-video-filler.gif"
import vrAnimGif from "../assets/images/vr-anim.gif"
import phoneRpmGif from "../assets/images/vr-phone-2.gif"
import getInTouchIcon from "../assets/images/get-in-touch.svg"

// Social
export const InstaIcon = props => {
  return (
    <img
      src={instaIcon}
      alt="Instagram Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const InstaWhiteIcon = props => {
  return (
    <img
      src={instaWhiteIcon}
      alt="Instagram Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const LinkedinIcon = props => {
  return (
    <img
      src={linkedinIcon}
      alt="Linkedin Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}
export const GooglePlay = props => {
  return (
    <img
      src={googlePlay}
      alt="Linkedin Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const FacebookIcon = props => {
  return (
    <img
      src={facebookIcon}
      alt="Facebook Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}
export const TwitterIcon = props => {
  return (
    <img
      src={twitterIcon}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

// Icons

export const HelloIcon = props => {
  return (
    <img
      src={helloIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}
export const CrossIcon = props => {
  return (
    <img
      src={crossIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const HomeIcon = props => {
  return (
    <img
      src={homeIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const PushNoseIcon = props => {
  return (
    <img
      src={pushNoseIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const ComingSoonSchoolIcon = props => {
  return (
    <img
      src={comingSoonSchoolIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}
export const ComingSoonCarIcon = props => {
  return (
    <img
      src={comingSoonCarIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}
export const ComingSoonHomeIcon = props => {
  return (
    <img
      src={comingSoonHomeIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const BuildWorldsRightImg = props => {
  return (
    <img
      src={buildWorldsRightImg}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const BuildWorldsLefttImg = props => {
  return (
    <img
      src={buildWorldsLefttImg}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const VrIcon = props => {
  return (
    <img
      src={vrIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const WindIcon = props => {
  return (
    <img
      src={windIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", maxWidth: props.maxWidth }}
    />
  )
}

export const LineIconsIcon = props => {
  return (
    <img
      src={lineIconsIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const WinterIcon = props => {
  return (
    <img
      src={winterIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const SpringIcon = props => {
  return (
    <img
      src={springIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}
export const SummerIcon = props => {
  return (
    <img
      src={summerIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const ShareBtn = props => {
  return (
    <img
      src={shareBtn}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}
export const ShareBtnYes = props => {
  return (
    <img
      src={shareBtnYes}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const ShareIcon = props => {
  return (
    <img
      src={shareIcon}
      alt="Hello Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const LightningIcon = props => {
  return (
    <img
      src={lightningIcon}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const ContactIcon = props => {
  return (
    <img
      src={contactIcon}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const ExperienceBbc = props => {
  return (
    <img
      src={experienceBbc}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}
export const ExperienceFixed = props => {
  return (
    <img
      src={experienceFixed}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}
export const ExperienceTechwillsaveus = props => {
  return (
    <img
      src={experienceTechwillsaveus}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const ExperienceRbc = props => {
  return (
    <img
      src={experienceRbc}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const ExperienceOlimpus = props => {
  return (
    <img
      src={experienceOlimpus}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const ExperienceQueen = props => {
  return (
    <img
      src={experienceQueen}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const ExperienceGoldsmith = props => {
  return (
    <img
      src={experienceGoldsmith}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const ExperienceOcad = props => {
  return (
    <img
      src={experienceOcad}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const HandLoop = props => {
  return (
    <motion.div
      animate={{ x: 20 }}
      transition={{ repeat: Infinity, repeatType: "mirror", duration: 0.5 }}
    >
      <img
        src={handLoop}
        alt="Lightning Logo"
        className={`${props.class}`}
        style={{
          height: props.height ? props.height : "auto",
          width: props.width,
        }}
      />
    </motion.div>
  )
}

export const GetInTouchInvestorsIcon = props => {
  return (
    <img
      src={getInTouchInvestorsIcon}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}
export const AboutIcon = props => {
  return (
    <img
      src={aboutIcon}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const SwipeGif = props => {
  return (
    <img
      src={swipeGif}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const PhoneMillIcon = props => {
  return (
    <img
      src={phoneMillIcon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        height: "auto",
        maxHeight: "50%",
        maxWidth: "50%",
        position: "absolute",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
      }}
    />
  )
}

// RPM GIF
export const PhoneRpmGif = props => {
  return (
    <img
      src={phoneRpmGif}
      alt="RPM Gif"
      className={`${props.class}`}
      style={{
        position: "absolute",
        maxHeight: "50%",
        maxWidth: "50%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
      }}
    />
  )
}
// RPM SVG TOp
export const IPhoneCoverIcon = props => {
  return (
    <img
      src={iPhoneCoverIcon}
      alt="RPM Gif"
      className={`${props.class}`}
      style={{
        position: "absolute",
        maxHeight: "50%",
        maxWidth: "50%",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0,
        margin: "auto",
        zIndex: 2,
      }}
    />
  )
}

export const EarthGif = props => {
  return (
    <img
      src={earthGif}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const VolunteerGif = props => {
  return (
    <img
      src={volunteerGif}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const VolunteerBtnGif = props => {
  return (
    <img
      src={volunteerBtnGif}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}
export const VolunteersLedGif = props => {
  return (
    <img
      src={volunteersLedGif}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}
export const GetInTouchIcon = props => {
  return (
    <img
      src={getInTouchIcon}
      alt="Lightning Logo"
      className={`${props.class}`}
      style={{
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const VrAnimGif = props => {
  return (
    <img
      src={vrAnimGif}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const NosePressGif = props => {
  return (
    <img
      src={nosePressGif}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

// export const VolunteersGif = props => {
//   return (
//     <img
//       src={volunteersGif}
//       alt="Lightning Icon"
//       className={`${props.class}`}
//       style={{ height: "auto", width: props.width }}
//     />
//   )
// }

export const Vision1Icon = props => {
  return (
    <img
      src={vision1Icon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}
export const Vision2Icon = props => {
  return (
    <img
      src={vision2Icon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const Vision3Icon = props => {
  return (
    <img
      src={vision3Icon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const AccordionIcon = props => {
  return (
    <img
      src={accordionIcon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const Mission1Icon = props => {
  return (
    <img
      src={mission1Icon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const Mission2Icon = props => {
  return (
    <img
      src={mission2Icon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}
export const Mission3Icon = props => {
  return (
    <img
      src={mission3Icon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const HowVideoFillerGif = props => {
  return (
    <img
      src={howVideoFillerGif}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

export const EyesIcon = props => {
  return (
    <img
      src={eyesIcon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const GoogleIcon = props => {
  return (
    <img
      src={googleIcon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,

        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const ChromeIcon = props => {
  return (
    <img
      src={chromeIcon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,

        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const WindowsIcon = props => {
  return (
    <img
      src={windowsIcon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,

        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const ExplorerIcon = props => {
  return (
    <img
      src={explorerIcon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,

        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const SafariIcon = props => {
  return (
    <img
      src={safariIcon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,

        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const FirefoxIcon = props => {
  return (
    <img
      src={firefoxIcon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,

        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const AppleIcon = props => {
  return (
    <img
      src={appleIcon}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{
        maxWidth: props.maxWidth,
        maxHeight: props.maxHeight,

        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const MissionIcon = props => {
  return (
    <img
      src={missionIcon}
      alt="Mission Icon"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const WindmealIcon = props => {
  return (
    <img
      src={windmealIcon}
      alt="Mission Icon"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}
export const WindmealDiagram = props => {
  return (
    <img
      src={windmealDiagram}
      alt="Mission Icon"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const SupportBtn = props => {
  return (
    <img
      src={supportBtn}
      alt="Mission Icon"
      className={`${props.class}`}
      style={{
        height: props.height ? props.height : "auto",
        width: props.width,
      }}
    />
  )
}

export const FundingDiagram = props => {
  return (
    <img
      src={fundingDiagram}
      alt="Lightning Icon"
      className={`${props.class}`}
      style={{ height: "auto", width: props.width }}
    />
  )
}

// Features
// export const MakeFeature = props => {
//   return (
//     <img
//       src={makeFeature}
//       alt="Lightning Logo"
//       className={`${props.class}`}
//       style={{
//         height: props.height ? props.height : "auto",
//         width: props.width,
//       }}
//     />
//   )
// }

// export const LearnFeature = props => {
//   return (
//     <img
//       src={learnFeature}
//       alt="Lightning Logo"
//       className={`${props.class}`}
//       style={{
//         height: props.height ? props.height : "auto",
//         width: props.width,
//       }}
//     />
//   )
// }
// export const TestFeature = props => {
//   return (
//     <img
//       src={testFeature}
//       alt="Lightning Logo"
//       className={`${props.class}`}
//       style={{
//         height: props.height ? props.height : "auto",
//         width: props.width,
//       }}
//     />
//   )
// }
// export const ShareFeature = props => {
//   return (
//     <img
//       src={shareFeature}
//       alt="Lightning Logo"
//       className={`${props.class}`}
//       style={{
//         height: props.height ? props.height : "auto",
//         width: props.width,
//       }}
//     />
//   )
// }
// export const CreateFeature = props => {
//   return (
//     <img
//       src={createFeature}
//       alt="Lightning Logo"
//       className={`${props.class}`}
//       style={{
//         height: props.height ? props.height : "auto",
//         width: props.width,
//       }}
//     />
//   )
// }

// export const PlayFeature = props => {
//   return (
//     <img
//       src={playFeature}
//       alt="Lightning Logo"
//       className={`${props.class}`}
//       style={{
//         height: props.height ? props.height : "auto",
//         width: props.width,
//       }}
//     />
//   )
// }
