import React from 'react'
import Main from '../Main'
import { Frmtitle, Input } from '../Utils/Tools'

const DocumentCollection = () => {
  return (
    <div className='m-auto' style={{ width: '800px', height: '100vh' }}>
    <Main />
    <div className="  d-flex flex-column justify-content-center pb-4 bg-white rounded">
          <Frmtitle title="Details Collection"/>
      <form className='m-auto mt-3' style={{width: "22rem"}}>
        <Input label="1. 10th Marksheet *" type='file' title="Attach file upto 5kb" />
        
      </form>
    </div>
  </div>
  )
}

export default DocumentCollection