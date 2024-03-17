// For setting the appropriate props for the input and textarea tags
interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  style: string;
  data: string;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}

// Used for shorter inputs, i.e. name and email
const ShortInput: React.FC<InputProps> = (props) => {
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
        onChange={props.onChange}
      />
    </div>
  );
};

// Long input uses the textarea tag instead of the input tag
// Would be better to use a single component for both inputs and textareas
const LongInput: React.FC<InputProps> = (props) => {
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
        onChange={props.onChange}
      />
    </div>
  );
};

export { ShortInput, LongInput };
