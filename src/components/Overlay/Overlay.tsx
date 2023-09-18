type OverlayProps = {
  show: boolean;
  onClick: () => void;
};

const Overlay = ({ show, onClick }: OverlayProps) => {
  return (
    <div
      data-testid="overlay"
      className={`${
        show ? 'w-full h-full opacity-70' : 'opacity-0 w-0 h-0'
      } fixed top-0 left-0 bg-black z-20 transition-opacity ease-out duration-300`}
      onClick={() => show && onClick()}
    />
  );
};

export default Overlay;
