import React, { useState } from 'react'

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(false)

  const faqData = [
    {
      id: 1,
      question: 'What is Webflow and why is it the best website builder?',
      answer:
        'Vitae congue eu consequat ac felis placerat vestibulum lectus mauris ultrices. Cursus sit amet dictum sit amet justo donec enim diam porttitor lacus luctus accumsan tortor posuere.',
    },
    {
      id: 2,
      question: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
    {
      id: 3,
      question: 'Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?',
      answer:
        'Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer.',
    },
  ]

  return (
    <div className="flex flex-col gap-4 items-center  ">
      <h1 className="text-[27px] text-primary_color font-Poppins font-[600] text-centers">
        Frequently asked questions
      </h1>
      {faqData.map((data) => (
        <div key={data.id} className="flex flex-col md:w-fit mx-3 lg:w-[846px] bg-[#FAF8FF] p-6 rounded-[7px] gap-6">
          <div className="flex justify-between items-center">
            <h2
              className={openFAQ === data.id ? 'text-[22px] font-[500] text-primary_color' : 'text-[22px] font-[500]'}
            >
              {data.question}
            </h2>
            <button className="text-[28px] font-[500]" onClick={() => setOpenFAQ(openFAQ === data.id ? null : data.id)}>
              {openFAQ === data.id ? '-' : '+'}
            </button>
          </div>
          <p className={openFAQ === data.id ? 'text-[18px] text-[#6F6C90] font-[400]' : 'hidden'}>{data.answer}</p>
        </div>
      ))}
    </div>
  )
}

export default FAQ
