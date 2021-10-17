type Props = {
  id: string;
};

export const Beef = ({ id }: Props) => {
  return (
    <div
      style={{
        backgroundColor: `#${id}`,
        padding: "1rem",
        fontFamily: "monospace",
      }}
    >
      {id}
    </div>
  );
};
