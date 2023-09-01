import { useRef, useState } from 'react'
import { Output } from './Output'

export const Form = () => {
  const [salary, setSalary] = useState([])
  const inputRef = useRef()

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const newSalary = inputRef.current.value

    if (newSalary.trim() !== '') {
      setSalary([...salary, newSalary])
      inputRef.current.value = ''
    }
  }

  return (
    <>
      <form onSubmit={onSubmitHandler}>
        <h2 className="flex justify-center gap-3 text-[32px]">
          Introduce el salario
        </h2>
        <div className=" flex justify-center items-center gap-6 mt-5">
          <input
            type="text"
            id="salary"
            name="salary"
            ref={inputRef}
            className="bg-[#3E525B] outline-none rounded w-[170px] h-[55px] text-[32px] text-center"
          />
          <button className="bg-[#13191B] text-[32px] rounded w-[170px] h-[55px]">
            -&gt;
          </button>
        </div>
      </form>
      <div className="flex text-3xl justify-center gap-10 mt-10">
        <h3>Sueldo</h3>
        <h3>IRPF</h3>
        <h3>14 Pagas</h3>
        <h3>12 Pagas</h3>
        <h3>Neto</h3>
      </div>
      <Output salaries={salary} />
    </>
  )
}
