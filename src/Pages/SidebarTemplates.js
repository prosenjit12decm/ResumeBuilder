import React, { useState } from 'react'
import Template1 from './Template1'
import Template2 from './Template2'
import Template3 from './Template3'
import Template4 from './Template4'
import style from './../Styles/finalpage.module.css'

export default function SidebarTemplates() {
    const[open, setOpen] = useState(true)
    if(open){
        return (
            <div className={style.sidebartemplate}>
                <button onClick={()=> setOpen(false)}>Close</button>
                <div className={style.row1}>
                    <div className={style.temp1}>
                        <Template1/>
                    </div>
                    <div className={style.temp2}>
                        <Template2/>
                    </div>
                </div>
                <div className={style.row2}>
                    <div className={style.temp1}>
                        <Template3/>
                    </div>
                    <div className={style.temp2}>
                        <Template4/>
                    </div>
                </div>
            </div>
          )
    }
    else{
        return(
            <></>
        )
    }

}
