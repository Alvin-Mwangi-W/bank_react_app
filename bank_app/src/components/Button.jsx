import React from 'react'

const Button = ({ styles }) => {
  return (
    <div type="button" className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[18px] text-primary outline-none rounded-md ${styles} cursor-pointer`}>
      Get Started
    </div>
  )
}

export default Button