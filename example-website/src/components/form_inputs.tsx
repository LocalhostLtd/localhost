// For setting the appropriate props for the input and textarea tags
interface InputProps {
  name: string;
  type?: string;
  placeholder?: string;
  style?: string;
  data: string;
  required: boolean;
  // Options mainly used for the dropdown menu and slider, can be left empty for other input types
  options?: string[];
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
        {props.name.charAt(0).toUpperCase() +
          props.name.slice(1).toLowerCase() +
          (props.required ? " *" : "")}
      </label>
      <input
        id={props.name.toLowerCase()}
        name={props.name.toLowerCase()}
        type={props.type}
        className={"input input-bordered " + props.style}
        placeholder={props.placeholder}
        value={props.data}
        required={props.required}
        onChange={handleChange}
      />
    </div>
  );
};

// Long input uses the textarea tag instead of the input tag
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
        {props.name.charAt(0).toUpperCase() +
          props.name.slice(1).toLowerCase() +
          (props.required ? " *" : "")}
      </label>
      <textarea
        id={props.name.toLowerCase()}
        name={props.name.toLowerCase()}
        className={"input input-bordered" + props.style}
        placeholder={props.placeholder}
        cols={40}
        value={props.data}
        required={props.required}
        onChange={handleChange}
      />
    </div>
  );
};

// MenuInput component uses the select tag to render a dropdown menu
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
        {props.name.charAt(0).toUpperCase() +
          props.name.slice(1).toLowerCase() +
          (props.required ? " *" : "")}
      </label>
      <select
        id={props.name.toLowerCase()}
        name={props.name.toLowerCase()}
        className={"select select-bordered" + props.style}
        value={props.data}
        required={props.required}
        onChange={handleSelectChange}
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
        {props.options?.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

// SliderInput component uses the range input to render a slider
const SliderInput: React.FC<InputProps> = (props) => {
  // Function to render the step marks on the slider
  const renderStepMarks = () => {
    const [min, max, step, suffix, type] = props.options ?? [];
    const marks = [];

    for (let i = 0; i <= (Number(max) - Number(min)) / Number(step); i++) {
      const value = Number(min) + Number(step) * i;
      marks.push(
        <span
          key={i}
          className="slider-mark block text-xs text-gray-700"
          style={{ left: `${(value / Number(max)) * 100}%` }}
        >
          {type === "num" ? value + suffix : type}
        </span>
      );
    }
    return marks;
  };

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
        {props.name.charAt(0).toUpperCase() +
          props.name.slice(1).toLowerCase() +
          (props.required ? " *" : "")}
      </label>
      <input
        id={props.name.toLowerCase()}
        name={props.name.toLowerCase()}
        type="range"
        min={props.options?.[0] ?? 0}
        max={props.options?.[1] ?? 100}
        value={props.data}
        required={props.required}
        className="range"
        step={props.options?.[2] ?? 1}
        onChange={handleChange}
        style={{ maxWidth: "400px" }}
      />
      <div className="flex justify-between" style={{ maxWidth: "400px" }}>
        {renderStepMarks()}
      </div>
    </div>
  );
};

export { ShortInput, LongInput, MenuInput, SliderInput };
