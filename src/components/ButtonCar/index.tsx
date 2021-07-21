interface Props {
  children?: React.ReactNode;
  className?: string;
}

const ButtonCar = (props: Props) => (
  <button className={`btn btn-secondary ${props.className || ''}`}>
    {props.children}
  </button>
);

export default ButtonCar;
