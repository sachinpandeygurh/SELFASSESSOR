import React from 'react'
import {HLine, SectionType } from './Utils/Tools'

const Sections = () => {
  return (
    <div className='  position-relative m-0'style={{width: "100vw" , height:"10vh"}}> 
<nav class="navbar pt-3 navbar-light bg-light shadow position-fixed w-100">
  <div className='container d-flex'>
<SectionType title="form section" check={true}/>
<HLine/>
<SectionType title="form section" />
<HLine/>
<SectionType title="form section" />
<HLine/>
<SectionType title="form section" />
<HLine/>
<SectionType title="form section" />

  </div>
</nav>
</div>
  )
}

export default Sections

