import Rain from '../assets/rain.png'

const List = () => {
  return (
    <div className='flex justify-start mt-8 bg-blue-300 shadow-sm rounded-3xl py-3  space-x-3 flex-wrap pt-6 px-4'>
      <div className='flex flex-col justify-evenly items-center h-48 w-36 bg-blue-200 shadow-md rounded-3xl mb-5 ml-5'>
        <span className='text-2xl -mb-4'>Sun</span>
        <img className='w-24 h-24 my-2' src={Rain} alt="" />
        <span className='text-xl'>15<sup>°</sup> <span className='text-gray-400'>-7<sup>°</sup></span> </span>
      </div>
      <div className='flex flex-col justify-evenly items-center p-3 h-48 w-36 bg-blue-200 shadow-md rounded-3xl'>
        <span className='text-2xl -mb-4'>Mon</span>
        <img className='w-24 h-24 my-2' src={Rain} alt="" />
        <span className='text-xl'>15<sup>°</sup> <span className='text-gray-400'>-7<sup>°</sup></span> </span>
      </div>
      <div className='flex flex-col justify-evenly items-center p-3 h-48 w-36 bg-blue-200 shadow-md rounded-3xl'>
        <span className='text-2xl -mb-4'>Tue</span>
        <img className='w-24 h-24 my-2' src={Rain} alt="" />
        <span className='text-xl'>15<sup>°</sup> <span className='text-gray-400'>-7<sup>°</sup></span> </span>
      </div>
      <div className='flex flex-col justify-evenly items-center p-3 h-48 w-36 bg-blue-200 shadow-md rounded-3xl'>
        <span className='text-2xl -mb-4'>Wed</span>
        <img className='w-24 h-24 my-2' src={Rain} alt="" />
        <span className='text-xl'>15<sup>°</sup> <span className='text-gray-400'>-7<sup>°</sup></span> </span>
      </div>
      <div className='flex flex-col justify-evenly items-center p-3 h-48 w-36 bg-blue-200 shadow-md rounded-3xl'>
        <span className='text-2xl -mb-4'>Thu</span>
        <img className='w-24 h-24 my-2' src={Rain} alt="" />
        <span className='text-xl'>15<sup>°</sup> <span className='text-gray-400'>-7<sup>°</sup></span> </span>
      </div>
      <div className='flex flex-col justify-evenly items-center p-3 h-48 w-36 bg-blue-200 shadow-md rounded-3xl'>
        <span className='text-2xl -mb-4'>Fri</span>
        <img className='w-24 h-24 my-2' src={Rain} alt="" />
        <span className='text-xl'>15<sup>°</sup> <span className='text-gray-400'>-7<sup>°</sup></span> </span>
      </div>
      <div className='flex flex-col justify-evenly items-center p-3 h-48 w-36 bg-blue-200 shadow-md rounded-3xl'>
        <span className='text-2xl -mb-4'>Sat</span>
        <img className='w-24 h-24 my-2' src={Rain} alt="" />
        <span className='text-xl'>15<sup>°</sup> <span className='text-gray-400'>-7<sup>°</sup></span> </span>
      </div>
    </div>
  )
}

export default List