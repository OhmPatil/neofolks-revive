import React from 'react'
import { Popover } from '@headlessui/react'
import { motion } from 'framer-motion'

function TinkerTracksPopover() {
  return (
    <Popover className="relative flex flex-col justify-center items-end gap-2 w-full">
      <Popover.Button className="text-[#959499] underline w-full text-center lg:text-end focus:outline-none">Recommended Tracks for event participating teams.</Popover.Button>

      <Popover.Panel className="z-10 flex w-full lg:w-fit justify-center items-center">
        <motion.div className="bg-slate-600 bg-opacity-30 text-white rounded-xl w-fit py-2 px-6"
            initial={{y: -10, opacity: 0}}
            animate={{y: 0, opacity: 1}}
            transition={{duration: .5}}
        >
            <ul className='list-disc font-semibold grid grid-cols-2 text-xs lg:text-base'>
                <li>Smart Education</li>
                <li>Smart Automation</li>
                <li>Healthcare</li>
                <li>Environmental</li>
                <li>Robotics</li>
                <li>Clean & Renewable Energy</li>
                <li>Heritage & Culture</li>
                <li>Manufacturing</li>
            </ul>
        </motion.div>
      </Popover.Panel>
    </Popover>
  )
}

export default TinkerTracksPopover