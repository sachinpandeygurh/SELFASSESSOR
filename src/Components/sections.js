import React from 'react'
import {HLine, SectionType } from './Utils/Tools'

const Sections = () => {
  return (
    
<nav class="navbar mt-3 navbar-light bg-light shadow">
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
  
  )
}

export default Sections

