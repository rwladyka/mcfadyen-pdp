type EditorNameProps = {
  name: string;
  role: string;
};

const EditorName = ({ name, role }: EditorNameProps) => {
  return (
    <div className="flex justify-center my-4">
      <div className="w-7 h-px bg-black my-auto mr-2" />
      <div>
        By <span className="uppercase underline">{name}</span>,&nbsp;
      </div>
      <div>{role}</div>
    </div>
  );
};

export default EditorName;
