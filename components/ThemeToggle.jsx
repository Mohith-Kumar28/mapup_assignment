import { useState } from 'react'
import { Switch } from '@headlessui/react'
import { useDispatch, useSelector } from 'react-redux';
import  { toggleNightMode } from '@/redux/nightModeSlice';
import Image from 'next/image';

export default function ThemeToggle() {

    const enabled = useSelector((state) => state.nightMode);
//   const [enabled, setEnabled] = useState()
const dispatch=useDispatch()
  return (
    <div className=" ">
      <Switch
        checked={enabled}
        onChange={()=>{dispatch(toggleNightMode())}}
        // onChange={setEnabled}
        className={`${enabled ? 'bg-teal-500' : 'bg-black'}
          relative inline-flex h-[38px] w-[74px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
      >
        <span className="sr-only">Use setting</span>
        <span
          aria-hidden="true"
          className={`${enabled ? 'translate-x-9' : 'translate-x-0'}
            pointer-events-none inline-block h-[34px] w-[34px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
        >
<Image width={100} height={100} src="/assets/dark-mode.png" alt="" />
        </span>
      </Switch>
    </div>
  )
}
