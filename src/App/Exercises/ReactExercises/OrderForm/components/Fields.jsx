export const Section = ({ title, children }) => (
  <fieldset className="order-fieldset">
    <legend>{title}</legend>
    {children}
  </fieldset>
);

export const Select = ({ keyName, options, register }) => (
  <select {...register(keyName)}>
    {options.map((item) => {
      return (
        <option key={item.VALUE} value={item.VALUE}>
          {item.LABEL}
        </option>
      );
    })}
  </select>
);

export const Radio = ({ keyName, options, register }) => (
  <div className="order-radio-group">
    {options.map((item) => {
      return (
        <div key={item.VALUE}>
          <input type={item.TYPE} value={item.VALUE} {...register(keyName)} />
          <label htmlFor={item.VALUE}>{item.LABEL}</label>
        </div>
      );
    })}
  </div>
);

export const Checkbox = ({ keyName, label, register, required = false }) => (
  <div>
    <input type="checkbox" {...register(keyName)} />
    <label htmlFor={keyName}>
      {label} {required && '*'}
    </label>
  </div>
);

export const Input = ({
  keyName,
  label,
  type = 'text',
  placeholder = '',
  required = false,
  register,
  errors = null,
}) => (
  <div>
    <label htmlFor={keyName}>
      {label}
      {required && '*'}
    </label>
    <input type={type} placeholder={placeholder} {...register(keyName)} />
    {errors && <p>{errors[keyName]?.message}</p>}
  </div>
);
