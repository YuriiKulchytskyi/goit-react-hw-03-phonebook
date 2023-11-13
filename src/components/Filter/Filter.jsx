export const Filter = ({ filter, onChange }) => {
  return (
    <>
      <p>Find contacts by name</p>
      <input
        type="text"
        placeholder="Search contacts"
        value={filter}
        onChange={onChange}
      />
    </>
  );
};
