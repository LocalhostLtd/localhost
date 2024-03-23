// For setting the appropriate props for the input and textarea tags
interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  style?: string;
  data: string;
  menu_options?: string[];
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

// Used for shorter inputs, i.e. name and email
const ShortInput: React.FC<InputProps> = (props) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange({
      target: {
        name: props.name,
        value: e.target.value,
      },
    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
  };

  return (
    <div className="space-y-1">
      <label
        htmlFor={props.name.toLowerCase()}
        className="block text-sm font-medium text-gray-700"
      >
        {props.name.charAt(0).toUpperCase() + props.name.slice(1).toLowerCase()}
      </label>
      <input
        id={props.name.toLowerCase()}
        name={props.name.toLowerCase()}
        type={props.type}
        className={"input input-bordered " + props.style}
        placeholder={props.placeholder}
        value={props.data}
        onChange={handleChange}
      />
    </div>
  );
};

// Long input uses the textarea tag instead of the input tag
// Would be better to use a single component for both inputs and textareas
const LongInput: React.FC<InputProps> = (props) => {
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.onChange({
      target: {
        name: props.name,
        value: e.target.value,
      },
    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
  };

  return (
    <div className="space-y-1">
      <label
        htmlFor={props.name.toLowerCase()}
        className="block text-sm font-medium text-gray-700"
      >
        {props.name.charAt(0).toUpperCase() + props.name.slice(1).toLowerCase()}
      </label>
      <textarea
        id={props.name.toLowerCase()}
        name={props.name.toLowerCase()}
        className={"input input-bordered" + props.style}
        placeholder={props.placeholder}
        cols={40}
        value={props.data}
        onChange={handleChange}
      />
    </div>
  );
};

// MenuInput component
const MenuInput: React.FC<InputProps> = (props) => {
  // Handler for select input change
  const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    props.onChange({
      target: {
        name: props.name,
        value: e.target.value,
      },
    } as React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>);
  };

  return (
    <div className="space-y-1">
      <label
        htmlFor={props.name.toLowerCase()}
        className="block text-sm font-medium text-gray-700"
      >
        {props.name.charAt(0).toUpperCase() + props.name.slice(1).toLowerCase()}
      </label>
      <select
        id={props.name.toLowerCase()}
        name={props.name.toLowerCase()}
        className={"input input-bordered" + props.style}
        value={props.data}
        onChange={handleSelectChange} // Using the new handler
      >
        <option
          value=""
          disabled
          hidden
          className="block text-sm font-medium text-gray-300"
        >
          Select
        </option>
        {/* Mapping through menu_options to render options */}
        {props.menu_options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export { ShortInput, LongInput, MenuInput };
