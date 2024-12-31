interface InputProps {
    placeholder : string,
    reference?: React.RefObject<HTMLInputElement>,
    classes?: string
}

const Input = (props: InputProps) => {
  return (
    <input type="text" placeholder={props.placeholder} ref={props.reference} className={props.classes ?  props.classes : "px-4 py-2 border rounded m-2 w-10/12 "} />
  )
}

export default Input
