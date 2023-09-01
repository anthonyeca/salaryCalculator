/* eslint-disable react/prop-types */
export const Output = ({ salaries }) => {
  return (
    <div className="mt-5">
      {salaries.map((salary, index) => (
        <div
          className="flex text-3xl justify-center gap-14 text-left"
          key={index}
        >
          <span>{salary}</span>
          <span>{salary * 0.3}</span>
          <span>{Math.floor((salary - salary * 0.3) / 14)}</span>
          <span>{Math.floor((salary - salary * 0.3) / 12)}</span>
          <span>{Math.floor(salary - salary * 0.3)}</span>
        </div>
      ))}
    </div>
  )
}
