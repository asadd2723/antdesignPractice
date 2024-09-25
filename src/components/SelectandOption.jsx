import { Select } from 'antd'
import React from 'react'

function SelectandOption() {
  const fruits = ['banana', 'mango', 'orange', 'cherry',  ]

  return (
    <>
      <h1>what is your favourite fruit? Select any</h1>
      <Select style={{width:200}}  placeholder="Select Fruit" mode='multiple' >
        {fruits.map((fruit, index)=> <Select.Option value={fruit}  key={index}>{fruit}</Select.Option>)}
      </Select>
    </>
  )
}

export default SelectandOption