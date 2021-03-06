import React, { useRef } from "react"
import { motion, useAnimation } from "framer-motion"
import { Button } from "react-bootstrap"

export default function SmSliderButtonRound(props) {
  const containerRef = useRef(null)
  const buttonRef = useRef(null)
  const dragControl = useAnimation()

  const handleButtonClick = async (event, info) => {
    await dragControl.start({
      x: containerRef.current.offsetWidth - buttonRef.current.offsetWidth,
    })
    props.onClick()
    dragControl.start({
      x: 0,
    })
  }

  return (
    <div className="slider-button-round" ref={containerRef}>
      <motion.div animate={dragControl}>
        <Button ref={buttonRef} onClick={handleButtonClick}>
          {props.children}
        </Button>
      </motion.div>
    </div>
  )
}
