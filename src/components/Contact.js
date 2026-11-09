import React from 'react'

const Contact = () => {
  return (
    <div className="text-center w-6/12 m-auto">
      <h1 className="font-bold text-3xl p-4 m-4">This is my contact page</h1>
      <form>
        <div><input type="text"  className="border-black p-2 m-2" placeholder="name" /></div>
        <div><input type="text"  className="border-black p-2 m-2" placeholder="message" /></div>
        <div><button className="border-black p-2 m-2 rounded-lg bg-gray-100">Submit</button></div>
      </form>
    </div>
  )
}

export default Contact;
