'use client';

import { setCookie } from "cookies-next";
import { useState } from "react";

interface Props {
    currentIndex?: number;
    tabOptions?: number[];
}


export const TabBar = ({ tabOptions = [1,2,3,4], currentIndex = 1 }:Props) => {

    const [selected, setSelected] = useState( currentIndex );

    const onTabSelected = (tab: number) => {
        
      setSelected( tab );
      setCookie('selectedTab', tab.toString());
    }

    return (
      <div className={`
      grid w-full space-x-2 rounded-xl bg-gray-200 p-2 ${ 'grid-cols-' + tabOptions.length }
      `}>
        
        {
            tabOptions.map( tab => (
                <div key={tab}>
                    <input type="radio" id={ tab.toString() }  checked={ selected === tab } onChange={() => {}} className=" peer hidden" />
                    <label
                    onClick={()=> onTabSelected(tab)}
                    className="transition-all block cursor-pointer select-none rounded-xl p-2 text-center peer-checked:bg-blue-500 peer-checked:font-bold peer-checked:text-white">
                        {tab}
                    </label>
                </div>
            ))
        }
        
  
        
      </div>
    )
  }