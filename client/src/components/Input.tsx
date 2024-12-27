interface InputProps {
    placeholder : string,
    reference?: React.RefObject<HTMLInputElement>,
}

const Input = (props: InputProps) => {
  return (
    <input type="text" placeholder={props.placeholder} ref={props.reference} className="px-4 py-2 border rounded m-2 w-10/12" />
  )
}

export default Input
